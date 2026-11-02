const instagramEndpoint = import.meta.env.VITE_INSTAGRAM_ENDPOINT;
const reviewsEndpoint = import.meta.env.VITE_GOOGLE_REVIEWS_ENDPOINT;
const instagramProfile = import.meta.env.VITE_INSTAGRAM_URL;
const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;",
}[char]));

async function getJSON(endpoint) {
  if (!endpoint) return null;
  const response = await fetch(endpoint, { headers: { Accept: "application/json" }, signal: AbortSignal.timeout(8000) });
  if (!response.ok) throw new Error(`Integration returned ${response.status}`);
  return response.json();
}

function safeHttpsUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : "";
  } catch {
    return "";
  }
}

function renderCuratedInstagram(gallery, businessProfile) {
  const items = gallery.filter((item) => item.instagramFeatured && item.type === "image").slice(0, 6);
  const profile = safeHttpsUrl(businessProfile || instagramProfile);
  const container = document.querySelector("#instagramFeed");
  container.innerHTML = items.map((item) => {
    const image = safeHttpsUrl(item.url);
    const href = safeHttpsUrl(item.instagramPostUrl) || profile;
    if (!image) return "";
    const contents = `<img src="${escapeHTML(image)}" alt="${escapeHTML(item.title || "Business-selected Instagram photo")}" loading="lazy"><span>${escapeHTML(item.title || "Selected by the business")}</span>`;
    return href
      ? `<a class="social-tile" href="${escapeHTML(href)}" target="_blank" rel="noopener noreferrer">${contents}</a>`
      : `<div class="social-tile">${contents}</div>`;
  }).join("");
  document.querySelector("#instagramStatus").textContent = items.length
    ? "Showing photos selected by the business. This is a manual fallback, not a live Instagram feed."
    : "Instagram is not connected yet. Business-selected posts will appear here when added.";
}

export async function loadSocialIntegrations(gallery = [], business = {}) {
  const [instagram, reviews] = await Promise.allSettled([getJSON(instagramEndpoint), getJSON(reviewsEndpoint)]);
  if (instagram.status === "fulfilled" && instagram.value?.items?.length) {
    const container = document.querySelector("#instagramFeed");
    container.innerHTML = instagram.value.items.slice(0, 6).map((item) => {
      const image = item.mediaType === "VIDEO" ? item.thumbnailUrl : item.mediaUrl;
      if (!image || !item.permalink) return "";
      return `<a class="social-tile" href="${escapeHTML(item.permalink)}" target="_blank" rel="noopener noreferrer">
        <img src="${escapeHTML(image)}" alt="${escapeHTML(item.caption.slice(0, 120) || "Instagram post")}" loading="lazy">
        <span>${escapeHTML(item.caption.slice(0, 100))}</span></a>`;
    }).join("");
      document.querySelector("#instagramStatus").textContent = "Latest posts from the official Instagram feed.";
    } else {
      renderCuratedInstagram(gallery, business.instagramUrl);
  }
  if (reviews.status === "fulfilled" && reviews.value?.reviews?.length) {
    const container = document.querySelector("#reviewsFeed");
    container.innerHTML = reviews.value.reviews.map((review) => `<article class="review-item">
      <p class="review-rating" aria-label="${escapeHTML(review.rating)} out of 5 stars">${"★".repeat(Math.round(review.rating))} <span>${escapeHTML(review.rating)} / 5</span></p>
      <p>${escapeHTML(review.text)}</p><p><b>${escapeHTML(review.author)}</b>${review.publishTime ? ` · ${escapeHTML(new Date(review.publishTime).toLocaleDateString())}` : ""}</p>
    </article>`).join("");
    document.querySelector("#reviewsStatus").textContent = `Selected positive reviews from Google. Reviews are shown unedited.`;
    if (reviews.value.googleMapsUri) {
      const link = document.querySelector("#reviewsProfile");
      link.href = reviews.value.googleMapsUri;
      link.textContent = "View full Google profile";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.hidden = false;
    }
  } else if (reviewsEndpoint) {
    document.querySelector("#reviewsStatus").textContent = "Google reviews are temporarily unavailable. The business profile is linked when confirmed.";
  }
}

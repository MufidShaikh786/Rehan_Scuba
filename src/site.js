import { gsap } from "gsap";
import { getFirebase, firebaseConfigured } from "./firebase.js";
import { businessDefaults, fallbackActivities, fallbackCombos, galleryCategories } from "./data/defaults.js";
import { loadPublicContent } from "./data/public-content.js";
import { loadSocialIntegrations } from "./integrations.js";

const $ = (selector, root = document) => root.querySelector(selector);
const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;",
}[char]));
const slug = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const experienceDetails = new Map();
const assetUrl = (path = "") => /^(https?:|data:|blob:)/i.test(path)
  ? path
  : `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

function renderExperienceCard(item, kind) {
  const isPackage = kind === "package";
  const id = isPackage ? `package-${item.id}` : item.id;
  const image = assetUrl(item.image || "");
  const description = item.description || "Ask the team to confirm activity details and availability.";
  experienceDetails.set(id, {
    id,
    title: item.name,
    image,
    description,
    detail: item.detail || description,
    inclusions: item.inclusions || [],
    bookingValue: isPackage ? item.name : "Water Sports Package",
    cta: isPackage ? "Enquire about this package" : "Add water sports to enquiry",
  });
  return `<article class="card experience-card">
    <button class="experience-card-open" type="button" data-experience="${escapeHTML(id)}" aria-label="View details for ${escapeHTML(item.name)}">
      <span class="experience-photo"><img src="${escapeHTML(image)}" alt="${escapeHTML(item.name)} experience" loading="lazy" decoding="async"><span class="photo-fallback">${escapeHTML(item.name)}</span><span class="experience-photo-cta">Discover experience</span></span>
      <span class="experience-card-copy"><span class="tag">${isPackage ? "Confirm package details with the team" : "Availability confirmed on enquiry"}</span><strong>${escapeHTML(item.name)}</strong><span>${escapeHTML(description)}</span></span>
    </button>
    <a class="btn ${isPackage ? "p" : ""}" href="#book" data-act="${escapeHTML(isPackage ? item.name : "Water Sports Package")}">${isPackage ? "Explore Package" : "Explore Activity"}</a>
  </article>`;
}

function renderCards({ activities, combos }) {
  experienceDetails.clear();
  const scubaPackages = [
    { id: "regular", name: "Regular Scuba Diving", image: "/images/scuba-diving.jpg", description: "Your first steps into Malvan’s underwater world, with preparation and instructor guidance.", detail: "Get ready to explore below the surface with an introductory dive. Your instructor guides the pre-dive preparation and safety briefing; complimentary underwater video is included.", inclusions: ["Approx. 10–15 m, subject to verified operating limits", "Pre-dive training and safety briefing", "Certified instructor guidance", "Complimentary underwater video"] },
    { id: "deep", name: "Deep Scuba Diving", image: "/images/scuba-diving.jpg", description: "A dedicated deeper dive experience, with no depth promised here.", detail: "Choose a dedicated deeper scuba experience. Your team confirms eligibility and operating details; the dive is supported by instructor supervision, training, a safety briefing and complimentary underwater video.", inclusions: ["Dedicated deeper experience; depth not stated", "Eligibility confirmed by the team", "Training and safety briefing", "Complimentary underwater video"] },
  ];
  scubaPackages.forEach((item) => {
    experienceDetails.set(item.id, { ...item, bookingValue: item.name, cta: "Enquire about this dive" });
  });
  document.querySelectorAll(".scuba-card-open[data-experience]").forEach((button) => {
    const item = experienceDetails.get(button.dataset.experience);
    if (item) button.setAttribute("aria-label", `View details for ${item.name}`);
  });
  $("#actGrid").innerHTML = activities.map((item) => renderExperienceCard(item, "activity")).join("");
  $("#comboGrid").innerHTML = combos.slice(0, 4).map((item) => renderExperienceCard(item, "package")).join("");

  const options = ["Regular Scuba Diving", "Deep Scuba Diving", "Water Sports Package", "All-in-One Adventure"];
  $("#a").innerHTML = `<option value="">Select an experience</option>${options.map((item) => `<option>${escapeHTML(item)}</option>`).join("")}`;
}

function setupExperienceDialog() {
  const dialog = $("#activityDialog");
  const content = $(".activity-dialog-content", dialog);
  document.addEventListener("click", (event) => {
    const opener = event.target.closest("[data-experience]");
    if (opener) {
      const item = experienceDetails.get(opener.dataset.experience);
      if (!item) return;
      const image = item.image
        ? `<div class="activity-dialog-photo"><img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)} experience"><span class="photo-fallback">${escapeHTML(item.title)}</span></div>`
        : "";
      const inclusions = item.inclusions?.length
        ? `<ul>${item.inclusions.map((line) => `<li>${escapeHTML(line)}</li>`).join("")}</ul>`
        : "";
      content.innerHTML = `${image}<div class="activity-dialog-copy"><p class="eyebrow">Rehan Scuba · Malvan</p><h2 id="activityDialogTitle">${escapeHTML(item.title)}</h2><p>${escapeHTML(item.detail || item.description)}</p>${inclusions}<a class="btn p" href="#book" data-act="${escapeHTML(item.bookingValue)}">${escapeHTML(item.cta)}</a></div>`;
      dialog.showModal();
      return;
    }
    if (event.target.closest(".activity-dialog-close")) dialog.close();
    if (event.target === dialog) dialog.close();
    if (event.target.closest("#activityDialog [data-act]")) dialog.close();
  });
  document.addEventListener("error", (event) => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement) || !image.closest(".experience-photo, .activity-dialog-photo")) return;
    image.hidden = true;
    image.parentElement.classList.add("photo-missing");
  }, true);
  dialog.addEventListener("close", () => content.replaceChildren());
}

function renderGallery(items) {
  const filters = $("#galleryFilters");
  const grid = $("#galleryGrid");
  filters.innerHTML = ["All", ...galleryCategories].map((category, index) =>
    `<button class="filter${index === 0 ? " active" : ""}" type="button" data-category="${escapeHTML(category)}">${escapeHTML(category)}</button>`).join("");
  if (!items.length) {
    grid.innerHTML = `<div class="gallery-empty">Authentic photos and underwater videos will be added by the business.</div>`;
    return;
  }
  grid.innerHTML = items.map((item) => {
    const title = escapeHTML(item.title || item.category || "Rehan Scuba experience");
    const url = escapeHTML(item.url || "");
    const isVideo = item.type === "video" || /\.(mp4|webm|mov)(\?|$)/i.test(item.url || "");
    const media = isVideo
      ? `<video src="${url}" controls preload="none" playsinline aria-label="${title}"></video>`
      : `<img src="${url}" alt="${title}" loading="lazy" decoding="async">`;
    return `<article class="gallery-item" data-category="${escapeHTML(item.category || "Customer Experiences")}">
      <button type="button" class="gallery-media" data-lightbox="${url}" data-media-type="${isVideo ? "video" : "image"}" aria-label="Open ${title}">${media}<span class="gallery-caption">${title}</span></button>
    </article>`;
  }).join("");
}

function setupGallery() {
  const filters = $("#galleryFilters");
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    filters.querySelectorAll(".filter").forEach((item) => item.classList.toggle("active", item === button));
    const category = button.dataset.category;
    document.querySelectorAll(".gallery-item").forEach((item) => {
      item.hidden = category !== "All" && item.dataset.category !== category;
    });
  });

  const dialog = $("#lightbox");
  $("#galleryGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-lightbox]");
    if (!button || !button.dataset.lightbox) return;
    const media = button.dataset.mediaType === "video"
      ? `<video src="${button.dataset.lightbox}" controls autoplay playsinline></video>`
      : `<img src="${button.dataset.lightbox}" alt="Selected gallery media">`;
    $(".lightbox-content", dialog).innerHTML = media;
    dialog.showModal();
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => { $(".lightbox-content", dialog).replaceChildren(); });
}

function setupOceanSurprise() {
  const widget = $("#oceanSurprise");
  const trigger = $("#oceanTrigger");
  const details = $("#oceanDetails");
  const setOpen = (open) => {
    widget.classList.toggle("is-open", open);
    trigger.setAttribute("aria-expanded", String(open));
    details.hidden = !open;
  };
  trigger.addEventListener("click", () => setOpen(trigger.getAttribute("aria-expanded") !== "true"));
  document.addEventListener("pointerdown", (event) => {
    if (!widget.contains(event.target)) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && trigger.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      trigger.focus();
    }
  });
}

function setContactLinks(business) {
  const phoneNumbers = business.phoneNumbers?.length ? business.phoneNumbers : businessDefaults.phoneNumbers;
  const mainPhone = phoneNumbers[0] || businessDefaults.phone;
  const number = String(business.whatsappNumber || "").replace(/\D/g, "");
  const message = encodeURIComponent("Hello! I would like to enquire about activities and availability at Rehan Scuba Diving & Watersports.");
  const href = number ? `https://wa.me/${number}?text=${message}` : "#book";
  ["#waLink", "#waLink2", "#waFloat"].forEach((selector) => {
    const link = $(selector);
    if (link) {
      link.href = href;
      link.hidden = !number;
    }
  });
  $("#sb").textContent = number ? "Send Enquiry on WhatsApp" : "Send Enquiry";
  const phoneLink = $("#phoneLink");
  if (phoneLink && mainPhone) {
    phoneLink.href = `tel:${String(mainPhone).replace(/[^+\d]/g, "")}`;
    phoneLink.textContent = `Call ${mainPhone}`;
  }
  const additionalNumbers = phoneNumbers.filter((phone) => phone !== mainPhone);
  const additionalLinks = additionalNumbers.map((phone) => `<a href="tel:${escapeHTML(String(phone).replace(/[^+\d]/g, ""))}">${escapeHTML(phone)}</a>`).join(" · ");
  $("#additionalPhoneLinks").innerHTML = additionalLinks;
  $("#footerAdditionalPhones").innerHTML = additionalLinks;
  if (business.address) $("#businessAddress").textContent = business.address;
  if (business.openingHours) $("#openingHours").textContent = business.openingHours;
  if (business.instagramUrl) {
    const instagram = $("#instagramLink");
    instagram.href = business.instagramUrl;
    instagram.textContent = "Visit Instagram";
    instagram.hidden = false;
    instagram.target = "_blank";
    instagram.rel = "noopener noreferrer";
  }
  if (business.googleBusinessUrl) {
    const googleProfile = $("#googleBusinessLink");
    googleProfile.href = business.googleBusinessUrl;
    googleProfile.textContent = "View Google Business profile";
    googleProfile.hidden = false;
    googleProfile.target = "_blank";
    googleProfile.rel = "noopener noreferrer";
  }
  const footerPhone = $("#footerPhone");
  if (footerPhone && mainPhone) {
    footerPhone.href = `tel:${String(mainPhone).replace(/[^+\d]/g, "")}`;
    footerPhone.textContent = mainPhone;
  }
}

function setupAnimations() {
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reducedMotion) {
    gsap.fromTo(".hero .in > *", { y: 22, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power2.out",
    });
  }
  const nav = $("#nav");
  const updateNav = () => nav.classList.toggle("s", window.scrollY > 40);
  window.addEventListener("scroll", updateNav, { passive: true });
  updateNav();
  const bubbles = $("#bubbles");
  if (!reducedMotion && bubbles) {
    for (let index = 0; index < 14; index += 1) {
      const bubble = document.createElement("span");
      const size = 6 + Math.random() * 22;
      bubble.className = "bub";
      bubble.style.cssText = `left:${Math.random() * 100}%;width:${size}px;height:${size}px;animation-duration:${8 + Math.random() * 12}s;animation-delay:${-Math.random() * 14}s`;
      bubbles.append(bubble);
    }
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("on");
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".rv").forEach((element) => observer.observe(element));
}

function setupEnquiry(business) {
  const form = $("#bf");
  const submitButton = $("#sb");
  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-act]");
    if (link) $("#a").value = link.dataset.act;
  });
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (submitButton.disabled) return;
    const values = {
      name: $("#n").value.trim(), mobile: $("#m").value.trim(), email: $("#e").value.trim(),
      experience: $("#a").value, participants: Number($("#p").value), date: $("#d").value,
    };
    const errors = {
      name: values.name.length < 2 ? "Enter your name" : "",
      mobile: !/^(\+?91)?[\s-]?0?[6-9]\d{4}[\s-]?\d{5}$/.test(values.mobile) ? "Enter a valid mobile number" : "",
      email: !/^\S+@\S+\.\S+$/.test(values.email) ? "Enter a valid email" : "",
      experience: !values.experience ? "Choose an experience" : "",
      participants: !(values.participants >= 1 && values.participants <= 50) ? "Enter 1 to 50 participants" : "",
      date: !values.date || new Date(`${values.date}T00:00:00`) < new Date(new Date().toDateString()) ? "Choose a future date" : "",
    };
    const fields = { name: "n", mobile: "m", email: "e", experience: "a", participants: "p", date: "d" };
    Object.entries(fields).forEach(([key, id]) => { $(`#${id}`).parentElement.querySelector(".err").textContent = errors[key]; });
    if (Object.values(errors).some(Boolean)) return;
    if (!fallbackCombos.some((item) => item.name === values.experience)) {
      const status = $("#ok");
      status.hidden = false;
      status.textContent = "Please choose one of the four available packages.";
      return;
    }

    const enquiryId = `RSD-${crypto.randomUUID()}`;
    const message = `Enquiry ${enquiryId}\nName: ${values.name}\nMobile: ${values.mobile}\nEmail: ${values.email}\nPackage: ${values.experience}\nParticipants: ${values.participants}\nPreferred date: ${values.date}\nBusiness hours: 9:30 AM–6:00 PM`;
    const whatsappNumber = String(business.whatsappNumber || "").replace(/\D/g, "");
    if (!firebaseConfigured && !whatsappNumber) {
      const status = $("#ok");
      status.hidden = false;
      status.textContent = "The enquiry form is not connected yet. Please call the business to enquire.";
      const phone = $("#phoneLink");
      if (phone) status.append(" ", phone.cloneNode(true));
      return;
    }
    submitButton.disabled = true;
    const popup = whatsappNumber ? window.open("about:blank", "_blank") : null;
    try {
      if (firebaseConfigured) {
        const { db, firestore } = await getFirebase();
        await firestore.setDoc(firestore.doc(db, "enquiries", enquiryId), {
          ...values, enquiryId, status: "new", source: "website", createdAt: firestore.serverTimestamp(),
        });
      }
      const whatsappUrl = whatsappNumber
        ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
        : "";
      if (popup && whatsappUrl) popup.location.href = whatsappUrl;
      const status = $("#ok");
      status.hidden = false;
      status.textContent = firebaseConfigured
        ? `Enquiry ${enquiryId} saved. It is not confirmed until the team verifies availability.`
        : `Enquiry ${enquiryId} is ready to send.`;
      if (!popup && whatsappUrl) {
        const link = document.createElement("a");
        link.className = "btn p";
        link.href = whatsappUrl;
        link.target = "_blank";
        link.rel = "noopener";
        link.textContent = "Open WhatsApp";
        status.append(" ", link);
      } else if (!whatsappNumber) {
        const phone = $("#phoneLink");
        if (phone) status.append(" Contact the business to share your enquiry: ", phone.cloneNode(true));
      }
      form.reset();
    } catch (error) {
      if (popup) popup.close();
      console.error("Enquiry submission failed", error);
      const status = $("#ok");
      status.hidden = false;
      status.textContent = "We could not save your enquiry. Please contact the business directly and try again later.";
      submitButton.disabled = false;
    }
  });
}

async function initializeSite() {
  const content = await loadPublicContent();
  renderCards(content);
  renderGallery(content.gallery);
  setContactLinks(content.business);
  if (content.banner?.text) {
    const banner = $("#promoBanner");
    banner.textContent = content.banner.text;
    banner.hidden = false;
  }
  setupGallery();
  setupExperienceDialog();
  setupOceanSurprise();
  setupAnimations();
  setupEnquiry(content.business);
  await loadSocialIntegrations(content.gallery, content.business);
}

initializeSite().catch((error) => {
  console.error("The website could not initialize.", error);
});

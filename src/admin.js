import {
  addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, serverTimestamp, setDoc, updateDoc,
} from "firebase/firestore/lite";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  onAuthStateChanged, signInWithEmailAndPassword, signOut,
} from "firebase/auth";
import { getFirebase, firebaseConfigured } from "./firebase.js";
import { galleryCategories } from "./data/defaults.js";

const $ = (selector, root = document) => root.querySelector(selector);
const esc = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;",
}[char]));
const loginPanel = $("#loginPanel");
const dashboard = $("#dashboard");
const message = $("#adminMessage");
let auth;
let db;
let storage;

function notify(text, isError = false) {
  message.textContent = text;
  message.classList.toggle("admin-notice", isError);
}

function showLogin(text = "") {
  loginPanel.hidden = false;
  dashboard.hidden = true;
  $("#loginMessage").textContent = text;
}

function showDashboard(user) {
  loginPanel.hidden = true;
  dashboard.hidden = false;
  $("#adminIdentity").textContent = user.email || user.uid;
}

async function collectionItems(name) {
  const result = await getDocs(collection(db, name));
  return result.docs.map((entry) => ({ id: entry.id, ...entry.data() }))
    .sort((first, second) => (first.order ?? 0) - (second.order ?? 0));
}

function renderEnquiries(items) {
  const root = $("#panel-enquiries");
  root.innerHTML = `<h2>Enquiries</h2><label for="enquiryStatus">Filter by status</label>
    <select id="enquiryStatus"><option value="all">All statuses</option><option>new</option><option>contacted</option><option>confirmed</option><option>cancelled</option></select>
    <div class="admin-list" id="enquiryList"></div>`;
  const list = $("#enquiryList");
  const draw = (filter = "all") => {
    const filtered = filter === "all" ? items : items.filter((item) => item.status === filter);
    list.innerHTML = filtered.length ? filtered.map((item) => `<article class="admin-row">
      <div><b>${esc(item.name)}</b><div>${esc(item.experience)} · ${esc(item.date)} · ${esc(item.participants)} participant(s)</div>
      <small>${esc(item.mobile)} · ${esc(item.email)} · ${esc(item.enquiryId || item.id)}</small></div>
      <label>Status <select data-status-id="${esc(item.id)}">${["new", "contacted", "confirmed", "cancelled"].map((status) => `<option ${item.status === status ? "selected" : ""}>${status}</option>`).join("")}</select></label>
    </article>`).join("") : "<p>No enquiries in this view.</p>";
  };
  draw();
  $("#enquiryStatus", root).addEventListener("change", (event) => draw(event.target.value));
  list.addEventListener("change", async (event) => {
    const select = event.target.closest("[data-status-id]");
    if (!select) return;
    try {
      await updateDoc(doc(db, "enquiries", select.dataset.statusId), { status: select.value, updatedAt: serverTimestamp() });
      const item = items.find((entry) => entry.id === select.dataset.statusId);
      item.status = select.value;
      notify("Enquiry status updated.");
    } catch (error) { notify(`Could not update status: ${error.message}`, true); }
  });
}

function renderEditableCollection(name, items) {
  const root = $(`#panel-${name}`);
  const isCombo = name === "combos";
  const heading = isCombo ? "Experience packages" : "Water-sport activities";
  root.innerHTML = `<h2>${heading}</h2>
    <form class="admin-form" id="${name}Form">
      <label for="${name}Id">Document ID</label><input id="${name}Id" required pattern="[a-z0-9-]+" placeholder="lowercase-id">
      <label for="${name}Name">Name</label><input id="${name}Name" required maxlength="100">
      <label for="${name}Order">Display order</label><input id="${name}Order" type="number" min="0" step="1" value="${items.length}" required>
      ${isCombo ? '<label for="comboInclusions">Inclusions (one per line; confirm with business)</label><textarea id="comboInclusions" rows="5"></textarea>' : '<label for="activityDescription">Description</label><textarea id="activityDescription" rows="3"></textarea>'}
      <label><input id="${name}Published" type="checkbox" checked> Published</label>
      <button class="btn p" type="submit">Save</button>
    </form><div class="admin-list" id="${name}List"></div>`;
  const list = $(`#${name}List`, root);
  const draw = () => {
    list.innerHTML = items.map((item) => `<article class="admin-row"><div><b>${esc(item.name)}</b><div>${esc(isCombo ? (item.inclusions || []).join(" · ") : item.description)}</div></div><div><button class="filter" data-edit="${esc(item.id)}" type="button">Edit</button><button class="filter" data-delete="${esc(item.id)}" type="button">Delete</button></div></article>`).join("");
  };
  draw();
  list.addEventListener("click", async (event) => {
    const edit = event.target.closest("[data-edit]");
    const remove = event.target.closest("[data-delete]");
    if (edit) {
      const item = items.find((entry) => entry.id === edit.dataset.edit);
      $(`#${name}Id`).value = item.id;
      $(`#${name}Name`).value = item.name || "";
      $(`#${name}Order`).value = item.order ?? 0;
      $(`#${name}Published`).checked = item.published !== false;
      if (isCombo) $("#comboInclusions").value = (item.inclusions || []).join("\n");
      else $("#activityDescription").value = item.description || "";
    }
    if (remove && confirm(`Delete ${remove.dataset.delete}?`)) {
      try {
        await deleteDoc(doc(db, name, remove.dataset.delete));
        items.splice(items.findIndex((entry) => entry.id === remove.dataset.delete), 1);
        draw();
        notify("Content deleted.");
      } catch (error) { notify(`Could not delete: ${error.message}`, true); }
    }
  });
  $(`#${name}Form`, root).addEventListener("submit", async (event) => {
    event.preventDefault();
    const id = $(`#${name}Id`).value.trim();
    const item = {
      name: $(`#${name}Name`).value.trim(),
      published: $(`#${name}Published`).checked,
      order: Number($(`#${name}Order`).value),
      updatedAt: serverTimestamp(),
      ...(isCombo
        ? { inclusions: $("#comboInclusions").value.split("\n").map((line) => line.trim()).filter(Boolean) }
        : { description: $("#activityDescription").value.trim() }),
    };
    try {
      await setDoc(doc(db, name, id), item, { merge: true });
      const existing = items.find((entry) => entry.id === id);
      if (existing) Object.assign(existing, item);
      else items.push({ id, ...item });
      draw();
      event.target.reset();
      notify("Content saved.");
    } catch (error) { notify(`Could not save: ${error.message}`, true); }
  });
}

function renderGallery(items) {
  const root = $("#panel-gallery");
  root.innerHTML = `<h2>Gallery media</h2><p class="lead">Only upload media supplied by the business. Use underwater footage for scuba; do not use generic stock footage.</p>
    <form class="admin-form" id="galleryForm"><label for="galleryFile">Photo or video</label><input id="galleryFile" type="file" accept="image/jpeg,image/png,image/webp,image/avif,video/mp4,video/webm,video/quicktime" required>
    <label for="galleryTitle">Title</label><input id="galleryTitle" maxlength="120" required>
    <label for="galleryCategory">Category</label><select id="galleryCategory">${galleryCategories.map((category) => `<option>${esc(category)}</option>`).join("")}</select>
    <label for="instagramPostUrl">Instagram post URL (optional)</label><input id="instagramPostUrl" type="url" placeholder="https://www.instagram.com/p/...">
    <label><input id="instagramFeatured" type="checkbox"> Feature this photo in the curated Instagram fallback</label>
    <button class="btn p" type="submit">Upload media</button></form><div class="admin-list" id="galleryList"></div>`;
  const list = $("#galleryList", root);
  const draw = () => {
    list.innerHTML = items.map((item) => `<article class="admin-row"><div><b>${esc(item.title)}</b><div>${esc(item.category)} · ${esc(item.type)}</div><a href="${esc(item.url)}" target="_blank" rel="noopener">Open media</a></div><button class="filter" data-delete="${esc(item.id)}" type="button">Delete</button></article>`).join("");
  };
  draw();
  list.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-delete]");
    if (!button || !confirm("Delete this gallery item and its uploaded file?")) return;
    const item = items.find((entry) => entry.id === button.dataset.delete);
    try {
      if (item.storagePath) await deleteObject(ref(storage, item.storagePath));
      await deleteDoc(doc(db, "gallery", item.id));
      items.splice(items.indexOf(item), 1);
      draw();
      notify("Gallery item deleted.");
    } catch (error) { notify(`Could not delete media: ${error.message}`, true); }
  });
  $("#galleryForm", root).addEventListener("submit", async (event) => {
    event.preventDefault();
    const file = $("#galleryFile").files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/avif", "video/mp4", "video/webm", "video/quicktime"];
    if (!file || !allowedTypes.includes(file.type) || file.size > 100 * 1024 * 1024) {
      notify("Choose an image or video file smaller than 100 MB.", true);
      return;
    }
    const id = crypto.randomUUID();
    const storagePath = `gallery/${id}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "-")}`;
    try {
      await uploadBytes(ref(storage, storagePath), file, { contentType: file.type });
      const url = await getDownloadURL(ref(storage, storagePath));
      const item = {
        title: $("#galleryTitle").value.trim(), category: $("#galleryCategory").value,
        type: file.type.startsWith("video/") ? "video" : "image", url, storagePath,
        instagramFeatured: file.type.startsWith("image/") && $("#instagramFeatured").checked,
        instagramPostUrl: $("#instagramPostUrl").value.trim(),
        published: true, createdAt: serverTimestamp(),
      };
      const created = await addDoc(collection(db, "gallery"), item);
      items.push({ id: created.id, ...item });
      draw();
      event.target.reset();
      notify("Media uploaded.");
    } catch (error) { notify(`Upload failed: ${error.message}`, true); }
  });
}

async function renderSettings() {
  const root = $("#panel-settings");
  root.innerHTML = `<h2>Contact details and banners</h2><form class="admin-form" id="settingsForm">
    <label for="businessName">Business name</label><input id="businessName" maxlength="120">
    <label for="businessPhone">Phone</label><input id="businessPhone" maxlength="30">
    <label for="businessPhones">Other contact numbers (comma separated)</label><input id="businessPhones" maxlength="100">
    <label for="businessWhatsApp">WhatsApp number (country code and digits)</label><input id="businessWhatsApp" maxlength="20">
    <label for="businessAddressInput">Address</label><textarea id="businessAddressInput" rows="3" maxlength="300"></textarea>
    <label for="businessHours">Opening hours</label><input id="businessHours" maxlength="120">
    <label for="businessInstagram">Instagram URL</label><input id="businessInstagram" type="url">
    <label for="businessGoogle">Google Business URL</label><input id="businessGoogle" type="url">
    <button class="btn p" type="submit">Save contact details</button></form>
    <h3>Promotional banner</h3><form id="bannerForm" class="admin-form"><label for="bannerText">Banner text</label><input id="bannerText" maxlength="160" required>
    <label><input id="bannerPublished" type="checkbox"> Show banner</label><button class="btn" type="submit">Save banner</button></form>`;
  const settingsRef = doc(db, "siteSettings", "contact");
  const existing = await getDoc(settingsRef);
  const data = existing.exists() ? existing.data() : {};
  $("#businessName").value = data.businessName || "Rehan Scuba Diving & Watersports";
  $("#businessPhone").value = data.phone || "97655 78882";
  $("#businessPhones").value = (data.phoneNumbers || ["94056 32440", "94210 89422"]).join(", ");
  $("#businessWhatsApp").value = data.whatsappNumber || "";
  $("#businessAddressInput").value = data.address || "Dandeshwar Mandir, Beach, near Kushal Purva Resort, Malvan, Maharashtra 416606";
  $("#businessHours").value = data.openingHours || "Ask the team to confirm opening hours.";
  $("#businessInstagram").value = data.instagramUrl || "";
  $("#businessGoogle").value = data.googleBusinessUrl || "";
  $("#settingsForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      await setDoc(settingsRef, {
        businessName: $("#businessName").value.trim(), phone: $("#businessPhone").value.trim(),
        phoneNumbers: [$("#businessPhone").value, ...$("#businessPhones").value.split(",")].map((phone) => phone.trim()).filter(Boolean),
        whatsappNumber: $("#businessWhatsApp").value.replace(/\D/g, ""), address: $("#businessAddressInput").value.trim(),
        openingHours: $("#businessHours").value.trim(), instagramUrl: $("#businessInstagram").value.trim(),
        googleBusinessUrl: $("#businessGoogle").value.trim(), updatedAt: serverTimestamp(),
      }, { merge: true });
      notify("Contact details saved.");
    } catch (error) { notify(`Could not save settings: ${error.message}`, true); }
  });
  const bannerRef = doc(db, "banners", "current");
  const banner = await getDoc(bannerRef);
  if (banner.exists()) {
    $("#bannerText").value = banner.data().text || "";
    $("#bannerPublished").checked = Boolean(banner.data().published);
  }
  $("#bannerForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      await setDoc(bannerRef, { text: $("#bannerText").value.trim(), published: $("#bannerPublished").checked, updatedAt: serverTimestamp() }, { merge: true });
      notify("Banner saved.");
    } catch (error) { notify(`Could not save banner: ${error.message}`, true); }
  });
}

async function loadDashboard() {
  const [enquiriesSnapshot, activities, combos, gallery] = await Promise.all([
    getDocs(query(collection(db, "enquiries"), orderBy("createdAt", "desc"))),
    collectionItems("activities"), collectionItems("combos"), collectionItems("gallery"),
  ]);
  renderEnquiries(enquiriesSnapshot.docs.map((entry) => ({ id: entry.id, ...entry.data() })));
  renderEditableCollection("activities", activities);
  renderEditableCollection("combos", combos);
  renderGallery(gallery);
  await renderSettings();
}

async function initializeAdmin() {
  if (!firebaseConfigured) {
    showLogin("Firebase is not configured. Create .env.local from .env.example and deploy the Firebase security rules before using admin.");
    return;
  }
  const firebase = await getFirebase();
  auth = firebase.auth;
  db = firebase.db;
  storage = firebase.storage;
  $("#loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, $("#adminEmail").value.trim(), $("#adminPassword").value);
    } catch (error) { showLogin(`Sign-in failed: ${error.message}`); }
  });
  $("#signOut").addEventListener("click", () => signOut(auth));
  $("#adminTabs").addEventListener("click", (event) => {
    const button = event.target.closest("[data-tab]");
    if (!button) return;
    document.querySelectorAll("[data-tab]").forEach((tab) => tab.classList.toggle("active", tab === button));
    document.querySelectorAll(".admin-panel").forEach((panel) => { panel.hidden = panel.id !== `panel-${button.dataset.tab}`; });
  });
  onAuthStateChanged(auth, async (user) => {
    if (!user) { showLogin(); return; }
    try {
      const admin = await getDoc(doc(db, "admins", user.uid));
      if (!admin.exists()) {
        await signOut(auth);
        showLogin("This account is not on the admin allowlist.");
        return;
      }
      showDashboard(user);
      await loadDashboard();
    } catch (error) {
      showDashboard(user);
      notify(`Could not load admin data. Deploy security rules and verify setup: ${error.message}`, true);
    }
  });
}

initializeAdmin().catch((error) => {
  showLogin(`Firebase initialization failed: ${error.message}`);
});

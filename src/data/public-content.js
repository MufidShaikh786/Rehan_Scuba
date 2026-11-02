import { getFirebase, firebaseConfigured } from "../firebase.js";
import { businessDefaults, fallbackActivities, fallbackCombos } from "./defaults.js";

async function listCollection(db, firestore, name) {
  try {
    const snapshot = await firestore.getDocs(firestore.query(
      firestore.collection(db, name), firestore.where("published", "==", true),
    ));
    if (snapshot.empty) return [];
    return snapshot.docs.map((item) => ({ id: item.id, ...item.data() }))
      .sort((first, second) => (first.order ?? 0) - (second.order ?? 0));
  } catch (error) {
    console.error(`Could not load ${name} from Firebase.`, error);
    return [];
  }
}

export async function loadPublicContent() {
  if (!firebaseConfigured) {
    return { activities: fallbackActivities, combos: fallbackCombos, gallery: [], business: businessDefaults, banner: null };
  }
  const { db, firestore } = await getFirebase();
  const [loadedActivities, loadedCombos, gallery] = await Promise.all([
    listCollection(db, firestore, "activities"),
    listCollection(db, firestore, "combos"),
    listCollection(db, firestore, "gallery"),
  ]);
  const publishedActivities = loadedActivities.filter((item) => item.id !== "snorkelling" && item.name?.toLowerCase() !== "snorkelling");
  const activities = fallbackActivities.map((fallback) => ({
    ...fallback,
    ...(publishedActivities.find((item) => item.id === fallback.id) || {}),
  }));
  const combos = fallbackCombos.map((fallback) => ({
    ...fallback,
    ...(loadedCombos.find((item) => item.id === fallback.id) || {}),
  }));
  let business = businessDefaults;
  let banner = null;
  try {
    const contact = await firestore.getDoc(firestore.doc(db, "siteSettings", "contact"));
    if (contact.exists()) business = { ...business, ...contact.data() };
    const currentBanner = await firestore.getDoc(firestore.doc(db, "banners", "current"));
    if (currentBanner.exists() && currentBanner.data().published) banner = currentBanner.data();
  } catch (error) {
    console.error("Could not load contact settings from Firebase.", error);
  }
  return { activities, combos, gallery, business, banner };
}

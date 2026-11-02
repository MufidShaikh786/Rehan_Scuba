const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const firebaseConfigured = Object.values(config).every(Boolean)
  && !Object.values(config).some((value) => value.startsWith("replace-me"));

let firebasePromise;

export function getFirebase() {
  if (!firebaseConfigured) return Promise.resolve(null);
  if (!firebasePromise) {
    firebasePromise = Promise.all([
      import("firebase/app"),
      import("firebase/auth"),
      import("firebase/firestore/lite"),
      import("firebase/storage"),
    ]).then(([appSdk, authSdk, firestoreSdk, storageSdk]) => {
      const app = appSdk.getApps()[0] ?? appSdk.initializeApp(config);
      return {
        app,
        auth: authSdk.getAuth(app),
        db: firestoreSdk.getFirestore(app),
        storage: storageSdk.getStorage(app),
        firestore: firestoreSdk,
        authSdk,
        storageSdk,
      };
    });
  }
  return firebasePromise;
}

import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "index.html",
        admin: "admin.html",
      },
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/@firebase/firestore/")) return "firebase-firestore";
          if (id.includes("node_modules/@firebase/auth/")) return "firebase-auth";
          if (id.includes("node_modules/@firebase/storage/")) return "firebase-storage";
          if (id.includes("node_modules/@firebase/app/")) return "firebase-app";
          if (id.includes("node_modules/@firebase/")) return "firebase-shared";
          if (id.includes("node_modules/firebase/")) return "firebase";
          if (id.includes("node_modules/gsap/")) return "animation";
        },
      },
    },
  },
});

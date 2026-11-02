# Rehan Scuba Diving & Watersports

Mobile-first website and admin foundation for the Malvan business. The frontend is Vite, plain JavaScript modules, Firebase's modular web SDK, and GSAP. No React migration is needed for this site.

## Project layout

- `index.html`: public website content and page structure
- `admin.html`: private admin sign-in and dashboard page (`/admin` on Firebase Hosting)
- `src/style.css`: shared responsive styles and reduced-motion support
- `src/site.js`: public page rendering, enquiry validation, gallery filters/lightbox and animation setup
- `src/admin.js`: Firebase Auth dashboard for enquiries, activities, packages, gallery and settings
- `src/data/defaults.js`: fallback display content used only before Firebase is configured
- `src/data/public-content.js`: reads published Firebase content
- `src/integrations.js`: optional public renderers for the server-side Instagram and Google review functions
- `functions/`: Cloud Functions for email notifications and optional social/review proxies
- `firestore.rules`, `storage.rules`: database and file access rules

## Requirements

- Node.js 22 LTS and npm
- A Firebase project with Authentication, Cloud Firestore, Storage, Hosting and Functions enabled
- A Firebase billing plan that supports Cloud Functions and the required storage services
- Firebase CLI: `npm install --global firebase-tools`

## Run locally

1. In this folder, install the website dependencies:

	```powershell
	npm install
	```

2. Copy `.env.example` to `.env.local` and paste the Firebase **web app configuration** from Firebase Console > Project settings > Your apps. The web API key is a public project identifier, not an admin secret; security depends on the deployed rules. Never put service-account credentials or provider secrets in this file.

3. Start the website:

	```powershell
	npm run dev
	```

4. Open the local URL printed by Vite. Open `/admin.html` for the local admin page. It will tell you Firebase is not configured until `.env.local` is complete.

5. Create a production build with `npm run build`. The deployable files are written to `dist/`.

## Firebase setup

1. Create a Firebase project and register a Web app. Copy its config values into `.env.local` (`VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_STORAGE_BUCKET`, `VITE_FIREBASE_APP_ID`). Keep `.env.local` private; it is ignored by git.

2. In Firebase Console, enable Authentication > Sign-in method > Email/Password. Create an account for each approved site administrator. Do not provide public sign-up.

3. Create Firestore in production mode and enable Storage. Select the appropriate region for the business. The Functions in this project use `asia-south1`; choose the same region where possible because deployed Functions cannot be moved later.

4. Add the administrator allowlist document for each approved account in Firestore: collection `admins`, document ID equal to that account's Firebase Auth UID, fields such as `{ "active": true }`. The Firestore rules deny admin access if this document is missing. Create this record in the Firebase Console; the client dashboard cannot grant itself access.

5. Sign into Firebase CLI and select the project from this folder:

	```powershell
	firebase login
	firebase use --add
	```

	This creates a local `.firebaserc`; do not commit a real project ID unless that is intentional.

6. Deploy Firestore and Storage rules before using the website:

	```powershell
	firebase deploy --only firestore:rules,storage
	```

	Public users can create a new enquiry document only. Enquiries cannot be publicly listed/read or edited, duplicate IDs cannot be overwritten, and only allowlisted admins can update status. Published activity, combo, gallery, banner and contact information is publicly readable; writes are admin-only. Gallery files are publicly readable and admin-only for upload/delete. This public read access is necessary to display the website media and content.

7. In the admin page, add published documents to `activities` and `combos`. Use lowercase hyphenated document IDs, add a numeric `order`, and set `published: true`. Package inclusions are proposals and must be confirmed by the business. Use the dashboard's Gallery tab for authentic media, and Settings for contact details, hours, profile URLs and the promotional banner.

Current water-sports list: Parasailing, Jet Ski, Banana Boat Ride, Bumper Ride and Speed Boat. Snorkelling is not offered in this website flow. The four selectable packages are Regular Scuba Diving, Deep Scuba Diving, Water Sports Package and All-in-One Adventure. Package inclusions must be confirmed before publishing. The website has only Regular and Deep Scuba; no separate training category exists. Booking enquiries accept times between 9:30 AM and 6:00 PM.

Activity card images use local files under `public/images/`: `scuba-diving.jpg` (poster image 3), `parasailing.jpg` (image 4), `jet-ski.jpg` (image 5), `banana-ride.jpg` (image 6), and `speed-boat.jpg` (image 7). The attachments are not automatically copied into the project; copy the corresponding supplied image files into that folder using those names. Until then, the cards show styled fallbacks.

## Enquiries and email notifications

When Firebase is configured, a valid website enquiry is saved to `enquiries/{enquiryId}` with status `new`; the same unique ID is included in the WhatsApp message. A repeat create with the same ID is denied by Firestore. The form always labels the request as an enquiry, never as a confirmed booking.

The Cloud Function sends an owner email using Resend. Install its dependencies, set the owner email parameter when prompted during deployment, then add the API key as a Firebase secret:

```powershell
npm --prefix functions install
firebase functions:secrets:set RESEND_API_KEY
firebase deploy --only functions:notifyNewEnquiry
```

Type the Resend key directly into the Firebase CLI prompt. Do not paste it into chat, source code, `.env.local`, or the website. Set `OWNER_FROM_EMAIL` to a sender authorized by the Resend account and verify the business's sending domain before production. Configure and test a real notification delivery before claiming it works.

## Instagram and Google reviews

Both are optional server-side Cloud Functions; their access tokens/keys are never sent to the browser. They are **not configured or verified yet**.

1. Confirm the Instagram professional account, its Instagram Graph API access, and the business's Instagram user ID. Set `META_GRAPH_VERSION` to a currently supported Meta API version. The API requires the relevant Meta app permissions and a valid long-lived token.
2. Confirm the Google Business profile and Place ID, enable the Google Places API (New), and review its display, attribution, caching and billing rules.
3. Set function parameters `INSTAGRAM_USER_ID`, `GOOGLE_PLACE_ID`, `META_GRAPH_VERSION`, `OWNER_EMAIL`, and `OWNER_FROM_EMAIL` when deploying. Set secrets with `firebase functions:secrets:set INSTAGRAM_ACCESS_TOKEN` and `firebase functions:secrets:set GOOGLE_PLACES_API_KEY`.
4. Deploy `firebase deploy --only functions:instagramFeed,functions:selectedGoogleReviews`.
5. Add the resulting URLs to `.env.local` as `VITE_INSTAGRAM_ENDPOINT` and `VITE_GOOGLE_REVIEWS_ENDPOINT`, and add confirmed public profile URLs as `VITE_INSTAGRAM_URL` and `VITE_GOOGLE_BUSINESS_URL`. Rebuild and redeploy the site.

Instagram currently reads up to 12 items from the official Graph API. Google Places only returns the reviews available in the Places response; this app filters those to ratings from 3.5 through 5, displays the returned reviewer name, original text, actual rating and date, and links to the Google Maps profile. It does not create, rewrite or guarantee review content. API eligibility, policies, availability and response limits must be tested with the business's accounts before launch. Manual curated posts or a compliant official embed are the fallback if Graph API access is unavailable.

## Gallery and media

The admin supports six categories: Scuba Diving, Underwater Adventures, Parasailing, Water Sports, Customer Experiences and Beach Activities. When uploading a real photo, admins can mark it for the manually curated Instagram fallback and optionally link to its original post. The gallery accepts image/video files below 100 MB, lazy-loads images and uses native browser video controls in the lightbox. Use only authentic business-supplied media; scuba must be represented by real underwater footage. Dolphin media belongs only in the non-bookable scuba highlight and must be supplied by the business. Optimize large files before upload; transcoding, video thumbnails and a dedicated full-screen playback workflow are not automated yet.

## Deploy to Firebase Hosting

1. Fill production Firebase values in the deployment environment's `.env.local` and check all required provider settings.
2. Build and deploy:

	```powershell
	npm run build
	firebase deploy --only hosting,functions,firestore:rules,storage
	```

3. Add the verified custom domain in Firebase Hosting and complete its DNS instructions. Only then replace `YOUR-DOMAIN.example` in `robots.txt` and `sitemap.xml`, and add the real `og:image` URL and confirmed social profile links.
4. Test `https://your-domain/admin`, a new enquiry, the owner email, admin status updates, media upload/delete, published content, WhatsApp, map, Instagram and Google reviews. Check that unauthenticated users cannot read enquiries or write content. Also test mobile browsers and reduced-motion mode.

## Deploy to GitHub Pages

The repository includes `.github/workflows/pages.yml`. On every push to `main`, it installs dependencies, builds the Vite site with relative asset paths that work under the `/Rehan_Scuba/` repository URL, and publishes `dist/` to GitHub Pages. Do not select the repository root as the Pages source; that serves unbuilt source HTML, so the page styles and scripts fail to load.

One-time setup: open GitHub repository **Settings > Pages > Build and deployment**, then set **Source** to **GitHub Actions**. The first deployment should run after the workflow is pushed to `main`; check the Actions tab for its result. The public URL is `https://mufidshaikh786.github.io/Rehan_Scuba/`.

The GitHub Pages build is static. Firebase Auth, Firestore, Storage and the server-side Functions still need their separate Firebase setup/deployment. The admin page is available at `/Rehan_Scuba/admin.html` on GitHub Pages; Firebase Hosting's `/admin` rewrite does not apply there.

Cloudflare Pages and Netlify can also host `dist/`, but Firebase Functions still need their own deployment and the hosting rewrites/proxy URLs must be adjusted.

## Client confirmations still needed

- Verified WhatsApp number. The site does not use the unverified phone as WhatsApp by default.
- PADI-certified instructor claim and years-of-experience wording.
- Deep Scuba operating details (no depth is displayed).
- Final activities and exact package inclusions.
- Authentic scuba, underwater and dolphin media.
- Instagram account/profile and Google Business profile/Place ID.
- Real domain, opening hours, notification recipient and sender email.
- Confirm which of the three poster contact numbers should receive WhatsApp enquiries. All three are currently displayed as call contacts only.

No prices, invented reviews, testimonials, histories, durations, availability or certification awards are shown. PADI and business details remain marked for verification. The existing dolphin wording is retained exactly; dolphin sightings are a natural, non-bookable possibility and are not guaranteed.

## Current validation status

The production frontend build and JavaScript syntax checks can be run locally. Firebase reads/writes, security rules, Functions, email, Instagram, Google Places, WhatsApp, live media and real-device behavior are not verified until a Firebase project, business account details and client-supplied media are available. Do not treat the scaffolding as a live integration before completing the steps above.

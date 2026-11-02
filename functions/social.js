import { defineSecret, defineString } from "firebase-functions/params";
import { onRequest } from "firebase-functions/v2/https";
import { logger } from "firebase-functions";

const instagramToken = defineSecret("INSTAGRAM_ACCESS_TOKEN");
const instagramUserId = defineString("INSTAGRAM_USER_ID");
const metaGraphVersion = defineString("META_GRAPH_VERSION");
const googlePlacesKey = defineSecret("GOOGLE_PLACES_API_KEY");
const googlePlaceId = defineString("GOOGLE_PLACE_ID");

export const instagramFeed = onRequest({
  cors: true,
  region: "asia-south1",
  secrets: [instagramToken],
}, async (request, response) => {
  if (request.method !== "GET") return response.status(405).json({ error: "Method not allowed" });
  try {
    const fields = "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp";
    const url = new URL(`https://graph.facebook.com/${metaGraphVersion.value()}/${instagramUserId.value()}/media`);
    url.searchParams.set("fields", fields);
    url.searchParams.set("limit", "12");
    url.searchParams.set("access_token", instagramToken.value());
    const result = await fetch(url);
    const body = await result.json();
    if (!result.ok) {
      logger.error("Instagram Graph API request failed", { status: result.status, body });
      return response.status(502).json({ error: "Instagram feed is temporarily unavailable" });
    }
    return response.set("Cache-Control", "public, max-age=300").json({
      items: (body.data || []).map((item) => ({
        id: item.id,
        caption: item.caption || "",
        mediaType: item.media_type,
        mediaUrl: item.media_url,
        thumbnailUrl: item.thumbnail_url || "",
        permalink: item.permalink,
        timestamp: item.timestamp,
      })),
    });
  } catch (error) {
    logger.error("Instagram feed failed", error);
    return response.status(500).json({ error: "Instagram feed is temporarily unavailable" });
  }
});

export const selectedGoogleReviews = onRequest({
  cors: true,
  region: "asia-south1",
  secrets: [googlePlacesKey],
}, async (request, response) => {
  if (request.method !== "GET") return response.status(405).json({ error: "Method not allowed" });
  try {
    const result = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(googlePlaceId.value())}`, {
      headers: {
        "X-Goog-Api-Key": googlePlacesKey.value(),
        "X-Goog-FieldMask": "displayName,googleMapsUri,reviews.rating,reviews.authorAttribution,reviews.originalText,reviews.text,reviews.publishTime",
      },
    });
    const body = await result.json();
    if (!result.ok) {
      logger.error("Google Places request failed", { status: result.status, body });
      return response.status(502).json({ error: "Google reviews are temporarily unavailable" });
    }
    const reviews = (body.reviews || [])
      .filter((review) => Number(review.rating) >= 3.5 && Number(review.rating) <= 5)
      .map((review) => ({
        author: review.authorAttribution?.displayName || "Google user",
        authorUri: review.authorAttribution?.uri || "",
        rating: review.rating,
        text: review.originalText?.text || review.text?.text || "",
        publishTime: review.publishTime || "",
        googleMapsUri: body.googleMapsUri || "",
      }));
    return response.set("Cache-Control", "public, max-age=900").json({
      businessName: body.displayName?.text || "",
      googleMapsUri: body.googleMapsUri || "",
      reviews,
    });
  } catch (error) {
    logger.error("Google reviews request failed", error);
    return response.status(500).json({ error: "Google reviews are temporarily unavailable" });
  }
});

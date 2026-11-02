import { defineSecret, defineString } from "firebase-functions/params";
import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { logger } from "firebase-functions";
export { instagramFeed, selectedGoogleReviews } from "./social.js";

const resendApiKey = defineSecret("RESEND_API_KEY");
const ownerEmail = defineString("OWNER_EMAIL");
const senderEmail = defineString("OWNER_FROM_EMAIL");

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;",
  })[character]);
}

export const notifyNewEnquiry = onDocumentCreated({
  document: "enquiries/{enquiryId}",
  region: "asia-south1",
  secrets: [resendApiKey],
}, async (event) => {
  const enquiry = event.data?.data();
  const to = ownerEmail.value();
  if (!enquiry || !to) {
    logger.error("Enquiry notification is not configured. Set OWNER_EMAIL before deployment.");
    return;
  }

  const lines = [
    ["Enquiry ID", enquiry.enquiryId], ["Name", enquiry.name], ["Mobile", enquiry.mobile],
    ["Email", enquiry.email], ["Experience", enquiry.experience], ["Participants", enquiry.participants],
    ["Preferred date", enquiry.date], ["Business hours", "9:30 AM–6:00 PM"],
  ];
  const html = `<h2>New website enquiry</h2><table>${lines.map(([label, value]) =>
    `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`).join("")}</table>
    <p>This is an enquiry only. Confirm availability directly with the customer.</p>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey.value()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: senderEmail.value(),
      to: [to],
      subject: `New enquiry ${enquiry.enquiryId}`,
      html,
    }),
  });
  if (!response.ok) {
    logger.error("Resend request failed", { status: response.status, response: await response.text() });
    throw new Error("Could not send enquiry notification email.");
  }
  logger.info("New enquiry notification sent", { enquiryId: enquiry.enquiryId });
});

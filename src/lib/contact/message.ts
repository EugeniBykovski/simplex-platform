import "server-only";
import type { EmailMessage } from "@/lib/email/provider";
import type { ContactValues } from "./fields";

// Internal notifications stay in English. Ids are allow-listed before they reach this module.
const SERVICE_LABELS: Record<string, string> = {
  "custom-software": "Custom Software",
  "web-mobile": "Web & Mobile",
  "ai-engineering": "AI Engineering",
  "cloud-devops": "Cloud & DevOps",
  "product-design": "Product Design",
  architecture: "Architecture",
  "dedicated-team": "Dedicated Team",
  "not-sure": "Not sure yet",
};
const BUDGET_LABELS: Record<string, string> = {
  "prefer-not-to-say": "Prefer not to say",
  "under-50k": "Under €50k",
  "50k-150k": "€50k – €150k",
  "150k-500k": "€150k – €500k",
  "500k-plus": "€500k+",
};
const TIMELINE_LABELS: Record<string, string> = {
  "not-sure": "Not sure yet",
  asap: "As soon as possible",
  "within-3-months": "Within 3 months",
  "3-6-months": "3–6 months",
  exploring: "Exploring options",
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

/** Takes validated values only. Sender and recipient are server configuration. */
export function composeLeadEmail(
  values: ContactValues,
  context: { from: string; to: string; locale: string; receivedAt: Date },
): EmailMessage {
  const rows: readonly (readonly [string, string])[] = [
    ["Source", `Website contact form (${context.locale})`],
    ["Name", values.name],
    ["Email", values.email],
    ["Company", values.company || "Not given"],
    ["Help with", values.services.map((id) => SERVICE_LABELS[id] ?? id).join(", ") || "Not given"],
    ["Budget", BUDGET_LABELS[values.budget] ?? values.budget],
    ["Timeline", TIMELINE_LABELS[values.timeline] ?? values.timeline],
    ["Received", context.receivedAt.toISOString()],
  ];

  return {
    from: context.from,
    to: context.to,
    replyTo: values.email,
    subject: "New website enquiry",
    text: [
      ...rows.map(([label, value]) => `${label}: ${value}`),
      "",
      "Project description:",
      values.description,
    ].join("\n"),
    html: [
      ...rows.map(([label, value]) => `<p><b>${label}:</b> ${escapeHtml(value)}</p>`),
      "<p><b>Project description:</b></p>",
      `<p>${escapeHtml(values.description).replace(/\n/g, "<br>")}</p>`,
    ].join(""),
  };
}

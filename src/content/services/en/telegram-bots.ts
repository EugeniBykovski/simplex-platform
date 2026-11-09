import type { ServicePageCopy } from "../types";

/**
 * Added in SF-157 at the owner's request; no design board exists (GAP-D43). Platform statements
 * follow the official Telegram and Meta documentation as of writing, and stay deliberately general.
 */
export const page: ServicePageCopy = {
  meta: {
    title: "Telegram Bot Development & Business Automation - SimpleX",
    description:
      "Custom Telegram bots and connected workflows for customer conversations, lead capture, bookings and operations, integrated with your CRM and official Meta APIs.",
  },
  title: "Telegram Bots & Business Automation",
  short: "Telegram Bots",
  blurb: "Conversations and workflows, automated.",
  headline: "Telegram bots that run real business workflows.",
  lead: "Custom Telegram bots and connected workflows that help businesses manage customer conversations, capture leads and automate everyday operations, engineered and integrated like any other production system.",
  glance: [
    "Built on the official Telegram Bot API",
    "Connected to your CRM, booking and internal systems",
    "Human handover wherever automation should stop",
  ],
  problem: "Conversations happen where your customers are. Your systems are somewhere else.",
  pains: [
    "Questions, orders and booking requests arrive in chats, then get copied into other tools by hand.",
    "Leads from Telegram and Instagram go unanswered outside working hours, or get lost between people.",
    "Off-the-shelf chatbot builders stop at scripted replies and can't reach your real data.",
  ],
  capsTitle: "What a Telegram bot can do for your business.",
  capsIntro:
    "A bot is an interface. What matters is the workflow behind it: the data it reads, the systems it updates and the moment it hands over to a person.",
  caps: [
    {
      title: "Customer support & FAQ",
      body: "Answers common questions from your own content, and passes the rest to your team.",
    },
    {
      title: "Lead capture & qualification",
      body: "Asks the right questions, then routes qualified leads to your CRM or sales chat.",
    },
    {
      title: "Bookings & service requests",
      body: "Availability, booking and reminders, connected to the scheduling system you already use.",
    },
    {
      title: "Orders & notifications",
      body: "Order intake, status updates and alerts that customers opt into.",
    },
    {
      title: "Internal & operational bots",
      body: "Approvals, shift updates and reports for staff, inside the tool they already open.",
    },
    {
      title: "Telegram Mini Apps",
      body: "Richer web interfaces inside Telegram, when a chat alone isn't enough.",
    },
  ],
  value: [
    { title: "Faster replies", body: "Common requests answered at any hour." },
    { title: "No lost leads", body: "Every conversation lands in one place, with an owner." },
    { title: "Less manual work", body: "Data flows into your systems, not into copy and paste." },
    { title: "Your rules", body: "You decide what is automated and what a person approves." },
  ],
  steps: [
    { title: "Map", body: "Conversations, systems and the decisions a bot may make." },
    { title: "Design", body: "Flows, messages and handover points, written with you." },
    { title: "Build", body: "Bot, integrations and admin tools, tested against your data." },
    { title: "Launch", body: "A small audience first, then everyone, with monitoring." },
    { title: "Improve", body: "Changes driven by real conversations, not guesses." },
  ],
  tech: [
    "Telegram Bot API",
    "Telegram Mini Apps",
    "Instagram Graph API",
    "Threads API",
    "Node.js",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "Webhooks",
  ],
  uses: [
    {
      title: "E-\u2060commerce and local businesses",
      body: "Order questions, delivery updates and repeat purchases handled in chat.",
    },
    {
      title: "Professional services and real estate",
      body: "Enquiries qualified, viewings or consultations booked, and leads sent to the CRM.",
    },
    {
      title: "Fitness, sports and education",
      body: "Class bookings, reminders, schedules and member questions in one bot.",
    },
    {
      title: "Hospitality and customer support",
      body: "Reservations, FAQs and service requests, with a person always one tap away.",
    },
  ],
  cta: "Have a conversation you'd like to automate?",
};

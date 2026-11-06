import type { LegalDocumentId } from "../registry";
import type { LegalDocumentCopy } from "../types";

const contact =
  "Questions about this document: [legal@your-domain.com] · [Registered company name, number and address].";

/**
 * DRAFT. From LegalPage.dc.html, corrected where the design described things this site doesn't do.
 * Not approved by anyone, and rendered only for approved documents or in review mode.
 */
export const documents: Record<LegalDocumentId, LegalDocumentCopy> = {
  privacy: {
    title: "Privacy Policy",
    metaDescription: "The SimpleX Privacy Policy, and its current status.",
    lead: "How SimpleX collects, uses and protects personal data when you visit our website or contact us.",
    sections: [
      {
        heading: "Who we are",
        body: "SimpleX ([registered company name]) is the controller of personal data processed through this website. [Registered address and company number.]",
      },
      {
        heading: "What we collect",
        body: "We collect only what we need to respond to you and run this website:",
        list: [
          "Details you submit in the contact form: name, work email, company, what you need help with, project description, budget range and timeline",
          "Technical data that our hosting provider processes, such as IP address and browser type. [Confirm once a host is chosen.]",
          "A salted hash of your IP address, held briefly in server memory to limit repeated submissions",
          "[Application details, only if an application route is added. None exists today.]",
        ],
      },
      {
        heading: "Why we use it",
        body: "To reply to enquiries, protect the form from abuse, operate the website and meet legal obligations. [Map each purpose to a lawful basis.]",
      },
      {
        heading: "Who we share it with",
        body: "Enquiries are delivered by email through Resend, and the website runs on [hosting provider]. [Confirm processors, data-processing agreements and international transfers.] [Confirm before stating: we never sell personal data.]",
      },
      {
        heading: "How long we keep it",
        body: "The website has no contact database. Enquiries arrive by email, and we keep them for [period]. [Confirm the email provider's retention.]",
      },
      {
        heading: "Your rights",
        body: "[Confirm with counsel, per jurisdiction.] You can access, correct, delete or export your data, object to processing and withdraw consent at any time.",
        list: [
          "Contact [privacy@your-domain.com]",
          "Complain to your local data protection authority",
        ],
      },
    ],
    contact,
  },
  cookie: {
    title: "Cookie Policy",
    metaDescription: "The SimpleX Cookie Policy, its current status, and what this site stores.",
    lead: "Which cookies this website uses, and why.",
    sections: [
      {
        heading: "What cookies are",
        body: "Small text files stored on your device that help a website work.",
      },
      {
        heading: "Essential cookies",
        body: "This site sets one, listed above, and only after you submit the contact form. [Counsel to confirm that it is strictly necessary.]",
      },
      {
        heading: "Analytics cookies",
        body: "This site uses no analytics. If that changes, this policy changes first, and optional scripts will not load without your consent.",
      },
      {
        heading: "Cookies we do not use",
        body: "We do not use advertising or cross-site tracking cookies. [Re-check when a host is chosen.]",
      },
      {
        heading: "Managing cookies",
        body: "There are no optional cookies, so there is nothing to choose here. You can delete or block cookies through your browser settings. Without the cookie above, the contact form still works, and its confirmation page simply makes no claim.",
      },
    ],
    contact,
  },
  terms: {
    title: "Terms of Use",
    metaDescription: "The SimpleX Terms of Use, and their current status.",
    lead: "The terms that apply when you use the SimpleX website. Client engagements are governed by separate agreements.",
    sections: [
      {
        heading: "Using this website",
        body: "You may browse and share this website for lawful purposes. [Acceptable use terms.]",
      },
      {
        heading: "Intellectual property",
        body: "Content, the SimpleX name and logo belong to SimpleX unless stated otherwise. [Licensing terms.]",
      },
      {
        heading: "Information on this site",
        body: "Content is provided for general information and does not constitute professional advice. Demonstration case studies are illustrative.",
      },
      {
        heading: "Links to other sites",
        body: "We are not responsible for the content of external websites we link to.",
      },
      {
        heading: "Liability",
        body: "[Limitation of liability, to be drafted by counsel.]",
      },
      {
        heading: "Governing law",
        body: "[Jurisdiction and governing law.]",
      },
    ],
    contact,
  },
};

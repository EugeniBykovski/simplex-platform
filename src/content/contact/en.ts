/**
 * Contact and Thank You copy, from Contact.dc.html and ThankYou.dc.html. Everything changed from the
 * source, and why, is in docs/content/contact-privacy-register.md. No response time is promised, as
 * none is approved, and there is no public email address to offer yet (GAP-C08).
 */
export const contact = {
  meta: {
    title: "Contact - SimpleX",
    description:
      "Tell SimpleX what you’re building. Share as much or as little as you like, and we’ll follow up with questions, not a sales script.",
  },
  thankYouMeta: {
    title: "Thank you - SimpleX",
    description: "Confirmation for a request sent through the SimpleX contact form.",
  },
  breadcrumb: { label: "Breadcrumb", home: "Home", current: "Contact" },
  hero: {
    lines: ["Tell us what", "you’re building."],
    lead: "Share as much or as little as you like. We’ll follow up with questions, not a sales script.",
  },
  next: {
    title: "What happens next",
    steps: [
      { title: "We read your request", body: "We reply to the email address you give us." },
      {
        title: "A 30-minute call with an engineer",
        body: "If it would help, to understand the problem, constraints and timing.",
      },
      {
        title: "A short written proposal",
        body: "Options, a recommended first step and an honest estimate.",
      },
    ],
  },
  careers: { before: "Careers enquiries:", link: "see open roles" },
  form: {
    title: "Start a project",
    note: "Fields marked optional can be skipped.",
    optional: "Optional",
    services: {
      legend: "What can we help with?",
      hint: "Select any",
      options: {
        "custom-software": "Custom Software",
        "web-mobile": "Web & Mobile",
        "ai-engineering": "AI Engineering",
        "cloud-devops": "Cloud & DevOps",
        "product-design": "Product Design",
        architecture: "Architecture",
        "dedicated-team": "Dedicated Team",
        "telegram-bots": "Telegram Bot & Business Automation",
        "not-sure": "Not sure yet",
      },
    },
    name: { label: "Name", placeholder: "Your name" },
    email: { label: "Work email", placeholder: "you@company.com" },
    company: { label: "Company", placeholder: "Company name" },
    description: {
      label: "Project description",
      placeholder: "What are you building, where are you today, and what would success look like?",
    },
    budget: {
      label: "Budget range",
      options: {
        "prefer-not-to-say": "Prefer not to say",
        "under-50k": "Under €50k",
        "50k-150k": "€50k – €150k",
        "150k-500k": "€150k – €500k",
        "500k-plus": "€500k+",
      },
    },
    timeline: {
      label: "Expected timeline",
      options: {
        "not-sure": "Not sure yet",
        asap: "As soon as possible",
        "within-3-months": "Within 3 months",
        "3-6-months": "3–6 months",
        exploring: "Exploring options",
      },
    },
    consent: "I agree that SimpleX may use these details to respond to my enquiry.",
    disclosure:
      "We use these details only to respond to your request. They reach our team by email, through our email provider. We don’t add you to a mailing list or keep them in a contact database.",
    privacyPending: "Our privacy policy isn’t published yet.",
    privacyLink: "Read the privacy policy.",
    noLists: "No mailing lists.",
    honeypot: "Leave this field empty",
    submit: {
      idle: "Send message",
      pending: "Sending…",
      retry: "Try again",
      demo: "Simulate sending",
      unavailable: "Sending unavailable",
    },
    errors: {
      generic: "Please check this field",
      services: { invalid: "Please choose from the options shown" },
      name: {
        required: "Please tell us your name",
        invalid: "Please remove any special control characters",
        tooLong: "Please use 200 characters or fewer",
      },
      email: {
        required: "Please enter your email",
        invalid: "Enter a complete email, like name@company.com",
      },
      company: {
        invalid: "Please remove any special control characters",
        tooLong: "Please use 200 characters or fewer",
      },
      description: {
        required: "A sentence or two helps us prepare - at least 20 characters",
        tooShort: "A sentence or two helps us prepare - at least 20 characters",
        invalid: "Please remove any special control characters",
        tooLong: "Please use 2000 characters or fewer",
      },
      budget: { invalid: "Please choose from the options shown" },
      timeline: { invalid: "Please choose from the options shown" },
      consent: { required: "Please confirm so we can reply" },
    },
    summary: {
      counts: {
        one: "Please check {count} field.",
        other: "Please check {count} fields.",
      } as Record<string, string>,
      detail: "We’ve highlighted what needs attention below.",
    },
    status: {
      sending: "Sending your request.",
      demo: {
        title: "Demo mode.",
        body: "Submissions here are simulated. No email is sent.",
      },
      unavailable: {
        title: "This form isn’t accepting requests right now.",
        body: "Nothing entered here will be sent.",
      },
      rejected: {
        title: "We couldn’t process this form.",
        body: "Reload the page and try again.",
      },
      rate_limited: {
        title: "Too many attempts.",
        body: "Please wait a few minutes and try again. Everything you entered is still here.",
      },
      network_failure: {
        title: "We couldn’t confirm that your request was sent.",
        body: "It may have reached us. Check your connection first. If you try again, we might receive it twice.",
      },
      provider_failure: {
        title: "We couldn’t send your request.",
        body: "It wasn’t accepted for delivery. Everything you entered is still here, so you can try again shortly.",
      },
    },
    success: {
      live: {
        title: "Thank you{name}.",
        body: "Your request has been submitted. We’ll reply to",
      },
      demo: {
        title: "Demo mode.",
        body: "Your request was simulated. No email was sent.",
      },
      continue: "Continue",
      again: "Send another message",
      startOver: "Start again",
    },
  },
  scheduler: {
    tag: "Prefer to talk?",
    title: "Ask for 30 minutes with an engineer.",
    lead: "No sales pitch. Bring the problem; leave with options, risks and a rough shape of the solution.",
    points: ["Say so in your message", "We’ll agree a time by email"],
    panel: {
      label: "Online booking",
      title: "Not available yet",
      body: "There’s no calendar connected, so no time can be chosen or reserved on this page. Ask for a call in the form instead.",
      action: "Go to the form",
    },
  },
  thankYou: {
    confirmed: {
      lines: ["Thank you.", "Request submitted."],
      lead: "We’ll reply by email, usually with a few questions.",
      steps: [
        { label: "01 · Now", title: "Request submitted" },
        { label: "02 · Next", title: "A reply by email" },
        { label: "03 · If useful", title: "A 30-minute call" },
      ],
    },
    demo: {
      lines: ["Demo mode.", "Nothing was sent."],
      lead: "Your request was simulated. No email was sent, and nobody received it.",
    },
    neutral: {
      lines: ["Looking to", "get in touch?"],
      lead: "This page confirms a request sent from our contact form, and we can’t see a recent one from this browser. If you sent one earlier, that doesn’t mean it failed.",
      action: "Go to the contact form",
    },
    more: {
      title: "While you’re here",
      cards: [
        {
          href: "/how-we-work",
          icon: "architecture" as const,
          title: "How we work",
          body: "The eight stages behind every engagement.",
        },
        {
          href: "/work",
          icon: "custom" as const,
          title: "Our work",
          body: "Demonstration case studies in our standard format.",
        },
        {
          href: "/insights",
          icon: "design" as const,
          title: "Insights",
          body: "Practical notes, as we publish them.",
        },
      ],
      home: "Back to home",
    },
  },
};

export type ContactCopy = typeof contact;

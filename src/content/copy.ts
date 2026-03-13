/**
 * MagmaLink website copy.
 *
 * Edit this file to change any text on the site. All pages and the layout
 * pull from here, so you only need to update one place.
 *
 * Do not use em-dashes (—) in copy.
 */

export const copy = {
  // --- Site-wide ---
  siteName: "MagmaLink",
  email: "ezra.warren@magmalink.com",

  // --- Layout: Nav ---
  nav: {
    services: "Services",
    howWeWork: "How We Work",
    whyUs: "Why Us",
    faq: "FAQ",
    getInTouch: "Get in touch",
  },

  // --- Layout: Footer ---
  footer: {
    tagline: "Outreach systems built for sales teams to start more conversations with less effort.",
    location: "Based in the UK, serving teams globally.",
    quickLinks: "Quick Links",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    contact: "Contact",
    copyright: "All rights reserved.",
  },

  // --- Layout: Meta (default description for SEO/social) ---
  meta: {
    defaultDescription: "MagmaLink builds scalable outreach systems to enable sales teams to generate more customer conversations with less effort.",
  },

  // --- Home: Hero ---
  hero: {
    tools: ["Clay", "Smartlead", "Instantly", "Cursor", "Claude Code"],
    headlineLine1: "Outreach. Simplified.",
    headlineLine2: "",
    subheadline: "We build outreach systems for sales teams to generate more customer conversations with less effort.",
    bullet1: "Reach ideal prospects at scale, without adding headcount.",
    bullet2: "Create a predictable flow of qualified meetings.",
    bullet3: "Less time spent on manual research & prospecting.",
    ctaPrimary: "Book a strategy call",
    ctaSecondary: "See how we work",
  },

  // --- Home: Logo bar ---
  logoBar: {
    label: "Trusted by growth-stage teams",
    placeholders: ["TechCorp", "ScaleUp", "GrowthCo", "PipelineLabs", "RevenueAI"],
  },

  // --- Home: Services (What We Build) ---
  services: {
    label: "What We Build",
    title: "Four systems to accelerate your GTM",
    subtitle: "Installed for you, or managed by us. We flex our approach to suit your needs.",
    outboundEngine: {
      title: "Outbound Engine",
      bullets: [
        "Land in your ICP's primary inbox with infrastructure built for scale",
        "Build qualified, segmented prospect lists enriched with buyer signals",
        "Send personalized messaging that resonates with your target customers",
      ],
    },
    outboundMultiChannel: {
      title: "Multi-Channel",
      bullets: [
        "Automate LinkedIn connection requests and messages",
        "Orchestrate multi-channel sequences to maximize response rates",
        "Perform custom actions on LinkedIn at scale",
      ],
    },
    revOpsWorkflow: {
      title: "RevOps Optimized",
      bullets: [
        "Accelerate speed-to-lead with intelligent scoring and Slack alerts",
        "Auto-research target accounts before calls with key notes and actions",
        "Refresh stale CRM data and enrich with additional data points",
        "Get advanced RevOps insights via dashboards and activity breakdowns",
      ],
    },
    aiEnablement: {
      title: "AI Enablement",
      bullets: [
        "Discover ways to embed AI and automation into your GTM processes",
        "Master the art of prompting LLMs effectively while minimizing risk",
        "Get started with AI IDEs like Cursor and Claude Code to 10x productivity",
      ],
    },
  },

  // --- Home: How We Work ---
  howWeWork: {
    label: "How We Work",
    title: "From kickoff to live system in 4-6 weeks",
    steps: [
      {
        title: "Discovery & Strategy",
        bullets: [
          "Audit your current GTM stack, data, and outbound motion",
          "Define ICP, TAM, and priority segments",
          "Clarify positioning, messaging, and differentiation",
        ],
        outcome: "A clear outbound strategy tied to revenue, not activity.",
      },
      {
        title: "Infrastructure Setup",
        bullets: [
          "Build dedicated outreach domains and inboxes at scale",
          "Configure SPF, DKIM, DMARC for deliverability",
          "Connect and warm inboxes inside outreach platforms",
        ],
        outcome: "Infrastructure that can safely send at volume.",
      },
      {
        title: "List Building & Enrichment",
        bullets: [
          "Source and qualify prospects using AI-driven filtering",
          "Enrich and verify emails via waterfall enrichment",
          "Layer in firmographic and intent signals",
        ],
        outcome: "Clean, relevant lists your ICP actually responds to.",
      },
      {
        title: "Messaging & Campaign Launch",
        bullets: [
          "Create personalised email (and LinkedIn) sequences",
          "Load campaigns into outreach platforms",
          "Launch and monitor initial performance",
        ],
        outcome: "Conversations started, not just emails sent.",
      },
      {
        title: "Lead Routing & Optimisation",
        bullets: [
          "Route replies and book qualified meetings",
          "Track deliverability, reply rates, and conversions",
          "Sync outcomes back to CRM",
        ],
        outcome: "A measurable, predictable pipeline.",
      },
      {
        title: "Iterate & Scale",
        bullets: [
          "Review results and refine targeting or messaging",
          "Scale what's working",
          "Keep the outbound engine running",
        ],
        outcome: "A repeatable GTM system, not a one-off campaign.",
      },
    ],
  },

  // --- Home: Why MagmaLink (comparison) ---
  whyUs: {
    label: "Why MagmaLink",
    title: "Not another agency. Not another tool.",
    us: {
      title: "MagmaLink",
      item1: "Systems you own. We build it, hand it over, you keep it forever.",
      item2: "Research-first copy. Signals and triggers, not generic templates.",
      item3: "AI-native. We use Cursor and Claude Code daily.",
      item4: "Flexible engagement. Agency or advisory, your choice.",
    },
    them: {
      title: "Typical Agencies",
      item1: "Monthly retainer for access to their tools",
      item2: "Cookie-cutter templates with merge tags",
      item3: "Spray-and-pray volume without strategy",
      item4: "Locked into their platform, can't leave",
    },
  },

  // --- Home: Case studies placeholder ---
  caseStudies: {
    label: "Results",
    title: "Case studies coming soon",
    subtitle: "We're working with our first clients now. Check back for detailed results.",
    metric1: "meetings booked",
    metric2: "pipeline generated",
    metric3: "hours saved",
  },

  // --- Home: Tools ---
  tools: {
    label: "Our Stack",
    title: "Common tools used in our GTM systems",
    clay: { name: "Clay", tag: "Enrichment" },
    smartlead: { name: "Smartlead", tag: "Email" },
    instantly: { name: "Instantly", tag: "Email" },
    n8n: { name: "N8N", tag: "Automation" },
    cursor: { name: "Cursor", tag: "Orchestration" },
    claude: { name: "Claude Code", tag: "Workflow Dev" },
    heyreach: { name: "Heyreach", tag: "LinkedIn Outreach" },
    apollo: { name: "Apollo", tag: "Prospecting" },
    hubspot: { name: "HubSpot", tag: "CRM" },
    salesNavigator: { name: "Sales Navigator", tag: "Prospecting" },
    apify: { name: "Apify", tag: "Scrapers" },
    prospeo: { name: "Prospeo", tag: "Enrichment" },
  },

  // --- Home: AI & LLMs (separate subsection under tools) ---
  llms: {
    label: "AI & LLMs",
    openai: { name: "OpenAI", tag: "Basic Tasks" },
    claude: { name: "Claude", tag: "Code & Copy" },
    gemini: { name: "Gemini", tag: "Image Generation" },
    perplexity: { name: "Perplexity", tag: "Research" },
  },

  // --- Home: FAQ ---
  faq: {
    label: "FAQ",
    title: "Frequently asked questions",
    q1: "What does MagmaLink actually do?",
    a1: "We build outreach systems for B2B sales teams. That means setting up the infrastructure, data, messaging, and workflows your team needs to reach target prospects at scale and book qualified meetings consistently.",
    q2: "How is this different from hiring an outreach agency?",
    a2: "Most agencies run campaigns and retain control of everything. We build systems designed to work for your team, whether we run them for you or hand ownership over completely. You keep the infrastructure, lists, workflows, and copy. No lock-in either way.",
    q3: "How quickly will we see results?",
    a3: "Most clients are live with campaigns within 4-6 weeks of kickoff. Early replies typically come in during week 3 or 4 as infrastructure warms up and initial sequences go out.",
    q4: "Do we need a technical team to manage this?",
    a4: "No. We build with simplicity in mind and hand over full documentation. If you have someone who owns GTM or sales ops, even part-time, that is enough. We train them on everything we build.",
    q5: "Who is MagmaLink best suited for?",
    a5: "B2B companies with a defined target market but inconsistent pipeline. Typically sales teams of 3 to 30 people who want a repeatable outbound motion without scaling headcount.",
  },

  // --- Home: Final CTA ---
  finalCta: {
    title: "Ready to start more conversations with less effort?",
    subtitle: "Book a strategy call. We'll review your current tools & processes and show you exactly what works for our clients.",
    button: "Book a strategy call",
  },

  // --- Contact page ---
  contact: {
    title: "Contact",
    pageTitle: "Let's talk.",
    subtitle: "Fill out the form below and we'll get back to you within one business day.",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Work email",
      emailPlaceholder: "you@company.com",
      company: "Company",
      companyPlaceholder: "Your company name",
      message: "How can we help?",
      messagePlaceholder: "Tell us about your goals, challenges, and what you're looking for...",
      submit: "Send message",
      privacyNote: "By submitting this form, you agree to our",
      privacyLink: "Privacy Policy",
    },
    emailIntro: "Prefer email? Reach out directly at",
  },
} as const;

export type Copy = typeof copy;

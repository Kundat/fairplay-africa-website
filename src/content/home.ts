export const home = {
  cta: { getStarted: "Get Started", book: "Book Assisted Onboarding" },
  nav: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Platform", href: "#platform" },
    { label: "Who it is for", href: "#audience" },
    { label: "Academy", href: "#academy" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    eyebrow: "FairPlay Africa · Built for African creators",
    headline: { pre: "Your creativity deserves ", accent: "protection." },
    sub: "Register your work, protect it with invisible watermarking and fingerprinting, and know where it appears online. One trusted home for African creators and filmmakers.",
    videoLink: "Watch how it works",
    tagline: "Create. Own. Protect. Earn.",
    micro: "No long forms. We guide you every step.",
    passport: { chip: "Sample", title: "Sample Film", rows: [
      { label: "Registered", status: "done" },
      { label: "Fingerprint generated", status: "done" },
      { label: "Monitoring active", status: "active" },
    ], footer: "Sample data" },
  },
  proof: { line: "Winner, Africa Creative Hackathon", sub: "Protecting African creativity." },
  problem: {
    label: "The problem",
    headline: { pre: "Piracy is a ", accent: "distribution system.", post: " Creators were left without the infrastructure to answer it." },
    points: [
      "Films surface on messaging channels and unofficial sites within hours of release.",
      "Many creators learn about reposts from fans or friends, not from a system.",
      "Production teams check platform after platform by hand.",
      "Most tools stop at takedowns. Creators also need visibility, ownership records and a path to earning.",
    ],
    sources: ["Video sites", "Messaging channels", "Social pages", "Streaming sites"],
  },
  how: {
    headline: { pre: "From upload to protection in ", accent: "five steps." },
    steps: [
      { n: "01", icon: "UserCheck", title: "Verify", text: "Confirm who you are and what you own." },
      { n: "02", icon: "FileCheck2", title: "Register", text: "Upload your work and receive a unique Content ID." },
      { n: "03", icon: "Fingerprint", title: "Protect", text: "A digital fingerprint and invisible watermark are applied." },
      { n: "04", icon: "Radar", title: "Monitor", text: "Supported platforms are watched for possible unauthorised copies." },
      { n: "05", icon: "LifeBuoy", title: "Respond", text: "Review the evidence and choose your next step, with FairPlay beside you." },
    ],
  },
  audience: {
    headline: { pre: "Built for the way ", accent: "you create." },
    cards: [
      { category: "filmmaker", icon: "Clapperboard", title: "Filmmakers and Production Companies", headline: "We walk you through it.", text: "Assisted onboarding, ownership documentation, film registration, monitoring and takedown support, with a team behind you.", cta: "Book Assisted Onboarding", track: "audience_filmmaker" },
      { category: "creator", icon: "Video", title: "Content Creators", headline: "Protect your work in minutes.", text: "A guided, mobile-friendly setup. Build your creator profile, register your videos and learn your rights as you go.", cta: "Get Started", track: "audience_creator" },
      { category: "organisation", icon: "Building2", title: "Creative Organisations", headline: "One workspace. Your whole team.", text: "Organisation accounts, role-based access and reporting for film schools, agencies, distributors and cinemas.", cta: "Talk to Our Team", track: "audience_organisation" },
    ],
  },
  platform: {
    headline: { pre: "One home for protecting and managing ", accent: "your work." },
    items: [
      { icon: "BadgeCheck", title: "Creator ID", text: "Your verified identity and unique @username." },
      { icon: "ShieldCheck", title: "Content Shield", text: "Registration, fingerprinting and invisible watermarking." },
      { icon: "Radar", title: "Watchtower", text: "Monitoring of supported platforms, with clear status." },
      { icon: "Scale", title: "Rights Desk", text: "Evidence, cases and takedown support in one place." },
      { icon: "FileBadge", title: "Content Passport", text: "A clear record of each work and its protection history." },
      { icon: "Lock", title: "Secure Vault", text: "Encrypted storage for originals, agreements and evidence." },
      { icon: "MessageCircle", title: "FairPlay Assistant", text: "Ask anything. Chat with a real person when you need one." },
      { icon: "GraduationCap", title: "Creator Academy", text: "Copyright, ownership and licensing in plain language." },
    ],
    smallPrint: ["Monitoring covers supported platforms, which are expanding.", "The FairPlay Registration Certificate records your registration and declarations on FairPlay. It is not a government-issued copyright certificate."],
  },
  difference: {
    headline: { pre: "Technology with ", accent: "people", post: " behind it." },
    items: [
      { title: "Human-assisted", text: "Real onboarding support for filmmakers, in person or virtual." },
      { title: "Evidence-led", text: "AI finds possible matches. Trained reviewers verify them before you are alerted." },
      { title: "Honest by design", text: "We tell you what the technology can and cannot do, and show what is actively monitored." },
      { title: "Built for Africa", text: "Mobile-first, bandwidth-aware, and designed around how African creators work." },
    ],
  },
  academy: {
    headline: { pre: "Know your rights. ", accent: "Own your work." },
    topics: ["Understanding Copyright", "Digital Piracy", "Content Protection", "Licensing and Monetisation", "Protecting Your Creative Business"],
    didYouKnow: { label: "Did you know?", prompt: "Does uploading a video to social media transfer your copyright to the platform?", answer: "No. Uploading a video does not automatically transfer your copyright to the platform." },
    cta: "Explore the Academy",
  },
  trust: {
    headline: { pre: "Your work is handled like it matters. ", accent: "Because it does." },
    points: ["Files are never public by default.", "Encryption in transit and at rest.", "Role-based access and audit logs.", "Ownership verified before any enforcement action.", "Built with Nigeria Data Protection Act requirements in mind."],
  },
  pricing: {
    headline: { pre: "Plans that fit how you ", accent: "create." },
    tiers: [
      { name: "Starter", forWho: "Creators getting started", text: "Profile, limited registration, learning resources." },
      { name: "Growth", forWho: "Regular publishers", text: "Expanded monitoring and reports." },
      { name: "Pro", forWho: "Larger libraries", text: "Higher capacity and priority support." },
      { name: "Studio / Enterprise", forWho: "Filmmakers and organisations", text: "Team workspace, bulk registration, dedicated support." },
    ],
    levels: [
      { name: "Tracking Only", text: "Monitoring, reports and evidence." },
      { name: "Tracking + Takedown Support", text: "Adds help with documentation and platform reporting where supported and authorised." },
    ],
    note: "Filmmakers get packages tailored to their films and distribution. Book a conversation.",
    cta: "Get a recommended plan",
  },
  story: {
    missionLabel: "Our mission",
    mission: "To protect and empower creators through structured content ownership verification, piracy tracking, digital rights management, and monetization infrastructure.",
    visionLabel: "Our vision",
    vision: "To become Africa's leading infrastructure for content protection, piracy intelligence, digital rights management, and creator monetization.",
    pillars: [
      { label: "Vigilant", text: "Secure, precise, trusted asset tracking." },
      { label: "Empowering", text: "Fair compensation, so creators get the full value of their craft." },
      { label: "Minimalist", text: "Clean functionality, with no unnecessary clutter." },
    ],
  },
  finalCta: { headline: { pre: "Create. Own. Protect. ", accent: "Earn." }, sub: "Turning piracy into protection and revenue for creators." },
  footer: {
    line: "Protecting African creativity.",
    columns: [
      { title: "Product", links: [{ label: "How it works", href: "#how-it-works" }, { label: "Platform", href: "#platform" }, { label: "Pricing", href: "#pricing" }] },
      { title: "Learn", links: [{ label: "Academy", href: "#academy" }, { label: "FAQ", href: "#faq" }] },
      { title: "Legal", links: [{ label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }] },
    ],
    disclaimer: "FairPlay is a technology-enabled rights-protection platform. It does not provide legal advice and does not guarantee outcomes.",
    copyright: "FairPlay Africa Limited",
  },
} as const;

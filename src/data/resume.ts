export const personalInfo = {
  name: "Awais Shafique",
  initials: "AS",
  role: "Full-Stack & Mobile App Developer",
  focus: "Blockchain & Web3 · AI-Integrated Systems",
  location: "Faisalabad, Pakistan",
  email: "awaisshafique448@gmail.com",
  phone: "+92 307 9398190",
  website: "https://cryptocurrencychain.net",
  websiteLabel: "cryptocurrencychain.net",
  githubs: [
    { username: "iamawais123", url: "https://github.com/iamawais123" },
    { username: "awaisdevelops", url: "https://github.com/awaisdevelops" },
  ],
  summary:
    "BS Software Engineering graduate (CGPA: 3.0, 2026) from National Textile University, Faisalabad, and founder of SoftWeb Technologies, a software house delivering websites, mobile apps, and custom platforms for clients. Also the solo founder of CryptocurrencyChain and vSellerStore — two live production SaaS platforms — with a track record spanning real-time trading systems, multi-vendor e-commerce, and AI-powered healthcare tooling.",
  resumeFile: "/Awais-Shafique-Resume.pdf",
};

export const quickFacts = [
  { label: "Based in", value: "Faisalabad, Pakistan" },
  { label: "Graduating", value: "2026 · BS Software Engineering" },
  { label: "Focus", value: "Full-Stack, Mobile & Web3" },
  { label: "Open to", value: "Client projects, internships & new-grad roles" },
];

export const softwareHouse = {
  name: "SoftWeb Technologies",
  tagline: "Web, mobile & custom software — designed, built, and shipped.",
  description:
    "SoftWeb Technologies is my software house: we take client projects from idea to a live product — websites, mobile apps, e-commerce platforms, and custom software across virtually any domain.",
  whatsapp: {
    number: "+92 307 9398190",
    href: "https://wa.me/923079398190?text=Hi%20SoftWeb%20Technologies%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  },
  services: [
    {
      title: "Web Development",
      description:
        "Custom websites, dashboards, and full-stack web apps — built end to end and shipped to production.",
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform iOS & Android apps built with Flutter, backed by Firebase for auth, real-time data, and push notifications.",
    },
    {
      title: "E-Commerce & Multi-Vendor Platforms",
      description:
        "Online stores, seller dashboards, and multi-vendor SaaS platforms with secure checkout and admin tooling.",
    },
    {
      title: "Blockchain & AI-Integrated Systems",
      description:
        "Wallet integrations, real-time trading systems, and AI-powered features using LangChain and modern LLM pipelines.",
    },
    {
      title: "Custom Software & Beyond",
      description:
        "Have something outside the usual mould? We scope and build across domains — get in touch and let's talk specifics.",
    },
  ],
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Dart", "Python", "HTML5", "CSS3", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["React.js (Vite)", "Next.js", "Node.js", "Express.js", "Flutter", "FastAPI", "LangChain", "Tailwind CSS"],
  },
  {
    category: "Blockchain & Web3",
    items: ["MetaMask", "Trust Wallet", "WalletConnect", "Multi-chain wallet APIs", "Real-time crypto feeds", "Live trading systems"],
  },
  {
    category: "Backend & Database",
    items: ["Firebase (Firestore, Auth, Storage, FCM)", "MongoDB", "REST API design", "Async/await patterns"],
  },
  {
    category: "Tools & Practices",
    items: ["Git & GitHub", "Postman", "VS Code", "Android Studio", "Agile/Scrum", "SaaS architecture", "CI/CD", "OOP & SOLID"],
  },
];

export type Experience = {
  role: string;
  org: string;
  meta: string;
  period: string;
  live?: { label: string; href: string };
  bullets: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Founder & Lead Developer",
    org: "CryptocurrencyChain",
    meta: "Self-Founded SaaS · Faisalabad, Pakistan",
    period: "Jan 2024 — Present",
    live: { label: "cryptocurrencychain.net", href: "https://cryptocurrencychain.net" },
    tags: ["React (Vite)", "Node.js", "Firebase", "Wallet APIs"],
    bullets: [
      "Architected and launched a full-stack crypto trading platform — live at cryptocurrencychain.net with real users and transactions.",
      "Multi-wallet integration: MetaMask, Trust Wallet, WalletConnect, and all major blockchain chains with one-click connect.",
      "Real-time live price feed and trade execution engine streaming market data with sub-second latency.",
      "Complete buy/sell trading flow: wallet-connected transaction signing, order confirmation, and live portfolio dashboard.",
      "Separate admin portal on a private domain for platform management, user oversight, analytics, and system monitoring.",
      "Designed a modular, multi-tenant, white-label-ready SaaS architecture for third-party licensing.",
      "Owned the full solo product lifecycle: planning, development, deployment, infrastructure, and continuous iteration.",
    ],
  },
  {
    role: "Software Developer Intern",
    org: "Safi Dot Tech",
    meta: "Software Company · Faisalabad, Pakistan",
    period: "Jun 2025 — Sep 2025",
    tags: ["Flutter", "Firebase", "Firestore"],
    bullets: [
      "Built cross-platform Flutter apps for live clients — UI screens, Firebase Authentication, Firestore, Provider state management.",
      "Delivered a School Management SaaS: a multi-school platform for students, teachers, attendance, scheduling, and fees.",
      "Designed a multi-tenant Firestore architecture with per-school data isolation and role-based access (Admin / Teacher / Student).",
      "Practiced Git workflows, code reviews, and Agile sprints, with structured project handover under real deadlines.",
    ],
  },
  {
    role: "Independent Developer",
    org: "Personal Projects",
    meta: "Flutter · React.js · Firebase · FastAPI · MERN",
    period: "Jan 2023 — Present",
    tags: ["Flutter", "FastAPI", "LangChain", "MERN"],
    bullets: [
      "HemoHeal: AI blood donation & thalassemia platform (Flutter, FastAPI, Firebase, LangChain) with intelligent donor-recipient matching and natural-language query handling.",
      "Meal Planner: cross-platform iOS & Android app with Firebase sync, nutrition tracking, automated shopping lists, and FCM push notifications.",
      "MERN E-Commerce Suite: two stores with JWT auth, cart, Stripe-ready checkout, admin panel, and a ~35% React bundle size reduction.",
    ],
  },
];

export type Project = {
  title: string;
  period: string;
  description: string;
  tags: string[];
  links: { label: string; href: string; icon: "external" | "github" }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "CryptocurrencyChain",
    period: "2024 — Present",
    description:
      "A production crypto trading SaaS: real-time trading engine, all-wallet connect, buy/sell flow, live portfolio dashboard, dedicated admin portal, and white-label infrastructure for licensing.",
    tags: ["React (Vite)", "Node.js", "Firebase", "Multi-Wallet APIs", "SaaS"],
    links: [{ label: "Live Site", href: "https://cryptocurrencychain.net", icon: "external" }],
    featured: true,
  },
  {
    title: "vSellerStore",
    period: "2025 — Present",
    description:
      "A live multi-vendor e-commerce SaaS platform connecting three products in one system: a customer storefront to shop, a seller store with its own admin dashboard to manage products and orders, and a super admin dashboard to oversee and onboard sellers platform-wide.",
    tags: ["React", "Firebase", "Multi-vendor SaaS", "Admin Dashboards"],
    links: [{ label: "Live Site", href: "https://vsellerstore.com", icon: "external" }],
    featured: true,
  },
  {
    title: "HemoHeal",
    period: "2024",
    description:
      "AI-powered blood donation & thalassemia platform. Donor-recipient matching by blood type and location, a LangChain natural-language query pipeline, thalassemia patient management, and an async FastAPI backend. NTU capstone project.",
    tags: ["Flutter", "FastAPI", "Firebase", "LangChain"],
    links: [{ label: "GitHub", href: "https://github.com/iamawais123", icon: "github" }],
  },
  {
    title: "School Management System SaaS",
    period: "2025",
    description:
      "Multi-school SaaS covering enrollment, teacher management, scheduling, attendance, and fees, with three-role RBAC and isolated Firestore data per school. Built during the Safi Dot Tech internship.",
    tags: ["Flutter", "Firebase Firestore", "Multi-tenant", "RBAC"],
    links: [{ label: "GitHub", href: "https://github.com/iamawais123", icon: "github" }],
  },
  {
    title: "E-Commerce Platform Suite",
    period: "2023",
    description:
      "Two full-stack stores (laptops & shoes) with JWT auth, product search, cart, Stripe-ready checkout, and an admin dashboard, plus a lazy-loaded React frontend achieving a ~35% bundle size reduction.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    links: [{ label: "GitHub", href: "https://github.com/iamawais123", icon: "github" }],
  },
];

export const achievements = [
  {
    title: "Founder of a Software House",
    description:
      "Founded SoftWeb Technologies, delivering client websites, mobile apps, e-commerce platforms, and custom software from scoping through to launch.",
  },
  {
    title: "Founder of a Live Production SaaS",
    description:
      "Founded CryptocurrencyChain — live at cryptocurrencychain.net — with full product ownership from architecture to deployment as solo founder.",
  },
  {
    title: "Founder of a Second Live SaaS Platform",
    description:
      "Built and launched vSellerStore — live at vsellerstore.com — a multi-vendor e-commerce SaaS connecting a customer store, seller admin dashboards, and a super admin platform for seller management.",
  },
  {
    title: "Shipped an Internship SaaS in 4 Months",
    description:
      "Independently scoped, built, and shipped a complete School Management SaaS to production during a 4-month internship at Safi Dot Tech.",
  },
  {
    title: "Early LangChain/LLM Adopter at NTU",
    description:
      "Among the first NTU students to integrate LangChain and LLM pipelines into a live project — HemoHeal was recognised in academic review for its AI integration.",
  },
  {
    title: "Active Technical Interview Prep",
    description:
      "Active LeetCode DSA practice, preparing for technical interviews at top-tier technology companies.",
  },
];

export const education = {
  degree: "BS Software Engineering",
  school: "National Textile University",
  meta: "Faculty of Computer Science · Manawala, Faisalabad, Pakistan",
  period: "2022 — 2026",
  gpa: "CGPA: 3.0 / 4.0",
  details:
    "Graduated 2026 — specialisation in mobile & web development, software engineering, and AI-integrated systems.",
  coursework: [
    "Data Structures & Algorithms",
    "Software Requirements Engineering",
    "Quality Assurance",
    "Database Systems",
    "Mobile Development",
    "HCI",
    "Complex Adaptive Systems",
  ],
  capstone:
    "HemoHeal — AI blood donation & thalassemia platform (Flutter, FastAPI, Firebase, LangChain), supervised by Dr. Isma Hamid, NTU.",
};

export const languages = [
  { name: "Urdu", level: "Native / Fluent" },
  { name: "English", level: "Proficient — B2+ (technical reading, writing & speaking)" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

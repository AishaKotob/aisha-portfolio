export interface FrontendCraftItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyAspects: string[];
  techPills: string[];
  iconName: string;
  metricLabel?: string;
}

export interface TechnicalBreadthGroup {
  category: string;
  headline: string;
  description: string;
  skills: { name: string; context: string }[];
}

export interface SkillNode {
  id: string;
  name: string;
  level: "primary-frontend" | "secondary-tech" | "core-hub";
  category: "frontend" | "backend" | "mobile" | "ai-data";
  relatedProjects: string[]; // project slugs/ids
}

export const frontendCraftItems: FrontendCraftItem[] = [
  {
    id: "responsive-interfaces",
    title: "Responsive Interfaces",
    subtitle: "Fluid layouts across viewport extremes",
    description:
      "Crafting layouts that adapt naturally across phone, tablet, desktop, and ultra-wide screens without fragile pixel-snapping or broken breakpoints.",
    keyAspects: [
      "Mobile-first fluid architecture",
      "CSS Grid & Flexbox mastery",
      "Touch target optimization",
      "Zero horizontal overflow assurance",
    ],
    techPills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Modern CSS"],
    iconName: "Smartphone",
    metricLabel: "Adaptive Ergonomics",
  },
  {
    id: "component-engineering",
    title: "Component Engineering",
    subtitle: "Reusable patterns with strict contracts",
    description:
      "Architecting clean, modular component structures with predictable props, defensive state encapsulation, and design system consistency.",
    keyAspects: [
      "Atomic design hierarchy",
      "Strict TypeScript typings",
      "Polymorphic component patterns",
      "Zero code duplication",
    ],
    techPills: ["TypeScript", "React", "Next.js", "Component Architecture"],
    iconName: "Layers",
    metricLabel: "Modular Systems",
  },
  {
    id: "ui-debugging",
    title: "UI Debugging",
    subtitle: "Root-cause diagnostics for complex UI states",
    description:
      "Pinpointing subtle CSS stacking context issues, render cascades, race conditions in asynchronous states, and cross-browser rendering quirks.",
    keyAspects: [
      "DOM & DevTools forensic analysis",
      "Re-render waterfall elimination",
      "State desynchronization fixes",
      "Cross-browser quirk mitigation",
    ],
    techPills: ["Chrome DevTools", "React Profiler", "TypeScript", "Frontend QA"],
    iconName: "SearchCode",
    metricLabel: "Forensic Analysis",
  },
  {
    id: "api-integration",
    title: "API Integration",
    subtitle: "Bridging interface delight with backend truth",
    description:
      "Connecting user interfaces to RESTful and asynchronous backends with defensive caching, optimistic UI updates, and clear error boundaries.",
    keyAspects: [
      "Type-safe REST client contracts",
      "Optimistic UI updates",
      "Graceful degradation on network drop",
      "Form error mapping",
    ],
    techPills: ["REST APIs", "Fetch / Axios", "JSON Parsing", "Async Handlers"],
    iconName: "Network",
    metricLabel: "Resilient Endpoints",
  },
  {
    id: "testing-quality",
    title: "Testing & Quality",
    subtitle: "Verifying user flows before production deployment",
    description:
      "Validating functional user paths, form validations, responsive viewports, and edge cases to ensure zero regressions reach users.",
    keyAspects: [
      "User journey functional testing",
      "Form validation stress tests",
      "Technical testing report generation",
      "Accessibility & keyboard tab order",
    ],
    techPills: ["Manual & Functional QA", "Testing Reports", "WAI-ARIA", "Issue Triage"],
    iconName: "CheckCircle2",
    metricLabel: "Flawless Releases",
  },
  {
    id: "performance-ux",
    title: "Performance & UX",
    subtitle: "Perceived speed and tangible interaction polish",
    description:
      "Optimizing Core Web Vitals, asset loading hierarchies, micro-interactions, and visual feedback so applications feel instant and alive.",
    keyAspects: [
      "Cumulative Layout Shift (CLS) reduction",
      "First Contentful Paint (FCP) tuning",
      "Micro-interactions & tactile feedback",
      "Asset & font preloading strategies",
    ],
    techPills: ["Web Vitals", "Lighthouse", "Three.js Optimization", "Anime.js"],
    iconName: "Gauge",
    metricLabel: "Sub-second UX",
  },
];

export const technicalBreadthGroups: TechnicalBreadthGroup[] = [
  {
    category: "Backend Services",
    headline: "Server-side logic and robust API gateways",
    description:
      "Building practical server layers that supply clean, authenticated data to frontend clients.",
    skills: [
      { name: "Node.js", context: "Server runtimes & CLI tooling" },
      { name: "Express.js", context: "RESTful endpoints & custom middleware" },
      { name: "Laravel", context: "Full-featured PHP framework for APIs" },
      { name: "PHP", context: "Server scripts & database connectors" },
      { name: "REST APIs", context: "HTTP status conventions, JSON schemas" },
      { name: "FastAPI", context: "High-performance Python microservices" },
    ],
  },
  {
    category: "Data & Storage",
    headline: "Structured schemas and relational consistency",
    description:
      "Modeling data layers to store, index, and query application records securely.",
    skills: [
      { name: "MongoDB Atlas", context: "Document data, flexible collections" },
      { name: "MySQL", context: "Relational modeling, foreign keys, indexes" },
      { name: "SQL", context: "Queries, joins, aggregations, procedures" },
    ],
  },
  {
    category: "Mobile Engineering",
    headline: "Cross-platform mobile client development",
    description:
      "Extending user interfaces natively into the mobile phone ecosystem.",
    skills: [
      { name: "Flutter", context: "Cross-platform reactive widget architecture" },
      { name: "Dart", context: "Strongly typed object-oriented mobile code" },
      { name: "Mobile Ergonomics", context: "Thumb zones, drawer transitions, offline handling" },
    ],
  },
  {
    category: "AI & Data Engineering",
    headline: "Machine learning integration and data intelligence",
    description:
      "Connecting frontend interfaces to predictive models and data analytics.",
    skills: [
      { name: "Python", context: "Data manipulation, inference pipelines" },
      { name: "scikit-learn", context: "Random Forest, regression, classification" },
      { name: "Pandas & NumPy", context: "Dataset cleaning, normalization, reshaping" },
      { name: "Matplotlib & Chart.js", context: "Visualizing analytics, metrics, trends" },
      { name: "ML Model Serving", context: "Connecting client UI to live predictions" },
    ],
  },
];

export const skillConstellationNodes: SkillNode[] = [
  // Primary Frontend Hubs (Larger, brighter, central)
  {
    id: "react",
    name: "React.js",
    level: "primary-frontend",
    category: "frontend",
    relatedProjects: ["hynx-trading", "elevvo-frontend", "freelance-developer", "municipality-portal"],
  },
  {
    id: "nextjs",
    name: "Next.js",
    level: "primary-frontend",
    category: "frontend",
    relatedProjects: ["municipality-portal", "hynx-trading"],
  },
  {
    id: "vue",
    name: "Vue.js",
    level: "primary-frontend",
    category: "frontend",
    relatedProjects: ["freelance-developer"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    level: "primary-frontend",
    category: "frontend",
    relatedProjects: ["municipality-portal", "hynx-trading"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    level: "primary-frontend",
    category: "frontend",
    relatedProjects: ["qanz-academy", "car-showroom-ml", "hynx-trading", "elevvo-frontend", "freelance-developer"],
  },
  {
    id: "responsive-ui",
    name: "Responsive UI",
    level: "primary-frontend",
    category: "frontend",
    relatedProjects: ["qanz-academy", "municipality-portal", "car-showroom-ml", "job-finder-app", "hynx-trading", "elevvo-frontend"],
  },
  // Secondary Ring (Backend, Mobile, ML)
  {
    id: "nodejs",
    name: "Node.js",
    level: "secondary-tech",
    category: "backend",
    relatedProjects: ["qanz-academy", "car-showroom-ml", "freelance-developer"],
  },
  {
    id: "laravel",
    name: "Laravel",
    level: "secondary-tech",
    category: "backend",
    relatedProjects: ["municipality-portal"],
  },
  {
    id: "mongodb",
    name: "MongoDB",
    level: "secondary-tech",
    category: "backend",
    relatedProjects: ["qanz-academy", "freelance-developer"],
  },
  {
    id: "mysql",
    name: "MySQL",
    level: "secondary-tech",
    category: "backend",
    relatedProjects: ["municipality-portal", "car-showroom-ml", "job-finder-app", "freelance-developer"],
  },
  {
    id: "flutter",
    name: "Flutter",
    level: "secondary-tech",
    category: "mobile",
    relatedProjects: ["job-finder-app"],
  },
  {
    id: "python-ml",
    name: "Python / ML",
    level: "secondary-tech",
    category: "ai-data",
    relatedProjects: ["car-showroom-ml", "eflow-fellowship"],
  },
];

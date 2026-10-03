export type ProjectMedia = {
  id: string;
  type: "image" | "video" | "mobile" | "browser" | "long-page" | "diagram";
  src: string;
  alt: string;
  caption?: string;
  layout?: "hero" | "wide" | "half" | "phone" | "portrait" | "full";
  role?: string;
  feature?: string;
};

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: "founder" | "fullstack" | "ml-frontend" | "mobile" | "internship" | "commercial";
  badge: "LIVE" | "IN DEVELOPMENT" | "UNIVERSITY PROJECT" | "PROFESSIONAL WORK" | "INTERNSHIP WORK";
  typeLabel: string;
  period: string;
  featured: boolean;
  order: number;
  url?: string;
  githubUrl?: string;
  shortSummary: string;
  headline: string;
  
  // PRIMARY: Frontend / Product Contribution (Shown first, prominent)
  frontendContribution: {
    title: string;
    summary: string;
    highlights: string[];
    interfaces: string[];
  };

  // SECONDARY: Supporting System / Architecture
  supportingSystem: {
    title: string;
    summary: string;
    architectureNotes: string[];
    stack: string[];
  };

  technologies: {
    primaryFrontend: string[];
    supportingBackend: string[];
  };

  media: ProjectMedia[];
}

export const projectsData: Project[] = [
  {
    id: "qanz-academy",
    slug: "qanz-academy",
    title: "Qanz Academy",
    badge: "LIVE",
    typeLabel: "FOUNDER · FRONTEND / FULL-STACK PRODUCT",
    category: "founder",
    period: "2025 — PRESENT",
    featured: true,
    order: 1,
    url: "https://www.qanzacademy.online",
    githubUrl: "https://github.com/AishaKotob",
    shortSummary:
      "An online education platform founded and developed by Aisha for academic and technology courses.",
    headline:
      "A complete learning experience connecting students, course offerings, and administrative operations.",
    frontendContribution: {
      title: "Product Experience & Frontend Engineering",
      summary:
        "As founder and engineer, Aisha led the product design and responsive frontend implementation, delivering an intuitive course catalog, interactive booking flows, dynamic student dashboards, and a streamlined back-office administration suite.",
      highlights: [
        "Architected responsive course discovery interfaces with smooth client-side filtering and category browsing.",
        "Built responsive registration, student onboarding, and dynamic service presentation journeys.",
        "Engineered administrative dashboards for real-time course catalog updates, enrollment tracking, and student communication.",
        "Optimized layout shifts and font rendering for fast first contentful paint across varying device viewports.",
        "Designed accessible form validations and feedback states for booking inquiries and student support."
      ],
      interfaces: [
        "Student Course Discovery & Exploration Portal",
        "Interactive Service Inquiry & Registration Flow",
        "Administrative Course & Enrollment Control Suite",
        "Responsive Mobile Student Viewport"
      ],
    },
    supportingSystem: {
      title: "Supporting Architecture & Backend Services",
      summary:
        "Backed by a dependable Node.js/Express server and MongoDB Atlas data layer with automated transactional email triggers and security hardening.",
      architectureNotes: [
        "Node.js & Express RESTful routing with templated EJS rendering and modular middleware.",
        "MongoDB Atlas cloud cluster with robust schemas for courses, users, and session records.",
        "Email dispatch pipeline via Resend for automated registration and inquiry alerts.",
        "Production security configuration using Helmet, rate limiting, and secure cookie session controls.",
        "Continuous deployment workflow hosted on Render with GitHub integration."
      ],
      stack: ["Node.js", "Express.js", "EJS", "MongoDB Atlas", "Resend", "Helmet", "Render", "Git"]
    },
    technologies: {
      primaryFrontend: ["JavaScript", "EJS / HTML5", "Responsive CSS", "Dynamic DOM", "UI Debugging"],
      supportingBackend: ["Node.js", "Express.js", "MongoDB", "Resend API", "Render"]
    },
    media: [
      {
        id: "qanz-cover",
        type: "browser",
        src: "/media/aisha/qanz/qanz-home.svg",
        alt: "Qanz Academy Homepage Experience",
        caption: "Qanz Academy - Responsive Course Catalog and Student Landing Experience",
        layout: "hero",
        role: "Citizen/Student Public Portal",
        feature: "Landing & Exploration"
      },
      {
        id: "qanz-courses",
        type: "browser",
        src: "/media/aisha/qanz/qanz-courses.svg",
        alt: "Qanz Academy Courses Interface",
        caption: "Course Discovery & Academic Tracks View",
        layout: "wide",
        role: "Student Portal",
        feature: "Course Navigation"
      },
      {
        id: "qanz-admin",
        type: "browser",
        src: "/media/aisha/qanz/qanz-admin.svg",
        alt: "Qanz Academy Safe Administrative Dashboard",
        caption: "Sanitized Administration View - Course & Inquiry Management",
        layout: "half",
        role: "Administration Suite",
        feature: "Content Management"
      }
    ]
  },
  {
    id: "municipality-portal",
    slug: "municipality-portal",
    title: "Municipality Management Portal",
    badge: "IN DEVELOPMENT",
    typeLabel: "FRONTEND + FULL-STACK SYSTEM",
    category: "fullstack",
    period: "MAR 2026 — PRESENT",
    featured: true,
    order: 2,
    shortSummary:
      "Citizen-facing civic services and internal municipal workflow portal, undergoing active development towards public launch following successful local demonstration.",
    headline:
      "Digitizing civic engagement with streamlined citizen requests, appointment tracking, and role-based staff operations.",
    frontendContribution: {
      title: "Citizen & Employee Interface Engineering",
      summary:
        "Engineered the modern Next.js & TypeScript frontends for both public-facing citizen services and internal municipal staff operations, emphasizing clear visual hierarchy, multi-step accessibility, and resilient status tracking.",
      highlights: [
        "Crafted responsive Next.js citizen portal with self-service request submission, complaint filing, and appointment booking.",
        "Built dynamic multi-step form wizards with inline client validation, progress indicators, and instant document attachments.",
        "Developed internal employee operational queues with ticket triage, status progression, and citizen response tools.",
        "Designed accessible role-differentiated UI views (Citizen vs. Municipal Officer vs. Authorized Administrator).",
        "Implemented real-time request tracking cards with visual timelines showing review milestones."
      ],
      interfaces: [
        "Public Civic Services & Complaint Submission Portal",
        "Citizen Real-Time Status & Appointment Tracker",
        "Municipal Staff Workflow Queue & Ticket Detail Workspace",
        "Role-Based Audit & Activity Timeline UI"
      ],
    },
    supportingSystem: {
      title: "System Architecture & Backend Services",
      summary:
        "A decoupled Laravel REST API with relational MySQL database, granular role-based access control (RBAC), and immutable audit trail logging.",
      architectureNotes: [
        "Next.js App Router consuming structured Laravel 11 RESTful endpoints via typed clients.",
        "Relational MySQL schema modeling citizen dossiers, service categories, and ticket lifecycles.",
        "Role-Based Access Control (RBAC) enforcing data boundary isolation between citizen and administrative roles.",
        "Activity and audit logging preserving regulatory accountability for civic state transitions."
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Laravel REST API", "MySQL", "RBAC", "Audit Logging"]
    },
    technologies: {
      primaryFrontend: ["Next.js", "TypeScript", "React", "Tailwind CSS", "REST Integration", "Form UX"],
      supportingBackend: ["Laravel", "PHP", "MySQL", "REST API", "Role-Based Access"]
    },
    media: [
      {
        id: "municipality-citizen-home",
        type: "browser",
        src: "/media/aisha/municipality/municipality-citizen-home.svg",
        alt: "Municipality Citizen Services Portal",
        caption: "Citizen Portal - Service Catalog, Complaint Filing, and Appointment Scheduling",
        layout: "hero",
        role: "Public Citizen Surface",
        feature: "Civic Services"
      },
      {
        id: "municipality-request",
        type: "browser",
        src: "/media/aisha/municipality/municipality-request.svg",
        alt: "Citizen Interactive Request Submission",
        caption: "Multi-step Service Request Wizard with Real-time Validation",
        layout: "wide",
        role: "Citizen Surface",
        feature: "Request Wizard"
      },
      {
        id: "municipality-employee",
        type: "browser",
        src: "/media/aisha/municipality/municipality-employee.svg",
        alt: "Internal Municipal Staff Workspace",
        caption: "Sanitized Staff View - Ticket Queue and Citizen Application Processing",
        layout: "half",
        role: "Internal Operations",
        feature: "Staff Triage Queue"
      }
    ]
  },
  {
    id: "car-showroom-ml",
    slug: "car-showroom-ml",
    title: "Car Showroom + ML Intelligence",
    badge: "UNIVERSITY PROJECT",
    typeLabel: "SMART PRODUCT INTERFACE · ML INTEGRATION",
    category: "ml-frontend",
    period: "2025",
    featured: true,
    order: 3,
    shortSummary:
      "A modern automotive browsing showroom integrated with an intelligent machine learning interface for vehicle pricing and market demand prediction.",
    headline:
      "A smarter product interface where intuitive frontend design surfaces predictive machine learning insights.",
    frontendContribution: {
      title: "Interactive Prediction Experience & Showroom UI",
      summary:
        "Designed and built the showroom user interface and predictive dashboard, allowing car buyers and inventory managers to explore vehicles, simulate market pricing, and visualize customer demand curves in real time.",
      highlights: [
        "Built vehicle catalog with faceted multi-parameter filtering (make, model, year, fuel, transmission).",
        "Engineered the interactive ML evaluation playground: users tweak car specifications and watch live price estimation charts update smoothly.",
        "Integrated interactive Chart.js demand visualization showing historical confidence intervals and feature sensitivity.",
        "Created an integrated chatbot assistant assisting visitors with vehicle recommendations and specs lookup.",
        "Streamlined loading states, optimistic UI updates, and error boundaries for asynchronous ML inference calls."
      ],
      interfaces: [
        "Automotive Inventory Showroom & Filter Workspace",
        "Interactive Price Prediction Playground & Slider Controls",
        "Vehicle Market Demand Analytics Dashboard (Chart.js)",
        "Conversational Assistant Interface"
      ],
    },
    supportingSystem: {
      title: "Machine Learning Pipeline & Backend Engine",
      summary:
        "Trained Random Forest classification models on ~24,000 Kaggle vehicle records, served via high-performance FastAPI microservices connected to Node.js/Express.",
      architectureNotes: [
        "Data preprocessing, exploratory data analysis, and feature engineering across 24k Kaggle automotive dataset.",
        "Addressed severe class imbalance using Random Over Sampler (ROS) for balanced sensitivity.",
        "Trained and evaluated Random Forest models tracking Precision, Recall, F1 score, and feature importance rankings.",
        "FastAPI microservice exposing asynchronous Python inference endpoints to the Node/Express backend.",
        "Relational MySQL database storing inventory records, customer inquiries, and prediction logs."
      ],
      stack: ["Node.js", "Express.js", "FastAPI", "Python", "Random Forest", "scikit-learn", "MySQL", "Chart.js"]
    },
    technologies: {
      primaryFrontend: ["JavaScript", "Responsive UI", "Chart.js", "Async REST Integration", "Interactive Sliders"],
      supportingBackend: ["Python", "FastAPI", "scikit-learn", "Random Forest", "Node.js", "MySQL"]
    },
    media: [
      {
        id: "car-showroom-prediction",
        type: "browser",
        src: "/media/aisha/car-showroom/car-showroom-prediction.svg",
        alt: "Car Showroom ML Prediction Interface",
        caption: "Vehicle Discovery & Interactive Machine Learning Price Prediction Dashboard",
        layout: "hero",
        role: "Showroom Client Interface",
        feature: "ML Prediction & Catalog"
      }
    ]
  },
  {
    id: "job-finder-app",
    slug: "job-finder-app",
    title: "Job Finder Mobile App",
    badge: "UNIVERSITY PROJECT",
    typeLabel: "MOBILE APPLICATION · FLUTTER CLIENT",
    category: "mobile",
    period: "2024 — 2025",
    featured: true,
    order: 4,
    shortSummary:
      "A cross-platform mobile application providing seamless job discovery, multi-criteria filtering, and one-tap candidate applications.",
    headline:
      "Empowering job seekers with responsive mobile interaction, fluid transition states, and granular filter discovery.",
    frontendContribution: {
      title: "Mobile Interface & Interaction Engineering",
      summary:
        "Developed the complete mobile user interface in Flutter & Dart, prioritizing thumb-friendly ergonomics, smooth list-view virtualization, and tactile filter interactions for mobile candidates.",
      highlights: [
        "Crafted clean, uncluttered mobile discovery feed with smooth pull-to-refresh and infinite scrolling.",
        "Engineered multi-dimensional filter sheet: skills, physical location, salary range slider, experience level, and job type (remote/hybrid/onsite).",
        "Designed detailed job dossier screens with expandable company overviews, requirement chips, and inline application modal.",
        "Maintained responsive layouts matching both iOS and Android design ergonomics.",
        "Implemented offline caching and resilient HTTP error handling for mobile network fluctuations."
      ],
      interfaces: [
        "Job Discovery Feed & Search Screen",
        "Multi-Parameter Filter Bottom-Sheet",
        "Job Details, Responsibilities & Quick Application Flow"
      ],
    },
    supportingSystem: {
      title: "Supporting API & Database Layer",
      summary:
        "Flutter mobile client communicates with a custom PHP/MySQL backend through lightweight HTTP JSON endpoints.",
      architectureNotes: [
        "Modular PHP REST endpoints handling candidate authentication, job filtering, and application submission.",
        "Relational MySQL schema indexing job postings, candidate profiles, and employer records.",
        "Optimized JSON response payloads to reduce cellular data consumption on mobile devices."
      ],
      stack: ["Flutter", "Dart", "PHP", "MySQL", "HTTP REST APIs"]
    },
    technologies: {
      primaryFrontend: ["Flutter", "Dart", "Mobile UI", "Responsive Layouts", "State Management"],
      supportingBackend: ["PHP", "MySQL", "HTTP APIs", "JSON Services"]
    },
    media: [
      {
        id: "job-finder-screens",
        type: "mobile",
        src: "/media/aisha/job-finder/job-finder-home.svg",
        alt: "Job Finder Mobile App 3-Screen Stack",
        caption: "Discovery Feed, Multi-Parameter Filter Sheet, and Job Application Details",
        layout: "phone",
        role: "Mobile Candidate Experience",
        feature: "Mobile Application"
      }
    ]
  },
  {
    id: "elevvo-frontend",
    slug: "elevvo-frontend",
    title: "Elevvo Frontend Engineering",
    badge: "INTERNSHIP WORK",
    typeLabel: "FRONTEND COMPONENT ENGINEERING",
    category: "internship",
    period: "AUG 2025 — OCT 2025",
    featured: false,
    order: 5,
    githubUrl: "https://github.com/AishaKotob/Elevvo_internship",
    shortSummary:
      "Frontend engineering internship focused on reusable React component libraries, responsive UI redesigns, and team code reviews.",
    headline:
      "Crafting modular, reusable component patterns and responsive web interfaces during intensive team development.",
    frontendContribution: {
      title: "Reusable Component Design & UI Refinement",
      summary:
        "Contributed to core frontend development by translating wireframes into polished, accessible React components, refactoring legacy markup into modular patterns, and participating in Git pull-request workflows.",
      highlights: [
        "Constructed modular React interface components with clean prop contracts and responsive Tailwind/CSS styling.",
        "Collaborated in GitHub team repository workflows with thorough code reviews and branch management.",
        "Identified and eliminated layout inconsistencies across mobile and tablet viewports.",
        "Enhanced accessibility with semantic HTML5 landmarks and keyboard navigational aids."
      ],
      interfaces: [
        "Interactive Dashboard Component Modules",
        "Responsive Card Collections & Feed Views",
        "Team Design System Component Library"
      ],
    },
    supportingSystem: {
      title: "Team Workflow & Integration",
      summary:
        "Integrated components into team repositories with automated linting, modular CSS structures, and cross-browser testing.",
      architectureNotes: [
        "Component-driven React architecture.",
        "Team Git branching, pull request reviews, and issue tracking.",
        "Cross-browser testing across Chrome, Safari, and Firefox."
      ],
      stack: ["React.js", "JavaScript", "HTML5", "CSS3", "GitHub", "Team Collaboration"]
    },
    technologies: {
      primaryFrontend: ["React.js", "JavaScript", "Responsive Design", "Component Architecture", "Git/GitHub"],
      supportingBackend: ["REST APIs", "Modern Build Tools"]
    },
    media: []
  },
  {
    id: "hynx-frontend",
    slug: "hynx-frontend",
    title: "HYNX Trading Web Products",
    badge: "PROFESSIONAL WORK",
    typeLabel: "FRONTEND ENGINEERING CONTRIBUTION",
    category: "commercial",
    period: "JAN 2026 — PRESENT",
    featured: false,
    order: 6,
    shortSummary:
      "Contributing to commercial web products with an explicit focus on responsive behavior, UI debugging, testing, and API integration.",
    headline:
      "Engineering robust web interfaces with React, Next.js, and TypeScript, resolving interface regressions and testing user journeys.",
    frontendContribution: {
      title: "Production Frontend Engineering & UI Debugging",
      summary:
        "Active member of the frontend development effort, investigating UI/UX edge cases, building responsive page layouts, validating feature completeness, and writing structured testing documentation.",
      highlights: [
        "Engineering responsive web pages and components using React, Next.js, JavaScript, and TypeScript.",
        "Diagnosing visual, layout, and state bugs across complex user journeys, ensuring fluid responsiveness across resolutions.",
        "Executing systematic feature testing and producing technical testing and debugging reports.",
        "Integrating frontend interfaces with backend services and REST APIs with comprehensive error handling.",
        "Refining component performance to eliminate unnecessary re-renders and improve user experience."
      ],
      interfaces: [
        "Public Marketing & Product Showcase Web Pages",
        "Responsive Navigation & Interactive Product Surfaces",
        "Sanitized Feature Validation & Testing Workflows"
      ],
    },
    supportingSystem: {
      title: "Sanitized Engineering Context",
      summary:
        "Collaborating via Git/GitHub with backend engineering teams to consume REST APIs and deliver dependable production user interfaces (strict confidentiality observed).",
      architectureNotes: [
        "Next.js and React enterprise development workflow.",
        "API integration with secure backend services.",
        "Quality assurance, bug documentation, and regression mitigation."
      ],
      stack: ["React.js", "Next.js", "TypeScript", "REST APIs", "Git", "Frontend QA"]
    },
    technologies: {
      primaryFrontend: ["Next.js", "React.js", "TypeScript", "UI Debugging", "Frontend QA", "Performance"],
      supportingBackend: ["REST APIs", "Git Workflows"]
    },
    media: []
  }
];

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "employment" | "contract" | "founder" | "internship" | "fellowship";
  frontendEmphasis: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  confidentialityNote?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "hynx-trading",
    role: "Frontend Engineering Specialist",
    company: "HYNX TRADING W.L.L.",
    location: "Remote / Qatar",
    period: "JAN 2026 — PRESENT",
    type: "employment",
    frontendEmphasis: true,
    summary:
      "Contributing to commercial web products with an explicit focus on frontend engineering, UI debugging, responsive behavior, feature testing, and API integration using React, Next.js, and TypeScript.",
    responsibilities: [
      "Develop responsive and modern web interfaces using React, Next.js, JavaScript, and TypeScript.",
      "Diagnose, debug, and resolve UI/UX inconsistencies and state regressions across desktop and mobile browsers.",
      "Conduct rigorous frontend feature testing and draft structured technical and testing reports.",
      "Collaborate with backend teammates to integrate RESTful API endpoints and maintain reliable error boundaries.",
      "Investigate usability bottlenecks and recommend targeted frontend performance optimizations.",
      "Maintain active Git and GitHub collaboration workflows within sprint development cycles."
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "JavaScript", "REST APIs", "UI Debugging", "Testing", "Git"],
    confidentialityNote: "Strict confidentiality observed. Proprietary metrics and internal code are omitted."
  },
  {
    id: "remote-digital-company",
    role: "Frontend Developer",
    company: "Remote Digital Company",
    location: "Remote",
    period: "FEB 2026 — PRESENT",
    type: "employment",
    frontendEmphasis: true,
    summary:
      "Maintaining, debugging, and improving production web applications with a priority on interface reliability, responsive layouts, and user experience.",
    responsibilities: [
      "Maintain and enhance client-facing web application interfaces across multiple devices and browsers.",
      "Perform frontend debugging, state validation, and UI issue remediation.",
      "Author structured testing and technical evaluation reports for engineering leads.",
      "Research and integrate modern frontend libraries to improve interaction quality and load times.",
      "Partner with product stakeholders to translate requirements into responsive UI components."
    ],
    technologies: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "UI Testing", "Debugging"],
  },
  {
    id: "municipality-portal-dev",
    role: "Frontend & Full-Stack Contributor",
    company: "Municipality Management Portal",
    location: "Lebanon",
    period: "MAR 2026 — PRESENT",
    type: "contract",
    frontendEmphasis: true,
    summary:
      "Engineering citizen-facing and municipal staff web portals in Next.js, preparing for public deployment following a successful local operational demonstration.",
    responsibilities: [
      "Architect responsive Next.js citizen workflows for civic requests, complaint filing, and appointment booking.",
      "Implement multi-step form validation, state management, and real-time review progress indicators.",
      "Build internal staff queue interfaces with role-based visibility and status progression controls.",
      "Connect Next.js frontends to Laravel REST API endpoints with granular authorization headers."
    ],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Laravel REST API", "MySQL"],
  },
  {
    id: "qanz-academy-founder",
    role: "Founder & Lead Developer",
    company: "Qanz Academy",
    location: "Lebanon",
    period: "2025 — PRESENT",
    type: "founder",
    frontendEmphasis: true,
    summary:
      "Founded and engineered an online educational platform delivering course catalogs, registration workflows, student engagement, and administration management.",
    responsibilities: [
      "Conceived, designed, and coded the full user experience from discovery to checkout inquiry.",
      "Engineered responsive layouts, accessible navigation, and optimized media delivery.",
      "Built administration back-office suite to manage course offerings, enrollments, and inquiries.",
      "Deployed and maintain production application on Render with MongoDB Atlas data layer and Resend email service."
    ],
    technologies: ["JavaScript", "EJS / HTML5", "CSS3", "Node.js", "Express.js", "MongoDB", "Resend API", "Render"],
  },
  {
    id: "freelance-developer",
    role: "Freelance Frontend Developer",
    company: "Independent Client Collaborations",
    location: "Remote",
    period: "2025 — PRESENT",
    type: "contract",
    frontendEmphasis: true,
    summary:
      "Building responsive interfaces and web applications for clients, with additional backend/API work when required.",
    responsibilities: [
      "Design and deliver polished, mobile-first responsive web interfaces in React and Vue.js.",
      "Translate design mockups into semantic, accessible, and fast-loading web code.",
      "Integrate third-party REST APIs and configure supporting Node.js or PHP backend endpoints as needed.",
      "Conduct cross-browser testing and resolve performance bottlenecks."
    ],
    technologies: ["React.js", "Vue.js", "JavaScript", "HTML5", "CSS3", "Node.js", "Express", "PHP", "MySQL", "MongoDB"],
  },
  {
    id: "elevvo-intern",
    role: "Frontend Development Intern",
    company: "Elevvo",
    location: "Remote",
    period: "AUG 2025 — OCT 2025",
    type: "internship",
    frontendEmphasis: true,
    summary:
      "Engaged in frontend engineering sprints, building reusable React components, refining mobile responsiveness, and collaborating through team GitHub workflows.",
    responsibilities: [
      "Engineered modular, reusable React UI components conforming to design specifications.",
      "Refactored legacy styles to improve responsiveness and decrease CSS bundle sizes.",
      "Participated actively in team code reviews, PR submissions, and Git branch workflows.",
      "Verified cross-browser rendering accuracy across Chrome, Edge, and Firefox."
    ],
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Git", "GitHub Workflows"],
  },
  {
    id: "eflow-fellowship",
    role: "AI Fellow",
    company: "eFlow.ai",
    location: "Remote",
    period: "JUL 2025 — AUG 2025",
    type: "fellowship",
    frontendEmphasis: false,
    summary:
      "Selected for an intensive fellowship exploring practical machine learning applications, predictive modeling, data pipelines, and AI product integration.",
    responsibilities: [
      "Explored machine learning methodologies and predictive model integration.",
      "Analyzed structured datasets, feature distributions, and model performance metrics.",
      "Investigated seamless approaches for connecting intelligent model endpoints with web client interfaces."
    ],
    technologies: ["Python", "Machine Learning", "Data Analysis", "API Endpoints"],
  }
];

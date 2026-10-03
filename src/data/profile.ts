export interface ProfileData {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  supportingTitle: string;
  heroHeadline: string;
  heroSubheadline: string;
  secondaryCopy: string;
  shortCopy: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  cvPath: string;
  availability: string;
  metaTags: string[];
}

export const profileData: ProfileData = {
  name: "Aisha Kotob",
  firstName: "AISHA",
  lastName: "KOTOB",
  role: "FRONTEND DEVELOPER",
  supportingTitle: "Frontend Engineering · Interactive Web · Full-Stack Capabilities",
  heroHeadline: "Building polished, responsive web experiences where thoughtful interfaces meet practical software engineering.",
  heroSubheadline: "React · Next.js · Vue.js · TypeScript · Interactive UI",
  secondaryCopy: "I work primarily across React, Next.js, Vue.js and modern frontend development, with additional experience in backend systems, mobile applications and AI-powered product features.",
  shortCopy: "Frontend Developer crafting responsive, expressive and reliable digital experiences.",
  location: "Lebanon",
  email: "kotobaisha@gmail.com",
  github: "https://github.com/AishaKotob",
  linkedin: "https://linkedin.com/in/aisha-kotob",
  cvPath: "/Aisha-Kotob-CV.pdf",
  availability: "Available for Frontend Engineering & Product Roles",
  metaTags: [
    "BASED IN LEBANON",
    "FRONTEND · WEB · MOBILE · AI-ENABLED PRODUCTS",
  ],
};

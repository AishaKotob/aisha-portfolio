export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  distinction: string;
  honors: string[];
  location: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  badge?: string;
  description: string;
  category: "ai" | "networking" | "web" | "education";
}

export interface TeachingExperience {
  headline: string;
  quote: string;
  subjects: string[];
  audience: string;
  pedagogyPoints: string[];
}

export interface LeadershipActivity {
  organization: string;
  role: string;
  period?: string;
  impact: string;
}

export const educationData: EducationItem = {
  institution: "Lebanese International University",
  degree: "Bachelor of Science in Computer Science",
  period: "2022 — 2025",
  gpa: "3.94 / 4.00",
  distinction: "High Distinction",
  location: "Lebanon",
  honors: [
    "President's Outstanding Undergraduate Recognition Award",
    "Continuous Dean's Honor List across all semesters",
    "President's Honor Roll recipient",
  ],
};

export const certificatesData: CertificateItem[] = [
  {
    id: "eflow-fellow",
    title: "AI Fellow",
    issuer: "eFlow.ai",
    badge: "SELECTIVE FELLOWSHIP",
    description: "Intensive applied artificial intelligence, predictive pipelines, and practical data engineering.",
    category: "ai",
  },
  {
    id: "elements-ai",
    title: "Elements of AI for Business",
    issuer: "University of Helsinki & Reaktor",
    description: "Strategic principles of machine learning, neural architectures, and ethical AI deployment.",
    category: "ai",
  },
  {
    id: "ccna-1",
    title: "CCNA 1: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    description: "Network architecture, IP addressing, TCP/IP protocols, and physical/data link layer fundamentals.",
    category: "networking",
  },
  {
    id: "ccna-2",
    title: "CCNA 2: Switching, Routing & Wireless",
    issuer: "Cisco Networking Academy",
    description: "VLANs, inter-VLAN routing, STP, EtherChannel, and secure network infrastructure design.",
    category: "networking",
  },
  {
    id: "cisco-it",
    title: "Cisco IT Essentials",
    issuer: "Cisco Networking Academy",
    description: "Hardware diagnostics, operating system maintenance, security basics, and lab troubleshooting.",
    category: "networking",
  },
  {
    id: "web-dev",
    title: "Full-Stack Web Development Track",
    issuer: "Professional Technical Training",
    description: "Modern JavaScript, client-side rendering, RESTful API consumption, and responsive web layouts.",
    category: "web",
  },
  {
    id: "microbit-steam",
    title: "Micro:bit in the Classroom — STEAM Educator Track",
    issuer: "Micro:bit Educational Foundation",
    description: "Computational thinking, block-based to text programming, and hands-on physical computing pedagogy.",
    category: "education",
  },
];

export const teachingData: TeachingExperience = {
  headline: "Teaching reinforces understanding.",
  quote:
    "Alongside development, I’ve spent years teaching academic subjects and technical topics including programming, algorithms, AI and data analysis.",
  audience: "Grades 1 — 12 and university peers",
  subjects: [
    "Object-Oriented Programming (Python, JavaScript)",
    "Algorithms & Computational Thinking",
    "Introductory Artificial Intelligence & Data Logic",
    "Mathematics & Academic Science Foundations",
  ],
  pedagogyPoints: [
    "Distilling complex computer science abstractions into clear, intuitive mental models.",
    "Cultivating patient problem-solving habits, structured debugging, and confidence.",
    "Strengthening communication clarity required when collaborating in engineering teams.",
  ],
};

export const leadershipData: LeadershipActivity[] = [
  {
    organization: "DAFI Scholarship Student Committee",
    role: "Student Committee Leader",
    impact: "Led student initiatives, organized academic mentoring workshops, and fostered peer support networks.",
  },
  {
    organization: "Life Sculptors",
    role: "Youth Development & Community Mentor",
    impact: "Facilitated skill-building sessions and digital literacy programs for youth.",
  },
  {
    organization: "GivenLearn Access Alumni Program",
    role: "Active Member & Peer Mentor",
    impact: "Supported continuous educational access and tech skill workshops.",
  },
  {
    organization: "Irshad & Islah",
    role: "Community Volunteer",
    impact: "Assisted in community outreach, youth educational activities, and civic engagement.",
  },
  {
    organization: "Scout Association",
    role: "Chief Scout / Youth Leader",
    impact: "Directed outdoor team challenges, leadership training, and collaborative community service projects.",
  },
];

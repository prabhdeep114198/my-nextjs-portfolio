export const personalInfo = {
  name: "Prabhdeep Singh",
  role: "Full-Stack & AI Engineer",
  tagline: "I build intelligent full-stack applications and AI-driven automation workflows that bridge the gap between complex backend logic and seamless user experiences.",
  focus: "Seeking Software Development roles where I can leverage my experience in NestJS, React, and Agentic AI to build scalable, high-performance systems.",
  email: "sprabhdeep960@gmail.com",
  linkedin: "https://www.linkedin.com/in/prabhdeep-singh-632aa3201",
  github: "https://github.com/prabhdeep114198",
  resumeUrl: "/Prabhdeep_Singh_Resume.pdf",
};

export const stats = [
  { value: 90, suffix: ".4%", label: "AI Diagnostic Accuracy" },
  { value: 30, suffix: "%", label: "Provisioning Time Cut" },
  { value: 18, suffix: "%", label: "Frontend Speed Lift" },
  { value: 100, suffix: "+", label: "Beta Users Served" },
];

export const about = {
  summary: "I am a Software Development Intern with experience in building RESTful APIs, optimizing frontend components, and implementing AI-driven automation. I specialize in full-stack development using Node.js, NestJS, and React, with a strong focus on integrating Agentic AI and automation workflows (n8n) to solve real-world problems.",
  highlights: [
    "Engineered RESTful APIs using NestJS for secure, scalable insurance policy issuance across multiple platforms.",
    "Implemented AI-driven automation workflows using n8n, significantly reducing manual intervention in complex integrations.",
    "Built and optimized responsive React.js components for telecom and healthcare platforms, improving performance and maintainability.",
    "Achieved 90.4% diagnostic accuracy in an AI-powered skin disease prediction system using Deep Learning and CNNs.",
  ],
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  type: "work" | "education";
  summary: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    company: "Ensuredit Technologies Pvt. Ltd.",
    role: "Software Developer",
    period: "Jun 2026 – Present",
    type: "work",
    summary: "Architecting scalable backend APIs and implementing AI-driven automation workflows for insurance integrations.",
    bullets: [
      "Architected and delivered scalable RESTful APIs using NestJS and Node.js for high-volume insurance integrations, onboarding 3+ new major insurance providers and increasing transaction throughput by 25%.",
      "Engineered AI automation integrations using n8n and NestJS, achieving a 40% reduction in manual data mapping tasks for complex multi-party insurance integrations."
    ],
  },
  {
    company: "Ensuredit Technologies Pvt. Ltd.",
    role: "Software Development Intern",
    period: "Aug 2025 – May 2026",
    type: "work",
    summary: "Engineering secure and scalable insurance platforms using NestJS and React.js.",
    bullets: [
      "Engineered secure RESTful APIs using NestJS, Node.js, and PostgreSQL to onboard 3+ insurance providers, reducing policy issuance latency by 20% and supporting 5,000+ monthly active transactions.",
      "Developed responsive React.js frontend components and client-specific policy templates, improving user conversion rate by 15% across motor and appliance insurance purchase screens.",
      "Implemented AI automation workflows using n8n, which automated insurer data validation and eliminated manual verification efforts by 35%.",
      "Optimized and debugged full-stack features to enhance system reliability, resolving 45+ critical production bugs and ensuring 99.9% uptime during platform integration phases."
    ],
  },
  {
    company: "Arvius Software Pvt. Ltd.",
    role: "Frontend Development Intern",
    period: "Jun 2025 – Jul 2025",
    type: "work",
    summary: "Built and optimized UI modules for large-scale telecom operations platforms.",
    bullets: [
      "Implemented responsive, reusable UI modules using React.js for the Unified Telecom Operations Manager (UTOM) platform, reducing code redundancy by 25% and accelerating page load times by 15%.",
      "Optimized user interface performance and maintainability by refactoring legacy React.js components, achieving a 22% increase in Lighthouse performance scores.",
      "Delivered core telecom dashboard features while working in agile cross-functional teams, completing 100% of assigned sprint tasks on time."
    ],
  },
  {
    company: "SmartTechKs (Remote)",
    role: "Software Development Intern (AI & Web)",
    period: "Jun 2024 – Apr 2025",
    type: "work",
    summary: "Designed user-friendly interfaces and backend services with a focus on containerization and performance.",
    bullets: [
      "Reduced deployment provisioning time by 30% by containerizing backend services using Docker and establishing efficient CI/CD pipelines.",
      "Improved frontend page load time by 18% by refactoring React.js component structures and optimizing data fetching strategies.",
      "Designed user-friendly interfaces and full-stack backend services in an agile environment, leading to a 10% increase in daily active user engagement."
    ],
  },
  {
    company: "The NorthCap University",
    role: "Bachelor of Technology in Computer Science",
    period: "Aug 2022 – Jul 2026",
    type: "education",
    summary: "Focusing on core computer science principles and full-stack development. (8.5 CGPA)",
    bullets: [
      "Specializing in Software Engineering and Artificial Intelligence.",
      "Active participant in technical workshops and project-based learning."
    ],
  },
];

export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  impact: string;
  role: string;
  timeline?: string;
  complexity: string;
  tech: string[];
  images: string[];
  github: string;
  live?: string;
}

export const projects: Project[] = [
  {
    slug: "elderconnect",
    title: "ElderConnect: Smart AI Companion",
    category: "Agentic AI & IoT",
    summary: "A comprehensive AI-powered virtual companion for elderly health and safety.",
    description: "Designed a voice-first, accessibility-focused system to support elderly health. The solution is split into a [Frontend](https://github.com/prabhdeep114198/ElderConnect) and a [Backend](https://github.com/prabhdeep114198/elderconnect_be) architecture, featuring medication reminders, mood-driven engagement, and fall detection.",
    impact: "Provides a proactive care ecosystem for the elderly while ensuring privacy and sustainability through eco-mode and on-device processing.",
    role: "System Architect & AI Engineer",
    timeline: "Sep 2025 – Present",
    complexity: "Agentic AI behaviors, voice integration, and IoT connectivity",
    images: [
      "/images/projects/elderconnect/dashboard.png",
      "/images/projects/elderconnect/ai-report.png",
    ],
    tech: ["NestJS", "React.js", "Agentic AI", "Voice AI", "IoT", "n8n", "Docker"],
    github: "https://github.com/prabhdeep114198/ElderConnect",
  },
  {
    slug: "dermasense",
    title: "DermaSense: Skin Disease AI",
    category: "Deep Learning & NLP",
    summary: "AI-powered diagnostic system for skin diseases with a medical chatbot.",
    description: "Built a skin disease prediction system using Convolutional Neural Networks (CNNs) for high diagnostic accuracy, coupled with an AI chatbot for preliminary consultations.",
    impact: "Achieved 90.4% diagnostic accuracy and successfully handled 100+ test users during the pilot phase.",
    role: "AI Developer & Full-Stack Engineer",
    timeline: "Jan 2025 – May 2025",
    complexity: "CNN Implementation, NLP Chatbot, and Geolocation Mapping",
    images: [
      "/images/projects/dermasense/diagnostics.png",
      "/images/projects/dermasense/chatbot.png",
    ],
    tech: ["Python", "CNNs", "Deep Learning", "NLP", "React.js", "PostgreSQL", "Geolocation APIs"],
    github: "https://github.com/prabhdeep114198/DermaSense",
  },
];

export const skillCategories = [
  {
    title: "Backend & Systems",
    description: "Core technologies I use to build robust and scalable server-side systems.",
    skills: ["Node.js", "NestJS", "Spring Boot", "Hibernate", "Express.js", "Java", "JavaScript", "SQL (MySQL, PostgreSQL)", "RESTful APIs", "JWT", "OAuth"],
  },
  {
    title: "Frontend & UI/UX",
    description: "Modern frameworks and libraries for building responsive and interactive interfaces.",
    skills: ["React.js", "HTML/CSS", "Tailwind CSS", "Axios", "Responsive Design"],
  },
  {
    title: "AI, ML & Automation",
    description: "Specialized tools for integrating artificial intelligence and automating workflows.",
    skills: ["Agentic AI", "Voice AI", "Deep Learning (CNNs)", "NLP", "n8n", "Python", "Prompt Engineering"],
  },
  {
    title: "Infrastructure & Tools",
    description: "Tools for development, containerization, and platform reliability.",
    skills: ["Docker", "Git", "GitHub", "Postman", "VS Code", "Cursor", "Eclipse", "Agile Methodologies"],
  },
];

export const chatSuggestions = [
  "What is the tech stack of ElderConnect?",
  "How did you achieve 90% accuracy in DermaSense?",
  "Tell me about your experience at Ensuredit Technologies.",
  "How do you use n8n for AI automation?",
  "What are your key skills in full-stack development?",
];

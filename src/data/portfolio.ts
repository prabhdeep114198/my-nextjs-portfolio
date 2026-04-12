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
    company: "Ensureit Technologies Pvt. Ltd.",
    role: "Software Development Intern",
    period: "Aug. 2025 – Present",
    type: "work",
    summary: "Engineering secure and scalable insurance platforms using NestJS and React.js.",
    bullets: [
      "Engineered and integrated RESTful APIs using NestJS to onboard multiple insurance providers, enabling secure and scalable policy issuance for motor, health, and appliance insurance.",
      "Developed and optimized React.js frontend components and client-specific policy templates, supporting seamless end-to-end insurance purchase and issuance workflows.",
      "Implemented AI-driven automation workflows using n8n, reducing manual intervention and improving efficiency in insurer and client integrations.",
      "Debugged, tested, and optimized full-stack features to ensure high system reliability and smooth third-party API integrations.",
    ],
  },
  {
    company: "Arvius Software Pvt. Ltd.",
    role: "Frontend Development Intern",
    period: "June 2025 – July 2025",
    type: "work",
    summary: "Built and optimized UI modules for large-scale telecom operations platforms.",
    bullets: [
      "Developed and optimized React.js frontend components for the Unified Telecom Operations Manager (UTOM) platform, improving UI performance and code maintainability.",
      "Implemented responsive, reusable UI modules and resolved frontend issues, strengthening system integration, usability, and application stability.",
      "Collaborated with cross-functional teams to debug, test, and deliver scalable telecom software solutions in an agile environment.",
    ],
  },
  {
    company: "SmartTechKs (Remote)",
    role: "Software Development Intern (AI & Web)",
    period: "Jun 2024 - Apr 2025",
    type: "work",
    summary: "Designed user-friendly interfaces and backend services with a focus on containerization and performance.",
    bullets: [
      "Designed and engineered user-friendly interfaces and backend services aligned with business requirements.",
      "Reduced provisioning time by 30% by containerizing deployments with Docker.",
      "Refactored component structure, improving frontend load time by 18%.",
      "Collaborated closely with cross-functional teams to deliver functionality aligned with user needs.",
    ],
  },
  {
    company: "The NorthCap University",
    role: "Bachelor of Technology in Computer Science",
    period: "Aug. 2022 – July 2026",
    type: "education",
    summary: "Focusing on core computer science principles and full-stack development. (8.5 CGPA)",
    bullets: [
      "Specializing in Software Engineering and Artificial Intelligence.",
      "Active participant in technical workshops and project-based learning.",
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
    timeline: "Sept. 2025 – Present",
    complexity: "Agentic AI behaviors, voice integration, and IoT connectivity",
    images: [
      "/images/projects/elderconnect/dashboard.png",
      "/images/projects/elderconnect/ai-report.png",
    ],
    tech: ["NestJS", "React", "Agentic AI", "Voice AI", "IoT", "n8n", "Docker"],
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
    timeline: "Completed Project",
    complexity: "CNN Implementation, NLP Chatbot, and Geolocation Mapping",
    images: [
      "/images/projects/dermasense/diagnostics.png",
      "/images/projects/dermasense/chatbot.png",
    ],
    tech: ["Python", "CNNs", "Deep Learning", "NLP", "React", "PostgreSQL", "Geolocation APIs"],
    github: "https://github.com/prabhdeep114198/DermaSense",
  },
];

export const skillCategories = [
  {
    title: "Backend & Systems",
    description: "Core technologies I use to build robust and scalable server-side systems.",
    skills: ["Node.js", "NestJS", "Spring Boot", "Hibernate", "Express.js", "Java", "JavaScript", "SQL (MySQL, PostgreSQL)", "RESTful APIs"],
  },
  {
    title: "Frontend & UI/UX",
    description: "Modern frameworks and libraries for building responsive and interactive interfaces.",
    skills: ["React", "HTML/CSS", "Tailwind CSS", "JWT", "Axios", "OAuth", "Responsive Design"],
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
  "Tell me about your experience at Ensureit Technologies.",
  "How do you use n8n for AI automation?",
  "What are your key skills in full-stack development?",
];

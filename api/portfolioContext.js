// Authoritative server-side portfolio dataset strictly compiled from Qayoom Akhtar's official resume and portfolio files.
// DO NOT invent or fabricate information outside of this dataset.

export const PORTFOLIO_CONTEXT = {
  personal: {
    name: "Qayoom Akhtar",
    primaryRole: "Full Stack AI Engineer",
    roles: ["Full Stack AI Engineer", "React & Next.js Engineer", "RAG & LLM Specialist", "MERN Stack Developer"],
    experienceYears: "6+ months of experience building production AI-integrated web applications",
    summary: "Full Stack AI Engineer with 6+ months of experience building production AI-integrated web applications — combining strong React/Next.js frontend engineering with Node.js/Express backend systems, multi-provider LLM integration (Groq, NVIDIA, Cerebras, Gemini), and Retrieval-Augmented Generation (RAG) pipelines using Qdrant vector database. Experienced in designing real-time streaming interfaces (Server-Sent Events), secure authentication systems, and scalable REST APIs. Comfortable owning the full stack — from database and AI orchestration to responsive, production-grade UI.",
    status: "Available for Full-Time Opportunities",
    stats: {
      experience: "6+ months",
      projectsBuilt: "15+",
      technologiesCount: "15+",
    },
  },

  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Chandigarh University, Mohali",
      years: "2022 – 2026",
    },
  ],

  experienceHistory: [
    {
      role: "Full Stack Development Intern",
      company: "Infotech Service",
      responsibilities: [
        "Developed responsive React UI components used across production features, focusing on reusability and performance.",
        "Integrated frontend with backend APIs end-to-end, improving perceived responsiveness and reducing server response time by 15–20%.",
        "Optimized application performance through component optimization, lazy loading, and efficient state management.",
        "Built and consumed RESTful APIs to enable seamless communication between frontend and backend services.",
      ],
    },
    {
      role: "AI & ML Trainee",
      company: "Chandigarh University",
      responsibilities: [
        "Built ML models on real-world datasets with data preprocessing, feature engineering, and evaluation using Python.",
        "Implemented classification and regression algorithms using Scikit-learn and evaluated models with standard performance metrics.",
      ],
    },
  ],

  contact: {
    email: "qayoomakhtar72@gmail.com",
    emailLink: "mailto:qayoomakhtar72@gmail.com",
    phone: "+91 9798413263",
    phoneLink: "tel:+919798413263",
    location: "Mohali, Punjab, India",
    portfolio: "https://qayoomakhtar.vercel.app",
    github: "https://github.com/test-Ois",
    linkedin: "https://www.linkedin.com/in/qayoom-akhtar",
    resume: "https://drive.google.com/drive/u/0/folders/1WayKbomGqVUlmhQbi9Y2GgXN-Q2V1IDL",
  },

  skills: {
    aiMl: [
      "LLM API Integration (Groq, NVIDIA AI, Cerebras, Gemini, OpenAI)",
      "Retrieval-Augmented Generation (RAG)",
      "Vector Embeddings",
      "Semantic Search",
      "Qdrant Vector DB",
      "Prompt Engineering",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Firebase Authentication",
      "Server-Sent Events (SSE)",
      "Python / FastAPI exposure",
    ],
    frontend: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "JavaScript (ES6+)",
    ],
    dataStorage: [
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Qdrant (Vector DB)",
      "Prisma ORM",
    ],
    toolingDeployment: [
      "Git",
      "GitHub",
      "Docker",
      "AWS",
      "Vercel",
      "Render",
    ],
    concepts: [
      "System Design",
      "OOP",
      "DSA",
      "Performance Optimization",
      "Component Architecture",
    ],
  },

  projects: [
    {
      id: 1,
      title: "Xynox AI — AI Assistant Platform",
      category: "AI & Full-Stack",
      description: "A production-grade full-stack AI assistant platform featuring multi-provider AI routing (Groq, NVIDIA, Cerebras) and real-time streaming responses via Server-Sent Events (SSE). Implements RAG with PDF parsing, intelligent chunking, vector embeddings, and Qdrant vector DB integration.",
      technologies: ["React", "Vite", "Node.js", "Express", "Firebase Auth", "Qdrant", "Groq AI", "NVIDIA AI", "Cerebras AI", "SSE", "Tailwind CSS"],
      features: [
        "Built a full-stack AI assistant platform with multi-provider AI routing (Groq, NVIDIA, Cerebras) and real-time streaming responses.",
        "Implemented Retrieval-Augmented Generation (RAG) with PDF parsing, intelligent chunking, vector embeddings, semantic search, and Qdrant vector database integration.",
        "Developed secure Google Authentication using Firebase Authentication and Firebase Admin SDK with JWT-based protected APIs.",
        "Engineered ChatGPT/Claude-like streaming using Server-Sent Events (SSE) with incremental token rendering, optimized React updates, and auto-scroll handling.",
        "Added conversational context, follow-up question understanding, AI memory foundation, prompt library, web search integration, and file upload support.",
        "Optimized frontend performance using React memoization, streaming state management, and markdown rendering improvements.",
      ],
      githubUrl: "https://github.com/test-Ois/xynox-ai",
      demoUrl: null,
      accent: "#8254EE",
    },
    {
      id: 2,
      title: "InboxIQ AI — Email Intelligence Platform",
      category: "AI & Full-Stack",
      description: "Full-stack architecture for an AI-powered email intelligence platform covering email analysis, categorization, insight dashboards, and REST APIs backed by PostgreSQL and Prisma ORM.",
      technologies: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Gemini AI", "TypeScript"],
      features: [
        "Built full-stack architecture for an AI-powered email platform, covering email analysis, categorization, and insight dashboards end-to-end.",
        "Designed scalable REST APIs backed by PostgreSQL/Prisma, ensuring clean data flow and type-safe integration (TypeScript).",
        "Integrated Gemini AI outputs into the platform for real-time insights and automated content processing, with spam/fraud flags surfaced clearly.",
      ],
      githubUrl: "https://github.com/test-Ois/inboxiq-ai",
      demoUrl: null,
      accent: "#00C2FF",
    },
    {
      id: 3,
      title: "Qyro — E-Commerce Platform",
      category: "Full-Stack",
      description: "A modern AI-powered e-commerce platform that enhances the shopping experience with intelligent product recommendations, AI-assisted search, secure authentication, and a scalable MERN architecture.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Express.js", "Gemini AI", "Tailwind CSS"],
      features: [
        "Intelligent product recommendations and AI-assisted search.",
        "Secure authentication and full-stack MERN architecture.",
      ],
      githubUrl: "https://github.com/test-Ois/qyro-ecommerce",
      demoUrl: null,
      accent: "#8254EE",
    },
    {
      id: 4,
      title: "Game Galaxy Hub — Real-Time Multiplayer Gaming Platform",
      category: "Full-Stack & WebSockets",
      description: "Real-time multiplayer gaming hub for Tic-Tac-Toe and Ludo. Implements low-latency WebSocket rooms, live synchronization, chat connectivity using Socket.io, and fallback AI logic.",
      technologies: ["Next.js", "TypeScript", "Socket.io", "Tailwind CSS"],
      features: [
        "Low-latency WebSocket room creation and live player synchronization.",
        "Interactive real-time game state management and chat connectivity.",
      ],
      githubUrl: "https://github.com/test-Ois/game-galaxy-hub",
      demoUrl: "https://game-galaxy-hub.vercel.app/",
      accent: "#00C2FF",
    },
  ],
};

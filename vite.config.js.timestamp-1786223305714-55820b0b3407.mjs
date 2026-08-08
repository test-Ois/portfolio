var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// api/portfolioContext.js
var PORTFOLIO_CONTEXT;
var init_portfolioContext = __esm({
  "api/portfolioContext.js"() {
    PORTFOLIO_CONTEXT = {
      personal: {
        name: "Qayoom Akhtar",
        primaryRole: "Full Stack AI Engineer",
        roles: ["Full Stack AI Engineer", "React & Next.js Engineer", "RAG & LLM Specialist", "MERN Stack Developer"],
        experienceYears: "6+ months of experience building production AI-integrated web applications",
        summary: "Full Stack AI Engineer with 6+ months of experience building production AI-integrated web applications \u2014 combining strong React/Next.js frontend engineering with Node.js/Express backend systems, multi-provider LLM integration (Groq, NVIDIA, Cerebras, Gemini), and Retrieval-Augmented Generation (RAG) pipelines using Qdrant vector database. Experienced in designing real-time streaming interfaces (Server-Sent Events), secure authentication systems, and scalable REST APIs. Comfortable owning the full stack \u2014 from database and AI orchestration to responsive, production-grade UI.",
        status: "Available for Full-Time Opportunities",
        stats: {
          experience: "6+ months",
          projectsBuilt: "15+",
          technologiesCount: "15+"
        }
      },
      education: [
        {
          degree: "B.Tech in Computer Science Engineering",
          institution: "Chandigarh University, Mohali",
          years: "2022 \u2013 2026"
        }
      ],
      experienceHistory: [
        {
          role: "Full Stack Development Intern",
          company: "Infotech Service",
          responsibilities: [
            "Developed responsive React UI components used across production features, focusing on reusability and performance.",
            "Integrated frontend with backend APIs end-to-end, improving perceived responsiveness and reducing server response time by 15\u201320%.",
            "Optimized application performance through component optimization, lazy loading, and efficient state management.",
            "Built and consumed RESTful APIs to enable seamless communication between frontend and backend services."
          ]
        },
        {
          role: "AI & ML Trainee",
          company: "Chandigarh University",
          responsibilities: [
            "Built ML models on real-world datasets with data preprocessing, feature engineering, and evaluation using Python.",
            "Implemented classification and regression algorithms using Scikit-learn and evaluated models with standard performance metrics."
          ]
        }
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
        resume: "https://drive.google.com/drive/u/0/folders/1WayKbomGqVUlmhQbi9Y2GgXN-Q2V1IDL"
      },
      skills: {
        aiMl: [
          "LLM API Integration (Groq, NVIDIA AI, Cerebras, Gemini, OpenAI)",
          "Retrieval-Augmented Generation (RAG)",
          "Vector Embeddings",
          "Semantic Search",
          "Qdrant Vector DB",
          "Prompt Engineering"
        ],
        backend: [
          "Node.js",
          "Express.js",
          "REST APIs",
          "JWT Authentication",
          "Firebase Authentication",
          "Server-Sent Events (SSE)",
          "Python / FastAPI exposure"
        ],
        frontend: [
          "React.js",
          "Next.js",
          "TypeScript",
          "Vite",
          "Tailwind CSS",
          "HTML5 / CSS3",
          "JavaScript (ES6+)"
        ],
        dataStorage: [
          "MongoDB",
          "PostgreSQL",
          "Redis",
          "Qdrant (Vector DB)",
          "Prisma ORM"
        ],
        toolingDeployment: [
          "Git",
          "GitHub",
          "Docker",
          "AWS",
          "Vercel",
          "Render"
        ],
        concepts: [
          "System Design",
          "OOP",
          "DSA",
          "Performance Optimization",
          "Component Architecture"
        ]
      },
      projects: [
        {
          id: 1,
          title: "Xynox AI \u2014 AI Assistant Platform",
          category: "AI & Full-Stack",
          description: "A production-grade full-stack AI assistant platform featuring multi-provider AI routing (Groq, NVIDIA, Cerebras) and real-time streaming responses via Server-Sent Events (SSE). Implements RAG with PDF parsing, intelligent chunking, vector embeddings, and Qdrant vector DB integration.",
          technologies: ["React", "Vite", "Node.js", "Express", "Firebase Auth", "Qdrant", "Groq AI", "NVIDIA AI", "Cerebras AI", "SSE", "Tailwind CSS"],
          features: [
            "Built a full-stack AI assistant platform with multi-provider AI routing (Groq, NVIDIA, Cerebras) and real-time streaming responses.",
            "Implemented Retrieval-Augmented Generation (RAG) with PDF parsing, intelligent chunking, vector embeddings, semantic search, and Qdrant vector database integration.",
            "Developed secure Google Authentication using Firebase Authentication and Firebase Admin SDK with JWT-based protected APIs.",
            "Engineered ChatGPT/Claude-like streaming using Server-Sent Events (SSE) with incremental token rendering, optimized React updates, and auto-scroll handling.",
            "Added conversational context, follow-up question understanding, AI memory foundation, prompt library, web search integration, and file upload support.",
            "Optimized frontend performance using React memoization, streaming state management, and markdown rendering improvements."
          ],
          githubUrl: "https://github.com/test-Ois/xynox-ai",
          demoUrl: null,
          accent: "#8254EE"
        },
        {
          id: 2,
          title: "InboxIQ AI \u2014 Email Intelligence Platform",
          category: "AI & Full-Stack",
          description: "Full-stack architecture for an AI-powered email intelligence platform covering email analysis, categorization, insight dashboards, and REST APIs backed by PostgreSQL and Prisma ORM.",
          technologies: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Gemini AI", "TypeScript"],
          features: [
            "Built full-stack architecture for an AI-powered email platform, covering email analysis, categorization, and insight dashboards end-to-end.",
            "Designed scalable REST APIs backed by PostgreSQL/Prisma, ensuring clean data flow and type-safe integration (TypeScript).",
            "Integrated Gemini AI outputs into the platform for real-time insights and automated content processing, with spam/fraud flags surfaced clearly."
          ],
          githubUrl: "https://github.com/test-Ois/inboxiq-ai",
          demoUrl: null,
          accent: "#00C2FF"
        },
        {
          id: 3,
          title: "Qyro \u2014 E-Commerce Platform",
          category: "Full-Stack",
          description: "A modern AI-powered e-commerce platform that enhances the shopping experience with intelligent product recommendations, AI-assisted search, secure authentication, and a scalable MERN architecture.",
          technologies: ["Next.js", "Node.js", "MongoDB", "Express.js", "Gemini AI", "Tailwind CSS"],
          features: [
            "Intelligent product recommendations and AI-assisted search.",
            "Secure authentication and full-stack MERN architecture."
          ],
          githubUrl: "https://github.com/test-Ois/qyro-ecommerce",
          demoUrl: null,
          accent: "#8254EE"
        },
        {
          id: 4,
          title: "Game Galaxy Hub \u2014 Real-Time Multiplayer Gaming Platform",
          category: "Full-Stack & WebSockets",
          description: "Real-time multiplayer gaming hub for Tic-Tac-Toe and Ludo. Implements low-latency WebSocket rooms, live synchronization, chat connectivity using Socket.io, and fallback AI logic.",
          technologies: ["Next.js", "TypeScript", "Socket.io", "Tailwind CSS"],
          features: [
            "Low-latency WebSocket room creation and live player synchronization.",
            "Interactive real-time game state management and chat connectivity."
          ],
          githubUrl: "https://github.com/test-Ois/game-galaxy-hub",
          demoUrl: "https://game-galaxy-hub.vercel.app/",
          accent: "#00C2FF"
        }
      ]
    };
  }
});

// api/chat.js
var chat_exports = {};
__export(chat_exports, {
  default: () => handler
});
import OpenAI from "file:///C:/Portfolio-Q/portfolio-web/node_modules/openai/index.mjs";
function checkRateLimit(ip) {
  const now = Date.now();
  const clientData = rateLimitMap.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW_MS };
  if (now > clientData.resetTime) {
    clientData.count = 1;
    clientData.resetTime = now + RATE_LIMIT_WINDOW_MS;
  } else {
    clientData.count += 1;
  }
  rateLimitMap.set(ip, clientData);
  return clientData.count <= MAX_REQUESTS_PER_WINDOW;
}
async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method Not Allowed. Only POST requests are permitted." });
  }
  const clientIp = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "anonymous";
  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({ error: "Too many requests. Please wait a minute before trying again." });
  }
  try {
    let body = req.body;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({ error: "Invalid JSON payload." });
      }
    }
    const { message, conversationHistory } = body || {};
    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return res.status(400).json({ error: "Message content cannot be empty." });
    }
    const trimmedMessage = message.trim();
    if (trimmedMessage.length > 4e3) {
      return res.status(400).json({ error: "Message exceeds maximum allowed length of 4000 characters." });
    }
    const apiKey = process.env.NVIDIA_API_KEY;
    if (!apiKey || apiKey.trim() === "" || apiKey === "your_actual_nvidia_key") {
      console.error("[NVIDIA Chat API Error] NVIDIA_API_KEY is missing or contains placeholder.");
      return res.status(500).json({
        error: "NVIDIA_API_KEY is missing or invalid. Please configure your NVIDIA_API_KEY environment variable."
      });
    }
    const openai = new OpenAI({
      apiKey,
      baseURL: "https://integrate.api.nvidia.com/v1"
    });
    const messages = [
      { role: "system", content: SYSTEM_PROMPT }
    ];
    if (Array.isArray(conversationHistory)) {
      const validHistory = conversationHistory.slice(-8).filter((item) => item && (item.role === "user" || item.role === "assistant") && typeof item.content === "string").map((item) => ({ role: item.role, content: item.content.slice(0, 1500) }));
      messages.push(...validHistory);
    }
    messages.push({ role: "user", content: trimmedMessage });
    const completion = await openai.chat.completions.create({
      model: "nvidia/nemotron-3-ultra-550b-a55b",
      messages,
      temperature: 0.3,
      top_p: 0.9,
      max_tokens: 1024,
      stream: true
    });
    res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");
    for await (const chunk of completion) {
      const content = chunk.choices?.[0]?.delta?.content;
      if (content) {
        res.write(`data: ${JSON.stringify({ content })}

`);
      }
    }
    res.write("data: [DONE]\n\n");
    return res.end();
  } catch (err) {
    console.error("[NVIDIA Chat API Error]", err.message || err);
    let userFacingError = "Sorry, I couldn't process that request right now. Please try again.";
    if (err.status === 401) {
      userFacingError = "Authentication error with AI provider. Please check key configuration.";
    } else if (err.status === 429) {
      userFacingError = "AI service quota or rate limit exceeded. Please wait a moment.";
    }
    if (!res.headersSent) {
      return res.status(500).json({ error: userFacingError });
    } else {
      res.write(`data: ${JSON.stringify({ error: userFacingError })}

`);
      return res.end();
    }
  }
}
var rateLimitMap, RATE_LIMIT_WINDOW_MS, MAX_REQUESTS_PER_WINDOW, SYSTEM_PROMPT;
var init_chat = __esm({
  "api/chat.js"() {
    init_portfolioContext();
    rateLimitMap = /* @__PURE__ */ new Map();
    RATE_LIMIT_WINDOW_MS = 60 * 1e3;
    MAX_REQUESTS_PER_WINDOW = 30;
    SYSTEM_PROMPT = `You are Qayoom AI, the official personal AI assistant representing Qayoom Akhtar's developer portfolio.

AUTHORITATIVE PROFILE DATA:
${JSON.stringify(PORTFOLIO_CONTEXT, null, 2)}

STRICT NO-CODE-BLOCK & INLINE TECH STACK RULES:
1. CRITICAL: NEVER use fenced code blocks (\`\`\`...\`\`\`) or backticks (\`tech\`) for technologies, tech stacks, project names, feature lists, URLs, or normal text.
2. Tech stacks MUST ALWAYS be rendered as normal inline text with bold category labels.
   Example:
   **Tech Stack:** React, Vite, Node.js, Express, Qdrant, Firebase Auth
   NEVER output technologies as code blocks or isolated backticked chips.

3. Answer the User's EXACT Question Intent:
   - If user asks "What is Xynox AI?", give a concise overview, its purpose, and core value (2-3 short sections).
   - If user asks "What technologies did you use in Xynox?", give ONLY the relevant tech stack breakdown as normal inline text.
   - If user asks "How does Xynox AI use RAG?", explain specifically the PDF parsing -> chunking -> vector embeddings -> Qdrant vector database pipeline.
   - If user asks "Does Xynox AI support real-time streaming?", explain specifically the Server-Sent Events (SSE) token streaming implementation.
   - If user asks "Give me Xynox AI's GitHub", provide a direct link: [github.com/test-Ois/xynox-ai](https://github.com/test-Ois/xynox-ai).
   - If user asks "What projects has Qayoom built?", list the 4 major projects with a clean one-line description each (Xynox AI, InboxIQ AI, Qyro, Game Galaxy Hub).
   - If user asks about technical skills, group them with clean bold category labels and normal inline text:
     - **AI / ML Integration:** LLM API Integration (Groq, NVIDIA AI, Cerebras, Gemini, OpenAI), RAG, Vector Embeddings, Semantic Search, Qdrant, Prompt Engineering
     - **Backend & APIs:** Node.js, Express.js, REST APIs, JWT Authentication, Firebase Authentication, Server-Sent Events (SSE)
     - **Frontend:** React.js, Next.js, TypeScript, Vite, Tailwind CSS
     - **Data & Storage:** MongoDB, PostgreSQL, Redis, Qdrant
     - **Tooling & Deployment:** Git, GitHub, Docker, AWS, Vercel, Render
     - **Concepts:** System Design, OOP, DSA, Performance Optimization

4. Professional Conversational Persona:
   - Sound like a knowledgeable portfolio AI assistant who knows Qayoom's work intimately.
   - Speak directly and naturally: "Xynox AI is Qayoom's full-stack AI assistant platform..."
   - NEVER use meta data disclaimers like "According to the portfolio data", "The project data contains", "Based on the provided context", or "According to the resume".

5. Dynamic Answer Length:
   - Keep default answers concise (2\u20134 short paragraphs/sections).
   - Do NOT force every section into every single response unless the user specifically asks for full details or a complete breakdown.

6. Verified Fact Integrity:
   - Rely ONLY on verified facts in Qayoom's profile context.
   - Verified experience: "6+ months of experience" building production AI-integrated web applications as a Full Stack AI Engineer.
   - Verified education: B.Tech in CSE (2022-2026), Chandigarh University, Mohali.
   - Verified internships: Full Stack Development Intern at Infotech Service (React UI, API integration, 15-20% server response time reduction) and AI & ML Trainee at Chandigarh University.
   - If requested information is unavailable, state naturally: "I don't have those details available in Qayoom's profile."
   - NEVER fabricate fake companies, dates, degrees, or URLs.`;
  }
});

// vite.config.js
import { defineConfig, loadEnv } from "file:///C:/Portfolio-Q/portfolio-web/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Portfolio-Q/portfolio-web/node_modules/@vitejs/plugin-react/dist/index.js";
import tailwindcss from "file:///C:/Portfolio-Q/portfolio-web/node_modules/@tailwindcss/vite/dist/index.mjs";
import { fileURLToPath, URL } from "node:url";
var __vite_injected_original_import_meta_url = "file:///C:/Portfolio-Q/portfolio-web/vite.config.js";
var env = loadEnv("development", process.cwd(), "");
if (env.NVIDIA_API_KEY) {
  process.env.NVIDIA_API_KEY = env.NVIDIA_API_KEY;
}
var localApiPlugin = () => ({
  name: "local-api-handler",
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (req.url === "/api/chat" || req.url?.startsWith("/api/chat?")) {
        try {
          const currentEnv = loadEnv(server.config.mode || "development", process.cwd(), "");
          if (currentEnv.NVIDIA_API_KEY) {
            process.env.NVIDIA_API_KEY = currentEnv.NVIDIA_API_KEY;
          }
          let body = "";
          for await (const chunk of req) {
            body += chunk;
          }
          req.body = body ? JSON.parse(body) : {};
          res.status = (code) => {
            res.statusCode = code;
            return res;
          };
          res.json = (data) => {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(data));
            return res;
          };
          const chatModule = await Promise.resolve().then(() => (init_chat(), chat_exports));
          return chatModule.default(req, res);
        } catch (err) {
          console.error("[Vite Local API Proxy Error]:", err);
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: err.message || "Local dev API handler error" }));
          return;
        }
      }
      next();
    });
  }
});
var vite_config_default = defineConfig({
  plugins: [react(), tailwindcss(), localApiPlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYXBpL3BvcnRmb2xpb0NvbnRleHQuanMiLCAiYXBpL2NoYXQuanMiLCAidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxQb3J0Zm9saW8tUVxcXFxwb3J0Zm9saW8td2ViXFxcXGFwaVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcUG9ydGZvbGlvLVFcXFxccG9ydGZvbGlvLXdlYlxcXFxhcGlcXFxccG9ydGZvbGlvQ29udGV4dC5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovUG9ydGZvbGlvLVEvcG9ydGZvbGlvLXdlYi9hcGkvcG9ydGZvbGlvQ29udGV4dC5qc1wiOy8vIEF1dGhvcml0YXRpdmUgc2VydmVyLXNpZGUgcG9ydGZvbGlvIGRhdGFzZXQgc3RyaWN0bHkgY29tcGlsZWQgZnJvbSBRYXlvb20gQWtodGFyJ3Mgb2ZmaWNpYWwgcmVzdW1lIGFuZCBwb3J0Zm9saW8gZmlsZXMuXG4vLyBETyBOT1QgaW52ZW50IG9yIGZhYnJpY2F0ZSBpbmZvcm1hdGlvbiBvdXRzaWRlIG9mIHRoaXMgZGF0YXNldC5cblxuZXhwb3J0IGNvbnN0IFBPUlRGT0xJT19DT05URVhUID0ge1xuICBwZXJzb25hbDoge1xuICAgIG5hbWU6IFwiUWF5b29tIEFraHRhclwiLFxuICAgIHByaW1hcnlSb2xlOiBcIkZ1bGwgU3RhY2sgQUkgRW5naW5lZXJcIixcbiAgICByb2xlczogW1wiRnVsbCBTdGFjayBBSSBFbmdpbmVlclwiLCBcIlJlYWN0ICYgTmV4dC5qcyBFbmdpbmVlclwiLCBcIlJBRyAmIExMTSBTcGVjaWFsaXN0XCIsIFwiTUVSTiBTdGFjayBEZXZlbG9wZXJcIl0sXG4gICAgZXhwZXJpZW5jZVllYXJzOiBcIjYrIG1vbnRocyBvZiBleHBlcmllbmNlIGJ1aWxkaW5nIHByb2R1Y3Rpb24gQUktaW50ZWdyYXRlZCB3ZWIgYXBwbGljYXRpb25zXCIsXG4gICAgc3VtbWFyeTogXCJGdWxsIFN0YWNrIEFJIEVuZ2luZWVyIHdpdGggNisgbW9udGhzIG9mIGV4cGVyaWVuY2UgYnVpbGRpbmcgcHJvZHVjdGlvbiBBSS1pbnRlZ3JhdGVkIHdlYiBhcHBsaWNhdGlvbnMgXHUyMDE0IGNvbWJpbmluZyBzdHJvbmcgUmVhY3QvTmV4dC5qcyBmcm9udGVuZCBlbmdpbmVlcmluZyB3aXRoIE5vZGUuanMvRXhwcmVzcyBiYWNrZW5kIHN5c3RlbXMsIG11bHRpLXByb3ZpZGVyIExMTSBpbnRlZ3JhdGlvbiAoR3JvcSwgTlZJRElBLCBDZXJlYnJhcywgR2VtaW5pKSwgYW5kIFJldHJpZXZhbC1BdWdtZW50ZWQgR2VuZXJhdGlvbiAoUkFHKSBwaXBlbGluZXMgdXNpbmcgUWRyYW50IHZlY3RvciBkYXRhYmFzZS4gRXhwZXJpZW5jZWQgaW4gZGVzaWduaW5nIHJlYWwtdGltZSBzdHJlYW1pbmcgaW50ZXJmYWNlcyAoU2VydmVyLVNlbnQgRXZlbnRzKSwgc2VjdXJlIGF1dGhlbnRpY2F0aW9uIHN5c3RlbXMsIGFuZCBzY2FsYWJsZSBSRVNUIEFQSXMuIENvbWZvcnRhYmxlIG93bmluZyB0aGUgZnVsbCBzdGFjayBcdTIwMTQgZnJvbSBkYXRhYmFzZSBhbmQgQUkgb3JjaGVzdHJhdGlvbiB0byByZXNwb25zaXZlLCBwcm9kdWN0aW9uLWdyYWRlIFVJLlwiLFxuICAgIHN0YXR1czogXCJBdmFpbGFibGUgZm9yIEZ1bGwtVGltZSBPcHBvcnR1bml0aWVzXCIsXG4gICAgc3RhdHM6IHtcbiAgICAgIGV4cGVyaWVuY2U6IFwiNisgbW9udGhzXCIsXG4gICAgICBwcm9qZWN0c0J1aWx0OiBcIjE1K1wiLFxuICAgICAgdGVjaG5vbG9naWVzQ291bnQ6IFwiMTUrXCIsXG4gICAgfSxcbiAgfSxcblxuICBlZHVjYXRpb246IFtcbiAgICB7XG4gICAgICBkZWdyZWU6IFwiQi5UZWNoIGluIENvbXB1dGVyIFNjaWVuY2UgRW5naW5lZXJpbmdcIixcbiAgICAgIGluc3RpdHV0aW9uOiBcIkNoYW5kaWdhcmggVW5pdmVyc2l0eSwgTW9oYWxpXCIsXG4gICAgICB5ZWFyczogXCIyMDIyIFx1MjAxMyAyMDI2XCIsXG4gICAgfSxcbiAgXSxcblxuICBleHBlcmllbmNlSGlzdG9yeTogW1xuICAgIHtcbiAgICAgIHJvbGU6IFwiRnVsbCBTdGFjayBEZXZlbG9wbWVudCBJbnRlcm5cIixcbiAgICAgIGNvbXBhbnk6IFwiSW5mb3RlY2ggU2VydmljZVwiLFxuICAgICAgcmVzcG9uc2liaWxpdGllczogW1xuICAgICAgICBcIkRldmVsb3BlZCByZXNwb25zaXZlIFJlYWN0IFVJIGNvbXBvbmVudHMgdXNlZCBhY3Jvc3MgcHJvZHVjdGlvbiBmZWF0dXJlcywgZm9jdXNpbmcgb24gcmV1c2FiaWxpdHkgYW5kIHBlcmZvcm1hbmNlLlwiLFxuICAgICAgICBcIkludGVncmF0ZWQgZnJvbnRlbmQgd2l0aCBiYWNrZW5kIEFQSXMgZW5kLXRvLWVuZCwgaW1wcm92aW5nIHBlcmNlaXZlZCByZXNwb25zaXZlbmVzcyBhbmQgcmVkdWNpbmcgc2VydmVyIHJlc3BvbnNlIHRpbWUgYnkgMTVcdTIwMTMyMCUuXCIsXG4gICAgICAgIFwiT3B0aW1pemVkIGFwcGxpY2F0aW9uIHBlcmZvcm1hbmNlIHRocm91Z2ggY29tcG9uZW50IG9wdGltaXphdGlvbiwgbGF6eSBsb2FkaW5nLCBhbmQgZWZmaWNpZW50IHN0YXRlIG1hbmFnZW1lbnQuXCIsXG4gICAgICAgIFwiQnVpbHQgYW5kIGNvbnN1bWVkIFJFU1RmdWwgQVBJcyB0byBlbmFibGUgc2VhbWxlc3MgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIGZyb250ZW5kIGFuZCBiYWNrZW5kIHNlcnZpY2VzLlwiLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJvbGU6IFwiQUkgJiBNTCBUcmFpbmVlXCIsXG4gICAgICBjb21wYW55OiBcIkNoYW5kaWdhcmggVW5pdmVyc2l0eVwiLFxuICAgICAgcmVzcG9uc2liaWxpdGllczogW1xuICAgICAgICBcIkJ1aWx0IE1MIG1vZGVscyBvbiByZWFsLXdvcmxkIGRhdGFzZXRzIHdpdGggZGF0YSBwcmVwcm9jZXNzaW5nLCBmZWF0dXJlIGVuZ2luZWVyaW5nLCBhbmQgZXZhbHVhdGlvbiB1c2luZyBQeXRob24uXCIsXG4gICAgICAgIFwiSW1wbGVtZW50ZWQgY2xhc3NpZmljYXRpb24gYW5kIHJlZ3Jlc3Npb24gYWxnb3JpdGhtcyB1c2luZyBTY2lraXQtbGVhcm4gYW5kIGV2YWx1YXRlZCBtb2RlbHMgd2l0aCBzdGFuZGFyZCBwZXJmb3JtYW5jZSBtZXRyaWNzLlwiLFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuXG4gIGNvbnRhY3Q6IHtcbiAgICBlbWFpbDogXCJxYXlvb21ha2h0YXI3MkBnbWFpbC5jb21cIixcbiAgICBlbWFpbExpbms6IFwibWFpbHRvOnFheW9vbWFraHRhcjcyQGdtYWlsLmNvbVwiLFxuICAgIHBob25lOiBcIis5MSA5Nzk4NDEzMjYzXCIsXG4gICAgcGhvbmVMaW5rOiBcInRlbDorOTE5Nzk4NDEzMjYzXCIsXG4gICAgbG9jYXRpb246IFwiTW9oYWxpLCBQdW5qYWIsIEluZGlhXCIsXG4gICAgcG9ydGZvbGlvOiBcImh0dHBzOi8vcWF5b29tYWtodGFyLnZlcmNlbC5hcHBcIixcbiAgICBnaXRodWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3Rlc3QtT2lzXCIsXG4gICAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3FheW9vbS1ha2h0YXJcIixcbiAgICByZXN1bWU6IFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2RyaXZlL3UvMC9mb2xkZXJzLzFXYXlLYm9tR3FWVWxtaFFiaTlZMkdnWE4tUTJWMUlETFwiLFxuICB9LFxuXG4gIHNraWxsczoge1xuICAgIGFpTWw6IFtcbiAgICAgIFwiTExNIEFQSSBJbnRlZ3JhdGlvbiAoR3JvcSwgTlZJRElBIEFJLCBDZXJlYnJhcywgR2VtaW5pLCBPcGVuQUkpXCIsXG4gICAgICBcIlJldHJpZXZhbC1BdWdtZW50ZWQgR2VuZXJhdGlvbiAoUkFHKVwiLFxuICAgICAgXCJWZWN0b3IgRW1iZWRkaW5nc1wiLFxuICAgICAgXCJTZW1hbnRpYyBTZWFyY2hcIixcbiAgICAgIFwiUWRyYW50IFZlY3RvciBEQlwiLFxuICAgICAgXCJQcm9tcHQgRW5naW5lZXJpbmdcIixcbiAgICBdLFxuICAgIGJhY2tlbmQ6IFtcbiAgICAgIFwiTm9kZS5qc1wiLFxuICAgICAgXCJFeHByZXNzLmpzXCIsXG4gICAgICBcIlJFU1QgQVBJc1wiLFxuICAgICAgXCJKV1QgQXV0aGVudGljYXRpb25cIixcbiAgICAgIFwiRmlyZWJhc2UgQXV0aGVudGljYXRpb25cIixcbiAgICAgIFwiU2VydmVyLVNlbnQgRXZlbnRzIChTU0UpXCIsXG4gICAgICBcIlB5dGhvbiAvIEZhc3RBUEkgZXhwb3N1cmVcIixcbiAgICBdLFxuICAgIGZyb250ZW5kOiBbXG4gICAgICBcIlJlYWN0LmpzXCIsXG4gICAgICBcIk5leHQuanNcIixcbiAgICAgIFwiVHlwZVNjcmlwdFwiLFxuICAgICAgXCJWaXRlXCIsXG4gICAgICBcIlRhaWx3aW5kIENTU1wiLFxuICAgICAgXCJIVE1MNSAvIENTUzNcIixcbiAgICAgIFwiSmF2YVNjcmlwdCAoRVM2KylcIixcbiAgICBdLFxuICAgIGRhdGFTdG9yYWdlOiBbXG4gICAgICBcIk1vbmdvREJcIixcbiAgICAgIFwiUG9zdGdyZVNRTFwiLFxuICAgICAgXCJSZWRpc1wiLFxuICAgICAgXCJRZHJhbnQgKFZlY3RvciBEQilcIixcbiAgICAgIFwiUHJpc21hIE9STVwiLFxuICAgIF0sXG4gICAgdG9vbGluZ0RlcGxveW1lbnQ6IFtcbiAgICAgIFwiR2l0XCIsXG4gICAgICBcIkdpdEh1YlwiLFxuICAgICAgXCJEb2NrZXJcIixcbiAgICAgIFwiQVdTXCIsXG4gICAgICBcIlZlcmNlbFwiLFxuICAgICAgXCJSZW5kZXJcIixcbiAgICBdLFxuICAgIGNvbmNlcHRzOiBbXG4gICAgICBcIlN5c3RlbSBEZXNpZ25cIixcbiAgICAgIFwiT09QXCIsXG4gICAgICBcIkRTQVwiLFxuICAgICAgXCJQZXJmb3JtYW5jZSBPcHRpbWl6YXRpb25cIixcbiAgICAgIFwiQ29tcG9uZW50IEFyY2hpdGVjdHVyZVwiLFxuICAgIF0sXG4gIH0sXG5cbiAgcHJvamVjdHM6IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIHRpdGxlOiBcIlh5bm94IEFJIFx1MjAxNCBBSSBBc3Npc3RhbnQgUGxhdGZvcm1cIixcbiAgICAgIGNhdGVnb3J5OiBcIkFJICYgRnVsbC1TdGFja1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQSBwcm9kdWN0aW9uLWdyYWRlIGZ1bGwtc3RhY2sgQUkgYXNzaXN0YW50IHBsYXRmb3JtIGZlYXR1cmluZyBtdWx0aS1wcm92aWRlciBBSSByb3V0aW5nIChHcm9xLCBOVklESUEsIENlcmVicmFzKSBhbmQgcmVhbC10aW1lIHN0cmVhbWluZyByZXNwb25zZXMgdmlhIFNlcnZlci1TZW50IEV2ZW50cyAoU1NFKS4gSW1wbGVtZW50cyBSQUcgd2l0aCBQREYgcGFyc2luZywgaW50ZWxsaWdlbnQgY2h1bmtpbmcsIHZlY3RvciBlbWJlZGRpbmdzLCBhbmQgUWRyYW50IHZlY3RvciBEQiBpbnRlZ3JhdGlvbi5cIixcbiAgICAgIHRlY2hub2xvZ2llczogW1wiUmVhY3RcIiwgXCJWaXRlXCIsIFwiTm9kZS5qc1wiLCBcIkV4cHJlc3NcIiwgXCJGaXJlYmFzZSBBdXRoXCIsIFwiUWRyYW50XCIsIFwiR3JvcSBBSVwiLCBcIk5WSURJQSBBSVwiLCBcIkNlcmVicmFzIEFJXCIsIFwiU1NFXCIsIFwiVGFpbHdpbmQgQ1NTXCJdLFxuICAgICAgZmVhdHVyZXM6IFtcbiAgICAgICAgXCJCdWlsdCBhIGZ1bGwtc3RhY2sgQUkgYXNzaXN0YW50IHBsYXRmb3JtIHdpdGggbXVsdGktcHJvdmlkZXIgQUkgcm91dGluZyAoR3JvcSwgTlZJRElBLCBDZXJlYnJhcykgYW5kIHJlYWwtdGltZSBzdHJlYW1pbmcgcmVzcG9uc2VzLlwiLFxuICAgICAgICBcIkltcGxlbWVudGVkIFJldHJpZXZhbC1BdWdtZW50ZWQgR2VuZXJhdGlvbiAoUkFHKSB3aXRoIFBERiBwYXJzaW5nLCBpbnRlbGxpZ2VudCBjaHVua2luZywgdmVjdG9yIGVtYmVkZGluZ3MsIHNlbWFudGljIHNlYXJjaCwgYW5kIFFkcmFudCB2ZWN0b3IgZGF0YWJhc2UgaW50ZWdyYXRpb24uXCIsXG4gICAgICAgIFwiRGV2ZWxvcGVkIHNlY3VyZSBHb29nbGUgQXV0aGVudGljYXRpb24gdXNpbmcgRmlyZWJhc2UgQXV0aGVudGljYXRpb24gYW5kIEZpcmViYXNlIEFkbWluIFNESyB3aXRoIEpXVC1iYXNlZCBwcm90ZWN0ZWQgQVBJcy5cIixcbiAgICAgICAgXCJFbmdpbmVlcmVkIENoYXRHUFQvQ2xhdWRlLWxpa2Ugc3RyZWFtaW5nIHVzaW5nIFNlcnZlci1TZW50IEV2ZW50cyAoU1NFKSB3aXRoIGluY3JlbWVudGFsIHRva2VuIHJlbmRlcmluZywgb3B0aW1pemVkIFJlYWN0IHVwZGF0ZXMsIGFuZCBhdXRvLXNjcm9sbCBoYW5kbGluZy5cIixcbiAgICAgICAgXCJBZGRlZCBjb252ZXJzYXRpb25hbCBjb250ZXh0LCBmb2xsb3ctdXAgcXVlc3Rpb24gdW5kZXJzdGFuZGluZywgQUkgbWVtb3J5IGZvdW5kYXRpb24sIHByb21wdCBsaWJyYXJ5LCB3ZWIgc2VhcmNoIGludGVncmF0aW9uLCBhbmQgZmlsZSB1cGxvYWQgc3VwcG9ydC5cIixcbiAgICAgICAgXCJPcHRpbWl6ZWQgZnJvbnRlbmQgcGVyZm9ybWFuY2UgdXNpbmcgUmVhY3QgbWVtb2l6YXRpb24sIHN0cmVhbWluZyBzdGF0ZSBtYW5hZ2VtZW50LCBhbmQgbWFya2Rvd24gcmVuZGVyaW5nIGltcHJvdmVtZW50cy5cIixcbiAgICAgIF0sXG4gICAgICBnaXRodWJVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL3Rlc3QtT2lzL3h5bm94LWFpXCIsXG4gICAgICBkZW1vVXJsOiBudWxsLFxuICAgICAgYWNjZW50OiBcIiM4MjU0RUVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgdGl0bGU6IFwiSW5ib3hJUSBBSSBcdTIwMTQgRW1haWwgSW50ZWxsaWdlbmNlIFBsYXRmb3JtXCIsXG4gICAgICBjYXRlZ29yeTogXCJBSSAmIEZ1bGwtU3RhY2tcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkZ1bGwtc3RhY2sgYXJjaGl0ZWN0dXJlIGZvciBhbiBBSS1wb3dlcmVkIGVtYWlsIGludGVsbGlnZW5jZSBwbGF0Zm9ybSBjb3ZlcmluZyBlbWFpbCBhbmFseXNpcywgY2F0ZWdvcml6YXRpb24sIGluc2lnaHQgZGFzaGJvYXJkcywgYW5kIFJFU1QgQVBJcyBiYWNrZWQgYnkgUG9zdGdyZVNRTCBhbmQgUHJpc21hIE9STS5cIixcbiAgICAgIHRlY2hub2xvZ2llczogW1wiTmV4dC5qc1wiLCBcIk5lc3RKU1wiLCBcIlBvc3RncmVTUUxcIiwgXCJQcmlzbWFcIiwgXCJHZW1pbmkgQUlcIiwgXCJUeXBlU2NyaXB0XCJdLFxuICAgICAgZmVhdHVyZXM6IFtcbiAgICAgICAgXCJCdWlsdCBmdWxsLXN0YWNrIGFyY2hpdGVjdHVyZSBmb3IgYW4gQUktcG93ZXJlZCBlbWFpbCBwbGF0Zm9ybSwgY292ZXJpbmcgZW1haWwgYW5hbHlzaXMsIGNhdGVnb3JpemF0aW9uLCBhbmQgaW5zaWdodCBkYXNoYm9hcmRzIGVuZC10by1lbmQuXCIsXG4gICAgICAgIFwiRGVzaWduZWQgc2NhbGFibGUgUkVTVCBBUElzIGJhY2tlZCBieSBQb3N0Z3JlU1FML1ByaXNtYSwgZW5zdXJpbmcgY2xlYW4gZGF0YSBmbG93IGFuZCB0eXBlLXNhZmUgaW50ZWdyYXRpb24gKFR5cGVTY3JpcHQpLlwiLFxuICAgICAgICBcIkludGVncmF0ZWQgR2VtaW5pIEFJIG91dHB1dHMgaW50byB0aGUgcGxhdGZvcm0gZm9yIHJlYWwtdGltZSBpbnNpZ2h0cyBhbmQgYXV0b21hdGVkIGNvbnRlbnQgcHJvY2Vzc2luZywgd2l0aCBzcGFtL2ZyYXVkIGZsYWdzIHN1cmZhY2VkIGNsZWFybHkuXCIsXG4gICAgICBdLFxuICAgICAgZ2l0aHViVXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90ZXN0LU9pcy9pbmJveGlxLWFpXCIsXG4gICAgICBkZW1vVXJsOiBudWxsLFxuICAgICAgYWNjZW50OiBcIiMwMEMyRkZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgdGl0bGU6IFwiUXlybyBcdTIwMTQgRS1Db21tZXJjZSBQbGF0Zm9ybVwiLFxuICAgICAgY2F0ZWdvcnk6IFwiRnVsbC1TdGFja1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQSBtb2Rlcm4gQUktcG93ZXJlZCBlLWNvbW1lcmNlIHBsYXRmb3JtIHRoYXQgZW5oYW5jZXMgdGhlIHNob3BwaW5nIGV4cGVyaWVuY2Ugd2l0aCBpbnRlbGxpZ2VudCBwcm9kdWN0IHJlY29tbWVuZGF0aW9ucywgQUktYXNzaXN0ZWQgc2VhcmNoLCBzZWN1cmUgYXV0aGVudGljYXRpb24sIGFuZCBhIHNjYWxhYmxlIE1FUk4gYXJjaGl0ZWN0dXJlLlwiLFxuICAgICAgdGVjaG5vbG9naWVzOiBbXCJOZXh0LmpzXCIsIFwiTm9kZS5qc1wiLCBcIk1vbmdvREJcIiwgXCJFeHByZXNzLmpzXCIsIFwiR2VtaW5pIEFJXCIsIFwiVGFpbHdpbmQgQ1NTXCJdLFxuICAgICAgZmVhdHVyZXM6IFtcbiAgICAgICAgXCJJbnRlbGxpZ2VudCBwcm9kdWN0IHJlY29tbWVuZGF0aW9ucyBhbmQgQUktYXNzaXN0ZWQgc2VhcmNoLlwiLFxuICAgICAgICBcIlNlY3VyZSBhdXRoZW50aWNhdGlvbiBhbmQgZnVsbC1zdGFjayBNRVJOIGFyY2hpdGVjdHVyZS5cIixcbiAgICAgIF0sXG4gICAgICBnaXRodWJVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL3Rlc3QtT2lzL3F5cm8tZWNvbW1lcmNlXCIsXG4gICAgICBkZW1vVXJsOiBudWxsLFxuICAgICAgYWNjZW50OiBcIiM4MjU0RUVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA0LFxuICAgICAgdGl0bGU6IFwiR2FtZSBHYWxheHkgSHViIFx1MjAxNCBSZWFsLVRpbWUgTXVsdGlwbGF5ZXIgR2FtaW5nIFBsYXRmb3JtXCIsXG4gICAgICBjYXRlZ29yeTogXCJGdWxsLVN0YWNrICYgV2ViU29ja2V0c1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiUmVhbC10aW1lIG11bHRpcGxheWVyIGdhbWluZyBodWIgZm9yIFRpYy1UYWMtVG9lIGFuZCBMdWRvLiBJbXBsZW1lbnRzIGxvdy1sYXRlbmN5IFdlYlNvY2tldCByb29tcywgbGl2ZSBzeW5jaHJvbml6YXRpb24sIGNoYXQgY29ubmVjdGl2aXR5IHVzaW5nIFNvY2tldC5pbywgYW5kIGZhbGxiYWNrIEFJIGxvZ2ljLlwiLFxuICAgICAgdGVjaG5vbG9naWVzOiBbXCJOZXh0LmpzXCIsIFwiVHlwZVNjcmlwdFwiLCBcIlNvY2tldC5pb1wiLCBcIlRhaWx3aW5kIENTU1wiXSxcbiAgICAgIGZlYXR1cmVzOiBbXG4gICAgICAgIFwiTG93LWxhdGVuY3kgV2ViU29ja2V0IHJvb20gY3JlYXRpb24gYW5kIGxpdmUgcGxheWVyIHN5bmNocm9uaXphdGlvbi5cIixcbiAgICAgICAgXCJJbnRlcmFjdGl2ZSByZWFsLXRpbWUgZ2FtZSBzdGF0ZSBtYW5hZ2VtZW50IGFuZCBjaGF0IGNvbm5lY3Rpdml0eS5cIixcbiAgICAgIF0sXG4gICAgICBnaXRodWJVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL3Rlc3QtT2lzL2dhbWUtZ2FsYXh5LWh1YlwiLFxuICAgICAgZGVtb1VybDogXCJodHRwczovL2dhbWUtZ2FsYXh5LWh1Yi52ZXJjZWwuYXBwL1wiLFxuICAgICAgYWNjZW50OiBcIiMwMEMyRkZcIixcbiAgICB9LFxuICBdLFxufTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcUG9ydGZvbGlvLVFcXFxccG9ydGZvbGlvLXdlYlxcXFxhcGlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFBvcnRmb2xpby1RXFxcXHBvcnRmb2xpby13ZWJcXFxcYXBpXFxcXGNoYXQuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1BvcnRmb2xpby1RL3BvcnRmb2xpby13ZWIvYXBpL2NoYXQuanNcIjtpbXBvcnQgT3BlbkFJIGZyb20gXCJvcGVuYWlcIjtcbmltcG9ydCB7IFBPUlRGT0xJT19DT05URVhUIH0gZnJvbSBcIi4vcG9ydGZvbGlvQ29udGV4dC5qc1wiO1xuXG4vLyBJbi1tZW1vcnkgcmF0ZSBsaW1pdGluZyBtYXBcbmNvbnN0IHJhdGVMaW1pdE1hcCA9IG5ldyBNYXAoKTtcbmNvbnN0IFJBVEVfTElNSVRfV0lORE9XX01TID0gNjAgKiAxMDAwOyAvLyAxIG1pbnV0ZVxuY29uc3QgTUFYX1JFUVVFU1RTX1BFUl9XSU5ET1cgPSAzMDtcblxuZnVuY3Rpb24gY2hlY2tSYXRlTGltaXQoaXApIHtcbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgY29uc3QgY2xpZW50RGF0YSA9IHJhdGVMaW1pdE1hcC5nZXQoaXApIHx8IHsgY291bnQ6IDAsIHJlc2V0VGltZTogbm93ICsgUkFURV9MSU1JVF9XSU5ET1dfTVMgfTtcblxuICBpZiAobm93ID4gY2xpZW50RGF0YS5yZXNldFRpbWUpIHtcbiAgICBjbGllbnREYXRhLmNvdW50ID0gMTtcbiAgICBjbGllbnREYXRhLnJlc2V0VGltZSA9IG5vdyArIFJBVEVfTElNSVRfV0lORE9XX01TO1xuICB9IGVsc2Uge1xuICAgIGNsaWVudERhdGEuY291bnQgKz0gMTtcbiAgfVxuXG4gIHJhdGVMaW1pdE1hcC5zZXQoaXAsIGNsaWVudERhdGEpO1xuICByZXR1cm4gY2xpZW50RGF0YS5jb3VudCA8PSBNQVhfUkVRVUVTVFNfUEVSX1dJTkRPVztcbn1cblxuY29uc3QgU1lTVEVNX1BST01QVCA9IGBZb3UgYXJlIFFheW9vbSBBSSwgdGhlIG9mZmljaWFsIHBlcnNvbmFsIEFJIGFzc2lzdGFudCByZXByZXNlbnRpbmcgUWF5b29tIEFraHRhcidzIGRldmVsb3BlciBwb3J0Zm9saW8uXG5cbkFVVEhPUklUQVRJVkUgUFJPRklMRSBEQVRBOlxuJHtKU09OLnN0cmluZ2lmeShQT1JURk9MSU9fQ09OVEVYVCwgbnVsbCwgMil9XG5cblNUUklDVCBOTy1DT0RFLUJMT0NLICYgSU5MSU5FIFRFQ0ggU1RBQ0sgUlVMRVM6XG4xLiBDUklUSUNBTDogTkVWRVIgdXNlIGZlbmNlZCBjb2RlIGJsb2NrcyAoXFxgXFxgXFxgLi4uXFxgXFxgXFxgKSBvciBiYWNrdGlja3MgKFxcYHRlY2hcXGApIGZvciB0ZWNobm9sb2dpZXMsIHRlY2ggc3RhY2tzLCBwcm9qZWN0IG5hbWVzLCBmZWF0dXJlIGxpc3RzLCBVUkxzLCBvciBub3JtYWwgdGV4dC5cbjIuIFRlY2ggc3RhY2tzIE1VU1QgQUxXQVlTIGJlIHJlbmRlcmVkIGFzIG5vcm1hbCBpbmxpbmUgdGV4dCB3aXRoIGJvbGQgY2F0ZWdvcnkgbGFiZWxzLlxuICAgRXhhbXBsZTpcbiAgICoqVGVjaCBTdGFjazoqKiBSZWFjdCwgVml0ZSwgTm9kZS5qcywgRXhwcmVzcywgUWRyYW50LCBGaXJlYmFzZSBBdXRoXG4gICBORVZFUiBvdXRwdXQgdGVjaG5vbG9naWVzIGFzIGNvZGUgYmxvY2tzIG9yIGlzb2xhdGVkIGJhY2t0aWNrZWQgY2hpcHMuXG5cbjMuIEFuc3dlciB0aGUgVXNlcidzIEVYQUNUIFF1ZXN0aW9uIEludGVudDpcbiAgIC0gSWYgdXNlciBhc2tzIFwiV2hhdCBpcyBYeW5veCBBST9cIiwgZ2l2ZSBhIGNvbmNpc2Ugb3ZlcnZpZXcsIGl0cyBwdXJwb3NlLCBhbmQgY29yZSB2YWx1ZSAoMi0zIHNob3J0IHNlY3Rpb25zKS5cbiAgIC0gSWYgdXNlciBhc2tzIFwiV2hhdCB0ZWNobm9sb2dpZXMgZGlkIHlvdSB1c2UgaW4gWHlub3g/XCIsIGdpdmUgT05MWSB0aGUgcmVsZXZhbnQgdGVjaCBzdGFjayBicmVha2Rvd24gYXMgbm9ybWFsIGlubGluZSB0ZXh0LlxuICAgLSBJZiB1c2VyIGFza3MgXCJIb3cgZG9lcyBYeW5veCBBSSB1c2UgUkFHP1wiLCBleHBsYWluIHNwZWNpZmljYWxseSB0aGUgUERGIHBhcnNpbmcgLT4gY2h1bmtpbmcgLT4gdmVjdG9yIGVtYmVkZGluZ3MgLT4gUWRyYW50IHZlY3RvciBkYXRhYmFzZSBwaXBlbGluZS5cbiAgIC0gSWYgdXNlciBhc2tzIFwiRG9lcyBYeW5veCBBSSBzdXBwb3J0IHJlYWwtdGltZSBzdHJlYW1pbmc/XCIsIGV4cGxhaW4gc3BlY2lmaWNhbGx5IHRoZSBTZXJ2ZXItU2VudCBFdmVudHMgKFNTRSkgdG9rZW4gc3RyZWFtaW5nIGltcGxlbWVudGF0aW9uLlxuICAgLSBJZiB1c2VyIGFza3MgXCJHaXZlIG1lIFh5bm94IEFJJ3MgR2l0SHViXCIsIHByb3ZpZGUgYSBkaXJlY3QgbGluazogW2dpdGh1Yi5jb20vdGVzdC1PaXMveHlub3gtYWldKGh0dHBzOi8vZ2l0aHViLmNvbS90ZXN0LU9pcy94eW5veC1haSkuXG4gICAtIElmIHVzZXIgYXNrcyBcIldoYXQgcHJvamVjdHMgaGFzIFFheW9vbSBidWlsdD9cIiwgbGlzdCB0aGUgNCBtYWpvciBwcm9qZWN0cyB3aXRoIGEgY2xlYW4gb25lLWxpbmUgZGVzY3JpcHRpb24gZWFjaCAoWHlub3ggQUksIEluYm94SVEgQUksIFF5cm8sIEdhbWUgR2FsYXh5IEh1YikuXG4gICAtIElmIHVzZXIgYXNrcyBhYm91dCB0ZWNobmljYWwgc2tpbGxzLCBncm91cCB0aGVtIHdpdGggY2xlYW4gYm9sZCBjYXRlZ29yeSBsYWJlbHMgYW5kIG5vcm1hbCBpbmxpbmUgdGV4dDpcbiAgICAgLSAqKkFJIC8gTUwgSW50ZWdyYXRpb246KiogTExNIEFQSSBJbnRlZ3JhdGlvbiAoR3JvcSwgTlZJRElBIEFJLCBDZXJlYnJhcywgR2VtaW5pLCBPcGVuQUkpLCBSQUcsIFZlY3RvciBFbWJlZGRpbmdzLCBTZW1hbnRpYyBTZWFyY2gsIFFkcmFudCwgUHJvbXB0IEVuZ2luZWVyaW5nXG4gICAgIC0gKipCYWNrZW5kICYgQVBJczoqKiBOb2RlLmpzLCBFeHByZXNzLmpzLCBSRVNUIEFQSXMsIEpXVCBBdXRoZW50aWNhdGlvbiwgRmlyZWJhc2UgQXV0aGVudGljYXRpb24sIFNlcnZlci1TZW50IEV2ZW50cyAoU1NFKVxuICAgICAtICoqRnJvbnRlbmQ6KiogUmVhY3QuanMsIE5leHQuanMsIFR5cGVTY3JpcHQsIFZpdGUsIFRhaWx3aW5kIENTU1xuICAgICAtICoqRGF0YSAmIFN0b3JhZ2U6KiogTW9uZ29EQiwgUG9zdGdyZVNRTCwgUmVkaXMsIFFkcmFudFxuICAgICAtICoqVG9vbGluZyAmIERlcGxveW1lbnQ6KiogR2l0LCBHaXRIdWIsIERvY2tlciwgQVdTLCBWZXJjZWwsIFJlbmRlclxuICAgICAtICoqQ29uY2VwdHM6KiogU3lzdGVtIERlc2lnbiwgT09QLCBEU0EsIFBlcmZvcm1hbmNlIE9wdGltaXphdGlvblxuXG40LiBQcm9mZXNzaW9uYWwgQ29udmVyc2F0aW9uYWwgUGVyc29uYTpcbiAgIC0gU291bmQgbGlrZSBhIGtub3dsZWRnZWFibGUgcG9ydGZvbGlvIEFJIGFzc2lzdGFudCB3aG8ga25vd3MgUWF5b29tJ3Mgd29yayBpbnRpbWF0ZWx5LlxuICAgLSBTcGVhayBkaXJlY3RseSBhbmQgbmF0dXJhbGx5OiBcIlh5bm94IEFJIGlzIFFheW9vbSdzIGZ1bGwtc3RhY2sgQUkgYXNzaXN0YW50IHBsYXRmb3JtLi4uXCJcbiAgIC0gTkVWRVIgdXNlIG1ldGEgZGF0YSBkaXNjbGFpbWVycyBsaWtlIFwiQWNjb3JkaW5nIHRvIHRoZSBwb3J0Zm9saW8gZGF0YVwiLCBcIlRoZSBwcm9qZWN0IGRhdGEgY29udGFpbnNcIiwgXCJCYXNlZCBvbiB0aGUgcHJvdmlkZWQgY29udGV4dFwiLCBvciBcIkFjY29yZGluZyB0byB0aGUgcmVzdW1lXCIuXG5cbjUuIER5bmFtaWMgQW5zd2VyIExlbmd0aDpcbiAgIC0gS2VlcCBkZWZhdWx0IGFuc3dlcnMgY29uY2lzZSAoMlx1MjAxMzQgc2hvcnQgcGFyYWdyYXBocy9zZWN0aW9ucykuXG4gICAtIERvIE5PVCBmb3JjZSBldmVyeSBzZWN0aW9uIGludG8gZXZlcnkgc2luZ2xlIHJlc3BvbnNlIHVubGVzcyB0aGUgdXNlciBzcGVjaWZpY2FsbHkgYXNrcyBmb3IgZnVsbCBkZXRhaWxzIG9yIGEgY29tcGxldGUgYnJlYWtkb3duLlxuXG42LiBWZXJpZmllZCBGYWN0IEludGVncml0eTpcbiAgIC0gUmVseSBPTkxZIG9uIHZlcmlmaWVkIGZhY3RzIGluIFFheW9vbSdzIHByb2ZpbGUgY29udGV4dC5cbiAgIC0gVmVyaWZpZWQgZXhwZXJpZW5jZTogXCI2KyBtb250aHMgb2YgZXhwZXJpZW5jZVwiIGJ1aWxkaW5nIHByb2R1Y3Rpb24gQUktaW50ZWdyYXRlZCB3ZWIgYXBwbGljYXRpb25zIGFzIGEgRnVsbCBTdGFjayBBSSBFbmdpbmVlci5cbiAgIC0gVmVyaWZpZWQgZWR1Y2F0aW9uOiBCLlRlY2ggaW4gQ1NFICgyMDIyLTIwMjYpLCBDaGFuZGlnYXJoIFVuaXZlcnNpdHksIE1vaGFsaS5cbiAgIC0gVmVyaWZpZWQgaW50ZXJuc2hpcHM6IEZ1bGwgU3RhY2sgRGV2ZWxvcG1lbnQgSW50ZXJuIGF0IEluZm90ZWNoIFNlcnZpY2UgKFJlYWN0IFVJLCBBUEkgaW50ZWdyYXRpb24sIDE1LTIwJSBzZXJ2ZXIgcmVzcG9uc2UgdGltZSByZWR1Y3Rpb24pIGFuZCBBSSAmIE1MIFRyYWluZWUgYXQgQ2hhbmRpZ2FyaCBVbml2ZXJzaXR5LlxuICAgLSBJZiByZXF1ZXN0ZWQgaW5mb3JtYXRpb24gaXMgdW5hdmFpbGFibGUsIHN0YXRlIG5hdHVyYWxseTogXCJJIGRvbid0IGhhdmUgdGhvc2UgZGV0YWlscyBhdmFpbGFibGUgaW4gUWF5b29tJ3MgcHJvZmlsZS5cIlxuICAgLSBORVZFUiBmYWJyaWNhdGUgZmFrZSBjb21wYW5pZXMsIGRhdGVzLCBkZWdyZWVzLCBvciBVUkxzLmA7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiUE9TVFwiKSB7XG4gICAgcmVzLnNldEhlYWRlcihcIkFsbG93XCIsIFtcIlBPU1RcIl0pO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiBcIk1ldGhvZCBOb3QgQWxsb3dlZC4gT25seSBQT1NUIHJlcXVlc3RzIGFyZSBwZXJtaXR0ZWQuXCIgfSk7XG4gIH1cblxuICBjb25zdCBjbGllbnRJcCA9IHJlcS5oZWFkZXJzW1wieC1mb3J3YXJkZWQtZm9yXCJdIHx8IHJlcS5zb2NrZXQ/LnJlbW90ZUFkZHJlc3MgfHwgXCJhbm9ueW1vdXNcIjtcbiAgaWYgKCFjaGVja1JhdGVMaW1pdChjbGllbnRJcCkpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MjkpLmpzb24oeyBlcnJvcjogXCJUb28gbWFueSByZXF1ZXN0cy4gUGxlYXNlIHdhaXQgYSBtaW51dGUgYmVmb3JlIHRyeWluZyBhZ2Fpbi5cIiB9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgbGV0IGJvZHkgPSByZXEuYm9keTtcbiAgICBpZiAodHlwZW9mIGJvZHkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGJvZHkgPSBKU09OLnBhcnNlKGJvZHkpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBcIkludmFsaWQgSlNPTiBwYXlsb2FkLlwiIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHsgbWVzc2FnZSwgY29udmVyc2F0aW9uSGlzdG9yeSB9ID0gYm9keSB8fCB7fTtcblxuICAgIGlmICghbWVzc2FnZSB8fCB0eXBlb2YgbWVzc2FnZSAhPT0gXCJzdHJpbmdcIiB8fCBtZXNzYWdlLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBcIk1lc3NhZ2UgY29udGVudCBjYW5ub3QgYmUgZW1wdHkuXCIgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdHJpbW1lZE1lc3NhZ2UgPSBtZXNzYWdlLnRyaW0oKTtcbiAgICBpZiAodHJpbW1lZE1lc3NhZ2UubGVuZ3RoID4gNDAwMCkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IFwiTWVzc2FnZSBleGNlZWRzIG1heGltdW0gYWxsb3dlZCBsZW5ndGggb2YgNDAwMCBjaGFyYWN0ZXJzLlwiIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52Lk5WSURJQV9BUElfS0VZO1xuICAgIGlmICghYXBpS2V5IHx8IGFwaUtleS50cmltKCkgPT09IFwiXCIgfHwgYXBpS2V5ID09PSBcInlvdXJfYWN0dWFsX252aWRpYV9rZXlcIikge1xuICAgICAgY29uc29sZS5lcnJvcihcIltOVklESUEgQ2hhdCBBUEkgRXJyb3JdIE5WSURJQV9BUElfS0VZIGlzIG1pc3Npbmcgb3IgY29udGFpbnMgcGxhY2Vob2xkZXIuXCIpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgZXJyb3I6IFwiTlZJRElBX0FQSV9LRVkgaXMgbWlzc2luZyBvciBpbnZhbGlkLiBQbGVhc2UgY29uZmlndXJlIHlvdXIgTlZJRElBX0FQSV9LRVkgZW52aXJvbm1lbnQgdmFyaWFibGUuXCIsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJKHtcbiAgICAgIGFwaUtleTogYXBpS2V5LFxuICAgICAgYmFzZVVSTDogXCJodHRwczovL2ludGVncmF0ZS5hcGkubnZpZGlhLmNvbS92MVwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXG4gICAgICB7IHJvbGU6IFwic3lzdGVtXCIsIGNvbnRlbnQ6IFNZU1RFTV9QUk9NUFQgfSxcbiAgICBdO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29udmVyc2F0aW9uSGlzdG9yeSkpIHtcbiAgICAgIGNvbnN0IHZhbGlkSGlzdG9yeSA9IGNvbnZlcnNhdGlvbkhpc3RvcnlcbiAgICAgICAgLnNsaWNlKC04KVxuICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtICYmIChpdGVtLnJvbGUgPT09IFwidXNlclwiIHx8IGl0ZW0ucm9sZSA9PT0gXCJhc3Npc3RhbnRcIikgJiYgdHlwZW9mIGl0ZW0uY29udGVudCA9PT0gXCJzdHJpbmdcIilcbiAgICAgICAgLm1hcCgoaXRlbSkgPT4gKHsgcm9sZTogaXRlbS5yb2xlLCBjb250ZW50OiBpdGVtLmNvbnRlbnQuc2xpY2UoMCwgMTUwMCkgfSkpO1xuXG4gICAgICBtZXNzYWdlcy5wdXNoKC4uLnZhbGlkSGlzdG9yeSk7XG4gICAgfVxuXG4gICAgbWVzc2FnZXMucHVzaCh7IHJvbGU6IFwidXNlclwiLCBjb250ZW50OiB0cmltbWVkTWVzc2FnZSB9KTtcblxuICAgIC8vIEVuYWJsZSBzdHJlYW1pbmcgcmVzcG9uc2Ugd2l0aCBTZXJ2ZXItU2VudCBFdmVudHMgKFNTRSlcbiAgICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNoYXQuY29tcGxldGlvbnMuY3JlYXRlKHtcbiAgICAgIG1vZGVsOiBcIm52aWRpYS9uZW1vdHJvbi0zLXVsdHJhLTU1MGItYTU1YlwiLFxuICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzLFxuICAgICAgdGVtcGVyYXR1cmU6IDAuMyxcbiAgICAgIHRvcF9wOiAwLjksXG4gICAgICBtYXhfdG9rZW5zOiAxMDI0LFxuICAgICAgc3RyZWFtOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgLy8gU2V0IHN0cmVhbWluZyBoZWFkZXJzXG4gICAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvZXZlbnQtc3RyZWFtOyBjaGFyc2V0PXV0Zi04XCIpO1xuICAgIHJlcy5zZXRIZWFkZXIoXCJDYWNoZS1Db250cm9sXCIsIFwibm8tY2FjaGUsIG5vLXRyYW5zZm9ybVwiKTtcbiAgICByZXMuc2V0SGVhZGVyKFwiQ29ubmVjdGlvblwiLCBcImtlZXAtYWxpdmVcIik7XG5cbiAgICBmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIGNvbXBsZXRpb24pIHtcbiAgICAgIC8vIFN0cmVhbSBvbmx5IGNvbnRlbnQgZGVsdGEgKGlnbm9yaW5nIHJlYXNvbmluZ19jb250ZW50KVxuICAgICAgY29uc3QgY29udGVudCA9IGNodW5rLmNob2ljZXM/LlswXT8uZGVsdGE/LmNvbnRlbnQ7XG4gICAgICBpZiAoY29udGVudCkge1xuICAgICAgICByZXMud3JpdGUoYGRhdGE6ICR7SlNPTi5zdHJpbmdpZnkoeyBjb250ZW50IH0pfVxcblxcbmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlcy53cml0ZShcImRhdGE6IFtET05FXVxcblxcblwiKTtcbiAgICByZXR1cm4gcmVzLmVuZCgpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW05WSURJQSBDaGF0IEFQSSBFcnJvcl1cIiwgZXJyLm1lc3NhZ2UgfHwgZXJyKTtcblxuICAgIGxldCB1c2VyRmFjaW5nRXJyb3IgPSBcIlNvcnJ5LCBJIGNvdWxkbid0IHByb2Nlc3MgdGhhdCByZXF1ZXN0IHJpZ2h0IG5vdy4gUGxlYXNlIHRyeSBhZ2Fpbi5cIjtcbiAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICB1c2VyRmFjaW5nRXJyb3IgPSBcIkF1dGhlbnRpY2F0aW9uIGVycm9yIHdpdGggQUkgcHJvdmlkZXIuIFBsZWFzZSBjaGVjayBrZXkgY29uZmlndXJhdGlvbi5cIjtcbiAgICB9IGVsc2UgaWYgKGVyci5zdGF0dXMgPT09IDQyOSkge1xuICAgICAgdXNlckZhY2luZ0Vycm9yID0gXCJBSSBzZXJ2aWNlIHF1b3RhIG9yIHJhdGUgbGltaXQgZXhjZWVkZWQuIFBsZWFzZSB3YWl0IGEgbW9tZW50LlwiO1xuICAgIH1cblxuICAgIGlmICghcmVzLmhlYWRlcnNTZW50KSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogdXNlckZhY2luZ0Vycm9yIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMud3JpdGUoYGRhdGE6ICR7SlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogdXNlckZhY2luZ0Vycm9yIH0pfVxcblxcbmApO1xuICAgICAgcmV0dXJuIHJlcy5lbmQoKTtcbiAgICB9XG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcUG9ydGZvbGlvLVFcXFxccG9ydGZvbGlvLXdlYlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcUG9ydGZvbGlvLVFcXFxccG9ydGZvbGlvLXdlYlxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovUG9ydGZvbGlvLVEvcG9ydGZvbGlvLXdlYi92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcIkB0YWlsd2luZGNzcy92aXRlXCI7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tIFwibm9kZTp1cmxcIjtcblxuLy8gTG9hZCBlbnZpcm9ubWVudCB2YXJpYWJsZXMgc3luY2hyb25vdXNseSBpbnRvIHByb2Nlc3MuZW52IGF0IFZpdGUgc3RhcnR1cFxuY29uc3QgZW52ID0gbG9hZEVudihcImRldmVsb3BtZW50XCIsIHByb2Nlc3MuY3dkKCksIFwiXCIpO1xuaWYgKGVudi5OVklESUFfQVBJX0tFWSkge1xuICBwcm9jZXNzLmVudi5OVklESUFfQVBJX0tFWSA9IGVudi5OVklESUFfQVBJX0tFWTtcbn1cblxuLy8gQ3VzdG9tIFZpdGUgcGx1Z2luIHRvIGhhbmRsZSAvYXBpL2NoYXQgZHVyaW5nIGxvY2FsIGBucG0gcnVuIGRldmBcbmNvbnN0IGxvY2FsQXBpUGx1Z2luID0gKCkgPT4gKHtcbiAgbmFtZTogXCJsb2NhbC1hcGktaGFuZGxlclwiLFxuICBjb25maWd1cmVTZXJ2ZXIoc2VydmVyKSB7XG4gICAgc2VydmVyLm1pZGRsZXdhcmVzLnVzZShhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgIGlmIChyZXEudXJsID09PSBcIi9hcGkvY2hhdFwiIHx8IHJlcS51cmw/LnN0YXJ0c1dpdGgoXCIvYXBpL2NoYXQ/XCIpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gUmUtc3luYyBlbnYgdmFyaWFibGVzIGZyb20gLmVudiBvbiBlYWNoIHJlcXVlc3QgaWYgbW9kaWZpZWRcbiAgICAgICAgICBjb25zdCBjdXJyZW50RW52ID0gbG9hZEVudihzZXJ2ZXIuY29uZmlnLm1vZGUgfHwgXCJkZXZlbG9wbWVudFwiLCBwcm9jZXNzLmN3ZCgpLCBcIlwiKTtcbiAgICAgICAgICBpZiAoY3VycmVudEVudi5OVklESUFfQVBJX0tFWSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTlZJRElBX0FQSV9LRVkgPSBjdXJyZW50RW52Lk5WSURJQV9BUElfS0VZO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENvbGxlY3QgcmVxdWVzdCBib2R5IGNodW5rc1xuICAgICAgICAgIGxldCBib2R5ID0gXCJcIjtcbiAgICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIHJlcSkge1xuICAgICAgICAgICAgYm9keSArPSBjaHVuaztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVxLmJvZHkgPSBib2R5ID8gSlNPTi5wYXJzZShib2R5KSA6IHt9O1xuXG4gICAgICAgICAgLy8gTW9jayBWZXJjZWwgcmVzcG9uc2UgaGVscGVyc1xuICAgICAgICAgIHJlcy5zdGF0dXMgPSAoY29kZSkgPT4ge1xuICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSBjb2RlO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlcy5qc29uID0gKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICBjb25zdCBjaGF0TW9kdWxlID0gYXdhaXQgaW1wb3J0KFwiLi9hcGkvY2hhdC5qc1wiKTtcbiAgICAgICAgICByZXR1cm4gY2hhdE1vZHVsZS5kZWZhdWx0KHJlcSwgcmVzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIltWaXRlIExvY2FsIEFQSSBQcm94eSBFcnJvcl06XCIsIGVycik7XG4gICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBlcnIubWVzc2FnZSB8fCBcIkxvY2FsIGRldiBBUEkgaGFuZGxlciBlcnJvclwiIH0pKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG5leHQoKTtcbiAgICB9KTtcbiAgfSxcbn0pO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIHRhaWx3aW5kY3NzKCksIGxvY2FsQXBpUGx1Z2luKCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3NyY1wiLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7OztBQUFBLElBR2E7QUFIYjtBQUFBO0FBR08sSUFBTSxvQkFBb0I7QUFBQSxNQUMvQixVQUFVO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixPQUFPLENBQUMsMEJBQTBCLDRCQUE0Qix3QkFBd0Isc0JBQXNCO0FBQUEsUUFDNUcsaUJBQWlCO0FBQUEsUUFDakIsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLFFBQ1IsT0FBTztBQUFBLFVBQ0wsWUFBWTtBQUFBLFVBQ1osZUFBZTtBQUFBLFVBQ2YsbUJBQW1CO0FBQUEsUUFDckI7QUFBQSxNQUNGO0FBQUEsTUFFQSxXQUFXO0FBQUEsUUFDVDtBQUFBLFVBQ0UsUUFBUTtBQUFBLFVBQ1IsYUFBYTtBQUFBLFVBQ2IsT0FBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsTUFFQSxtQkFBbUI7QUFBQSxRQUNqQjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sU0FBUztBQUFBLFVBQ1Qsa0JBQWtCO0FBQUEsWUFDaEI7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFNBQVM7QUFBQSxVQUNULGtCQUFrQjtBQUFBLFlBQ2hCO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BRUEsU0FBUztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLFFBQ1gsT0FBTztBQUFBLFFBQ1AsV0FBVztBQUFBLFFBQ1gsVUFBVTtBQUFBLFFBQ1YsV0FBVztBQUFBLFFBQ1gsUUFBUTtBQUFBLFFBQ1IsVUFBVTtBQUFBLFFBQ1YsUUFBUTtBQUFBLE1BQ1Y7QUFB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

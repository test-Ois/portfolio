import OpenAI from "openai";
import { PORTFOLIO_CONTEXT } from "./portfolioContext.js";

// In-memory rate limiting map
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 30;

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

const SYSTEM_PROMPT = `You are Qayoom AI, the official personal AI assistant representing Qayoom Akhtar's developer portfolio.

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
   - Keep default answers concise (2–4 short paragraphs/sections).
   - Do NOT force every section into every single response unless the user specifically asks for full details or a complete breakdown.

6. Verified Fact Integrity:
   - Rely ONLY on verified facts in Qayoom's profile context.
   - Verified experience: "6+ months of experience" building production AI-integrated web applications as a Full Stack AI Engineer.
   - Verified education: B.Tech in CSE (2022-2026), Chandigarh University, Mohali.
   - Verified internships: Full Stack Development Intern at Infotech Service (React UI, API integration, 15-20% server response time reduction) and AI & ML Trainee at Chandigarh University.
   - If requested information is unavailable, state naturally: "I don't have those details available in Qayoom's profile."
   - NEVER fabricate fake companies, dates, degrees, or URLs.`;

export default async function handler(req, res) {
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
    if (trimmedMessage.length > 4000) {
      return res.status(400).json({ error: "Message exceeds maximum allowed length of 4000 characters." });
    }

    const apiKey = process.env.NVIDIA_API_KEY;
    if (!apiKey || apiKey.trim() === "" || apiKey === "your_actual_nvidia_key") {
      console.error("[NVIDIA Chat API Error] NVIDIA_API_KEY is missing or contains placeholder.");
      return res.status(500).json({
        error: "NVIDIA_API_KEY is missing or invalid. Please configure your NVIDIA_API_KEY environment variable.",
      });
    }

    const openai = new OpenAI({
      apiKey: apiKey,
      baseURL: "https://integrate.api.nvidia.com/v1",
    });

    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
    ];

    if (Array.isArray(conversationHistory)) {
      const validHistory = conversationHistory
        .slice(-8)
        .filter((item) => item && (item.role === "user" || item.role === "assistant") && typeof item.content === "string")
        .map((item) => ({ role: item.role, content: item.content.slice(0, 1500) }));

      messages.push(...validHistory);
    }

    messages.push({ role: "user", content: trimmedMessage });

    // Enable streaming response with Server-Sent Events (SSE)
    const completion = await openai.chat.completions.create({
      model: "nvidia/nemotron-3-ultra-550b-a55b",
      messages: messages,
      temperature: 0.3,
      top_p: 0.9,
      max_tokens: 1024,
      stream: true,
    });

    // Set streaming headers
    res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");

    for await (const chunk of completion) {
      // Stream only content delta (ignoring reasoning_content)
      const content = chunk.choices?.[0]?.delta?.content;
      if (content) {
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
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
      res.write(`data: ${JSON.stringify({ error: userFacingError })}\n\n`);
      return res.end();
    }
  }
}

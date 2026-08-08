// src/components/ProjectsSection.jsx
import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Tilt } from "react-tilt";
import { Reveal, revealItemVariants } from "./Reveal";

const projects = [
  {
    id: 1,
    title: "Xynox AI – AI Assistant Platform",
    description: "A production-grade AI assistant platform featuring multi-provider AI routing (Groq, NVIDIA, Cerebras) and real-time streaming (SSE). Implements RAG with PDF parsing, intelligent chunking, vector embeddings, and Qdrant vector DB integration.",
    image: "/projects/inboxAI.png",
    tags: ["React", "Express", "Qdrant", "Groq/NVIDIA AI", "SSE", "RAG"],
    demoUrl: "https://github.com/test-Ois/xynox-ai",
    githubUrl: "https://github.com/test-Ois/xynox-ai",
    accent: "#8254EE",
  },
  {
    id: 2,
    title: "InboxIQ AI – AI-Powered Email Intelligence Platform",
    description: "Full-stack AI-powered email productivity platform. Features email analysis, message prioritization, semantic categorization, intelligent spam/fraud detection using Gemini AI, and scalable REST APIs with PostgreSQL/Prisma.",
    image: "/projects/inboxAI.png",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Gemini AI"],
    demoUrl: "#",
    githubUrl: "https://github.com/test-Ois/inboxiq-ai",
    accent: "#00C2FF",
  },
  {
    id: 3,
    title: "Qyro – E-Commerce Platform",
    description: "A modern AI-powered e-commerce platform that enhances the shopping experience with intelligent product recommendations, AI-assisted search, secure authentication, responsive UI, and scalable full-stack MERN architecture.",
    image: "/projects/Qyro.png",
    tags: ["Next.js", "Node.js", "MongoDB", "Express.js", "Gemini AI"],
    demoUrl: "#",
    githubUrl: "https://github.com/test-Ois/qyro-ecommerce",
    accent: "#8254EE",
  },
  {
    id: 4,
    title: "Game Galaxy Hub – Real-Time Multiplayer Gaming Platform",
    description: "A real-time multiplayer gaming hub for Tic-Tac-Toe and Ludo. Implements low-latency WebSocket rooms, live synchronization, chat connectivity using Socket.io, and fallback AI logic.",
    image: "/projects/gameGalaxy.png",
    tags: ["Next.js", "TypeScript", "Socket.io", "Tailwind CSS"],
    demoUrl: "https://game-galaxy-hub.vercel.app/",
    githubUrl: "https://github.com/test-Ois/game-galaxy-hub",
    accent: "#00C2FF",
  },
];

export const ProjectsSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isReduced = useReducedMotion();
  const itemVariants = revealItemVariants(isReduced);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="projects" className="py-28 px-4 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(130,84,238,0.08), transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <div className="flex justify-center mb-4">
            <span className="section-label">Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center tracking-tight text-white">
            Featured{" "}
            <span style={{ background: "linear-gradient(135deg, #8254EE, #00C2FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Projects
            </span>
          </h2>
          <p className="text-center mb-14 max-w-2xl mx-auto leading-relaxed" style={{ color: "#82717B" }}>
            Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
          </p>
        </Reveal>

        <Reveal staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project) => {
            const CardContent = (
              <div className="group h-full flex flex-col rounded-2xl overflow-hidden transition-all duration-500"
                style={{
                  background: "rgba(59,53,60,0.18)",
                  border: "1px solid rgba(130,84,238,0.12)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${project.accent}55`;
                  e.currentTarget.style.boxShadow = `0 8px 40px ${project.accent}22, 0 2px 8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)`;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(130,84,238,0.12)";
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                  <img src={project.image} alt={project.title} loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: `linear-gradient(to top, rgba(9,9,9,0.7), transparent)` }}
                  />
                  {/* Gradient border top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
                  />
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-300"
                          style={{
                            background: "rgba(130,84,238,0.1)",
                            border: "1px solid rgba(130,84,238,0.2)",
                            color: "#8254EE",
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(130,84,238,0.2)"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(130,84,238,0.1)"; }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-base font-bold mb-2 text-left text-white leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm mb-4 text-left leading-relaxed" style={{ color: "#82717B" }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center pt-4"
                    style={{ borderTop: "1px solid rgba(130,84,238,0.1)" }}
                  >
                    <div className="flex space-x-3">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                        className="p-2.5 rounded-full transition-all duration-300"
                        style={{ background: "rgba(130,84,238,0.08)", border: "1px solid rgba(130,84,238,0.2)", color: "#82717B" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#8254EE"; e.currentTarget.style.boxShadow = "0 0 12px rgba(130,84,238,0.3)"; e.currentTarget.style.transform = "scale(1.1)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "#82717B"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "scale(1)"; }}
                        title="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="p-2.5 rounded-full transition-all duration-300"
                        style={{ background: "rgba(130,84,238,0.08)", border: "1px solid rgba(130,84,238,0.2)", color: "#82717B" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#8254EE"; e.currentTarget.style.boxShadow = "0 0 12px rgba(130,84,238,0.3)"; e.currentTarget.style.transform = "scale(1.1)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "#82717B"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "scale(1)"; }}
                        title="GitHub Repository"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                    <span className="text-xs font-mono" style={{ color: "rgba(130,84,238,0.5)" }}>
                      0{project.id}
                    </span>
                  </div>
                </div>
              </div>
            );

            return (
              <motion.div key={project.id} variants={itemVariants} className="h-full">
                {isMobile ? CardContent : (
                  <Tilt options={{ max: 8, scale: 1.01, speed: 300 }} className="h-full">
                    {CardContent}
                  </Tilt>
                )}
              </motion.div>
            );
          })}
        </Reveal>

        <Reveal delay={0.2} className="text-center mt-14">
          <a className="cosmic-button inline-flex items-center gap-2 mx-auto"
            target="_blank" rel="noopener noreferrer"
            href="https://github.com/test-Ois"
          >
            Check My Github <ArrowRight size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

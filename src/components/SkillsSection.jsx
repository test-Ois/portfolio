// src/components/SkillsSection.jsx
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Reveal, revealItemVariants } from "./Reveal";

const skills = [
  { name: "LLM Routing", level: 90, category: "ai-ml" },
  { name: "RAG & Vector DB", level: 85, category: "ai-ml" },
  { name: "Qdrant",      level: 85, category: "ai-ml" },
  { name: "Prompt Engineering", level: 90, category: "ai-ml" },
  { name: "Groq / NVIDIA AI", level: 85, category: "ai-ml" },
  { name: "React.js",    level: 90, category: "frontend" },
  { name: "Next.js",     level: 85, category: "frontend" },
  { name: "TypeScript",  level: 80, category: "frontend" },
  { name: "Tailwind CSS",level: 90, category: "frontend" },
  { name: "Node.js",     level: 85, category: "backend"  },
  { name: "Express.js",  level: 80, category: "backend"  },
  { name: "REST APIs & SSE", level: 90, category: "backend" },
  { name: "JWT & Firebase Auth", level: 85, category: "backend" },
  { name: "PostgreSQL & Prisma", level: 75, category: "backend" },
  { name: "MongoDB",     level: 75, category: "backend"  },
  { name: "Git / GitHub", level: 90, category: "tools"    },
  { name: "Docker",      level: 70, category: "tools"    },
  { name: "AWS & Vercel",level: 85, category: "tools"    },
  { name: "System Design",level: 80, category: "tools"    },
];

const categories = ["all", "ai-ml", "frontend", "backend", "tools"];

const SkillCard = ({ skill }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const radius = 36;
  const strokeWidth = 4.5;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference - (skill.level / 100) * circumference;
  const safeId = skill.name.toLowerCase().replace(/[^a-z0-9]/g, "-");

  return (
    <div
      ref={ref}
      className="glass-card glass-card-hover p-6 flex flex-col items-center justify-center text-center group"
    >
      {/* Circular Progress Ring */}
      <div className="relative w-24 h-24 flex items-center justify-center mb-4">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
          <defs>
            <linearGradient id={`grad-${safeId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#8254EE" />
              <stop offset="100%" stopColor="#00C2FF" />
            </linearGradient>
          </defs>
          {/* Track */}
          <circle cx="40" cy="40" r={radius}
            stroke="rgba(59,53,60,0.5)" strokeWidth={strokeWidth} fill="transparent"
          />
          {/* Progress */}
          <motion.circle cx="40" cy="40" r={radius}
            stroke={`url(#grad-${safeId})`}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: isInView ? targetOffset : circumference }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>
        {/* Percentage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-base font-bold text-white">{skill.level}%</span>
        </div>
      </div>

      <h3 className="font-semibold text-sm tracking-wide" style={{ color: "#C1CFC1" }}>
        {skill.name}
      </h3>
    </div>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const isReduced = useReducedMotion();
  const itemVariants = revealItemVariants(isReduced);

  const filteredSkills = skills.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  return (
    <section id="skills" className="py-28 px-4 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,194,255,0.06), transparent 70%)", filter: "blur(70px)", transform: "translateY(-50%)" }}
      />

      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <div className="flex justify-center mb-4">
            <span className="section-label">Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight text-white">
            My{" "}
            <span style={{ background: "linear-gradient(135deg, #8254EE, #00C2FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Skills
            </span>
          </h2>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat, key) => (
              <button key={key} onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all duration-300"
                style={activeCategory === cat ? {
                  background: "linear-gradient(135deg, #8254EE, #6d3fd4)",
                  color: "#ffffff",
                  boxShadow: "0 0 16px rgba(130,84,238,0.35)",
                  border: "1px solid rgba(130,84,238,0.5)",
                } : {
                  background: "rgba(59,53,60,0.2)",
                  color: "#82717B",
                  border: "1px solid rgba(130,84,238,0.1)",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) => { if (activeCategory !== cat) { e.currentTarget.style.color = "#C1CFC1"; e.currentTarget.style.borderColor = "rgba(130,84,238,0.3)"; } }}
                onMouseLeave={(e) => { if (activeCategory !== cat) { e.currentTarget.style.color = "#82717B"; e.currentTarget.style.borderColor = "rgba(130,84,238,0.1)"; } }}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Skills grid */}
        <Reveal staggerChildren={0.06} key={activeCategory}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {filteredSkills.map((skill, key) => (
            <motion.div key={`${skill.name}-${key}`} variants={itemVariants}>
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

// src/components/HeroSection.jsx
import { useRef, useState } from "react";
import { ArrowDown, Sparkles, ExternalLink } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, revealItemVariants } from "./Reveal";
import {
  SiReact, SiTailwindcss, SiVercel, SiGithub,
  SiMongodb, SiExpress, SiNodedotjs, SiJavascript,
  SiTypescript, SiNextdotjs,
} from "react-icons/si";

const techStack = [
  { name: "React",        Icon: SiReact,       color: "#61DAFB" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Vercel",       Icon: SiVercel,      color: "#C1CFC1" },
  { name: "GitHub",       Icon: SiGithub,      color: "#C1CFC1" },
  { name: "MongoDB",      Icon: SiMongodb,     color: "#47A248" },
  { name: "Express",      Icon: SiExpress,     color: "#C1CFC1" },
  { name: "Node.js",      Icon: SiNodedotjs,   color: "#68A063" },
  { name: "JavaScript",   Icon: SiJavascript,  color: "#F7DF1E" },
  { name: "TypeScript",   Icon: SiTypescript,  color: "#3178C6" },
  { name: "Next.js",      Icon: SiNextdotjs,   color: "#C1CFC1" },
];

const stats = [
  { value: "6+",  label: "Months Exp" },
  { value: "15+", label: "Projects Built" },
  { value: "15+", label: "Technologies" },
];

const MagneticButton = ({ children }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const move = (e) => {
    if (window.innerWidth < 768) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    setPos({ x: (e.clientX - (left + width / 2)) * 0.3, y: (e.clientY - (top + height / 2)) * 0.3 });
  };
  return (
    <motion.div ref={ref} onMouseMove={move} onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >{children}</motion.div>
  );
};

export const HeroSection = () => {
  const isReduced = useReducedMotion();
  const itemVariants = revealItemVariants(isReduced);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden">

      {/* ── Ambient orbs ── */}
      <motion.div
        className="absolute top-[5%] left-[3%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(130,84,238,0.18) 0%, transparent 70%)", filter: "blur(70px)", zIndex: 0 }}
        animate={{ x: [0, 60, -40, 0], y: [0, -60, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[5%] right-[3%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,194,255,0.08) 0%, transparent 70%)", filter: "blur(70px)", zIndex: 0 }}
        animate={{ x: [0, -50, 40, 0], y: [0, 50, -35, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <Reveal triggerOnLoad staggerChildren={0.11}
        className="container mx-auto flex flex-col items-center justify-center text-center z-10 max-w-5xl space-y-10"
      >
        {/* ── Badge ── */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
            style={{ border: "1px solid rgba(130,84,238,0.3)", background: "rgba(130,84,238,0.1)", backdropFilter: "blur(10px)" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#8254EE" }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#8254EE" }} />
            </span>
            <span className="text-sm font-medium" style={{ color: "#8254EE" }}>Open to opportunities</span>
          </div>
        </motion.div>

        {/* ── Greeting + Name ── */}
        <div className="flex flex-col items-center space-y-4 max-w-4xl">
          <motion.p variants={itemVariants}
            className="text-base tracking-[0.25em] uppercase font-light"
            style={{ color: "#82717B" }}
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1 variants={itemVariants}
            className="text-6xl md:text-8xl font-bold tracking-tight leading-none"
          >
            <span style={{
              background: "linear-gradient(135deg, #a78bfa 0%, #8254EE 40%, #00C2FF 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Qayoom Akhtar
            </span>
          </motion.h1>

          {/* ── Role typewriter ── */}
          <motion.h2 variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold flex items-center justify-center flex-wrap gap-3"
          >
            <span style={{ color: "#82717B", fontWeight: 300 }}>I&apos;m a</span>
            <span className="font-bold min-w-[290px] sm:min-w-[390px] text-left" style={{
              background: "linear-gradient(90deg, #8254EE, #00C2FF)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              <TypeAnimation
                sequence={["Full Stack AI Engineer", 2400, "React & Next.js Engineer", 2200, "RAG & LLM Specialist", 2200, "MERN Stack Developer", 2200]}
                speed={52} repeat={Infinity}
              />
            </span>
          </motion.h2>

          {/* ── Description ── */}
          <motion.p variants={itemVariants}
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#82717B" }}
          >
            Building{" "}
            <span style={{ color: "#8254EE", fontWeight: 500 }}>production AI-integrated web applications</span>{" "}
            and{" "}
            <span style={{ color: "#00C2FF", fontWeight: 500 }}>scalable RAG & LLM architectures</span>{" "}
            with modern technologies. Passionate about clean code, robust system design, and great UX.
          </motion.p>

          {/* ── CTA Buttons ── */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 pt-2">
            <MagneticButton>
              <a href="#projects" className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #8254EE, #6d3fd4)", boxShadow: "0 0 24px rgba(130,84,238,0.35)" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 44px rgba(130,84,238,0.6)"; e.currentTarget.style.transform = "scale(1.03)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 0 24px rgba(130,84,238,0.35)"; e.currentTarget.style.transform = "scale(1)"; }}
              >
                <Sparkles size={15} />
                View My Work
              </a>
            </MagneticButton>

            <MagneticButton>
              <a href="https://drive.google.com/drive/u/0/folders/1WayKbomGqVUlmhQbi9Y2GgXN-Q2V1IDL"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
                style={{ border: "1px solid rgba(0,194,255,0.35)", background: "rgba(0,194,255,0.07)", color: "#00C2FF", backdropFilter: "blur(10px)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,194,255,0.15)"; e.currentTarget.style.boxShadow = "0 0 24px rgba(0,194,255,0.2)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,194,255,0.07)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                Download CV <ExternalLink size={13} className="opacity-70" />
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        {/* ── Stats ── */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-10 pt-1">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-3xl md:text-4xl font-bold" style={{
                background: "linear-gradient(135deg, #8254EE, #00C2FF)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>{s.value}</span>
              <span className="text-xs tracking-wide" style={{ color: "#82717B" }}>{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* ── Tech Marquee ── */}
        <motion.div variants={itemVariants} className="w-full relative overflow-hidden py-5">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #090909, transparent)" }}
          />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #090909, transparent)" }}
          />
          <div className="marquee-track flex gap-4 whitespace-nowrap">
            {[...techStack, ...techStack].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-2.5 px-4 py-2 rounded-full shrink-0 transition-all duration-300"
                style={{ background: "rgba(59,53,60,0.25)", border: "1px solid rgba(130,84,238,0.1)", backdropFilter: "blur(8px)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(130,84,238,0.4)"; e.currentTarget.style.boxShadow = "0 0 14px rgba(130,84,238,0.15)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(130,84,238,0.1)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <tech.Icon size={16} style={{ color: tech.color, opacity: 0.9 }} />
                <span className="text-sm font-medium" style={{ color: "#C1CFC1" }}>{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Reveal>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#82717B" }}>Scroll</span>
        <div className="relative flex items-center justify-center">
          <motion.div className="absolute rounded-full"
            animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
            style={{ width: 36, height: 36, border: "1px solid rgba(130,84,238,0.5)" }}
          />
          <motion.div className="flex items-center justify-center w-9 h-9 rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ border: "1px solid rgba(130,84,238,0.4)" }}
          >
            <ArrowDown className="h-4 w-4" style={{ color: "#8254EE" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
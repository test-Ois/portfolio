// src/components/Footer.jsx
import { ArrowUp, Github, Linkedin, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative mt-24 py-16 px-6 overflow-hidden"
      style={{
        background: "rgba(9,9,9,0.98)",
        borderTop: "1px solid rgba(130,84,238,0.15)",
      }}
    >
      {/* Animated gradient top border */}
      <motion.div className="absolute top-0 left-0 right-0 h-[1.5px] z-20"
        style={{ background: "linear-gradient(to right, transparent, #8254EE, #00C2FF, #8254EE, transparent)", backgroundSize: "200% 100%" }}
        animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{ background: "radial-gradient(circle at 30% 50%, rgba(130,84,238,0.04), transparent 50%)" }}
      />
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{ background: "radial-gradient(circle at 70% 80%, rgba(0,194,255,0.03), transparent 40%)" }}
      />

      <Reveal duration={0.8} y={30} blur={8} className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 text-center sm:text-left">

          {/* Brand column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-5 space-y-5 flex flex-col items-center sm:items-start">
            <h3 className="text-2xl font-bold tracking-tight" style={{
              background: "linear-gradient(135deg, #8254EE, #00C2FF)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Qayoom Akhtar
            </h3>
            <p className="text-sm font-sans leading-relaxed max-w-md" style={{ color: "#82717B" }}>
              Full Stack AI Engineer specializing in production AI-integrated web applications, LLM/RAG architectures, and scalable backends.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium select-none"
              style={{ background: "rgba(130,84,238,0.08)", border: "1px solid rgba(130,84,238,0.2)", color: "#82717B" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#22c55e" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#22c55e" }} />
              </span>
              Available for Full-Time Opportunities
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-3 space-y-4 lg:pl-8">
            <h4 className="font-bold text-xs uppercase tracking-widest" style={{ color: "#82717B" }}>Navigation</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "#hero" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="transition-colors duration-300 font-medium"
                    style={{ color: "#82717B" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#8254EE"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#82717B"; }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-4 space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-widest" style={{ color: "#82717B" }}>Connect</h4>
            <p className="text-sm font-sans leading-relaxed max-w-sm" style={{ color: "#82717B" }}>
              Let&apos;s build something together. Reach out on social channels or download my professional resume.
            </p>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start pt-2">
              {[
                { name: "GitHub",   icon: Github,   href: "https://github.com/test-Ois", title: "Visit GitHub Profile" },
                { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/qayoom-akhtar", title: "Connect on LinkedIn" },
                { name: "Email",    icon: Mail,     href: "mailto:qayoomakhtar72@gmail.com", title: "Send an Email" },
                { name: "Resume",   icon: FileText, href: "https://drive.google.com/drive/u/0/folders/1WayKbomGqVUlmhQbi9Y2GgXN-Q2V1IDL", title: "Download Resume" },
              ].map(({ name, icon: IconComponent, href, title }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" title={title}
                  className="p-3 rounded-full transition-all duration-300"
                  style={{ background: "rgba(59,53,60,0.3)", border: "1px solid rgba(130,84,238,0.15)", color: "#82717B" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#8254EE"; e.currentTarget.style.borderColor = "rgba(130,84,238,0.5)"; e.currentTarget.style.boxShadow = "0 0 16px rgba(130,84,238,0.3)"; e.currentTarget.style.transform = "translateY(-2px) scale(1.1)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#82717B"; e.currentTarget.style.borderColor = "rgba(130,84,238,0.15)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0) scale(1)"; }}
                >
                  <IconComponent size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8" style={{ borderTop: "1px solid rgba(130,84,238,0.1)" }} />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-xs" style={{ color: "#82717B" }}>
          <p>© 2026 Qayoom Akhtar. All Rights Reserved.</p>
          <p className="hidden md:block select-none">
            Built with React • JavaScript • Tailwind CSS • Framer Motion
          </p>
          <motion.button onClick={scrollToTop}
            whileHover={{ y: -4, scale: 1.1 }} whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full transition-all duration-300 cursor-pointer"
            style={{ background: "rgba(130,84,238,0.08)", border: "1px solid rgba(130,84,238,0.2)", color: "#8254EE" }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 16px rgba(130,84,238,0.4)"; e.currentTarget.style.background = "rgba(130,84,238,0.18)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.background = "rgba(130,84,238,0.08)"; }}
            title="Back to Top" aria-label="Scroll to top"
          >
            <ArrowUp size={17} />
          </motion.button>
        </div>
      </Reveal>
    </footer>
  );
};

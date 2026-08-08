// src/components/ContactSection.jsx
import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const LeetCodeIcon = ({ className, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
    fill="currentColor" className={className} {...props}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);
LeetCodeIcon.propTypes = { className: PropTypes.string };

const inputClass = "w-full px-4 py-3.5 rounded-xl text-sm font-sans tracking-wide transition-all duration-300 resize-none caret-[#8254EE] outline-none";
const inputStyle = {
  background: "rgba(59,53,60,0.25)",
  border: "1px solid rgba(130,84,238,0.15)",
  color: "#C1CFC1",
  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.3)",
};
const inputFocusStyle = {
  borderColor: "rgba(130,84,238,0.55)",
  boxShadow: "0 0 0 3px rgba(130,84,238,0.12), inset 0 1px 2px rgba(0,0,0,0.3)",
  background: "rgba(59,53,60,0.35)",
};

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });
  const formRef = useRef();
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleCardMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRotateX(-((y - rect.height / 2) / rect.height) * 2.2);
    setRotateY(((x - rect.width / 2) / rect.width) * 2.2);
  };
  const handleCardMouseLeave = () => { setRotateX(0); setRotateY(0); };

  const handleTextareaChange = (e) => {
    setFormValues({ ...formValues, message: e.target.value });
    const ta = e.target;
    ta.style.height = "auto";
    ta.style.height = `${Math.max(ta.scrollHeight, 120)}px`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formValues;
    if (!name || !email || !message) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      toast({ title: "Validation Error", description: "Please fill in all fields before sending.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setIsSuccess(true);
      toast({ title: "Message sent!", description: "Thank you for your message. I'll get back to you soon." });
      setFormValues({ name: "", email: "", message: "" });
      formRef.current.reset();
    } catch (error) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      toast({ title: "Failed to send message", description: error?.text || error?.message || "Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { href: "https://www.linkedin.com/in/qayoom-akhtar", Icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/test-Ois", Icon: Github, label: "GitHub" },
    { href: "#", Icon: Instagram, label: "Instagram" },
    { href: "#", Icon: LeetCodeIcon, label: "LeetCode" },
  ];

  return (
    <section id="contact" className="py-28 px-4 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(130,84,238,0.08), transparent)" }}
      />

      <Reveal className="container mx-auto max-w-5xl">
        <div className="flex justify-center mb-4">
          <span className="section-label">Contact</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
          Get In{" "}
          <span style={{ background: "linear-gradient(135deg, #8254EE, #00C2FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Touch
          </span>
        </h2>
        <p className="text-center mb-14 max-w-2xl mx-auto leading-relaxed" style={{ color: "#82717B" }}>
          Full Stack Engineer passionate about scalable applications, AI solutions, and modern web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left — Contact Info */}
          <div className="space-y-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-left text-white">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { Icon: Mail, label: "Email", value: "qayoomakhtar72@gmail.com", href: "mailto:qayoomakhtar72@gmail.com" },
                  { Icon: Phone, label: "Phone", value: "+91 9798413263", href: "tel:+919798413263" },
                  { Icon: MapPin, label: "Location", value: "Mohali, Punjab, India", href: null },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl shrink-0"
                      style={{ background: "rgba(130,84,238,0.1)", border: "1px solid rgba(130,84,238,0.2)" }}
                    >
                      <Icon className="h-5 w-5" style={{ color: "#8254EE" }} />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-sm text-white mb-0.5">{label}</h4>
                      {href ? (
                        <a href={href} className="text-sm transition-colors duration-300"
                          style={{ color: "#82717B" }}
                          onMouseEnter={(e) => { e.currentTarget.style.color = "#8254EE"; }}
                          onMouseLeave={(e) => { e.currentTarget.style.color = "#82717B"; }}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm" style={{ color: "#82717B" }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="pt-4 text-left">
              <h4 className="font-semibold text-sm text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-3">
                {socials.map(({ href, Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="p-2.5 rounded-full transition-all duration-300"
                    style={{ background: "rgba(59,53,60,0.35)", border: "1px solid rgba(130,84,238,0.15)", color: "#82717B" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#8254EE"; e.currentTarget.style.borderColor = "rgba(130,84,238,0.5)"; e.currentTarget.style.boxShadow = "0 0 14px rgba(130,84,238,0.25)"; e.currentTarget.style.transform = "translateY(-2px) scale(1.1)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#82717B"; e.currentTarget.style.borderColor = "rgba(130,84,238,0.15)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0) scale(1)"; }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form Card */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            animate={isShaking
              ? { x: [-5, 5, -5, 5, -2, 2, 0], rotateX: 0, rotateY: 0 }
              : { rotateX, rotateY, y: rotateX || rotateY ? -4 : 0 }
            }
            transition={{ type: "spring", stiffness: 220, damping: 25, mass: 0.4 }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            className="relative rounded-2xl overflow-hidden flex flex-col text-left"
            {...{ style: { background: "rgba(59,53,60,0.2)", border: "1px solid rgba(130,84,238,0.18)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", boxShadow: "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)", transformStyle: "preserve-3d", perspective: 1000 } }}
          >
            {/* Ambient inside card */}
            <motion.div className="absolute top-0 left-0 w-48 h-48 rounded-full pointer-events-none -z-10"
              style={{ background: "radial-gradient(circle, rgba(130,84,238,0.08), transparent 70%)", filter: "blur(30px)" }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Terminal header */}
            <div className="flex items-center justify-between px-6 py-3.5 select-none"
              style={{ background: "rgba(130,84,238,0.05)", borderBottom: "1px solid rgba(130,84,238,0.12)" }}
            >
              <div className="flex space-x-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f56" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#27c93f" }} />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-mono font-semibold" style={{ color: "#82717B" }}>contact.me</span>
                <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.2, repeat: Infinity }}
                  className="w-1 h-3 rounded-sm" style={{ background: "#8254EE" }}
                />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#27c93f" }} />
                <span className="text-[10px] font-mono" style={{ color: "#82717B" }}>online</span>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 flex-1 flex flex-col justify-center">
              <form ref={formRef} className="space-y-5" onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div className="relative">
                  <input type="text" id="name" name="name" required
                    value={formValues.name}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                    className={inputClass} placeholder="Your Name"
                    style={focusedField === "name" ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
                  />
                  <label htmlFor="name" className={cn(
                    "absolute left-4 pointer-events-none transition-all duration-200 font-mono select-none text-xs",
                    focusedField === "name" || formValues.name.length > 0
                      ? "-top-2 left-3 px-1.5 rounded" : "top-3.5"
                  )}
                    style={focusedField === "name" || formValues.name.length > 0
                      ? { color: "#8254EE", background: "#090909", border: "1px solid rgba(130,84,238,0.2)" }
                      : { color: "#82717B" }
                    }
                  >name...</label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input type="email" id="email" name="email" required
                    value={formValues.email}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                    className={inputClass} placeholder="Your Email"
                    style={focusedField === "email" ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
                  />
                  <label htmlFor="email" className={cn(
                    "absolute left-4 pointer-events-none transition-all duration-200 font-mono select-none text-xs",
                    focusedField === "email" || formValues.email.length > 0
                      ? "-top-2 left-3 px-1.5 rounded" : "top-3.5"
                  )}
                    style={focusedField === "email" || formValues.email.length > 0
                      ? { color: "#8254EE", background: "#090909", border: "1px solid rgba(130,84,238,0.2)" }
                      : { color: "#82717B" }
                    }
                  >email address...</label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea id="message" name="message" required rows={5}
                    value={formValues.message}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    onChange={handleTextareaChange}
                    className={cn(inputClass, "min-h-[120px] scrollbar-thin scrollbar-thumb-[#8254EE]/20 scrollbar-track-transparent")}
                    placeholder="Your Message"
                    style={focusedField === "message" ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
                  />
                  <label htmlFor="message" className={cn(
                    "absolute left-4 pointer-events-none transition-all duration-200 font-mono select-none text-xs",
                    focusedField === "message" || formValues.message.length > 0
                      ? "-top-2 left-3 px-1.5 rounded" : "top-3.5"
                  )}
                    style={focusedField === "message" || formValues.message.length > 0
                      ? { color: "#8254EE", background: "#090909", border: "1px solid rgba(130,84,238,0.2)" }
                      : { color: "#82717B" }
                    }
                  >Write message...</label>
                </div>

                {/* Submit */}
                <motion.button type="submit" disabled={isSubmitting}
                  whileHover={{ y: -1, scale: 1.01 }} whileTap={{ scale: 0.98 }}
                  className="group w-full py-3.5 px-6 rounded-xl font-semibold text-sm tracking-wide text-white transition-all duration-300 overflow-hidden flex items-center justify-center gap-2 cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #00C2FF, #00a8e0)",
                    boxShadow: "0 2px 16px rgba(0,194,255,0.25)",
                    color: "#090909",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 4px 28px rgba(0,194,255,0.45)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,194,255,0.25)"; }}
                >
                  <span style={{ color: "#090909" }}>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <motion.span className="inline-block"
                    animate={isSubmitting ? { rotate: 360 } : {}}
                    transition={isSubmitting ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
                  >
                    <Send size={14} style={{ color: "#090909" }} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.span>
                </motion.button>
              </form>
            </div>

            {/* Success overlay */}
            {isSuccess && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8 z-20 text-center rounded-2xl"
                style={{ background: "rgba(9,9,9,0.95)", backdropFilter: "blur(20px)" }}
              >
                <div className="w-16 h-16 flex items-center justify-center mb-5" style={{ color: "#8254EE" }}>
                  <svg className="w-full h-full" viewBox="0 0 52 52">
                    <motion.circle cx="26" cy="26" r="24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    <motion.path fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                      d="M16 27l7 7 14-14"
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.5, ease: "easeInOut" }}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Message Sent</h3>
                <p className="text-xs max-w-xs mb-8 leading-relaxed" style={{ color: "#82717B" }}>
                  Thank you for reaching out. Your message was delivered successfully, and I will get back to you shortly.
                </p>
                <motion.button onClick={() => setIsSuccess(false)}
                  whileHover={{ y: -1, scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer"
                  style={{ border: "1px solid rgba(130,84,238,0.3)", background: "rgba(130,84,238,0.1)", color: "#8254EE" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#8254EE"; e.currentTarget.style.color = "#ffffff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(130,84,238,0.1)"; e.currentTarget.style.color = "#8254EE"; }}
                >
                  $ write new_message
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
};
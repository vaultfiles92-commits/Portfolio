import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import jpPhoto from "@assets/Untitled_design_20260116_074411_0000_1778088344072.jpg";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "services", label: "Expertise" },
  { id: "skills", label: "Tools" },
  { id: "testimonials", label: "Clientele" },
  { id: "contact", label: "Contact" },
];

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col h-full px-10 xl:px-14 py-14 justify-between bg-background border-r border-border">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-8">
          <img
            src={jpPhoto}
            alt="Jefferson Perolino"
            className="w-28 h-28 rounded-full object-cover object-top border border-border shadow-sm"
          />
        </div>

        <h1 className="font-serif text-4xl xl:text-5xl italic leading-[1.15] mb-3 lowercase tracking-tight">
          jefferson<br />perolino
        </h1>

        <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-10 font-sans">
          Virtual Assistant &amp; Strategist
        </p>

        <nav className="space-y-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`block w-full text-left text-sm py-1.5 transition-colors duration-200 font-sans ${
                activeSection === link.id
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="space-y-4"
      >
        <Button
          onClick={() => scrollTo("contact")}
          className="w-full rounded-full text-sm"
        >
          Request a Consultation
        </Button>
        <p className="text-xs text-muted-foreground break-all">
          jeffersonperolino04@gmail.com
        </p>
      </motion.div>
    </div>
  );
}

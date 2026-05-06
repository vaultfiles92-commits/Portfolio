import { useState, useEffect } from "react";
import { MapPin, Linkedin, Mail } from "lucide-react";
import jpPhoto from "@assets/Untitled_design_20260116_074411_0000_1778088344072.jpg";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "samples", label: "Samples" },
  { id: "contact", label: "Contact" },
];

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("about");

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
    <div className="flex flex-col h-full px-8 xl:px-10 py-12 bg-background border-r border-border">
      <div className="flex flex-col items-center text-center gap-4">
        <img
          src={jpPhoto}
          alt="Jefferson Perolino"
          className="w-32 h-32 rounded-full object-cover object-top"
        />

        <div>
          <h1 className="font-serif italic text-3xl xl:text-4xl leading-[1.2] mb-2">
            Jefferson<br />Perolino
          </h1>
          <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-sans mb-2">
            Virtual Assistant
          </p>
          <p className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3 shrink-0" />
            Iloilo City, Philippines
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-secondary-foreground/20 bg-secondary text-secondary-foreground font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
          Available for new clients
        </span>
      </div>

      <nav className="mt-10 flex flex-col gap-1">
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className={`text-left text-sm py-1 transition-all duration-200 font-sans ${
              activeSection === link.id
                ? "text-foreground font-semibold"
                : "text-muted-foreground hover:text-foreground font-normal"
            }`}
          >
            {link.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-8 flex items-center gap-3">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          title="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="mailto:jeffersonperolino04@gmail.com"
          className="text-muted-foreground hover:text-foreground transition-colors"
          title="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}

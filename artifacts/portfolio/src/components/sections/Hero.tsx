import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const TITLES = [
  "Virtual Assistant",
  "Detail Oriented",
  "Financial Manager",
  "Professional Writer",
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 45;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

export function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "waiting">("typing");

  useEffect(() => {
    const target = TITLES[titleIndex];

    if (phase === "typing") {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), TYPING_SPEED);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("deleting"), PAUSE_AFTER_TYPE);
        return () => clearTimeout(t);
      }
    }

    if (phase === "deleting") {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), DELETING_SPEED);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setTitleIndex((i) => (i + 1) % TITLES.length);
          setPhase("typing");
        }, PAUSE_AFTER_DELETE);
        return () => clearTimeout(t);
      }
    }
  }, [displayed, phase, titleIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="px-10 xl:px-16 pt-16 pb-16">
      <div className="max-w-2xl">
        <h2 className="font-serif italic text-4xl xl:text-5xl mb-6 min-h-[1.3em] leading-tight">
          {displayed}
          <span className="inline-block w-[2px] h-[0.85em] bg-foreground ml-1 align-middle animate-pulse" />
        </h2>

        <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
          A self-driven virtual assistant from the Philippines helping clients
          stay organized, financially sound, and professionally represented
          — all remotely.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() => scrollTo("contact")}
            className="rounded-full px-6 h-10 text-sm font-medium"
          >
            Get in touch
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollTo("samples")}
            className="rounded-full px-6 h-10 text-sm font-medium bg-transparent"
          >
            View work
          </Button>
        </div>
      </div>
    </section>
  );
}

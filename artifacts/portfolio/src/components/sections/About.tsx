import { motion } from "framer-motion";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-sans shrink-0">
        {children}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

export { SectionLabel };

export function About() {
  return (
    <section id="about" className="px-10 xl:px-16 py-14 border-t border-border">
      <SectionLabel>About</SectionLabel>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="space-y-5 text-[15px] leading-relaxed text-foreground max-w-2xl"
      >
        <p>
          I'm Jefferson Perolino, a self-driven virtual assistant based in the Philippines
          with a strong background in financial management, professional writing,
          and administrative support. I help clients and businesses stay organized,
          financially sound, and professionally represented — all remotely.
        </p>
        <p>
          My approach is simple: I treat every task as if it were my own business. I
          bring attention to detail, clear communication, and a genuine commitment
          to quality to everything I handle — from managing accounts to drafting
          polished documents.
        </p>
      </motion.div>
    </section>
  );
}

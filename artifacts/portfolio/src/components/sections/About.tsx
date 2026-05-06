import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-6">A commitment to excellence, in every ledger and letter.</h2>
            <div className="w-12 h-1 bg-secondary mb-8" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-primary-foreground/80 text-lg leading-relaxed"
          >
            <p>
              I believe that true professional support goes beyond mere task execution. It requires a profound understanding of a client's business rhythm, a meticulous eye for detail, and the discretion of a trusted advisor.
            </p>
            <p>
              With specialized expertise in financial management and professional writing, I serve as a strategic partner to those who demand precision. Whether it is reconciling complex accounts or drafting critical business correspondence, my approach is defined by accuracy, confidentiality, and an unwavering standard of quality.
            </p>
            <p>
              Your time is your most valuable asset. My mandate is to protect it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

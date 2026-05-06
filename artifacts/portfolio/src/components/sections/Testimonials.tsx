import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Jefferson brought a level of financial clarity to our agency that we had been missing for years. His reporting is impeccable, and his strategic insights have directly contributed to our bottom line.",
    author: "Sarah Jenkins",
    title: "CEO, Nexus Communications"
  },
  {
    quote: "Finding someone who can balance meticulous bookkeeping with crafting compelling executive proposals is rare. Jefferson handles both with an effortless professionalism that makes him indispensable to our team.",
    author: "Marcus Thorne",
    title: "Managing Partner, Thorne & Associates"
  },
  {
    quote: "From the moment Jefferson took over my calendar and inbox, I gained back 15 hours a week. His discretion and judgment in handling sensitive client communications are unmatched.",
    author: "Elena Rostova",
    title: "Independent Consultant"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Clientele</h2>
          <p className="text-muted-foreground">Trusted by leaders who value precision.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="p-8 bg-card rounded-2xl border border-border relative"
            >
              <div className="text-secondary text-6xl font-serif absolute top-4 left-6 opacity-20">"</div>
              <p className="relative z-10 text-foreground/80 italic mb-8 leading-relaxed pt-4">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-bold font-serif">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

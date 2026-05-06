import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "./About";

const samples = [
  {
    category: "Finance",
    title: "Monthly Budget Report",
    description: "Financial summary with expense breakdown and variance analysis.",
    bg: "bg-blue-50",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    category: "Writing",
    title: "Business Proposal Letter",
    description: "Formal client proposal with executive summary and pricing structure.",
    bg: "bg-emerald-50",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    category: "Finance",
    title: "Payroll Spreadsheet Template",
    description: "Automated Excel template for tracking employee hours and computing salaries.",
    bg: "bg-violet-50",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    category: "Research",
    title: "Marketing Research Report",
    description: "Competitor analysis and market overview compiled for a startup client.",
    bg: "bg-orange-50",
    badge: "bg-orange-100 text-orange-700",
  },
];

export function Samples() {
  return (
    <section id="samples" className="px-10 xl:px-16 py-14 border-t border-border">
      <SectionLabel>Work Samples</SectionLabel>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        {samples.map((sample, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-xl border border-border overflow-hidden flex flex-col"
          >
            <div className={`${sample.bg} h-28 flex items-start p-3`}>
              <span className={`text-[10px] tracking-[0.15em] uppercase font-semibold px-2.5 py-1 rounded-full ${sample.badge}`}>
                {sample.category}
              </span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-sans font-semibold text-[15px] mb-1">{sample.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{sample.description}</p>
              <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:gap-2 transition-all duration-200 w-fit">
                View Sample <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

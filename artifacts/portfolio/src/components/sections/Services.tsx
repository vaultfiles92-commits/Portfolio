import { motion } from "framer-motion";
import { Calculator, PenTool, Calendar, Search } from "lucide-react";
import { SectionLabel } from "./About";

const services = [
  {
    icon: <Calculator className="h-5 w-5" />,
    title: "Financial Management",
    description:
      "Bookkeeping, budget tracking, expense reporting, payroll assistance, and financial record organization.",
  },
  {
    icon: <PenTool className="h-5 w-5" />,
    title: "Professional Writing",
    description:
      "Business letters, email drafts, reports, proposals, and content writing tailored to your audience.",
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    title: "Administrative Support",
    description:
      "Calendar management, data entry, document preparation, email management, and task coordination.",
  },
  {
    icon: <Search className="h-5 w-5" />,
    title: "Research & Analysis",
    description:
      "Market research, competitor analysis, data gathering, and summarizing findings into actionable reports.",
  },
];

export function Services() {
  return (
    <section id="services" className="px-10 xl:px-16 py-14 border-t border-border">
      <SectionLabel>Services</SectionLabel>

      <div className="space-y-8 max-w-2xl">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex gap-4"
          >
            <div className="mt-0.5 text-muted-foreground shrink-0">
              {service.icon}
            </div>
            <div>
              <h3 className="font-sans font-semibold text-[15px] mb-1">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

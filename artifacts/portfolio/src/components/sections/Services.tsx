import { motion } from "framer-motion";
import { Calculator, PenTool, Calendar, Users } from "lucide-react";

const services = [
  {
    icon: <Calculator className="h-6 w-6" />,
    title: "Financial Management",
    description: "Rigorous attention to your financial health. Including comprehensive bookkeeping, budget modeling, precise expense tracking, and strategic financial reporting to inform your decisions.",
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Professional Writing",
    description: "Articulate and persuasive communication. I craft compelling business correspondence, detailed reports, and persuasive proposals, complemented by meticulous proofreading and editing.",
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Executive Assistance",
    description: "Flawless operational support. Strategic calendar and inbox management, comprehensive data entry, in-depth research, and proactive administrative coordination.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Client Relations",
    description: "Representing your brand with poise. Delivering exceptional customer service, timely follow-ups, and structured CRM management to nurture your most valuable relationships.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function Services() {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            className="text-3xl md:text-5xl font-serif mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Areas of Expertise
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Delivering high-caliber support across the essential pillars of your business operations.
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="p-8 md:p-10 rounded-2xl bg-card border border-border group hover:border-secondary transition-colors duration-500"
            >
              <div className="h-12 w-12 rounded-full bg-primary/5 text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

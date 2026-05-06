import { motion } from "framer-motion";

const skills = [
  "QuickBooks",
  "Microsoft Excel",
  "Google Sheets",
  "Financial Reporting",
  "Budgeting",
  "Microsoft Office Suite",
  "Google Workspace",
  "Business Writing",
  "Proofreading",
  "Slack",
  "Trello",
  "Asana",
  "Zoom",
  "Canva",
  "DocuSign",
  "CRM Management"
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <motion.h2 
          className="text-2xl font-serif text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Mastery of the tools that power modern business
        </motion.h2>
      </div>
      
      {/* Marquee effect */}
      <div className="relative flex overflow-x-hidden w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-card to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-card to-transparent pointer-events-none" />
        
        <motion.div
          className="flex whitespace-nowrap items-center py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {/* Duplicate array for seamless loop */}
          {[...skills, ...skills].map((skill, index) => (
            <div 
              key={index}
              className="mx-6 md:mx-10 text-xl md:text-3xl font-serif opacity-40 hover:opacity-100 hover:text-secondary transition-all duration-300 cursor-default"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { SectionLabel } from "./About";

const skillGroups = [
  {
    category: "Financial",
    skills: ["QuickBooks", "Microsoft Excel", "Google Sheets", "Budget Tracking", "Bookkeeping"],
  },
  {
    category: "Writing",
    skills: ["Business Writing", "Proofreading", "Email Communication", "Report Writing", "Proposal Writing"],
  },
  {
    category: "Administrative",
    skills: ["Google Workspace", "Microsoft Office", "Trello", "Notion", "Slack", "Zoom"],
  },
  {
    category: "Soft Skills",
    skills: ["Attention to Detail", "Time Management", "Communication", "Reliability", "Problem Solving"],
  },
];

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full border border-border text-[13px] text-foreground font-sans">
      {label}
    </span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="px-10 xl:px-16 py-14 border-t border-border">
      <SectionLabel>Skills &amp; Tools</SectionLabel>

      <div className="space-y-7 max-w-2xl">
        {skillGroups.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="grid grid-cols-[7rem_1fr] gap-4 items-start"
          >
            <span className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground font-sans pt-1">
              {group.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Pill key={skill} label={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

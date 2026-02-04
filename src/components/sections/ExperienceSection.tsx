import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    year: "2024",
    title: "Senior Developer",
    company: "Tech Company",
    description: "Leading development of innovative web applications.",
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    company: "Startup Inc.",
    description: "Built scalable solutions from concept to deployment.",
  },
  {
    year: "2020",
    title: "Junior Developer",
    company: "Agency Co.",
    description: "Started my journey in professional web development.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-container bg-card">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
            Journey
          </p>
          <h2 className="section-title">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2 ring-4 ring-background" />

              <div className={`${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <span className="text-primary font-heading text-lg">{exp.year}</span>
                <h3 className="text-xl font-semibold text-foreground mt-2">{exp.title}</h3>
                <p className="text-secondary font-medium">{exp.company}</p>
                <p className="text-muted-foreground mt-2">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

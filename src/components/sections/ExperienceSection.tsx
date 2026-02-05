import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    year: "2024",
    title: "GTM and Operations Associate",
    company: "DriveX Network",
    description: "Led GTM execution for AI simulation platform, building $2.35M qualified pipeline. Built Clay-powered outbound engine increasing qualified pipeline by 20%.",
  },
  {
    year: "2024",
    title: "Graduate Assistant",
    company: "University of Maryland Baltimore County",
    description: "Running targeted outreach campaigns and maintaining back-office data systems using SQL to optimize tutor and session coverage.",
  },
  {
    year: "2022",
    title: "Founding Head of Strategy – Growth",
    company: "Sunya IAS",
    description: "4th hire, owned institutional GTM strategy. Delivered 45% YoY revenue growth and 30+ institutional customers through integrated demand generation.",
  },
  {
    year: "2020",
    title: "Category Operations Associate",
    company: "Unacademy",
    description: "Drove growth for Iconic subscription program, adding 5,000 subscribers and ~$1.5M in revenue while improving customer satisfaction by 30%.",
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
              key={`${exp.year}-${exp.company}`}
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

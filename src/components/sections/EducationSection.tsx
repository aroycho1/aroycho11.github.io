import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";
import nitLogo from "@/assets/nit-durgapur-logo.png";
import umbcLogo from "@/assets/umbc-logo.png";
import flagIndia from "@/assets/flag-india.png";
import flagUSA from "@/assets/flag-usa.png";

const education = [
  {
    university: "University of Maryland Baltimore County",
    degree: "M.S. in Engineering Management",
    period: "2023 - 2025",
    gpa: "3.83 GPA",
    logo: umbcLogo,
    flag: flagUSA,
    country: "USA",
  },
  {
    university: "National Institute of Technology, Durgapur",
    degree: "B.Tech in Civil Engineering",
    period: "2016 - 2020",
    logo: nitLogo,
    flag: flagIndia,
    country: "India",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-container">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
            Academic Background
          </p>
          <h2 className="section-title">Education</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.university}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              {/* Country Flag Badge */}
              <div className="absolute top-4 right-4">
                <img 
                  src={edu.flag} 
                  alt={`${edu.country} flag`}
                  className="w-8 h-5 rounded object-cover shadow-sm"
                />
              </div>

              <div className="flex items-start gap-4">
                {/* University Logo */}
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-muted flex items-center justify-center overflow-hidden">
                  <img 
                    src={edu.logo} 
                    alt={`${edu.university} logo`}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground leading-tight mb-1">
                    {edu.university}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-2">
                    {edu.degree}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{edu.period}</span>
                    {edu.gpa && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <span className="text-secondary font-medium">{edu.gpa}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

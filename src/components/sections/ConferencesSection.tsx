import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar } from "lucide-react";
import actlaLogo from "@/assets/actla-logo.webp";
import mdclcaLogo from "@/assets/mdclca-logo.png";

const conferences = [
  {
    name: "Maryland College Learning Center Association (MDCLCA)",
    date: "March 2025",
    location: "Towson University",
    logo: mdclcaLogo,
    fallbackText: "MDCLCA"
  },
  {
    name: "Association of Colleges for Tutoring and Learning Assistance (ACTLA)",
    date: "April 2025",
    location: "National Conference",
    logo: actlaLogo,
    fallbackText: "ACTLA"
  }
];

const ConferencesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  return (
    <section id="conferences" className="section-container">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
            Speaking Engagements
          </p>
          <h2 className="section-title">Conferences</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {conferences.map((conf, index) => (
            <motion.div
              key={conf.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Conference Logo */}
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-muted flex items-center justify-center overflow-hidden">
                  {conf.logo ? (
                    <img
                      src={conf.logo}
                      alt={`${conf.name} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    <span className="text-xs font-bold text-primary">
                      {conf.fallbackText}
                    </span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground leading-tight mb-2">
                    {conf.name}
                  </h3>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{conf.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span>{conf.location}</span>
                    </div>
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

export default ConferencesSection;

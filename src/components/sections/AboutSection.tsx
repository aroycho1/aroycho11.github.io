import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-container bg-card">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">
            About Me
          </p>
          <h2 className="section-title mb-8">
            Driving Growth Through Strategy
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="section-subtitle leading-relaxed mb-6">
              I'm a GTM and Operations professional with a passion for building 
              scalable growth engines. With experience at startups and EdTech unicorns, 
              I specialize in pipeline development, CRM optimization, and revenue operations.
            </p>
            <p className="section-subtitle leading-relaxed">
              Currently pursuing my M.S. in Engineering Management at UMBC with a 3.83 GPA, 
              I combine analytical rigor with hands-on execution to deliver measurable 
              business outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-foreground font-medium">Based in Maryland, USA</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-foreground font-medium">Certified Scrum Product Owner (CSPO)</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-foreground font-medium">Open to opportunities</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

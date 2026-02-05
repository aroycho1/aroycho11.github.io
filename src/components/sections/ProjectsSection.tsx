import { motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-title">Projects</h2>
          <div className="accent-line mx-auto mt-4" />
          <p className="text-muted-foreground mt-8">Coming soon...</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

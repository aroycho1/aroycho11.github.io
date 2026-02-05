import { motion } from "framer-motion";

const OpEdSection = () => {
  return (
    <section id="op-ed" className="section-container">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-title">Op-Ed</h2>
          <p className="section-subtitle mt-4">Thoughts on strategy, technology, and growth</p>
          <div className="accent-line mx-auto mt-4" />
          <p className="text-muted-foreground mt-8">Coming soon...</p>
        </motion.div>
      </div>
    </section>
  );
};

export default OpEdSection;

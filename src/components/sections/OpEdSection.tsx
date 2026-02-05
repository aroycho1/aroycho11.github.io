import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";

const articles = [
  {
    title: "The Future of GTM in the Age of AI",
    excerpt: "How artificial intelligence is reshaping go-to-market strategies and what it means for growth teams.",
    date: "2024",
    link: "#"
  },
  {
    title: "Building Scalable Operations from Day One",
    excerpt: "Lessons learned from scaling operations at fast-growing EdTech startups.",
    date: "2024",
    link: "#"
  },
  {
    title: "Data-Driven Decision Making in Education",
    excerpt: "Why data literacy is becoming essential for educational institutions and how to implement it effectively.",
    date: "2023",
    link: "#"
  }
];

const OpEdSection = () => {
  return (
    <section id="op-ed" className="section-container">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Op-Ed</h2>
          <p className="section-subtitle mt-4">Thoughts on strategy, technology, and growth</p>
          <div className="accent-line mx-auto mt-4" />
        </motion.div>

        <div className="space-y-6">
          {articles.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group block border-l-2 border-border hover:border-primary pl-6 py-4 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2 flex items-center gap-2">
                {article.title}
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {article.excerpt}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpEdSection;

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Assessment Platform",
    description: "Built scalable assessment tools using AI to evaluate student performance and provide personalized learning recommendations.",
    tags: ["AI/ML", "Python", "EdTech"],
    link: "#"
  },
  {
    title: "GTM Pipeline Automation",
    description: "Designed and implemented automated sales pipelines using Clay and HubSpot, increasing lead conversion by 40%.",
    tags: ["CRM", "Automation", "Sales Ops"],
    link: "#"
  },
  {
    title: "Strategic Growth Consulting",
    description: "Led market expansion strategies for EdTech startups, achieving 3x revenue growth through data-driven decision making.",
    tags: ["Strategy", "Growth", "Consulting"],
    link: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Projects</h2>
          <div className="accent-line mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <a 
                  href={project.link} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

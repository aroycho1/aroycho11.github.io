import { motion } from "framer-motion";
import { Bot, Search, Users, Mail, Moon, Volume2, Vibrate, Eye } from "lucide-react";
import slumbrProduct from "@/assets/slumbr-product.jpg";

const projects = [
  {
    title: "AI-Powered GTM Engine",
    description: "Built an intelligent Go-To-Market engine that automates lead discovery, enrichment, and outreach strategy using AI-driven signals and data pipelines.",
    loomEmbed: "https://www.loom.com/embed/11b25f7bc8bd4f8ab91d2ca8b3e27425",
    purpose: "Streamline the entire GTM process by automating signal detection, company research, technographic enrichment, and decision-maker identification—reducing manual prospecting time by 80%.",
    tools: [
      "LinkedIn Operator for automated job posting scraping",
      "AI-powered company research & technographic analysis",
      "Automated decision-maker identification pipeline",
      "Intelligent outreach strategy generation"
    ],
    toolsLabel: "AI Tools & Techniques",
    highlights: [
      { icon: Search, label: "Signal Detection", desc: "Hiring trends & SSO roadmap signals" },
      { icon: Bot, label: "Data Enrichment", desc: "Automated company research" },
      { icon: Users, label: "Decision Makers", desc: "AI-identified key contacts" },
      { icon: Mail, label: "Outreach", desc: "Personalized strategy generation" }
    ],
    type: "video" as const
  },
  {
    title: "Slumbr — Smart Sleep Mask",
    description: "Designed and pitched a next-generation smart sleep mask for a Product Development class, featuring bone conduction audio, haptic alarms, and C-shaped blackout cups.",
    image: slumbrProduct,
    purpose: "Address the $16.6B sleep tech market where 4 in 10 adults report sleep difficulties and 72% feel sleepy multiple days per week. Targeting a $2.3B SAM with a premium $79.99 product at 68% gross margin, projecting $53M Year 1 revenue scaling to $151M by Year 5.",
    tools: [
      "Quality Function Deployment (QFD) analysis",
      "Voice of Customer research & synthesis",
      "TAM/SAM/SOM market sizing with bottom-up validation",
      "5-year financial modeling (30% YoY growth, 254% IRR)"
    ],
    toolsLabel: "Product Development Methods",
    highlights: [
      { icon: Moon, label: "Blackout Cups", desc: "C-shaped, zero temple pressure" },
      { icon: Volume2, label: "Bone Conduction", desc: "Private audio, no earbuds" },
      { icon: Vibrate, label: "Silent Alarm", desc: "Haptic wake, partner sleeps on" },
      { icon: Eye, label: "Premium Comfort", desc: "Washable silk, side-sleeper fit" }
    ],
    stats: [
      { value: "$16.6B", label: "TAM (Global Sleep Tech)" },
      { value: "$2.3B", label: "SAM (Addressable Segment)" },
      { value: "$115M", label: "SOM (5% Target)" },
      { value: "68%", label: "Gross Margin" },
      { value: "$53M", label: "Year 1 Revenue" },
      { value: "$151M", label: "Year 5 Projection" },
      { value: "662K", label: "Units Year 1" },
      { value: "30%", label: "YoY Growth Rate" }
    ],
    type: "image" as const
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/5">
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

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Project Header */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-semibold font-heading text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                  {project.description}
                </p>
              </div>

              {/* Video or Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden shadow-2xl bg-card border border-border"
              >
                {project.type === "video" && project.loomEmbed ? (
                  <div className="aspect-video">
                    <iframe
                      src={project.loomEmbed}
                      frameBorder="0"
                      allowFullScreen
                      className="w-full h-full"
                      title={project.title}
                    />
                  </div>
                ) : project.image ? (
                  <div className="aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : null}
              </motion.div>

              {/* Stats Row (for projects with stats) */}
              {"stats" in project && project.stats && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3"
                >
                  {project.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="bg-primary/10 rounded-lg p-3 text-center border border-primary/20"
                    >
                      <p className="text-lg md:text-xl font-bold text-primary">{stat.value}</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground mt-1 leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Purpose & Tools Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Purpose */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-6 border border-border"
                >
                  <h4 className="text-lg font-semibold font-heading text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Purpose
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.purpose}
                  </p>
                </motion.div>

                {/* Tools Used */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-6 border border-border"
                >
                  <h4 className="text-lg font-semibold font-heading text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    {project.toolsLabel}
                  </h4>
                  <ul className="space-y-2">
                    {project.tools.map((tool, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {project.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="bg-card/50 rounded-lg p-4 border border-border text-center hover:border-primary/30 transition-colors"
                  >
                    <highlight.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium text-foreground">{highlight.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{highlight.desc}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

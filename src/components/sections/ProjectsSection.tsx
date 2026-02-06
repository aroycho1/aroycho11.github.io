import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Search, Users, Mail, Moon, Volume2, Vibrate, Eye, BarChart3, Target, ClipboardCheck, MessageSquare, TrendingUp, FileText, GraduationCap, Sparkles, BookOpen, Wrench, ExternalLink } from "lucide-react";
import slumbrProduct from "@/assets/slumbr-product.jpg";
import gptHigherEdVideo from "@/assets/gpt-higher-ed-video.mp4";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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
    type: "video" as const,
    tileIcon: Bot,
    tileColor: "from-blue-500/20 to-cyan-500/20"
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
    methodologies: [
      {
        id: "market-research",
        label: "Market Research",
        icon: BarChart3,
        title: "Primary & Secondary Research",
        content: "Conducted extensive market analysis of the $16.6B global sleep tech industry. Analyzed competitor positioning, pricing strategies, and feature gaps across 50+ existing products. Identified key market trends including rising demand for non-pharmacological sleep solutions."
      },
      {
        id: "tam-sam-som",
        label: "TAM/SAM/SOM",
        icon: Target,
        title: "Market Sizing Framework",
        content: "TAM: $16.6B (global sleep tech devices). SAM: $2.3B (smart/AI-enhanced sleep masks & adjacencies). SOM: $115M (5% of SAM as long-term target). Used bottom-up validation with unit economics at $79.99 price point."
      },
      {
        id: "stakeholder",
        label: "Stakeholder Analysis",
        icon: Users,
        title: "Stakeholder Mapping",
        content: "Mapped key stakeholders including end consumers (sleep-deprived adults 25-45), retail partners (Amazon, specialty wellness stores), manufacturing partners (Shenzhen electronics), and potential investors. Created influence-interest matrix for prioritization."
      },
      {
        id: "voc",
        label: "Voice of Customer",
        icon: MessageSquare,
        title: "Customer Research & Surveys",
        content: "Conducted 50+ customer interviews and surveys to identify pain points: light leakage (78%), earbud discomfort (65%), partner disturbance from alarms (52%). Synthesized insights into QFD matrix to prioritize features."
      },
      {
        id: "validation",
        label: "Market Validation",
        icon: ClipboardCheck,
        title: "Concept Testing",
        content: "Validated product concept through landing page tests achieving 12% email capture rate. Conducted conjoint analysis to optimize feature bundle. Price sensitivity testing confirmed $79.99 as optimal price point balancing margin and volume."
      },
      {
        id: "financials",
        label: "Financial Model",
        icon: TrendingUp,
        title: "5-Year Projections",
        content: "Built comprehensive financial model: Year 1 revenue $53M (662K units), scaling to $151M by Year 5 at 30% YoY growth. 68% gross margin ($54/unit on $25 COGS). Projected 254% IRR with break-even in Month 8."
      }
    ],
    type: "image" as const,
    tileIcon: Moon,
    tileColor: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Building Custom GPTs for Higher Ed",
    description: "Presented AI-powered innovations for modernizing assessments in higher education, demonstrating how custom GPTs can enhance learning center operations and student support.",
    videoSrc: gptHigherEdVideo,
    purpose: "Empower educators with practical AI tools to modernize assessment methods, improve tutoring efficiency, and enhance student learning outcomes through custom GPT implementations.",
    tools: [
      "Custom GPT development & configuration",
      "Prompt engineering for educational contexts",
      "Educational technology integration strategies",
      "Assessment automation workflows"
    ],
    toolsLabel: "AI Tools & Methods",
    highlights: [
      { icon: Sparkles, label: "AI Assessment", desc: "Modernized evaluation methods" },
      { icon: Bot, label: "Custom GPTs", desc: "Tailored for education" },
      { icon: BookOpen, label: "Learning Centers", desc: "Enhanced student support" },
      { icon: Wrench, label: "Educator Tools", desc: "Practical implementation" }
    ],
    type: "local-video" as const,
    tileIcon: GraduationCap,
    tileColor: "from-emerald-500/20 to-teal-500/20"
  }
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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

        {/* Project Tiles Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className={`relative h-64 rounded-xl overflow-hidden border border-border bg-gradient-to-br ${project.tileColor} hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1`}>
                {/* Background Image/Gradient */}
                <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />
                
                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <project.tileIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold font-heading text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-heading">{selectedProject.title}</DialogTitle>
                  <p className="text-muted-foreground mt-2">{selectedProject.description}</p>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  {/* Video or Image */}
                  <div className="relative rounded-xl overflow-hidden shadow-lg bg-card border border-border">
                    {selectedProject.type === "local-video" && "videoSrc" in selectedProject ? (
                      <div className="aspect-video">
                        <video
                          src={selectedProject.videoSrc}
                          controls
                          className="w-full h-full object-cover"
                          title={selectedProject.title}
                        />
                      </div>
                    ) : selectedProject.type === "video" && "loomEmbed" in selectedProject ? (
                      <div className="aspect-video">
                        <iframe
                          src={selectedProject.loomEmbed}
                          frameBorder="0"
                          allowFullScreen
                          className="w-full h-full"
                          title={selectedProject.title}
                        />
                      </div>
                    ) : "image" in selectedProject && selectedProject.image ? (
                      <div className="aspect-video">
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : null}
                  </div>

                  {/* Methodologies Section */}
                  {"methodologies" in selectedProject && selectedProject.methodologies && (
                    <div className="bg-card rounded-xl border border-border overflow-hidden">
                      <div className="p-4 border-b border-border">
                        <h4 className="text-lg font-semibold font-heading text-foreground flex items-center gap-2">
                          <FileText className="w-5 h-5 text-primary" />
                          What I Did — Product Development Process
                        </h4>
                      </div>
                      <Tabs defaultValue={selectedProject.methodologies[0].id} className="w-full">
                        <TabsList className="w-full justify-start rounded-none border-b border-border bg-muted/30 h-auto flex-wrap p-1 gap-1">
                          {selectedProject.methodologies.map((method) => (
                            <TabsTrigger
                              key={method.id}
                              value={method.id}
                              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md px-3 py-2 text-xs md:text-sm flex items-center gap-1.5"
                            >
                              <method.icon className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">{method.label}</span>
                            </TabsTrigger>
                          ))}
                        </TabsList>
                        {selectedProject.methodologies.map((method) => (
                          <TabsContent key={method.id} value={method.id} className="p-6 m-0">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <method.icon className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <h5 className="font-semibold text-foreground mb-2">{method.title}</h5>
                                <p className="text-muted-foreground leading-relaxed">{method.content}</p>
                              </div>
                            </div>
                          </TabsContent>
                        ))}
                      </Tabs>
                    </div>
                  )}

                  {/* Stats Row */}
                  {"stats" in selectedProject && selectedProject.stats && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {selectedProject.stats.map((stat, i) => (
                        <div
                          key={i}
                          className="bg-primary/10 rounded-lg p-3 text-center border border-primary/20"
                        >
                          <p className="text-lg md:text-xl font-bold text-primary">{stat.value}</p>
                          <p className="text-[10px] md:text-xs text-muted-foreground mt-1 leading-tight">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Purpose & Tools Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-card rounded-xl p-6 border border-border">
                      <h4 className="text-lg font-semibold font-heading text-foreground mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Purpose
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedProject.purpose}
                      </p>
                    </div>

                    <div className="bg-card rounded-xl p-6 border border-border">
                      <h4 className="text-lg font-semibold font-heading text-foreground mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        {selectedProject.toolsLabel}
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.tools.map((tool, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="text-primary mt-1">→</span>
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedProject.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="bg-card/50 rounded-lg p-4 border border-border text-center"
                      >
                        <highlight.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                        <p className="text-sm font-medium text-foreground">{highlight.label}</p>
                        <p className="text-xs text-muted-foreground mt-1">{highlight.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectsSection;

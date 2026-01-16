import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "A modern e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
    longDescription: "Built a complete e-commerce solution featuring real-time inventory management, Stripe payment integration, and a comprehensive admin dashboard. The platform handles thousands of daily transactions with 99.9% uptime.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    category: "Web App",
    description: "A collaborative task management tool with real-time updates and team workflows.",
    longDescription: "Developed a real-time collaborative task management application featuring drag-and-drop interfaces, team workspaces, and automated workflow triggers. Used WebSocket for live updates.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "AI Content Generator",
    category: "AI/ML",
    description: "An AI-powered platform for generating marketing content and social media posts.",
    longDescription: "Created an AI-powered content generation platform using OpenAI's GPT API. Features include brand voice customization, content scheduling, and performance analytics.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tech: ["Python", "FastAPI", "OpenAI", "React", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Finance Dashboard",
    category: "Dashboard",
    description: "A comprehensive financial dashboard with data visualization and reporting tools.",
    longDescription: "Built an interactive financial dashboard featuring real-time data visualization, customizable reports, and predictive analytics. Processes over 1M data points daily.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tech: ["React", "D3.js", "Python", "PostgreSQL", "Docker"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projects" className="section-padding bg-secondary/30">
        <div className="container-narrow mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-accent tracking-wide uppercase">
              Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
              Featured <span className="text-gradient">projects</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for 
              building exceptional digital products.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border card-hover cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <span className="text-background font-medium">View Details</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-accent uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-foreground/80 text-background rounded-full hover:bg-foreground transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <span className="text-xs font-medium text-accent uppercase tracking-wide">
                {selectedProject.category}
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground mt-2 mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-muted-foreground mb-6">{selectedProject.longDescription}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
                    <ExternalLink size={16} /> Live Demo
                  </Button>
                </a>
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="rounded-full gap-2">
                    <Github size={16} /> Source Code
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

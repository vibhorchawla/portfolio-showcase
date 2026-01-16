import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Palette,
    title: "Design Focus",
    description: "Creating visually stunning interfaces with attention to every pixel.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex challenges into elegant, user-friendly solutions.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Building fast, optimized applications that users love.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-accent tracking-wide uppercase">
            About Me
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Passionate about creating
            <br />
            <span className="text-gradient">digital experiences</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-primary/10 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face"
                alt="John Doe"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate full-stack developer and designer with over 5 years of experience 
              creating digital products that make a difference. My journey began with a curiosity 
              for how things work on the web, and it has evolved into a career dedicated to 
              building exceptional user experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new design trends, contributing to 
              open-source projects, or sharing knowledge with the developer community. I believe 
              in continuous learning and staying ahead of the curve in this ever-evolving industry.
            </p>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors group"
                >
                  <item.icon className="w-6 h-6 text-accent mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

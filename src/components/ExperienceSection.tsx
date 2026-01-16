import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    type: "work",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description: "Leading frontend development for enterprise applications, mentoring junior developers, and implementing best practices.",
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    description: "Built and scaled multiple web applications from scratch, handling both frontend and backend development.",
  },
  {
    type: "work",
    title: "Junior Web Developer",
    company: "Digital Agency",
    period: "2018 - 2020",
    description: "Developed responsive websites and web applications for various clients across different industries.",
  },
];

const education = [
  {
    degree: "B.S. Computer Science",
    school: "Stanford University",
    period: "2014 - 2018",
  },
  {
    degree: "Full Stack Web Development",
    school: "Udacity Nanodegree",
    period: "2019",
  },
];

const certifications = [
  "AWS Certified Solutions Architect",
  "Google Cloud Professional Developer",
  "Meta Frontend Developer Certificate",
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent tracking-wide uppercase">
            Experience
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            My <span className="text-gradient">journey</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A timeline of my professional experience, education, and achievements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-accent/10">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Work Experience
              </h3>
            </div>

            <div className="relative pl-8 border-l-2 border-border space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-accent border-4 border-background" />
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors">
                    <span className="text-sm font-medium text-accent">{exp.period}</span>
                    <h4 className="font-display text-lg font-semibold text-foreground mt-1">
                      {exp.title}
                    </h4>
                    <p className="text-muted-foreground font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-3">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Education
                </h3>
              </div>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="p-4 rounded-xl bg-card border border-border"
                  >
                    <h4 className="font-medium text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">{edu.school}</p>
                    <p className="text-xs text-accent mt-1">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Certifications
                </h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Download Resume */}
            <Button className="w-full rounded-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Download size={18} /> Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

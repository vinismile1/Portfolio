import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "GET HEALTHY",
    description:
      "Developed a web application that helps users create a personalized diet plan based on their goals and preferences.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    live: "https://let-s-diet.vercel.app"
  },
  {
    title: "V.SAVE",
    description:
      "Built a personal finance website that enables users to track expenses and stay aligned with their saving goals.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://finance-tracker-two-lyart.vercel.app"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const Projects = () => {
  return (
    <section className="relative w-full py-24 px-6 z-10">
      
      {/* Background Glow */}
      <div className="absolute w-[450px] h-[450px] bg-purple-900/20 rounded-full blur-[160px] -top-32 -left-32"></div>
      <div className="absolute w-[350px] h-[350px] bg-blue-900/20 rounded-full blur-[130px] -bottom-32 -right-32"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Projects
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Selected projects that demonstrate my ability to build structured,
            functional, and user-focused web applications.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              
              {/* Title */}
              <div className="flex items-center gap-3 mb-4">
                <Code2 size={20} className="text-purple-400 group-hover:text-purple-300 transition" />
                <h3 className="text-xl font-medium text-white">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs text-white/80 border border-white/10 rounded-full bg-black/40"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {/* Live Button */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm text-purple-400 hover:text-purple-300 transition"
              >
                View Live
                <ExternalLink size={16} />
              </a>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

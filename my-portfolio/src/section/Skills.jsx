import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Server,
  Wrench
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "TailwindCSS",
      "Shadcn UI"
    ]
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Firebase",
      "Prisma"
    ]
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB"
    ]
  },
  {
    title: "Tools & Deployment",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Postman API"
    ]
  }
];

const Skills = () => {
  return (
    <section className="relative w-full py-24 px-6">

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
            Skills
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Technologies and tools I use to build scalable, modern web applications.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                {/* Category Title */}
                <div className="flex items-center gap-3 mb-5">
                  <Icon
                    size={22}
                    className="text-purple-400 group-hover:text-purple-300 transition"
                  />
                  <h3 className="text-lg font-medium text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs text-white/80 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Skills;

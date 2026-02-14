import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code2 } from "lucide-react";

const experienceData = [
  {
    role: "Java Full Stack Developer Intern",
    company: "HANUMANT TECHNOLOGY",
    duration: "6 Months Internship",
    description:
      "Worked on Java Full Stack Development including backend logic, database integration, and frontend implementation. Gained hands-on experience building scalable web applications and understanding real-world development workflows.",
    icon: Briefcase,
  },
];

const Experience = () => {
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
            Experience
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Professional experience that strengthened my development skills.
          </p>
        </motion.div>

        {/* Experience Card */}
        <div className="mt-16 flex justify-center">

          {experienceData.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group w-full md:w-2/3 border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-purple-500/10">
                    <Icon size={26} className="text-purple-400 group-hover:text-purple-300 transition" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white">
                      {exp.role}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {exp.company}
                    </p>
                    <p className="text-white/50 text-xs mt-1">
                      {exp.duration}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="flex gap-3">
                  <Code2 size={18} className="text-purple-400 mt-1" />
                  <p className="text-white/80 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Experience;

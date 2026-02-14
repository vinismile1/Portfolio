import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

const educationData = [
  {
    title: "Bachelor of Technology in CSE",
    institute: "R.R. Institute Of Modern Technology (AKTU)",
    duration: "2022 - Present",
    icon: GraduationCap,
  },
  {
    title: "Intermediate",
    institute: "Government Girls Senior Secondary School",
    duration: "2021 - 2022",
    icon: School,
  },
  {
    title: "High School",
    institute: "Government Girls Senior Secondary School",
    duration: "2019 - 2020",
    icon: BookOpen,
  },
];

const Education = () => {
  return (
    <section className="relative w-full py-24 px-6 z-10">

      {/* ===== Background Glow Particles ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[180px] -top-32 -left-32"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[160px] -bottom-32 -right-32"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ===== Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Education
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            My academic journey that shaped my technical foundation.
          </p>
        </motion.div>

        {/* ===== Cards ===== */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          {educationData.map((edu, index) => {
            const Icon = edu.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative border border-white/20 rounded-2xl p-6 bg-white/10 backdrop-blur-xl transition duration-300 hover:bg-white/15 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Soft Glow Behind Card */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                {/* Content */}
                <div className="relative z-10">

                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-5">
                    <Icon
                      size={24}
                      className="text-purple-400 group-hover:text-purple-300 transition"
                    />
                    <h3 className="text-lg font-medium text-white">
                      {edu.title}
                    </h3>
                  </div>

                  {/* Details */}
                  <p className="text-white/80 text-sm">
                    {edu.institute}
                  </p>
                  <p className="mt-2 text-white/50 text-xs">
                    {edu.duration}
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

export default Education;

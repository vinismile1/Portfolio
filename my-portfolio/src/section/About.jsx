import React from "react";
import { motion } from "framer-motion";
import { User, Sparkles, Code2, TrendingUp } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const About = () => {
  return (
    <section className="relative w-full py-24 px-6">

      {/* Floating Glow */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[450px] h-[450px] bg-purple-900/20 rounded-full blur-[160px] -top-32 -left-32"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[350px] h-[350px] bg-blue-900/20 rounded-full blur-[130px] -bottom-32 -right-32"
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <User size={26} className="text-purple-400" />
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              About Me
            </h2>
          </div>
        </motion.div>

        {/* Content Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 space-y-10"
        >

          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="border border-white/10 rounded-2xl p-6 md:p-8 bg-white/5 backdrop-blur-xl transition duration-300 hover:bg-white/10"
          >
            <div className="flex items-start gap-4">
              <Code2 size={22} className="text-purple-400 mt-1" />
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                I am a developer focused on building clean, scalable, and
                performance-driven web applications. I believe great interfaces
                are not just designed — they are engineered with structure,
                clarity, and purpose.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="border border-white/10 rounded-2xl p-6 md:p-8 bg-white/5 backdrop-blur-xl transition duration-300 hover:bg-white/10"
          >
            <div className="flex items-start gap-4">
              <Sparkles size={22} className="text-purple-400 mt-1" />
              <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                My approach combines creativity with logical thinking. I focus
                on writing maintainable code, understanding system design
                fundamentals, and continuously improving my problem-solving
                ability.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="border border-white/10 rounded-2xl p-6 md:p-8 bg-white/5 backdrop-blur-xl transition duration-300 hover:bg-white/10"
          >
            <div className="flex items-start gap-4">
              <TrendingUp size={22} className="text-purple-400 mt-1" />
              <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                I am driven by growth — not shortcuts. Every project I build is
                an opportunity to refine architecture, improve performance, and
                elevate user experience.
              </p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;

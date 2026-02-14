import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  "Frontend Developer",
  "React Developer",
  "UI/UX Enthusiast",
  "Creative Problem Solver",
];

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typewriter Effect
  useEffect(() => {
    if (!deleting && subIndex === roles[index].length) {
      const timeout = setTimeout(() => setDeleting(true), 1200);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(roles[index].substring(0, subIndex));
    }, deleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-24 md:pt-0 md:pb-0"
    >
      {/* Background Glow Effects */}
      <div className="absolute w-[450px] h-[450px] bg-purple-900/20 rounded-full blur-[160px] -top-32 -left-32"></div>
      <div className="absolute w-[350px] h-[350px] bg-blue-900/20 rounded-full blur-[140px] -bottom-32 -right-32"></div>

      <div className="w-full max-w-6xl relative z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left"
        >
          {/* Profile Image */}
          <div className="relative w-44 h-44 md:w-56 md:h-56 shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/30 to-blue-500/30 blur-xl"></div>

            <img
              src="/sneha.jpeg"
              alt="Sneha Mishra"
              className="relative w-full h-full object-cover rounded-full border border-white/10 shadow-xl"
            />
          </div>

          {/* Text Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
              Sneha Mishra
            </h1>

            {/* Typewriter Role */}
            <h2 className="mt-3 text-lg md:text-xl text-purple-400 h-8">
              {text}
              <span className="border-r-2 border-purple-400 ml-1 animate-pulse"></span>
            </h2>

            <p className="mt-6 text-white/60 max-w-lg leading-relaxed text-sm sm:text-base">
              I design and develop modern web interfaces with clean architecture,
              smooth interactions, and attention to detail.
            </p>

            <a
              href="/SNEHA MISHRA Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-6 py-2.5 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-600/20 transition duration-300 text-sm"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

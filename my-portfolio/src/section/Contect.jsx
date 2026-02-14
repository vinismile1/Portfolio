import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const contactData = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/vinismile1/",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://www.x.com/in/vinismile1/",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://www.github.com/in/vinismile1/",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:snehamishra0013@gmail.com",
  },
];

const Contect = () => {
  return (
    <section id="contact" className="relative w-full py-24 px-6">

      {/* Background Glow */}
      <div className="absolute w-[450px] h-[450px] bg-purple-900/20 rounded-full blur-[160px] -top-32 -left-32"></div>
      <div className="absolute w-[350px] h-[350px] bg-blue-900/20 rounded-full blur-[130px] -bottom-32 -right-32"></div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Contact
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Feel free to reach out for collaborations, internships, or opportunities.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">

          {contactData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="group border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-300 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col items-center justify-center"
              >
                <Icon
                  size={28}
                  className="text-purple-400 group-hover:text-purple-300 transition"
                />
                <span className="mt-3 text-sm text-white/80 group-hover:text-white transition">
                  {item.name}
                </span>
              </motion.a>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Contect;

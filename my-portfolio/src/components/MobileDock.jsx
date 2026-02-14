import React, { useState, useEffect } from "react";
import { Home, Linkedin, Github, Twitter, Menu, X } from "lucide-react";

const MobileDock = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Education", href: "education" },
    { name: "Experience", href: "experience" },
    { name: "Contact", href: "contact" },
  ];

  // Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* ===== TOP MOBILE NAVBAR ===== */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent tracking-widest">
            SNEHA
          </h1>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ===== BLUR OVERLAY MENU ===== */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {/* Background Blur */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-2xl"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center space-y-8 text-white text-2xl font-semibold">
          {links.map((item) => (
            <a
              key={item.name}
              href={`#${item.href}`}
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-400 transition duration-300"
            >
              {item.name}
            </a>
          ))}

         
        </div>
      </div>

      {/* ===== BOTTOM FLOATING DOCK ===== */}
      <div className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-8 px-8 py-4 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-500/20">

          <a
            href="home"
            className="text-white/70 hover:text-purple-400 transition duration-300"
          >
            <Home size={24} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-purple-400 transition duration-300"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-purple-400 transition duration-300"
          >
            <Github size={24} />
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-purple-400 transition duration-300"
          >
            <Twitter size={24} />
          </a>

        </div>
      </div>
    </>
  );
};

export default MobileDock;

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Education", href: "education" },
    { name: "Experience", href: "experience" },
    { name: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      links.forEach((link) => {
        const section = document.getElementById(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`hidden md:block fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent tracking-widest">
          SNEHA
        </h1>

        {/* Desktop Links (only large screens) */}
        <div className="hidden lg:flex space-x-8 text-white/80 font-medium">
          {links.map((item) => (
            <a
              key={item.name}
              href={`#${item.href}`}
              className={`transition duration-300 ${
                active === item.href
                  ? "text-purple-400"
                  : "hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg shadow-purple-500/30 hover:scale-105 transition duration-300"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

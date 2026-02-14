import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full py-8 px-6 border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto text-center text-white/50 text-sm">
        © {new Date().getFullYear()} All Rights Reserved.  
        <span className="text-white/80 font-medium">
          {" "}Made by Sneha Mishra
        </span>
      </div>
    </footer>
  );
};

export default Footer;

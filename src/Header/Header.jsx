import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const Header = () => {
  const menuRef = useRef(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 h-[4px] z-50 bg-indigo-600"
        id="scroll"
      ></motion.div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#191970] shadow-md">
        <div className="flex items-center justify-between px-5 md:px-20 py-5">
          {/* Logo */}
          <a href="#home" className="font-bold text-white text-2xl relative">
            EnsoIII
            <p className="animate-spin-slow absolute top-0 right-[-35px]">⚙️</p>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5 text-white font-semibold">
            <a href="#home">
              <i className="fa-solid fa-house-user"></i> Home
            </a>
            <a href="#about">
              <i className="fa-regular fa-address-card"></i> About
            </a>
            <a href="#projects">
              <i className="fa-solid fa-list-check"></i> Projects
            </a>
            <a href="#contact">
              <i className="fa-solid fa-envelope"></i> Contact
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div
            onClick={() => setToggle(!toggle)}
            className="md:hidden text-2xl cursor-pointer text-white"
          >
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>

        {/* Mobile Menu */}
        <nav
          ref={menuRef}
          className={`${
            toggle ? "translate-x-0" : "translate-x-full"
          } md:hidden absolute top-0 right-0 w-64 h-screen bg-[#191970] text-white flex flex-col p-10 gap-5 font-bold transition-transform duration-300 ease-in-out`}
        >
          <button
            onClick={() => setToggle(false)}
            className="absolute top-5 right-5 text-2xl"
            aria-label="Close Menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <a href="#home" onClick={() => setToggle(false)}>
            <i className="fa-solid fa-house-user"></i> Home
          </a>
          <a href="#about" onClick={() => setToggle(false)}>
            <i className="fa-regular fa-address-card"></i> About
          </a>
          <a href="#projects" onClick={() => setToggle(false)}>
            <i className="fa-solid fa-list-check"></i> Projects
          </a>
          <a href="#contact" onClick={() => setToggle(false)}>
            <i className="fa-solid fa-envelope"></i> Contact
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;  // Exporting the default Header component

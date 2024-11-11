import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const Header = () => {
  
  const menuRef = useRef();
  const [toggle , setToggle] = useState(false)

  useEffect((e) => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)){
        setToggle(false)
      }
    }
    document.addEventListener("mouseover", handler)
    return () => {
      document.removeEventListener("mouseover", handler)
    }
  })

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div className="" >
      <motion.div style={{scaleX}} className="fixed left-0 right-0 bottom-0 h-[4px] z-50 bg-indigo-600" id="scroll">
        <h1>
          <code>useScroll</code>
        </h1>
      </motion.div> {/* Scroll Line Progress */}

      <header className="fixed top-0  shadow-md w-full z-50" id="header">
        <div className="flex items-center justify-between sm:px-5 md:px-20 py-5 ">
          <a href="#home" className="font-bold text-white text-2xl relative">Enso III<p className="animate-spin-slow absolute top-0 right-[-35px]">⚙️</p></a>
          <nav className="md:flex items-center justify-between sm:hidden  gap-5 text-white font-semibold">
          <a href="#home">
            <i className="text-white fa-solid fa-house-user"></i> Home
          </a>
          <a href="#about">
            <i className="text-white fa-regular fa-address-card"></i> About
          </a>
          <a href="#projects">
            <i className="text-white fa-solid fa-list-check"></i> Projects
          </a>
          <a href="#contact">
            <i className="text-white fa-solid fa-house-user"></i> Contact
          </a>
          </nav>

          <div onClick={() => setToggle(!toggle)} className={`sm:block md:hidden text-2xl cursor-pointer`}>
            <i className=" text-white fa-solid fa-bars"></i>
          </div>
        </div>
        <nav ref={menuRef} className={`${toggle ? 'translate-x-0' : 'translate-x-[1000px]'}  md:hidden  absolute rounded-bl-[3rem] rounded-tl-[3rem] right-0 transition border-r-4 border-slate-900 bg-slate-900 text-white  flex-col flex p-16 gap-5 font-bold focus:bg-slate-900 focus:text-white`}>
          <a href="#home" >
            <i className="text-white fa-solid fa-house-user"></i> Home
          </a>
          <a href="#about">
            <i className="text-white fa-regular fa-address-card"></i> About
          </a>
          <a href="#projects">
            <i className="text-white fa-solid fa-list-check"></i> Projects
          </a>
          <a href="#contact">
            <i className=" text-white fa-solid fa-house-user"></i> Contact
          </a>
        </nav>
      </header>
    </div>
  );
};

import { motion } from "framer-motion";
import { useState } from "react";
import { Code, FileCode, Link, Zap, Smartphone } from "lucide-react";

export const About = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleAccordion = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  const imageVariant = {
    offScreen: {
      y: 300,
      opacity: 0,
    },
    onScreen: {
      y: 5,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const textVariant = {
    offScreen: {
      x: 100,
      opacity: 0,
    },
    onScreen: {
      x: 5,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <section
      id="about"
      className="bg-white py-20 flex items-center justify-center overflow-hidden"
    >
      <motion.div
        initial="offScreen"
        whileInView="onScreen"
        viewport={{ once: true }}
        className="m-auto sm:w-[90%] md:w-[60%] grid xl:grid-cols-2 gap-10"
      >
        <motion.div
          variants={imageVariant}
          className="flex justify-center items-center"
        >
          <div className="relative z-50">
            <img
              className="w-full h-full rounded-xl h-full z-50"
              src="/images/personal/bcp.jpg"
              alt=""
            />
            <div className="rounded-full bg-blue-400 absolute w-[60px] h-[60px] top-0 z-0"></div>
            <div className="rounded-full bg-emerald-400 absolute w-[60px] h-[60px] top-0 right-0 z-0"></div>
            <div className="rounded-full bg-red-400 absolute w-[60px] h-[60px] bottom-0 right-0 z-0"></div>
            <div className="rounded-full bg-indigo-400 absolute w-[60px] h-[60px] bottom-0 left-0 z-0"></div>
          </div>
        </motion.div>
        <motion.div
          variants={textVariant}
          className="flex flex-col gap-5 sm:text-center xl:text-justify"
        >
          <h1 className="text-blue-400 font-bold">ABOUT ME 😉</h1>
          <h2 className="text-2xl text-slate-900 font-bold sm:text-center md:text-start">
            A dedicated Remote Web Developer based in Valenzuela, Philippines 📍
          </h2>
          <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.8 }}
      className="sm:text-center xl:text-start text-gray-800 tracking-wide text-[16px] sm:mt-0  leading-6"
    >
      <strong>Experienced Frontend Developer | React.js | Vue.js | WordPress</strong>  
      <br />
      I specialize in modern, responsive, and high-performance websites using React.js, Vue.js, and WordPress to create sleek, user-friendly interfaces.  
      <br /><br />
      <strong>What I Offer:</strong>  
      <br />
      <Code size={16} className="inline-block mr-2" /> Custom Web Development – React.js, Vue.js, Angular.js  
      <br />
      <Code size={16} className="inline-block mr-2" /> WordPress Development – Elementor, Divi, custom coding  
      <br />
      <FileCode size={16} className="inline-block mr-2" /> Figma to Web – Convert designs into functional websites  
      <br />
      <Link size={16} className="inline-block mr-2" /> API Integration – Seamless third-party connections  
      <br />
      <Zap size={16} className="inline-block mr-2" /> Performance Optimization – Faster load times  
      <br />
      <Smartphone size={16} className="inline-block mr-2" /> Responsive Design – Tailwind CSS, Bootstrap, CSS Grid  
    </motion.p>

          <h1
            className="text-black font-bold"
            onClick={() => toggleAccordion("certificates")}
          >
            CERTIFICATES 📝 ▽
          </h1>
          {openSection === "certificates" && (
            <motion.p
              initial="offScreen"
              whileInView="onScreen"
              viewport={{ once: true, amount: 0.8 }}
              className="opacity-60"
            >
              <ul>
                <li>
                  <a className="inline  text-blue-500">
                    <strong>Google Cybersecurity</strong> -
                  </a>
                  <p className="inline ">Coursera (Sept 2024 - Ongoing)</p>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1luq1vOnEv4jIkTawkj1IKYsVvsN7e43L/view"
                    className="inline  text-blue-500"
                  >
                    <strong>
                      Complete JavaScript, XML, AJAX and React Bootcamp
                    </strong>{" "}
                    -
                  </a>
                  <p className="inline ">Udemy (Oct. 2024)</p>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/1ktfoBIlGz62Dox3s2Y0pJ6qyL75Aganf/view"
                    className="inline  text-blue-500"
                  >
                    <strong>Modern Javascript</strong> -
                  </a>
                  <p className="inline ">Udemy (Oct. 18 2024)</p>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/166EGotfwtT3YArRjAPhiFuQzRyLjwosm/view"
                    className="inline  text-blue-500"
                  >
                    <strong>NLSC Basic Korean Class</strong> -
                  </a>
                  <p className="inline ">NLSC (Oct - Nov 2024)</p>
                </li>
              </ul>
            </motion.p>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

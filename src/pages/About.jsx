import { motion } from "framer-motion";
import { useState } from "react";

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
            A dedicated Frontend Developer based in Valenzuela, Philippines 📍
          </h2>
          <motion.p
            initial="offScreen"
            whileInView="onScreen"
            viewport={{ once: true, amount: 0.8 }}
            className="opacity-60"
          >
            I'm a Frontend Developer from Valenzuela, Philippines, with a degree
            in Computer Engineering. I have experience in web development,
            including building WordPress sites and contributing to IoT projects.
          </motion.p>
          <h1 className="text-black font-bold" onClick={() => toggleAccordion('skills')}>
        SKILLS 🧑‍💻 ▽
      </h1>
      {openSection === 'skills' && (
        <motion.p
          initial="offScreen"
          whileInView="onScreen"
          viewport={{ once: true, amount: 0.8 }}
          className="opacity-60"
        >
          <ul>
            <li>
              <strong>Frontend:</strong> Vue.js, React.js, Angular.js, HTML, CSS, Bootstrap, Vite.js
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express.js, PHP
            </li>
            <li>
              <strong>Databases:</strong> MySQL, MongoDB, Firebase
            </li>
            <li>
              <strong>Other:</strong> WordPress, API Integration, Git, VSCode
            </li>
            <li>
              <strong>Hardware/IoT:</strong> Arduino (C++), ESP32
            </li>
            <li>
              <strong>Web Development Tools:</strong> TailwindCSS, Elementor, Divi Theme
            </li>
            <li>
              <strong>Cyber Security:</strong> Cybersecurity Fundamentals, Threat Detection and Response, Network Security, System Security, Incident Response and Recovery, Security Compliance and Risk Management
            </li>
            <li>
              <strong>Cyber Security Tools:</strong> Security Information and Event Management (SIEM) tools, Intrusion Detection Systems (IDS), Firewalls, Virtual Private Networks (VPNs), Packet sniffers and network monitoring tools
            </li>
            <li>
              <strong>Programming</strong> Python for scripting and automation, Understanding of network protocols (TCP/IP, HTTP, etc.), Knowledge of web application security (OWASP Top Ten)
            </li>
          </ul>
        </motion.p>
      )}
      
      <h1 className="text-black font-bold" onClick={() => toggleAccordion('workExperience')}>
        WORK EXPERIENCE 💼 ▽
      </h1>
      {openSection === 'workExperience' && (
        <motion.p
          initial="offScreen"
          whileInView="onScreen"
          viewport={{ once: true, amount: 0.8 }}
          className="opacity-60"
        >
          <ul>
            <li>
              <strong>Metacore Systems Inc.</strong> - Web Developer Intern (March - June 2023)
            </li>
            <li>
              <strong>Iconitrax</strong> - WordPress Developer (September 2023 - February 2024)
            </li>
            <li>
              <strong>Quantum</strong> - Front-End Developer (February 2024 - June 2024)
            </li>
          </ul>
        </motion.p>
      )}

      <h1 className="text-black font-bold" onClick={() => toggleAccordion('certificates')}>
        CERTIFICATES 📝 ▽
      </h1>
      {openSection === 'certificates' && (
        <motion.p
          initial="offScreen"
          whileInView="onScreen"
          viewport={{ once: true, amount: 0.8 }}
          className="opacity-60"
        >
          <ul>
            <li>
              <a>
                <strong>Google Cybersecurity</strong> - Coursera (September 2024)
              </a>
            </li>
            <li>
              <a>
                <strong>Advance React</strong> - Udemy (Oct. 2024)
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/166EGotfwtT3YArRjAPhiFuQzRyLjwosm/view">
                <strong>Modern Javascript</strong> - Udemy (Oct. 18 2024)
              </a>
            </li>
          </ul>
        </motion.p>
      )}
        </motion.div>
      </motion.div>
    </section>
  );
};

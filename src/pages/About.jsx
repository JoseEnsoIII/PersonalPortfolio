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
            including building WordPress sites and Front-End projects.
          </motion.p>
          <h1
            className="text-black font-bold"
            onClick={() => toggleAccordion("skills")}
          >
            TECHNICAL SKILLS 🧑‍💻 ▽
          </h1>
          {openSection === "skills" && (
            <motion.p
              initial="offScreen"
              whileInView="onScreen"
              viewport={{ once: true, amount: 0.8 }}
              className="opacity-60"
            >
              <ul>
                <li>
                  <strong>Frontend:</strong> Vue.js, React.js, Angular.js, Bootstrap, Vite.Js, WordPress
                  (DIVI,ELEMENTOR), TailwindCSS, CSS, HTML.
                </li>
                <li>
                  <strong>Backend:</strong> Node.js, Express.js.
                </li>
                <li>
                  <strong>Databases:</strong> MySQL, MongoDB, Firebase.
                </li>
                <li>
                  <strong>Skills:</strong> API Integration, Funnel Building,
                  Arduino (C++), <strong>Robotics</strong>, Python, Javascript.
                  <br />
                  <strong>Tools:</strong> Git, VSCode, GoHighLevel (GHL).
                </li>
                <li>
                  <strong>Cyber Security Skills:</strong> Threat Detection, Network Security, Incident Response, Risk Assessment, Vulnerability Management, Security Policy Implementation.
                </li>
                <li>
                  <strong>Cyber Security Tools & Protocols:</strong> SIEM (e.g., Splunk, QRadar), IDS/IPS (e.g., Snort, Suricata), Firewalls, VPNs, Network Monitoring Tools (e.g., Wireshark, SolarWinds), OWASP frameworks, TCP/IP, HTTP/HTTPS.
                </li>

              </ul>
            </motion.p>
          )}

          <h1
            className="text-black font-bold"
            onClick={() => toggleAccordion("workExperience")}
          >
            WORK EXPERIENCE 💼 ▽
          </h1>
          {openSection === "workExperience" && (
            <motion.p
              initial="offScreen"
              whileInView="onScreen"
              viewport={{ once: true, amount: 0.8 }}
              className="opacity-60"
            >
              <ul>
                <li>
                  <strong>Metacore Systems Inc.</strong> - Web Developer Intern
                  (March - June 2023)
                </li>
                <li>
                  <strong>Iconitrax</strong> - WordPress Developer (September
                  2023 - February 2024)
                </li>
                <li>
                  <strong>Quantum</strong> - Front-End Developer (February 2024
                  - June 2024)
                </li>
              </ul>
            </motion.p>
          )}

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
                  <p className="inline ">Coursera (September 2024 - Ongoing)</p>
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

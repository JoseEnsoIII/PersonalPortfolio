import { motion } from "framer-motion";

export const About = () => {
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
    <section id="about" className="bg-white py-20 flex items-center justify-center overflow-hidden">
      <motion.div initial="offScreen" whileInView="onScreen" viewport={{ once: true }} className="m-auto sm:w-[90%] md:w-[60%] grid xl:grid-cols-2 gap-10">
        <motion.div variants={imageVariant} className="flex justify-center items-center">
          <div className="relative z-50">
            <img className="w-full h-full rounded-xl h-full z-50" src="/images/bcp.jpg" alt="" />
            <div className="rounded-full bg-blue-400 absolute w-[60px] h-[60px] top-0 z-0"></div>
            <div className="rounded-full bg-emerald-400 absolute w-[60px] h-[60px] top-0 right-0 z-0"></div>
            <div className="rounded-full bg-red-400 absolute w-[60px] h-[60px] bottom-0 right-0 z-0"></div>
            <div className="rounded-full bg-indigo-400 absolute w-[60px] h-[60px] bottom-0 left-0 z-0"></div>
          </div>
        </motion.div>
        <motion.div variants={textVariant} className="flex flex-col gap-5 sm:text-center xl:text-justify">
          <h1 className="text-blue-400 font-bold">ABOUT ME 😉</h1>
          <h2 className="text-2xl text-slate-900 font-bold sm:text-center md:text-start">A dedicated Frontend Developer based in Valenzuela, Philippines 📍</h2>
          <motion.p initial="offScreen" whileInView="onScreen" viewport={{ once: true, amount: 0.8 }} className="opacity-60">
            I’m a Frontend Developer based in Valenzuela, Philippines 📍, with a Computer Engineering degree from Bestlink College of the Philippines. At Metacore Systems Inc., I implemented MVC architecture with PHP for a POS system and worked on an IoT project using ESP32, gaining valuable experience in both web and hardware integration. During my time at Iconitrax, I developed a comprehensive 8-page WordPress website using the Divi theme, optimizing it for performance and responsiveness while collaborating with the design team for seamless integration. As a Support Frontend Developer at Quantum, I contributed to the development of an e-gambling site using the MERN stack, created dynamic frontend interfaces with Vue.js 3, and provided ongoing maintenance and support for existing systems. My tech stack includes frontend technologies like Vue.js, React.js, Angular.js, and backend technologies such as Node.js and Express.js, with experience in databases like MongoDB and MySQL. Additionally, I have a solid foundation in API integration and hardware projects using Arduino. I am passionate about tackling new challenges and continuously expanding my skill set to deliver innovative digital solutions.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

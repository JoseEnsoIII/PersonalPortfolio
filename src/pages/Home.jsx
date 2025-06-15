import { motion } from "framer-motion";


export const Home = () => {

  const titleVariant = {
    offScreen: {
      opacity: 0,
      x: -50,
    },
    onScreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        bounce: 0.5,
        duration: 0.8
      }
    }
  }

  const textVariant = {
    offScreen: {
      opacity: 0,
      x: -50,
    },
    onScreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        bounce: 0.5,
        duration: 1
      }
    }
  }

  return (
    <section id="home" className="xl:h-screen sm:py-20 bg-slate-50 flex items-center justify-center">
      <div className="m-auto sm:w-[90%] md:w-[60%] flex sm:flex-col-reverse xl:flex-row gap-5">
        <motion.div>
          <motion.h1 variants={titleVariant} initial="offScreen" whileInView={`onScreen`} className="relative  xl:text-5xl sm:text-[30px] md:text-6xl  sm:text-center xl:text-start tracking-wide font-bold text-gray-800">
           Remote Web Developer <span className="absolute animate-wiggle">👋🏻</span>
          </motion.h1>
          <motion.p 
  variants={textVariant} 
  initial="offScreen" 
  whileInView="onScreen" 
  className="sm:text-center xl:text-start text-gray-800 tracking-wide text-[16px] sm:mt-0 md:mt-10 leading-6"
>
  Hi, I'm Jose C. Enso III | 호세 엔소 삼세 , a React.js Developer, Vue.js WordPress Developer, and Computer Engineer based in Valenzuela, Philippines. 📍 I'm currently studying Cyber Security .
</motion.p>

          <div className="mt-6 flex items-center sm:justify-center xl:justify-start">
  <a className="" href="https://www.linkedin.com/in/jose-ensoiii/" target="_blank"rel="noreferrer noopener"><i className="fa-brands fa-linkedin text-3xl"></i></a>
  <a className="" href="https://github.com/JoseEnsoIII" target="_blank"rel="noreferrer noopener"><i className="fa-brands fa-square-github text-3xl ml-5"></i></a>
  <a className="" href="https://www.facebook.com/enso.jose.31/" target="_blank"rel="noreferrer noopener"><i className="fa-brands fa-square-facebook text-3xl ml-5"></i></a>
  <a className="" href="https://www.instagram.com/ensothethird/" target="_blank"rel="noreferrer noopener"><i className="fa-brands fa-square-instagram text-3xl ml-5"></i></a>
  <a className=""href="https://t.me/joseensoiii"target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-telegram text-3xl ml-5"></i></a>
</div>

          <div className="teck-stack  flex sm:flex-col xl:flex-row items-center justify-between gap-2 xl:mt-0 sm:mt-10 ">
            <p className="border-r border-slate-900 pr-5 text-slate-900 font-semibold">Tech Stack</p>
            <div className="tech-icons  transition grid sm:grid-cols-3 content-center justify-content-center xl:grid-cols-6 gap-5 xl:mt-0 sm:mt-0">
              <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.3, type: 'spring', bounce: 0.4 }} className="w-[60px] bg-white shadow-xl rounded-full  p-3 cursor-pointer "><img className="w-full h-full object-cover" src="images/icons/react.png" alt="" /></motion.div>
              <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.3, type: 'spring', bounce: 0.4 }} className="w-[60px] bg-white shadow-xl rounded-full p-3 cursor-pointer"><img className="w-full h-full object-cover" src="https://vuejs.org/images/logo.png" alt="Vue" /></motion.div>
              <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.3, type: 'spring', bounce: 0.4 }} className="w-[60px] bg-white shadow-xl rounded-full p-3 cursor-pointer"><img className="w-full h-full object-cover" src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular" /></motion.div>
              <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.3, type: 'spring', bounce: 0.4 }} className="w-[60px] bg-white shadow-xl rounded-full p-3 cursor-pointer"><img className="w-full h-full object-cover" src="/images/icons/icons8-wordpress.svg" alt="WordPress" /></motion.div>
              <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, type: 'spring', bounce: 0.4 }} className="w-[60px] bg-white shadow-xl rounded-full  p-3 cursor-pointer "><img className="w-full h-full object-cover" src="images//icons/html.png" alt="" /></motion.div>
              <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, type: 'spring', bounce: 0.4 }} className="w-[60px] bg-white shadow-xl rounded-full  p-3 cursor-pointer "><img className="w-full h-full object-cover" src="images//icons/css.png" alt="" /></motion.div>
              <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, type: 'spring', bounce: 0.4 }} className="w-[60px] bg-white shadow-xl rounded-full  p-3 cursor-pointer "><img className="w-full h-full object-cover" src="images//icons/js.png" alt="" /></motion.div>
              <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, type: 'spring', bounce: 0.4 }} className="w-[60px] bg-white shadow-xl rounded-full  p-3 cursor-pointer "><img className="w-full h-full object-cover" src="images//icons/express.jpg" alt="" /></motion.div>
              <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, type: 'spring', bounce: 0.4 }} className="w-[60px] bg-white shadow-xl rounded-full  p-3 cursor-pointer "><img className="w-full h-full object-cover" src="images//icons/node,js.jpg" alt="" /></motion.div>
              <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, type: 'spring', bounce: 0.4 }} className="w-[60px] bg-white shadow-xl rounded-full  p-3 cursor-pointer "><img className="w-full h-full object-cover" src="images//icons/tailwind.png" alt="" /></motion.div>
              <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, type: 'spring', bounce: 0.4 }} className="w-[60px] bg-white shadow-xl rounded-full  p-3 cursor-pointer "><img className="w-full h-full object-cover" src="/images//icons/icons8-arduino.svg" alt="" /></motion.div>
              <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, type: 'spring', bounce: 0.4 }} className="w-[60px] bg-white shadow-xl rounded-full  p-3 cursor-pointer "><img className="w-full h-full object-cover" src="images/icons/github.jpg" alt="" /></motion.div>
              <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, type: 'spring', bounce: 0.4 }} className="w-[60px] bg-white shadow-xl rounded-full  p-3 cursor-pointer "><img className="w-full h-full object-cover" src="/images/icons/linux.svg" alt="Linux" /></motion.div>
              <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, type: 'spring', bounce: 0.4 }} className="w-[60px] bg-white shadow-xl rounded-full  p-3 cursor-pointer "><img className="w-full h-full object-cover" src="/images/icons/network.svg" alt="Linux" /></motion.div>
              <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, type: 'spring', bounce: 0.4 }} className="w-[60px] bg-white shadow-xl rounded-full  p-3 cursor-pointer "><img className="w-full h-full object-cover" src="/images/icons/icons8-mysql-80.png" alt="WordPress" /></motion.div>
              <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, type: 'spring', bounce: 0.4 }} className="w-[60px] bg-white shadow-xl rounded-full  p-3 cursor-pointer "><img className="w-full h-full object-cover" src="/images/icons/monitor.svg" alt="WordPress" /></motion.div>
              <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, type: 'spring', bounce: 0.4 }} className="w-[60px] bg-white shadow-xl rounded-full  p-3 cursor-pointer "><img className="w-full h-full object-cover" src="/images/icons/security.svg" alt="WordPress" /></motion.div>
              <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, type: 'spring', bounce: 0.4 }} className="w-[60px] bg-white shadow-xl rounded-full p-3 cursor-pointer"><img  className="w-full h-full object-cover" src="/images/icons/shopify.svg"  alt="Shopify" />
</motion.div>

            </div>
          </div>

        </motion.div>
        <div className="flex items-center justify-center">
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, }} className="rounded-full sm:w-[300px] xl:w-[300px]  relative"><img className="animate-blob w-full border border-slate-100 z-50 h-full object-cover"src="/images/personal/profile.jpg"alt=""/></motion.div>
        </div>

      </div>

    </section>
  );
};

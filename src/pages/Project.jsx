import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="xl:h-full py-20 bg-slate-50 relative overflow-hidden"
    >
      <div className="m-auto sm:w-[90%] md:w-[60%] ">
        <h1 className="text-md font-bold text-blue-500 uppercase">Projects</h1>
        <h2 className="text-2xl font-bold text-slate-900 mt-5">
          Each Project has a unique piece of development 🧩
        </h2>
        {/* First Project */}
        <div className="bg-white rounded-xl shadow-md xl:flex items-start p-10 gap-5 mt-10">
  <div className="">
    <a
      className=""
      href="https://www.metacoresystemsinc.com"
      target="_blank"
      rel="noreferrer noopener"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <img
          className="w-full h-full object-cover rounded-xl shadow-mmd border-t border-l border-slate-600"
          src="/images/project2.PNG"
          alt=""
        />
      </motion.div>
    </a>
  </div>
  <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5">
    <h1 className="text-center font-bold text-[20px]">
      IT Solutions Company
    </h1>
    <motion.p
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
      viewport={{ once: true }}
      className="text-center text-gray-500"
    >
      My Internship Project
    </motion.p>
    <motion.p
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
      viewport={{ once: true }}
      className="text-center text-gray-500"
    >
      Empowering businesses through innovative IT solutions to drive efficiency, growth, and digital transformation.
    </motion.p>
    <div className="flex gap-5 justify-center">
      <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
        React
      </span>
      <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
        Vite.Js
      </span>
      <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
        Tailwind
      </span>
    </div>
    <div className="flex gap-5 items-center justify-center">
      <a
        className="flex font-semibold items-center justify-between gap-2"
        href="https://github.com/JoseEnsoIII/ITSolutions.inc"
        target="_blank"
        rel="noreferrer noopener"
      >
        Code <i className="fa-brands fa-github text-2xl"></i>
      </a>
      <a
        className="flex font-semibold items-center justify-between gap-2"
        href="https://itsolutions-inc.vercel.app/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Live Demo{" "}
        <i className="fa-solid fa-share-from-square text-2xl"></i>
      </a>
    </div>
  </div>
</div>


        {/* 2nd Project */}
        <div className="bg-white rounded-xl shadow-md xl:flex xl:flex-row-reverse items-start p-10 gap-5 mt-10">
          <div className="">
            <a
              className=""
              href="http://iconitrax.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <img
                  className="w-full h-full object-cover rounded-xl shadow-mmd border-t border-l border-slate-600"
                  src="/images/iconitrax.png"
                  alt=""
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5">
            <h1 className="text-center font-bold text-[20px]">Iconitrax</h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Work Project
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              CRESTICO, INC. offers autonomy and cutting-edge tools for
              independent professionals, fostering a supportive community for
              collaborative success in deal closures.
            </motion.p>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                WordPress
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                CMS
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Elementor/Divi
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://www.iconitrax.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* 3rd Project */}
        <div className="bg-white rounded-xl shadow-md xl:flex items-start p-10 gap-5 mt-10">
          <div className="">
            <a
              className=""
              href="https://reactfl1x.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <img
                  className="w-full h-full object-cover rounded-xl shadow-mmd border-t border-l border-slate-600"
                  src="/images/rf.png"
                  alt=""
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5">
            <h1 className="text-center font-bold text-[20px]">ReactFlix</h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              My Self Project
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              ReactFlix is a free ad-free movie streaming app offering over
              10,000 movies and TV series, with the option to download content
              from MoviesCloud for offline viewing, all without the need to
              register or pay.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Im not done. Im doing my job right now. Im still searching for
              good ideas for this website.
            </motion.p>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Mysql
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Express
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                React
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Node.js
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://github.com/JoseEnsoIII/REACT"
                target="_blank"
                rel="noreferrer noopener"
              >
                Code <i className="fa-brands fa-github text-2xl"></i>
              </a>
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://reactfl1x.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* 4th Project */}
        <div className="bg-white rounded-xl shadow-md xl:flex xl:flex-row-reverse  items-start p-10   gap-5 mt-10">
          <div className="">
            <a className="" href="#" target="_blank">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <img
                  className="w-full h-full object-cover rounded-xl border-t border-l border-slate-600 "
                  src="/images/sp.png"
                  alt=""
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5   ">
            <h1 className="text-center font-bold text-[20px] ">
              SaturnPay Exchange
            </h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Work Project
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Developing a crypto-centric social platform akin to Instagram,
              where users share trading insights, favorite coins, and connect
              through timelines, stories, and messaging, fostering a vibrant
              community within the crypto space.{" "}
            </motion.p>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Vue
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Vuetify3
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Vite.Js
              </span>
            </div>
          </div>
        </div>

        {/* 5th Project */}
        <div className="bg-white rounded-xl shadow-md xl:flex items-start p-10  gap-5 mt-10">
          <div className="">
            <a className="" href="#" target="_blank">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <img
                  className="w-full h-full object-cover rounded-xl shadow-mmd border-l "
                  src="/images/pph.png"
                  alt=""
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5   ">
            <h1 className="text-center font-bold text-[20px] ">CI3-ERP</h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Creating a comprehensive Point of Sale (POS) system tailored for a
              rice dealership, streamlining inventory management, sales
              transactions, and financial tracking to optimize business
              operations.
            </motion.p>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Codeigniter3
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                PHP
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                SQL
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                AJAX
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                JQUERY
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center"></div>
          </div>
        </div>

        {/* 6th Project */}
        <div className="bg-white rounded-xl shadow-md xl:flex xl:flex-row-reverse  items-start p-10   gap-5 mt-10">
          <div className="">
            <a className="" href="#" target="_blank">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <img
                  className="w-full h-full object-cover rounded-xl shadow-mmd border-t border-l border-slate-600"
                  src="/images/bs.png"
                  alt=""
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5   ">
            <h1 className="text-center font-bold text-[20px] ">Bulls Signal</h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Work Project
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Step into the realm of crypto fortune with our meticulously
              crafted signal website. Seamlessly blending innovative design with
              advanced algorithms, we provide real-time insights and expert
              analysis, empowering you to make informed decisions in the
              ever-evolving landscape of cryptocurrency.
            </motion.p>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600 ">
                Vuetify3
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Vite.js
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Typescript
              </span>
            </div>
          </div>
        </div>

        {/* 7th Project */}
        <div className="bg-white rounded-xl shadow-md xl:flex items-start p-10 gap-5 mt-10">
          <div className="">
            <a
              className=""
              href="https://www.figma.com/file/UcHOWo37hRVMW7zjsXvtGj/Untitled?type=design&mode=design&t=NeWG2puztmo7jwqG-0"
              target="_blank"
              rel="noreferrer noopener"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <img
                  className="w-full h-full object-cover rounded-xl shadow-mmd border-t border-l border-slate-600"
                  src="/images/111.PNG"
                  alt=""
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5">
            <h1 className="text-center font-bold text-[20px]">
              UI/UX Web Design
            </h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Web Design of my Work Project In Wordpress
            </motion.p>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                FIGMA
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://www.figma.com/file/UcHOWo37hRVMW7zjsXvtGj/Untitled?type=design&mode=design&t=NeWG2puztmo7jwqG-0"
                target="_blank"
                rel="noreferrer noopener"
              >
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
            <div className="flex gap-5 items-center justify-center"></div>
          </div>
        </div>

        {/* 8th Project */}
        <div className="bg-white rounded-xl shadow-md xl:flex xl:flex-row-reverse items-start p-10 gap-5 mt-10">
          <div className="">
            <a
              className=""
              href="https://travel-website-ph.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <img
                  className="w-full h-full object-cover rounded-xl shadow-mmd border-t border-l border-slate-600"
                  src="/images/ta.png"
                  alt=""
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5">
            <h1 className="text-center font-bold text-[20px]">Travel Agency</h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              My Internship Project
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Elevating your Philippine travel experience with seamless online
              solutions, bringing you closer to captivating destinations and
              unforgettable journeys.
            </motion.p>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                React
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Vite
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Tailwind
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://travel-website-ph.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

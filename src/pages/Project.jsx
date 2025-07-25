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
              href="*"
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
                  src="/images/projects/talkaroo.jpg"
                  alt=""
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5">
            <h1 className="text-center font-bold text-[20px]">
              Talkaroo
            </h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Self Project | Full Stack
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Empowering language learners through innovative education solutions to unlock global communication, cultural connection, and personal growth.
            </motion.p>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                <strong>P</strong>ostgres
              </span>
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                <strong>E</strong>xpress.js
              </span>
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                <strong>R</strong>eact
              </span>
            </div>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                <strong>N</strong>ode.Js
              </span>
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                <strong>O</strong>auth2
              </span><span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                <strong>A</strong>I Chatbot
              </span>
            </div>
            <div className="flex gap-5 justify-center">
             
              <span className="shadow-mmd border-t border-l border-slate-600 px-5 py-2 rounded-md">
                <strong>A</strong>PI
              </span>

            </div>
            <div className="flex gap-5 items-center justify-center">

              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://talkaroo-v-1.vercel.app/"
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
                  src="/images/projects/iconitrax.png"
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
              Work Project | WordPress
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
            </div>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Elementor/Divi
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                GHL
              </span>
              
            </div>
            <div className="flex gap-5 justify-center">
             
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Funneling
              </span>
            </div>
            <div className="flex gap-5 justify-center"></div>
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
              href="https://finheads.io/"
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
                  src="/images/finheads.jpg" // This is the correct path
                  alt="FinHeads project"
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5">
            <h1 className="text-center font-bold text-[20px]">FinHeads</h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Work Project  | WordPress
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              FinHeads.io is a platform for technical trading, offering tools
              and insights to help traders analyze markets and make informed
              decisions.{" "}
            </motion.p>

            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                WordPress
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Elementor
              </span>
            </div>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Payment Integration
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://finheads.io/"
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
                  src="/images/projects/sp.png"
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
              Work Project | Front-End
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              A crypto-focused social platform where users share trading
              insights, favorite coins, and connect via timelines, stories, and
              messaging, building a vibrant crypto community.{" "}
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
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://github.com/JoseEnsoIII/SaturnPay"
                target="_blank"
                rel="noreferrer noopener"
              >
                Code <i className="fa-brands fa-github text-2xl"></i>
              </a>
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://saturnpay.io/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Live Demo{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
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
                  src="/images/projects/pph.png"
                  alt=""
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5   ">
            <h1 className="text-center font-bold text-[20px] ">CI3-ERP</h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Internship Project
            </motion.p>
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
            </div>
            <div className="flex gap-5 justify-center">
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
                  src="/images/projects/bs.png"
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
              Work Project | Front-End
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Explore crypto opportunities with our signal website, combining
              innovative design and advanced algorithms for real-time insights
              and expert analysis to help you make informed decisions.
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
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://github.com/JoseEnsoIII/BullsSignals"
                target="_blank"
                rel="noreferrer noopener"
              >
                Code <i className="fa-brands fa-github text-2xl"></i>
              </a>
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
                  src="/images/projects/111.PNG"
                  alt=""
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5">
            <h1 className="text-center font-bold text-[20px]">
              UI/UX Design Portfolio
            </h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              All my <strong>UI/UX</strong> designs are uploaded here, including:
            </motion.p>
            <ul className="text-center text-gray-500 list-disc list-inside">
              <li>Figma Files</li>
              <li>Live Demos</li>
              <li>Prototype <br />Iterations</li>
            </ul>

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
              href="https://drive.google.com/drive/folders/15jTLtDfHzT83P3VccfjEtxMG738Dk8oz?usp=sharing"
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
                  src="/images/projects/csa.jpg"  // Use a leading slash
                  alt=""
                />

              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5">
            <h1 className="text-center font-bold text-[20px]">
              Cyber Security Projects
            </h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              I am currently self-studying Google Cybersecurity on Coursera (September 2024 - Ongoing).
            </motion.p>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Linux
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                SQL
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Python
              </span>
            </div>
            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Networking
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Cloud Security
              </span>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://drive.google.com/drive/folders/15jTLtDfHzT83P3VccfjEtxMG738Dk8oz?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
              >
                Projects{" "}
                <i className="fa-solid fa-share-from-square text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

         <div className="bg-white rounded-xl shadow-md xl:flex items-start p-10 gap-5 mt-10">
          <div className="">
            <a
              className=""
              href="https://my-crypto-funds.vercel.app/"
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
                  src="/images/projects/mcf.jpg"
                  alt=""
                />
              </motion.div>
            </a>
          </div>
          <div className="w-full xl:mt-0 sm:mt-5 flex flex-col gap-5">
            <h1 className="text-center font-bold text-[20px]">
              My CryptoFunds
            </h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-gray-500"
            >
              Landing page for a crypto trading website, exchange platform, and live trading.
            </motion.p>
          

            <div className="flex gap-5 justify-center">
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                React
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                TailwindCSS
              </span>
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                API
              </span>
              
            </div>
             <div className="flex gap-5 justify-center">
             
              <span className="shadow-mmd px-5 py-2 rounded-md border-t border-l border-slate-600">
                Trading View 
              </span>
              
            </div>
            <div className="flex gap-5 items-center justify-center">
              <a
                className="flex font-semibold items-center justify-between gap-2"
                href="https://my-crypto-funds.vercel.app/"
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
      </div>
    </section>
  );
};

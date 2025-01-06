export const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20 relative overflow-hidden ">
      <div className="absolute w-[150px] top-0 sm:right-0 xl:right-20">
        <img className="w-full h-full object-cover" src="/images/3dimage.png" />
      </div>

      <div className="m-auto sm:w-[90%] md:w-[60%]">
        <h1 className="text-blue-400 font-bold uppercase">Contact </h1>
        <p className="text-slate-900 text-2xl font-bold tracking-widest">
          Hire me!👇
        </p>

        <div className="mt-5">
          <div className=" md:flex items-center justify-between gap-5">
            {/* Location */}
            <div className="p-5 rounded-full shadow-mmd border-t border-l border-slate-900 flex items-center gap-1">
              <div className="w-[40px]">
                <img
                  className="w-full h-full object-cover"
                  src="/images/portfolio-icon/location1.svg"
                  alt=""
                />
              </div>
              <div>
                <p className="font-bold">Location</p>
                <p>Lingunan Valenzuela, Philippines</p>
              </div>
            </div>
            {/* Email */}
            <div className="p-5 rounded-full shadow-mmd border-t border-l border-slate-900 flex items-center gap-1 sm:mt-5 md:mt-0 ">
              <div className="w-[40px]">
                <img
                  className="w-full h-full object-cover"
                  src="/images/portfolio-icon/email.svg"
                  alt=""
                />
              </div>
              <div>
                <p className="font-bold">Email</p>
                <p className=" text-black whitespace-normal">
                  joseensothethird@gmail.com{" "}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-full shadow-mmd border-t border-l border-slate-900 flex items-center gap-1 sm:mt-5 md:mt-0">
              <div className="w-[40px]">
                <img
                  className="w-full h-full object-cover"
                  src="/images/portfolio-icon/resume.svg"
                  alt="Resume Icon"
                />
              </div>
              <div>
  <p className="font-bold">Resume</p>
  <a
    href="https://drive.google.com/file/d/10FvKW3_PoUMSHHv3fFoTplSb_ZrdC6TB/view?usp=drive_link"
    className="text-blue-600 whitespace-normal"
    target="_blank"
    rel="noopener noreferrer"
  >
    Click Here
  </a>
</div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

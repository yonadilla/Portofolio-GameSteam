import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";

export default function Dialog({
  closeModal,
  openModal,
  isi,
  Title,
  TechStack,
  detail,
  slider,
  githubUrl,
  demoUrl
}) {
  const ref = useRef();
  useLayoutEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.closeModal();
    }
  }, [openModal]);

  console.log(openModal);
  const dropIn = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    vicible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.2,
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
    },
  };

  return (
    <div>
      <motion.dialog
        variants={dropIn}
        initial="hidden"
        animate="vicible"
        exit="exit"
        className="flex flex-col w-fit"
        ref={ref}
      >
        <div className=" w-full ">
          <swiper-container
            slides-per-view="1"
            speed="500"
            loop="true"
            className="swiper-slide-zoomed"
            css-mode="true"
            navigation="true"
            pagination="true"
            scrollbar="true"
          >
            {slider}
          </swiper-container>
        </div>
        <div className="flex px-5 flex-col bg-slate-100">
          <h2 className=" mt-4">{Title}</h2>
          <button
            className=" bg-white rounded-full inline-block w-8 h-8 z-30 absolute right-4 top-0"
            onClick={closeModal}
          >
            &times;
          </button>
          <div className="flex flex-col ">
            <div className="py-6">
              <p>{TechStack}</p>
            </div>
            <div className="">{detail}</div>
            <div className=" py-4 flex text-lg gap-6 ">
              <button className=" border border-solid border-black px-2 py-1 hover:bg-navCurrent_Darkmode">
                <a href={githubUrl} target="blank">Github</a>
              </button>
              <button className="border border-solid border-black px-2 py-1 hover:bg-text">
                <a href={demoUrl} target="blank">Demo</a>{" "}
              </button>
            </div>
          </div>
        </div>
      </motion.dialog>
    </div>
  );
}

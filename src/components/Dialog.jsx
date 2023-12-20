import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {Howl, Howler} from 'howler';

export default function Dialog({
  setModal,
  openModal,
  Title,
  TechStack,
  detail,
  githubUrl,
  demoUrl,
  imageCoursel,
  layoutId,
  volume,
}) {
  const [index, setIndex] = useState(0);
  const ref = useRef();
  
    const soundModal = new Howl({
      src : ["/assets/sound/deck_ui_show_modal.mp3"],
      volume : volume,
      preload : true,
    });

    const soundHide = new Howl({
      src : ["/assets/sound/deck_ui_hide_modal.wav"],
      volume : volume,
      preload : true,
    });

    useLayoutEffect(() => {
      if (openModal) {
      soundModal.play()
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <div>
      <motion.dialog
        ref={ref}
        exit={{ display: "none" }}
        className=" lg:flex-row flex-col flex bg-white h-fit text-black"
        layout
        transition={{ type: "tween", duration: 0.4 }}
        layoutId={layoutId}
      >
        <div className=" lg:w-1/2 flex">
          <MotionConfig
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="">
              <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
                <div className="relative overflow-hidden">
                  <motion.div
                    animate={{ x: `-${index * 100}%` }}
                    className="flex"
                  >
                    {imageCoursel.map((image) => (
                      <img
                        key={image}
                        src={image}
                        className="aspect-[3/2] object-cover"
                      />
                    ))}
                  </motion.div>
                  <AnimatePresence initial={false}>
                    {index > 0 && (
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        exit={{ opacity: 0, pointerEvents: "none" }}
                        whileHover={{ opacity: 1 }}
                        className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                        onClick={() => setIndex(index - 1)}
                      >
                        <div className="h-6 w-6 text-3xl flex items-center justify-center">
                          <img src="/icons8-back-50.png" alt="" />
                        </div>
                      </motion.button>
                    )}
                  </AnimatePresence>

                  <AnimatePresence initial={false}>
                    {index + 1 < imageCoursel.length && (
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        exit={{ opacity: 0, pointerEvents: "none" }}
                        whileHover={{ opacity: 1 }}
                        className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                        onClick={() => setIndex(index + 1)}
                      >
                        <div className="h-6 w-6" >
                          <img src="/icons8-forward-50.png" alt="" />
                        </div>
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </MotionConfig>
        </div>
        <div className=" lg:w-1/2">
          <button
            className=" bg-white rounded-full inline-block w-8 h-8 z-30 absolute right-0 top-0 m-3"
            onClick={() => {
              setModal(null),
              soundHide.play();
            }}
          >
            &times;
          </button>
          <div className=" flex flex-col gap-2 p-5">
            <p>{Title}</p>
            <p>{TechStack}</p>
            <motion.p>{detail}</motion.p>
            <div className=" lg:relative  lg:top-10 flex gap-6 items-stretch">
              <motion.p
              className=" border-2 border-solid border-black hover:bg-green-300 px-2">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >

                Github
                </a>
              </motion.p>
              <p className="border-2 border-solid border-black hover:bg-slate-400 px-2">
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">

                Demo
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.dialog>
    </div>
  );
}

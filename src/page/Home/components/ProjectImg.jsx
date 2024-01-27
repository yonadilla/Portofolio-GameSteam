import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { DataModal } from "../../../Data/dataModal";
import {
  imagePortofolio,
  imgAdmin,
  imgInterior,
  imgLeetCode,
  imgMyTeam,
  imgNotFound,
  imgQuote,
  imgRestfull,
  imgSelect,
  imgStore,
  imgTictac,
} from "../../../Data/dataImg";
import Dialog from "../../../components/Dialog";

export default function ProjectImg({ query, setModal, t, modal, isLarge }) {
  const ref = useRef();

  useEffect(() => {
    if (modal !== null) {
      ref.current?.showModal();
    } else ref.current?.close();
  }, [modal]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div className=" pb-28 h-fit z-0  flex flex-col gap-5 lg:relative lg:h-96 lg:top-5 lg:flex lg:flex-wrap lg:flex-row">
          {DataModal.filter((modal) => modal.techStack.includes(query)).map(
            (modal) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  layout
                  exit={{ opacity: 0 }}
                  key={modal.id}
                  className="  lg:w-72 lg:h-48"
                >
                  <motion.div
                    layoutId={modal.modal}
                    whileHover={{
                      scale: [1, 1.1, 1],
                      transition: { type: "tween", duration: 0.1 },
                    }}
                    transition={{ layout: { duration: 0.4, type: "tween" } }}
                    onClick={() => {
                      setModal(modal.modal);
                    }}
                    className="hover:border-solid hover:border-4 border-black hover:rounded-md hover:dark:border-gray-500 hover:dark:shadow-[0_0_20px_5px_rgba(8,_112,_184,_0.7)]  p-1"
                  >
                    <motion.img
                      src={modal.screenShoot}
                      alt=""
                      className=" lg:h-40 -z-20"
                    />
                  </motion.div>
                </motion.div>
              );
            }
          )}
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {modal == 1 && (
          <>
            <Dialog
              Title={"Not found page"}
              detail={t("detail_not_found")}
              imageCoursel={imgNotFound}
              TechStack={"HTML CSS"}
              layoutId={1}
              setModal={setModal}
              openModal={modal}
              demoUrl={"https://yonadilla.github.io/404/"}
              githubUrl={"https://github.com/yonadilla/404"}
            />
          </>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {modal == 2 && (
          <>
            <Dialog
              Title={"my-team page"}
              detail={t("detail_my_team")}
              imageCoursel={imgMyTeam}
              TechStack={"HTML CSS"}
              layoutId={2}
              setModal={setModal}
              openModal={modal}
              demoUrl={"https://yonadilla.github.io/my-team/"}
              githubUrl={"https://github.com/yonadilla/my-team"}
            />
          </>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {modal == 3 && (
          <>
            <Dialog
              Title={"Interior page"}
              detail={t("detail_my_interior")}
              imageCoursel={imgInterior}
              TechStack={"HTML CSS JavaScript"}
              layoutId={3}
              setModal={setModal}
              openModal={modal}
              demoUrl={"https://yonadilla.github.io/interior-challenges/"}
              githubUrl={"https://github.com/yonadilla/interior-challenges"}
            />
          </>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {modal == 4 && (
          <>
            <Dialog
              Title={"quote generator"}
              detail={t("detail_quote")}
              imageCoursel={imgQuote}
              TechStack={"HTML CSS JavaScript"}
              layoutId={4}
              setModal={setModal}
              openModal={modal}
              demoUrl={"https://yonadilla.github.io/quote-random/"}
              githubUrl={"https://github.com/yonadilla/quote-random"}
            />
          </>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {modal == 5 && (
          <>
            <Dialog
              Title={"Game tic-tac-to"}
              detail={t("detail_tic_tac")}
              imageCoursel={imgTictac}
              TechStack={"HTML CSS ReactJS"}
              layoutId={5}
              setModal={setModal}
              openModal={modal}
              demoUrl={"https://yonadilla.github.io/tic-tac-to/"}
              githubUrl={"https://github.com/yonadilla/tic-tac-to"}
            />
          </>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {modal == 6 && (
          <>
            <Dialog
              Title={"First Portofolio"}
              detail={t("detail_portofolio")}
              imageCoursel={imagePortofolio}
              TechStack={"HTML CSS Tailwincss ReactJS daisy ui"}
              layoutId={6}
              setModal={setModal}
              openModal={modal}
              githubUrl={"https://github.com/yonadilla/portofolio"}
              demoUrl={"https://yonadilla.github.io/portofolio/"}
            />
          </>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {modal == 7 && (
          <>
            <Dialog
              Title={"Multi-select"}
              detail={t("detail_multiselect")}
              imageCoursel={imgSelect}
              TechStack={"HTML ReactJS TypesScript"}
              layoutId={7}
              setModal={setModal}
              openModal={modal}
              githubUrl={"https://github.com/yonadilla/portofolio"}
              demoUrl={"https://yonadilla.github.io/portofolio/"}
            />
          </>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {modal == 8 && (
          <>
            <Dialog
              Title={"E-commerceStore"}
              detail={t("detail_store")}
              imageCoursel={imgStore}
              TechStack={"HTML Tailwindcss ReactJS TypesScript Next js axios headless-ui midtrans"}
              layoutId={8}
              setModal={setModal}
              openModal={modal}
              githubUrl={"https://github.com/yonadilla/portofolio"}
              demoUrl={"https://yonadilla.github.io/portofolio/"}
            />
          </>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {modal == 9 && (
          <>
            <Dialog
              Title={"Admin E-commerceStore"}
              detail={t("detail_admin")}
              imageCoursel={imgAdmin}
              TechStack={"Tailwindcss ReactJS TypesScript Next js Clerk shadcn-ui prisma neon "}
              layoutId={9}
              setModal={setModal}
              openModal={modal}
              githubUrl={"https://github.com/yonadilla/portofolio"}
              demoUrl={"https://yonadilla.github.io/portofolio/"}
            />
          </>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {modal == 10 && (
          <>
            <Dialog
              Title={"Node.js LeetCode"}
              detail={t("detail_restfull")}
              imageCoursel={imgLeetCode}
              TechStack={"Node.js Express.js Graphql "}
              layoutId={10}
              setModal={setModal}
              openModal={modal}
              githubUrl={"https://github.com/yonadilla/portofolio"}
              demoUrl={"https://yonadilla.github.io/portofolio/"}
            />
          </>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {modal == 11 && (
          <>
            <Dialog
              Title={"Spring boot RestFull API"}
              detail={t("detail_restfull")}
              imageCoursel={imgRestfull}
              TechStack={"Java SpringBoot PostgreSql Junit "}
              layoutId={11}
              setModal={setModal}
              openModal={modal}
              githubUrl={"https://github.com/yonadilla/portofolio"}
              demoUrl={"https://yonadilla.github.io/portofolio/"}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

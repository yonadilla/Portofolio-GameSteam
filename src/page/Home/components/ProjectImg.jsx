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
import Button from "../../../components/Button";

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
            >
              <Button link={"https://github.com/yonadilla/404"}>Github</Button>
              <Button link={"https://yonadilla.github.io/404/"}>Demo</Button>
            </Dialog>
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
            >
              <Button link={"https://yonadilla.github.io/my-team/"}>
                Github
              </Button>
              <Button link={"https://github.com/yonadilla/my-team"}>
                Demo
              </Button>
            </Dialog>
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
            >
              <Button link={"https://yonadilla.github.io/interior-challenges/"}>
                Github
              </Button>
              <Button link={"https://github.com/yonadilla/interior-challenges"}>
                Demo
              </Button>
            </Dialog>
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
              demoUrl={""}
              githubUrl={"https://github.com/yonadilla/quote-random"}
            >
              <Button link={"https://yonadilla.github.io/quote-random/"}>
                Github
              </Button>
              <Button link={"https://github.com/yonadilla/quote-random"}>
                Demo
              </Button>
            </Dialog>
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
            >
              <Button link={"https://yonadilla.github.io/tic-tac-to/"}>
                Github
              </Button>
              <Button link={"https://github.com/yonadilla/tic-tac-to"}>
                Demo
              </Button>
            </Dialog>
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
             
            >
              <Button link={"https://github.com/yonadilla/portofolio"}>
                Github
              </Button>
              <Button link={"https://yonadilla.github.io/portofolio/"}>
                Demo
              </Button>
            </Dialog>
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
            >
              <Button link={"https://github.com/yonadilla/multi-select"}>
                Github
              </Button>
              <Button link={"https://multi-select-mocha.vercel.app/"}>
                Demo
              </Button>
            </Dialog>
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
              TechStack={
                "HTML Tailwindcss ReactJS TypesScript Next js Axios Headless-ui Midtrans"
              }
              layoutId={8}
              setModal={setModal}
              openModal={modal}
              
            >
              <Button link={"https://github.com/yonadilla/e-commerce-store"}>
                Github
              </Button>
              <Button link={"https://e-commerce-store-nu-five.vercel.app/"}>
                Demo
              </Button>
            </Dialog>
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
              TechStack={
                "Tailwindcss ReactJS TypesScript Next js Clerk Shadcn-ui Prisma Neon "
              }
              layoutId={9}
              setModal={setModal}
              openModal={modal}
            >
              <Button link={"https://github.com/yonadilla/e-commerce-admin"}>
                Github
              </Button>
              <Button link={"https://e-commerce-admin-lime.vercel.app/e73400ba-7f39-4a9f-875d-339388b96eed"}>
                Demo
              </Button>
            </Dialog>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {modal == 10 && (
          <>
            <Dialog
              Title={"Node.js LeetCode"}
              detail={t("detail_leet")}
              imageCoursel={imgLeetCode}
              TechStack={"Node.js Express.js Graphql "}
              layoutId={10}
              setModal={setModal}
              openModal={modal}
            >
              <Button link={"https://github.com/yonadilla/serverLeetcode"}>
                Github
              </Button>
            </Dialog>
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
            >
              <Button link={"https://github.com/yonadilla/Learn_SpringBoot"}>
                Github
              </Button>
            </Dialog>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

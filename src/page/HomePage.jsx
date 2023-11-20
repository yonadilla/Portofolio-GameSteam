import { useEffect, useRef, useState } from "react";
import { register } from "swiper/element/bundle";
import "../style/DropDown.css";
import Volume from "../components/Volume";
import { AnimatePresence, stagger, useAnimate, motion } from "framer-motion";
import useClickOutside from "../Hooks/useClickOutside";
import Dialog from "../modal/Dialog";
import Svg_darkmode from "../svg/Svg_darkmode";
import Svg_lightmode from "../svg/Svg_lightmode";
import { DataModal } from "../Data/dataModal";
import useMediaQuery from "../Hooks/useMediaQuery";
import CardPortofolio from "../Cards/CardPortofolio";
import {
  imagePortofolio,
  imgInterior,
  imgMyTeam,
  imgNotFound,
  imgQuote,
  imgTictac,
} from "../Data/dataImg";
import CardQuoteGenerator from "../Cards/CardQuoteGenerator";
import CardGameTicTac from "../Cards/CardGameTicTac";
import CardMyTeam from "../Cards/CardMyTeam";
import CardNotFound from "../Cards/CardNotFound";
import CardInterior from "../Cards/CardInterior";
import ChangeLng from "../components/ChangeLng";

register();

export default function Home({ darkMode, setDarkMode, t }) {
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef();
  const [query, setQuery] = useState("All");
  const [modal, setModal] = useState(0);
  const [card, setCard] = useState(1);
  const isLarge = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    setCard(
      DataModal.filter((modal) => modal.techStack.includes(query))[0].modal
    );
  }, [query]);
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
  function useMenuAnimation() {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

      animate(
        "ul",
        {
          clipPath: isOpen
            ? "inset(0% 0% 0% 0% round 10px)"
            : "inset(10% 50% 90% 50% round 10px)",
          borderColor: darkMode ? "#ffff" : "#000",
          borderWidth: "2px",
          borderStyle: "solid",
          borderRadius: "10px",
        },
        {
          type: "spring",
          bounce: 0,
          duration: 0.5,
        }
      );

      animate(
        "li",
        isOpen
          ? { opacity: 1, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
        {
          duration: 0.2,
          delay: isOpen ? staggerMenuItems : 0,
        }
      );
    }, [isOpen]);

    return scope;
  }

  const scope = useMenuAnimation(isOpen);

  function handleFilter(query) {
    setQuery(query);
    setIsOpen(false);
  }

  useClickOutside(filterRef, () => {
    if (isOpen);
    setIsOpen(false);
  });

  useEffect(() => {
    if (modal !== 0) {
      document.body.style.overflow = "hidden"
    } else document.body.style.overflow = ""
  },[modal])
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className=""
      >
        <main className="">
          {isLarge && (
            <div className=" flex justify-center relative top-9 gap-8">
              <button
                className={
                  query == "All"
                    ? "bg-navCurrent dark:bg-navCurrent_Darkmode px-2 py-1 rounded-lg cursor-pointer text-white"
                    : "bg-nav px-2 dark:bg-nav_Darkmode py-1 rounded-lg cursor-pointer text-black"
                }
                onClick={() => handleFilter("All")}
              >
                All{" "}
              </button>
              <button
                className={
                  query == "ReactJS"
                    ? "bg-navCurrent dark:bg-navCurrent_Darkmode px-2 py-1 rounded-lg cursor-pointer text-white"
                    : "bg-nav px-2 dark:bg-nav_Darkmode py-1 rounded-lg cursor-pointer text-black"
                }
                onClick={() => handleFilter("ReactJS")}
              >
                React js
              </button>
              <button
                className={
                  query == "JavaScript"
                    ? "bg-navCurrent dark:bg-navCurrent_Darkmode px-2 py-1 rounded-lg cursor-pointer text-white"
                    : "bg-nav px-2 dark:bg-nav_Darkmode py-1 rounded-lg cursor-pointer text-black"
                }
                onClick={() => handleFilter("JavaScript")}
              >
                JavaScript
              </button>
              <button
                className={
                  query == "Others"
                    ? "bg-navCurrent dark:bg-navCurrent_Darkmode px-2 py-1 rounded-lg cursor-pointer text-white"
                    : "bg-nav px-2 dark:bg-nav_Darkmode py-1 rounded-lg cursor-pointer text-black"
                }
                onClick={() => handleFilter("Others")}
              >
                Others
              </button>
            </div>
          )}
          <nav
            className=" flex justify-end lg:flex-col mt-5 lg:mr-48 lg:h-10"
            ref={scope}
          >
            <div className=" absolute top-8 flex items-center lg:right-40">
              <div className=" flex items-center gap-3 h-auto">
                <div className=" mt-2">
                  <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <Svg_darkmode /> : <Svg_lightmode />}
                  </button>
                </div>
                <div className=" pr-2">
                  <ChangeLng />
                </div>
              </div>
              {!isLarge ? (
                <div ref={filterRef}>
                  <button
                    className=" border-solid border-black flex rounded-lg justify-between px-2 items-center border w-32 text-black dark:text-white  dark:border-white"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {query}
                    <div
                      className="arrow"
                      style={{ transformOrigin: "50% 55%" }}
                    >
                      <svg width="15" height="15" viewBox="0 0 20 20">
                        <path
                          d="M0 7 L 20 7 L 10 16"
                          fill={darkMode ? "#fff" : "#000"}
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              ) : null}
            </div>
            <ul
              style={{
                pointerEvents: isOpen ? "auto" : "none",
                clipPath: "inset(10% 50% 90% 50% round 10px)",
              }}
              className={
                " translate-y-20 p-3 w-48 z-10 bg-white dark:bg-black "
              }
            >
              <div>
                <li onClick={() => handleFilter("All")}>All </li>
                <li onClick={() => handleFilter("ReactJS")}>React js</li>
                <li onClick={() => handleFilter("JavaScript")}>JavaScript</li>
                <li onClick={() => handleFilter("Others")}>Others</li>
              </div>
            </ul>
          </nav>
          <div className=" lg:h-[410px]">
            {isLarge && (
              <div className="">
                {card == 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        type: "ease",
                        duration: 1,
                      },
                    }}
                    className=" px-5 "
                  >
                    <CardPortofolio t={t} />
                  </motion.div>
                )}
                {card == 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        type: "ease",
                        duration: 1,
                      },
                    }}
                    className=" px-5 "
                  >
                    <CardGameTicTac t={t} />
                  </motion.div>
                )}
                {card == 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        type: "ease",
                        duration: 1,
                      },
                    }}
                    className=" px-5 "
                  >
                    <CardMyTeam t={t} />
                  </motion.div>
                )}
                {card == 4 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        type: "ease",
                        duration: 1,
                      },
                    }}
                    className=" px-5 "
                  >
                    <CardQuoteGenerator t={t} />
                  </motion.div>
                )}
                {card == 5 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        type: "ease",
                        duration: 1,
                      },
                    }}
                    className=" px-5 "
                  >
                    <CardNotFound t={t} />
                  </motion.div>
                )}
                {card == 6 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        type: "ease",
                        duration: 1,
                      },
                    }}
                    className="px-5 "
                  >
                    <CardInterior t={t} />
                  </motion.div>
                )}
              </div>
            )}
          </div>
          <div className="">
            <motion.div
              layout
              className=" pb-28 h-fit lg:relative lg:whitespace-nowrap lg:overflow-auto "
            >
              <AnimatePresence>
                {DataModal.filter((modal) =>
                  modal.techStack.includes(query)
                ).map((modal) => {
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { type: "spring", duration: 1 },
                      }}
                      exit={{ opacity: 0 }}
                      key={modal.id}
                      className=" py-3 lg:w-64 lg:inline-block lg:scroll-ml-5 lg:px-5 lg:snap-start"
                    >
                      <p>{modal.Title}</p>
                      <button>
                        <img
                          src={modal.gif}
                          onClick={
                            isLarge
                              ? () => setCard(modal.modal)
                              : () => setModal(modal.modal)
                          }
                          alt=""
                          className=""
                        />
                      </button>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
          <AnimatePresence mode="wait">
            {modal == 1 ? (
              <Dialog
                Title={"First Portofolio"}
                TechStack={"HTML CSS Tailwindcss daisy-ui React JS"}
                detail={t('detail_portofolio')}
                slider={imagePortofolio.map((modal) => {
                  return (
                    <swiper-slide key={modal.id}>
                      <img src={modal} alt="" className="" />
                    </swiper-slide>
                  );
                })}
                githubUrl={"https://github.com/yonadilla/portofolio"}
                demoUrl={"https://yonadilla.github.io/portofolio/"}
                openModal={modal}
                closeModal={() => setModal(0)}
              />
            ) : null}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {modal == 2 && (
              <Dialog
                Title={"Game tic-tac-to"}
                TechStack={"HTML Css React JS"}
                slider={imgTictac.map((modal) => {
                  return (
                    <swiper-slide key={modal.id}>
                      <img src={modal} alt="" className="" />
                    </swiper-slide>
                  );
                })}
                detail={t('detail_tic_tac')}
                githubUrl={"https://github.com/yonadilla/tic-tac-to"}
                demoUrl={"https://yonadilla.github.io/tic-tac-to/"}
                openModal={modal}
                closeModal={() => setModal(0)}
              />
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {modal == 3 && (
              <Dialog
                Title={"My team page"}
                TechStack={"HTML Css"}
                slider={imgMyTeam.map((modal) => {
                  return (
                    <swiper-slide key={modal.id}>
                      <img src={modal} alt="" className="" />
                    </swiper-slide>
                  );
                })}
                detail={t('detail_my_team')}
                githubUrl={"https://github.com/yonadilla/my-team"}
                demoUrl={"https://yonadilla.github.io/my-team/"}
                openModal={modal}
                closeModal={() => setModal(0)}
              />
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {modal == 4 && (
              <Dialog
                Title={"Quote generator"}
                TechStack={"HTML Css React js api"}
                slider={imgQuote.map((modal) => {
                  return (
                    <swiper-slide key={modal.id}>
                      <img src={modal} alt="" className="" />
                    </swiper-slide>
                  );
                })}
                detail={t('detail_quote')}
                githubUrl={"https://github.com/yonadilla/quote-random"}
                demoUrl={"https://yonadilla.github.io/quote-random/"}
                openModal={modal}
                closeModal={() => setModal(0)}
              />
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {modal == 5 && (
              <Dialog
                Title={"Not found page"}
                TechStack={"HTML Css"}
                slider={imgNotFound.map((modal) => {
                  return (
                    <swiper-slide key={modal.id}>
                      <img src={modal} alt="" className="" />
                    </swiper-slide>
                  );
                })}
                detail={t('detail_not_found')}
                githubUrl={"https://github.com/yonadilla/404"}
                demoUrl={"https://yonadilla.github.io/404/"}
                openModal={modal}
                closeModal={() => setModal(0)}
              />
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {modal == 6 && (
              <Dialog
                Title={"Interior page"}
                TechStack={"HTML Css JavaScript"}
                slider={imgInterior.map((modal) => {
                  return (
                    <swiper-slide key={modal.id}>
                      <img src={modal} alt="" className="" />
                    </swiper-slide>
                  );
                })}
                detail={t('detail_my_interior')}
                githubUrl={"https://github.com/yonadilla/interior-challenges"}
                demoUrl={"https://yonadilla.github.io/interior-challenges/"}
                openModal={modal}
                closeModal={() => setModal(0)}
              />
            )}
          </AnimatePresence>
        </main>
      </motion.div>
    </>
  );
}

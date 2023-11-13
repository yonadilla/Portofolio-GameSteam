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

register();

export default function Home({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef();
  const [query, setQuery] = useState("All");
  const [modal, setModal] = useState(0);
  const [card, setCard] = useState(1);
  const isLarge = useMediaQuery("(min-width: 1280px)");

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




  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 1000, transition: { type: "spring", duration: 2 } }}
        className=" fixed z-50 top-0 bottom-0 left-0 right-0 w-full h-full bg-text dark:bg-background_Darkmod"
      />
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
                  query == "Java"
                    ? "bg-navCurrent dark:bg-navCurrent_Darkmode px-2 py-1 rounded-lg cursor-pointer text-white"
                    : "bg-nav px-2 dark:bg-nav_Darkmode py-1 rounded-lg cursor-pointer text-black"
                }
                onClick={() => handleFilter("Java")}
              >
                Java{" "}
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
          <nav className=" flex flex-col items-end mt-5 lg:mr-48 lg:h-10" ref={scope}>
            <div className=" absolute top-8">
              <div className=" flex items-center gap-2 h-auto">
                <div className=" mt-2">
                  <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <Svg_darkmode /> : <Svg_lightmode />}
                  </button>
                </div>
                <div className="">
                  <Volume darkMode={darkMode} />
                </div>
              </div>
              {!isLarge ? (
                <div ref={filterRef}>
                  <button
                    className={
                      darkMode
                        ? "button border-solid border-white border w-32 text-white"
                        : "button border-solid border-black border w-32 text-black"
                    }
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
                darkMode
                  ? " translate-y-5 p-3 w-48 z-10 bg-black"
                  : " translate-y-5 p-3 w-48 z-10 bg-white "
              }
            >
              <div>
                <li onClick={() => handleFilter("All")}>All </li>
                <li onClick={() => handleFilter("ReactJS")}>React js</li>
                <li onClick={() => handleFilter("JavaScript")}>JavaScript</li>
                <li onClick={() => handleFilter("Java")}>Java </li>
                <li onClick={() => handleFilter("Others")}>Others</li>
              </div>
            </ul>
          </nav>
          {isLarge && (
            <div>
              {card == 1 && (
                <div className=" px-5 ">
                  <CardPortofolio />
                </div>
              )}
              {card == 2 && (
                <div className=" px-5 ">
                  <CardGameTicTac />
                </div>
              )}
              {card == 3 && (
                <div className=" px-5 ">
                  <CardMyTeam />
                </div>
              )}
              {card == 4 && (
                <div className=" px-5 ">
                  <CardQuoteGenerator />
                </div>
              )}
              {card == 5 && (
                <div className=" px-5 ">
                  <CardNotFound />
                </div>
              )}
              {card == 6 && (
                <div className=" relative top-24 px-5 ">
                  <CardInterior />
                </div>
              )}
            </div>
          )}
          <div className="">
            <motion.div
              layout
              className=" lg:relative  lg:whitespace-nowrap lg:overflow-auto"
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
                      className=" py-3 lg:w-64 lg:inline-block lg:px-5"
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
                Title={"Portofolio Pertama"}
                TechStack={"HTML CSS Tailwindcss daisy-ui React JS"}
                detail={
                  "ini adalah project portofolio saya setelah belajar React js selama satu bulan, Tujuan saya membuat project ini adalah meng-test pengetahuan saya tentang React js yang sudah saya pelajari. Hooks yang saya pakai hanya useState, useEfffet, dan useInView dan dari project  ini saya belajar penggunaan useInView untuk membuat animasi saat elemen terlihat di layar dan library yang saya pakai daisy-ui untuk membuat sideBar"
                }
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
                detail={
                  "ini adalah project game tic-tac-to yang saya pelajari dari website official React js. disini saya sedikit memodifikasi menjadi beberapa file terpisah tidak seperti yang ada di tutorial dan dari project ini saya belajar bagaimana mengubungkan value lewat props antar component"
                }
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
                detail={
                  "ini adalah salah satu project pertama yang saya dapat dari https://devchallenges.io/. di project ini saya belajar menggunakan css selector untuk membuat children ke 2 dan 5 sedikit berbeda dari yang lain "
                }
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
                detail={
                  "ini adalah yang saya dapat dari https://www.freecodecamp.org/. di project ini saya belajar menggunakan api dan bagaimana cara menampilkan nya "
                }
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
                detail={
                  "ini adalah project pertama yang saya dapat dari https://devchallenges.io/. di project ini saya belajar pertama kali menggunakan html dan css untuk membuat tampilan website yang menarik "
                }
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
                detail={
                  "ini adalah salah satu project  pertama saya dapat dari https://devchallenges.io/. di project ini saya belajar menggunakan JavaScript untuk membuat sidebar "
                }
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

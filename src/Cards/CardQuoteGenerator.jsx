import React from "react";
import { imgQuote } from "../Data/dataImg";
import CardProject from "../components/CardProject";

export default function CardQuoteGenerator() {
  return (
    <div> 
      <CardProject 
      title={"Quote generator"}
      techStack={"HTML Css React js api"}
        detail={
          "ini adalah yang saya dapat dari https://www.freecodecamp.org/. di project ini saya belajar menggunakan api dan bagaimana cara menampilkan nya "
        }
        slider={imgQuote.map((modal, id) => {
            return (
              <swiper-slide key={id}>
                <img src={modal} alt="" className="" />
              </swiper-slide>
            );
          })}
        githubUrl={"https://github.com/yonadilla/quote-random"}
        demoUrl={"https://yonadilla.github.io/quote-random/"}/>
    </div>
  );
}

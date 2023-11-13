import CardProject from "../components/CardProject";
import { imgMyTeam } from "../Data/dataImg";

export default function CardMyTeam() {
  return (
    <div>
      <CardProject
        title={"My team page"}
        techStack={"HTML Css"}
        detail={
          "ini adalah salah satu project pertama yang saya dapat dari https://devchallenges.io/. di project ini saya belajar menggunakan css selector untuk membuat children ke 2 dan 5 sedikit berbeda dari yang lain "
        }
        slider={imgMyTeam.map((modal, id) => {
          return (
            <swiper-slide key={id}>
              <img src={modal} alt="" className="" />
            </swiper-slide>
          );
        })}
        githubUrl={"https://github.com/yonadilla/my-team"}
        demoUrl={"https://yonadilla.github.io/my-team/"}
      />
    </div>
  );
}

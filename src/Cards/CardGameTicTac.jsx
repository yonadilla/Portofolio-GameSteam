import { imgTictac } from "../Data/dataImg";
import CardProject from "../components/CardProject";

export default function CardGameTicTac() {
  return (
    <div>
      <CardProject
        title={"Game tic-tac-to"}
        techStack={"HTML Css React JS"}
        detail={
          "ini adalah project game tic-tac-to yang saya pelajari dari website official React js. disini saya sedikit memodifikasi menjadi beberapa file terpisah tidak seperti yang ada di tutorial dan dari project ini saya belajar bagaimana mengubungkan value lewat props antar component"
        }
        slider={imgTictac.map((modal, id) => {
          return (
            <swiper-slide key={id}>
              <img src={modal} alt="" className="" />
            </swiper-slide>
          );
        })}
        githubUrl={"https://github.com/yonadilla/tic-tac-to"}
        demoUrl={"https://yonadilla.github.io/tic-tac-to/"}
      />
    </div>
  );
}

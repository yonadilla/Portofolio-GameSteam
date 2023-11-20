import { imgTictac } from "../Data/dataImg";
import CardProject from "../components/CardProject";

export default function CardGameTicTac({t}) {
  return (
    <div>
      <CardProject
        title={"Game tic-tac-to"}
        techStack={"HTML Css React JS"}
        detail={t('detail_tic_tac')}
        slider={imgTictac.map((modal, id) => {
          return (
            <swiper-slide key={id}>
              <img src={modal} alt="" className="w-[668px] h-[362px]" />
            </swiper-slide>
          );
        })}
        githubUrl={"https://github.com/yonadilla/tic-tac-to"}
        demoUrl={"https://yonadilla.github.io/tic-tac-to/"}
      />
    </div>
  );
}

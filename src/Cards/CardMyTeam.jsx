import CardProject from "../components/CardProject";
import { imgMyTeam } from "../Data/dataImg";

export default function CardMyTeam({t}) {
  return (
    <div>
      <CardProject
        title={"My team page"}
        techStack={"HTML Css"}
        detail={t('detail_my_team')}
        slider={imgMyTeam.map((modal, id) => {
          return (
            <swiper-slide key={id}>
              <img src={modal} alt="" className="w-[668px] h-[362px]" />
            </swiper-slide>
          );
        })}
        githubUrl={"https://github.com/yonadilla/my-team"}
        demoUrl={"https://yonadilla.github.io/my-team/"}
      />
    </div>
  );
}

git import { imagePortofolio } from "../Data/dataImg";
import CardProject from "../components/CardProject";

export default function CardPortofolio({t}) {
  return (
    <div>
      <CardProject
        techStack={"HTML CSS Tailwindcss daisy-ui React JS"}
        title={"First Portofolio"}
        detail={t('detail_portofolio')}
        slider={imagePortofolio.map((modal, id) => {
            return (
              <swiper-slide key={id}>
                <img  src={modal} alt="" className="w-[668px] h-[362px]" />
              </swiper-slide>
            );
          })}
        githubUrl={"https://github.com/yonadilla/portofolio"}
        demoUrl={"https://yonadilla.github.io/portofolio/"}
      />
    </div>
  );
}

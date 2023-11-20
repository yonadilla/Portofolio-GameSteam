import CardProject from '../components/CardProject';
import { imgInterior } from '../Data/dataImg';

export default function CardInterior({t}) {
  return (
    <div>
        <CardProject
        title={"Interior page"}
        techStack={"HTML Css JavaScript"}
        detail={t('detail_my_interior')}
        slider={imgInterior.map((modal, id) => {
          return (
            <swiper-slide key={id}>
              <img src={modal} alt="" className="w-[668px] h-[362px]" />
            </swiper-slide>
          );
        })}
        githubUrl={"https://github.com/yonadilla/interior-challenges"}
        demoUrl={"https://yonadilla.github.io/interior-challenges/"}
      />
    </div>
  )
}

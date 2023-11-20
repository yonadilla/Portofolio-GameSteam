
import CardProject from '../components/CardProject';
import { imgNotFound } from '../Data/dataImg';

export default function CardNotFound({t}) {
  return (
    <div>
        <CardProject
        title={"Not found page"}
        techStack={"HTML Css"}
        detail={t('detail_not_found')}
        slider={imgNotFound.map((modal, id) => {
          return (
            <swiper-slide key={id}>
              <img src={modal} alt="" className="w-[668px] h-[362px]" />
            </swiper-slide>
          );
        })}
        githubUrl={"https://github.com/yonadilla/404"}
        demoUrl={"https://yonadilla.github.io/404/"}
      />
    </div>
  )
}

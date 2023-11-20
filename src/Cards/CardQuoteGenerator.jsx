import { imgQuote } from "../Data/dataImg";
import CardProject from "../components/CardProject";

export default function CardQuoteGenerator({t}) {
  return (
    <div> 
      <CardProject 
      title={"Quote generator"}
      techStack={"HTML Css React js api"}
        detail={t('detail_tic_tac')}
        slider={imgQuote.map((modal, id) => {
            return (
              <swiper-slide key={id}>
                <img src={modal} alt="" className="w-[668px] h-[362px]" />
              </swiper-slide>
            );
          })}
        githubUrl={"https://github.com/yonadilla/quote-random"}
        demoUrl={"https://yonadilla.github.io/quote-random/"}/>
    </div>
  );
}

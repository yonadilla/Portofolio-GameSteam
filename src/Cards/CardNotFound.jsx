
import CardProject from '../components/CardProject';
import { imgNotFound } from '../Data/dataImg';

export default function CardNotFound() {
  return (
    <div>
        <CardProject
        title={"Not found page"}
        techStack={"HTML Css"}
        detail={
            "ini adalah project pertama yang saya dapat dari https://devchallenges.io/. di project ini saya belajar pertama kali menggunakan html dan css untuk membuat tampilan website yang menarik "
        }
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

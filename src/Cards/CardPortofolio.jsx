import { imagePortofolio } from "../Data/dataImg";
import CardProject from "../components/CardProject";

export default function CardPortofolio() {
  return (
    <div>
      <CardProject
        techStack={"HTML CSS Tailwindcss daisy-ui React JS"}
        title={"Portofolio pertama"}
        detail={
          "ini adalah project portofolio saya setelah belajar React js selama satu bulan, Tujuan saya membuat project ini adalah meng-test pengetahuan saya tentang React js yang sudah saya pelajari. Hooks yang saya pakai hanya useState, useEfffet, dan useInView dan dari project  ini saya belajar penggunaan useInView untuk membuat animasi saat elemen terlihat di layar dan library yang saya pakai daisy-ui untuk membuat sideBar"
        }
        slider={imagePortofolio.map((modal, id) => {
            return (
              <swiper-slide key={id}>
                <img src={modal} alt="" className="w-[668px] h-[362px]" />
              </swiper-slide>
            );
          })}
        githubUrl={"https://github.com/yonadilla/portofolio"}
        demoUrl={"https://yonadilla.github.io/portofolio/"}
      />
    </div>
  );
}

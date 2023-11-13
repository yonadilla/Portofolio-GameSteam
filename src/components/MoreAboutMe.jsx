import SvgGithub from "../svg/SvgGithub";
import SvgGmail from "../svg/SvgGmail";
import SvgInstagram from "../svg/SvgInstagram";
import SvgLinkIdn from "../svg/SvgLinkIdn";

export default function MoreAboutMe({darkMode}) {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let age = year - 1999;
  return (
    <div className=" px-5 w-auto translate-y-9 mb-4">
      <div>
      <p className="">
        Hai, aku yon aku seorang web developer, saya lulusan smk akuntansi yang
        sekarang berumur {age} tahun dan ingin terjun ke dunia coding yang mana
        sudah impian saya sejak dulu. berdomisili di blora, saya memiliki
        semangat yang besar dalam belajar secara otodidak dan secara serius
        ingin mendalami dunia coding
      </p>
      </div>
      <div className="pt-9">
      <p>
        jika teman-teman ada pertanyaan atau sekedar ingin mengobrol jangan ragu
        hubungi contact di bawah ini
      </p>
        <p className=" text-3xl pt-4">Contact me</p>
        <div className=" flex w-auto lg:w-1/2">
          <div data-tooltip="Gmail">
            <SvgGmail darkMode={darkMode} />
          </div>
          <div data-tooltip="Instagram">
            <SvgInstagram darkMode={darkMode} />
          </div>
          <div data-tooltip="Github">
            <SvgGithub darkMode={darkMode} />
          </div>
          <div data-tooltip="LinkIdn">
            <SvgLinkIdn darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}

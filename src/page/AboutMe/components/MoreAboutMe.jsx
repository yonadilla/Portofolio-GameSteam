import SvgGithub from "../../../svg/SvgGithub";
import SvgGmail from "../../../svg/SvgGmail";
import SvgInstagram from "../../../svg/SvgInstagram";
import SvgLinkIdn from "../../../svg/SvgLinkIdn";

export default function MoreAboutMe({ darkMode, t }) {
  return (
    <div className= " px-5 lg:px-10 w-auto pt-5 h-fit mb-40">
      <div>
        <p className="pb-3">{t("aboutme")}</p>
        <p>{t("aboutme2")}</p>
      </div>
      <div className="pt-5">
        <p>{t("contacme")}</p>
        <p className=" text-3xl mt-5">Contact me</p>
        <div className=" flex w-auto lg:w-1/2 lg:h-1/2 z-0">
          <div>
            <a
              href="mailto:yonadi322@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgGmail darkMode={darkMode} t={t} />
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/mousetri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgInstagram darkMode={darkMode} />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/yonadilla"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgGithub darkMode={darkMode} />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/yon-adilla-muchammad-37035b175/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgLinkIdn darkMode={darkMode} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

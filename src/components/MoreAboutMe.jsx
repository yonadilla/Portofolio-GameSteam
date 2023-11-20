import SvgGithub from "../svg/SvgGithub";
import SvgGmail from "../svg/SvgGmail";
import SvgInstagram from "../svg/SvgInstagram";
import SvgLinkIdn from "../svg/SvgLinkIdn";


export default function MoreAboutMe({ darkMode, t }) {


  return (
    <div className=" px-5 w-auto pt-5">
      <div>
        <p className="pb-3">
          {t('aboutme')}
        </p>
        <p>
          {t('aboutme2')}
        </p>
      </div>
      <div className="pt-5">
        <p>
          {t('contacme')}
        </p>
        <p className=" text-3xl mt-5">Contact me</p>
        <div className=" flex w-auto lg:w-1/2 lg:h-1/2 pb-20 z-0">
          <div data-tooltip="Gmail">
            <SvgGmail darkMode={darkMode} t={t} />
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

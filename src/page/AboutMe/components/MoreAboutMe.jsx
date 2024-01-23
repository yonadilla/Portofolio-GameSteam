

export default function MoreAboutMe({ darkMode, t }) {
  return (
    <div className= " w-auto pt-5 h-fit">
      <div>
        <p className="pb-3">{t("aboutme")}</p>
        <p>{t("aboutme2")}</p>
      </div>
      
    </div>
  );
}

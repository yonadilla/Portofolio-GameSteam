export default function CardProject(props) {
  const {img, title, techStack, demoUrl,githubUrl, detail, slider, darkMode } = props
  return (
    <div className=" flex shadow-[rgba(0,_0,_0,_1)_3px_3px_8px] px-8 py-6 h-[410px]">
      <div className="w-1/2 blur-none">
      <swiper-container
            slides-per-view="1"
            speed="500"
            loop="true"
            className=""
            css-mode="true"
            navigation="true"
            pagination="true"
            scrollbar="true"
          >
            {slider}
          </swiper-container>
      </div>
      <div className=" pl-5 blur-0 w-1/2 ">
        <p>{title}</p>
        <p className=" pt-4">{techStack}</p>
        <p className=" pt-2 ">
          {detail}
        </p>
        <div className=" flex gap-7 mt-7 absolute bottom-0">
            <button className="border border-solid border-black dark:border-white px-3 py-2 hover:bg-nav_Darkmode"><a href={githubUrl} target="blank">github</a> </button>
            <button className="border border-solid border-black dark:border-white px-3 py-2 hover:bg-text"><a href={demoUrl} target="blank">demo</a> </button>
        </div>
      </div>
    </div>
  );
}

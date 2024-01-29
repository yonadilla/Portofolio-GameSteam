import { motion } from 'framer-motion';

export default function FilterPc({isLarge, query, setQuery, darkMode,}) {
  let tabs = [
    { id: "All", label: "All" },
    { id: "JavaScript", label: "JavaScript" },
    { id: "TypeScript", label: "TypeScript" },
    { id: "Node", label: "Node" },
    { id: "SpringBoot", label: "Java" },
    { id: "Others", label: "Others" },
  ];
  

  return (
    <div>
        {isLarge && (
              <div
                className={` ${
                  darkMode == true ? " shadow-neon-pink" : " border-black"
                } dark:bg-[#FF53cd] bg-black rounded-2xl p-1 `}
              >
                <div className=" dark:bg-background_Darkmod bg-background rounded-xl p-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {setQuery(tab.id)}}
                      className={`${
                        query == tab.label
                          ? ""
                          : " hover:text-black/50 dark:hover:text-white/50"
                      } relative rounded-xl px-3 py-1.5 font-medium outline-2 transition focus-visible:outline `}
                    >
                      {query == tab.id && (
                        <motion.div
                          layoutId="active-pill"
                          className=" absolute rounded-xl inset-0 bg-navCurrent dark:bg-[#2dd9fe] dark:shadow-neon-blue"
                          transition={{ type: "spring", duration: 0.5 }}
                        />
                      )}
                      <span className=" relative z-20 mix-blend-normal">
                        {tab.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
    </div>
  )
}

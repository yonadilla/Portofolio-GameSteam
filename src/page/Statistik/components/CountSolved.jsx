import { useEffect, useState } from "react";

export default function CountSolved() {
  const [solved, setSolved] = useState();
  const [allQuestions, setAllQuestions] = useState();
  const [persenBeats, setPersenBeats] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://leetcode-api-teal.vercel.app/problemSolved/yonadilla",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const result = await response.json();
        setSolved(result.data.matchedUser.submitStatsGlobal.acSubmissionNum);
        setPersenBeats(result.data.matchedUser.problemsSolvedBeatsStats);
        setAllQuestions(result.data.allQuestionsCount);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  function persen(solved, total) {
    let width = solved / total * 100;
    return width;
  }
 const persenWidthEasy = persen(solved?.[1]?.count , allQuestions?.[1]?.count);
 const persenWidthMedium = persen(solved?.[2]?.count , allQuestions?.[2]?.count);
 const persenWidthHard = persen(solved?.[3]?.count , allQuestions?.[3]?.count);


  return (
    <div className=" border-b-4 border-gray-800  pb-4">
      {persenBeats ? (
        <div className=" flex flex-col lg:flex-row">
          <div className=" flex justify-center items-center">
            <svg
              className="h-[80%] w-[80%] origin-center -rotate-90 transform"
              viewBox="0 0 100 100"
            >
              <circle
                fill="none"
                cx="50px"
                cy="50px"
                r="46"
                strokeWidth="3"
                strokeLinecap="round"
                stroke="currentColor"
                className="text-gray-4 dark:text-dark-gray-4 w-[100px]"
              ></circle>
              <foreignObject width={"100%"} height={"100%"} className="">
                <div className="absolute left-1/2 top-1/2 rotate-90 -translate-x-1/2 -translate-y-1/2 transform cursor-default text-center">
                  <div>
                    <div className="text-[24px] font-medium text-label-1 dark:text-dark-label-1">
                      {solved[0].count}
                    </div>
                    <div className="whitespace-nowrap text-xs text-label-3 dark:text-dark-label-3">
                      Solved
                    </div>
                  </div>
                </div>
              </foreignObject>
              <circle
                fill="none"
                cx="50px"
                cy="50px"
                r="46"
                strokeWidth="5"
                strokeLinecap="round"
                stroke="currentColor"
                className="cursor-pointer text-orange-300 dark:text-dark-brand-orange drop-shadow-[0_2px_4px_rgba(255,161,22,0.2)]"
                strokeDasharray="1.6460472061019888 287.380476924159"
                strokeDashoffset="0"
                data-difficulty="ALL"
              ></circle>
            </svg>
          </div>
          <div className=" w-full flex flex-col gap-4 text-sm  lg:text-sm">
            <div className=" flex flex-col">
              <div className=" flex justify-end py-1 items-center">
                <div className="w-24">{persenBeats[0].difficulty}</div>
                <div className=" flex ">
                  <p>{solved[1].count}/</p>
                  <p>{allQuestions[1].count}</p>
                </div>
                <div className=" ml-28 ">
                  Beats {persenBeats[0].percentage}%
                </div>
              </div>
              <div className=" w-full overflow-hidden box-border bg-green-100 h-5 rounded-xl ">
                <div style={{width :  `${persenWidthEasy}%`}} className={` bg-green-400 h-7 rounded-lg `} />
              </div>
            </div>
            <div className=" w-full">
              <div className=" flex justify-end items-center">
                <div className=" w-24">{persenBeats[1].difficulty}</div>
                <div className=" flex py-1">
                  <p>{solved[2].count}/</p>
                  <p>{allQuestions[2].count}</p>
                </div>
                <div className="ml-28">
                  Beats {persenBeats[1].percentage}%
                </div>
              </div>
              <div className=" w-full overflow-hidden box-border bg-yellow-100 h-5 rounded-xl ">
                <div style={{width :  `${persenWidthMedium}%`}} className=" bg-yellow-400 h-7 rounded-lg " />
              </div>
            </div>
            <div className=" w-full">
              <div className=" flex justify-end items-center">
                <div className="w-24">{persenBeats[2].difficulty}</div>
                <div className=" flex justify-center">
                  <p>{solved[3].count}/</p>
                  <p>{allQuestions[3].count}</p>
                </div>
                <div className=" ml-24">
                  {persenBeats[2]?.percentage == null ? (
                    <div className=" text-xs lg:text-sm">Not enoguh data</div>
                  ) : (
                    <div>Beats {persenBeats[2].percentage}%</div>
                  )}
                </div>
              </div>
              <div className=" w-full overflow-hidden box-border bg-red-100 h-5 rounded-xl ">
                <div style={{width :  `${persenWidthHard}%`}} className=" bg-green-400 h-7 rounded-lg " />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col lg:flex-row">
          <div className=" lg:ml-7 p-2 flex justify-center items-center">
            <div className=" pb-2 bg-slate-300 dark:bg-gray-600 rounded-full inline-block w-72 h-72 lg:w-36 lg:h-36 col-span-2 animate-pulse " />
          </div>
          <div className=" w-full flex flex-col gap-5">
            <div className=" w-full lg:pl-6">
              <div className=" pb-2 h-10 bg-slate-300 dark:bg-gray-600 rounded-full inline-block w-[100%] col-span-2 animate-pulse" />
            </div>
            <div className=" w-full lg:pl-6">
              <div className=" pb-2 h-10 bg-slate-300 dark:bg-gray-600 rounded-full inline-block w-[100%] col-span-2 animate-pulse" />
            </div>
            <div className=" w-full lg:pl-6">
              <div className=" pb-2 h-10 bg-slate-300 dark:bg-gray-600 rounded-full inline-block w-[100%] col-span-2 animate-pulse" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";

export default function SkillStats() {
  const [advanced, setAdvanced] = useState(undefined);
  const [intermediate, setIntermediate] = useState(undefined);
  const [fundamental, setFundamental] = useState(undefined);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://leetcode-api-teal.vercel.app/skillStats/yonadilla",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const result = await response.json();
        setAdvanced(result.data.matchedUser.tagProblemCounts.advanced);
        setIntermediate(result.data.matchedUser.tagProblemCounts.intermediate);
        setFundamental(result.data.matchedUser.tagProblemCounts.fundamental);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="lg:text-base text-sm">
      {advanced ? (
        <div className="">
          <p className=" text-xl pb-5">Skill</p>
          <h4 className=" text-base pb-2">Advanced</h4>
          {advanced.map((data, index) => (
            <div key={index} className=" text-xs">
              <div className=" flex gap-5 items-center">
                <p className=" rounded-lg bg-slate-300 dark:bg-gray-600 px-1">
                  {data.tagName}
                </p>
                <p>x{advanced.length}</p>
              </div>
            </div>
          ))}
          <div className=" py-6">
            <h3 className=" pb-2 text-base">Intermediate</h3>
            <div className=" flex flex-wrap gap-4">
              {intermediate.map((data, index) => (
                <div key={index} className="text-xs">
                  <div className=" flex gap-6 items-center ">
                    <p className="rounded-lg bg-slate-300 dark:bg-gray-600 px-1">
                      {data.tagName}
                    </p>
                    <p>x{data.problemsSolved}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <h3 className=" pb-2 text-base">Fundamental</h3>
            <div className=" flex flex-wrap gap-4">
              {fundamental.map((data, index) => (
                <div key={index} className=" text-xs">
                  <div className=" flex gap-6 items-center">
                    <p className="rounded-lg bg-slate-300 dark:bg-gray-600 px-1">
                      {data.tagName}
                    </p>
                    <p>x{data.problemsSolved}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className=" w-full">
          <div className="flex h-6 bg-slate-300 dark:bg-gray-600 rounded w-32 col-span-2 animate-pulse mb-5" />
          <div className="flex mb-2 h-6 bg-slate-300 dark:bg-gray-600 rounded w-32 col-span-2 animate-pulse" />
          <div className=" flex pb-2 h-5 bg-slate-300 dark:bg-gray-600 rounded w-full col-span-2 animate-pulse" />
          <div className=" py-6">
            <div className="flex mb-2 h-6 bg-slate-300 dark:bg-gray-600 rounded w-32 col-span-2 animate-pulse" />
            <div className=" flex flex-wrap gap-4 w-full">
              <div className=" flex pb-2 h-4 w-full bg-slate-300 dark:bg-gray-600 rounded col-span-2 animate-pulse" />
              <div className=" flex pb-2 h-4 w-full bg-slate-300 dark:bg-gray-600 rounded col-span-2 animate-pulse" />
              <div className=" flex pb-2 h-4 w-full bg-slate-300 dark:bg-gray-600 rounded col-span-2 animate-pulse" />
              <div className=" flex pb-2 h-4 w-full bg-slate-300 dark:bg-gray-600 rounded col-span-2 animate-pulse" />
              <div className=" flex pb-2 h-4 w-full bg-slate-300 dark:bg-gray-600 rounded col-span-2 animate-pulse" />
            </div>
          </div>
          <div className="">
            <div className="flex mb-2 h-6 bg-slate-300 dark:bg-gray-600 rounded w-32 col-span-2 animate-pulse" />
            <div className=" flex flex-wrap gap-4">
            <div className=" flex pb-2 h-4 w-full bg-slate-300 dark:bg-gray-600 rounded col-span-2 animate-pulse" />
            <div className=" flex pb-2 h-4 w-full bg-slate-300 dark:bg-gray-600 rounded col-span-2 animate-pulse" />
            <div className=" flex pb-2 h-4 w-full bg-slate-300 dark:bg-gray-600 rounded col-span-2 animate-pulse" />
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

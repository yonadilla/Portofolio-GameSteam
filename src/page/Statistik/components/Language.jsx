import { useEffect, useState } from "react";

export default function Language() {
  const [language, setLanguage] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://leetcode-api-teal.vercel.app/languageStats/yonadilla"
        );

        const result = await response.json();
        setLanguage(result.data.matchedUser.languageProblemCount);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="border-b-4 border-gray-800 pb-4">
      {language ? (
        <div>
          Languages
          {language?.map((data, i) => (
            <div key={i} className=" flex justify-between pt-2 text-sm">
              <p className="rounded-lg bg-slate-300 dark:bg-gray-600 px-1">{data.languageName}</p>
              <p>{data.problemsSolved} problems solved</p>
            </div>
          ))}
        </div>
      ) : (
        <div className=" flex flex-col gap-3">
          <div className=" flex pb-2 h-6 bg-slate-300 dark:bg-gray-600 rounded w-32 col-span-2 animate-pulse "/>
          <div className=" flex pb-2 h-4 bg-slate-300 dark:bg-gray-600 rounded w-full col-span-2 animate-pulse "/>
        </div>
      )}
    </div>
  );
}

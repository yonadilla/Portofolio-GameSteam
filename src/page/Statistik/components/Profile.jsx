import { useEffect, useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://leetcode-api-teal.vercel.app/profile/yonadilla",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const result = await response.json();
        setProfile(result.data.matchedUser);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="text-xs border-b-4 border-gray-800 pb-4">
      {profile ? (
        <div className="">
          <h1 className=" flex pb-2">Total submitions</h1>
          <div className="flex">
            <div className=" flex flex-col">
              <div className=" flex justify-between">
                <p>Difficulty</p>
                <p>:</p>
              </div>
              <div className="flex justify-between">
                <p>Count</p>
                <p>:</p>
              </div>
              <div className="flex justify-between">
                <p>Total</p>
                <p>:</p>
              </div>
            </div>
            <div className=" flex gap-1 w-full justify-around">
              {profile.submitStats.acSubmissionNum.map((stats, index) => (
                <div key={index} className=" flex flex-col items-center">
                  <div className="">
                    <p className="">{stats.difficulty}</p>
                  </div>
                  <div className="flex items-center">
                    <p className="">{stats.count}</p>
                  </div>
                  <div className="">
                    <p className="">{stats.submissions}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <h1 className=" flex pb-2 h-4 bg-slate-300 dark:bg-gray-600 rounded w-32 col-span-2 animate-pulse "/>
          <div className="flex">
            <div className=" flex flex-col gap-3 mt-2 w-full">
             <div className=" h-3 bg-slate-300 dark:bg-gray-600 rounded col-span-2 animate-pulse"/>
             <div className=" h-3 bg-slate-300 dark:bg-gray-600 rounded col-span-2   animate-pulse"/>
             <div className=" h-3 bg-slate-300 dark:bg-gray-600 rounded col-span-2  animate-pulse"/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

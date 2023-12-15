import { useEffect, useState } from "react";

export default function AcSubmition() {
  const [submition, setSubmition] = useState();
  const [month, setMonth] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://leetcode-api-teal.vercel.app/submition/yonadilla",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const result = await response.json();
        setSubmition(result.data.recentAcSubmissionList);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  function convertTimestampToHumanReadable(timestamp) {
    const waktuAwal = new Date(timestamp * 1000);
    const waktuSekarang = new Date();
    const selisihWaktu = waktuSekarang - waktuAwal;
    const bulan = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24 * 30));

    return bulan;
  }

  convertTimestampToHumanReadable();

  return (
    <div>
      {submition ? (
        <div className="">
          <p className=" bg-slate-600 dark:bg-gray-600 w-fit rounded-md px-2 py-1 mb-7">AcSubmition</p>
          {submition.map((data, index) => (
            <div
              key={index}
              className={`flex text-xs ${
                index % 2 == 0 ? "bg-slate-300 dark:bg-gray-600 rounded-lg" : ""
              } justify-between p-2 items-center`}
            >
              <p className={`w-80`}>{data.title}</p>
              <p>
                {convertTimestampToHumanReadable(data.timestamp)} months ago
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className=" mb-7 h-9 bg-slate-600 dark:bg-gray-600 rounded w-36 col-span-2 animate-pulse"/>
              <div  className=" flex py-2 text-sm">
                <div className=" flex flex-col gap-5 w-full">
                  <p className=" flex pb-2 h-10 bg-slate-300 dark:bg-gray-600 rounded w-full col-span-2 animate-pulse"/>
                  <p className=" flex pb-2 h-10 bg-slate-300 dark:bg-gray-600 rounded w-full col-span-2 animate-pulse"/>
                  <p className=" flex pb-2 h-10 bg-slate-300 dark:bg-gray-600 rounded w-full col-span-2 animate-pulse"/>
                  <p className=" flex pb-2 h-10 bg-slate-300 dark:bg-gray-600 rounded w-full col-span-2 animate-pulse"/>
                  <p className=" flex pb-2 h-10 bg-slate-300 dark:bg-gray-600 rounded w-full col-span-2 animate-pulse"/>
                  <p className=" flex pb-2 h-10 bg-slate-300 dark:bg-gray-600 rounded w-full col-span-2 animate-pulse"/>
                  <p className=" flex pb-2 h-10 bg-slate-300 dark:bg-gray-600 rounded w-full col-span-2 animate-pulse"/>
                  <p className=" flex pb-2 h-10 bg-slate-300 dark:bg-gray-600 rounded w-full col-span-2 animate-pulse"/>
                  <p className=" flex pb-2 h-10 bg-slate-300 dark:bg-gray-600 rounded w-full col-span-2 animate-pulse"/>
                  <p className=" flex pb-2 h-10 bg-slate-300 dark:bg-gray-600 rounded w-full col-span-2 animate-pulse"/>
                  <p className=" flex pb-2 h-10 bg-slate-300 dark:bg-gray-600 rounded w-full col-span-2 animate-pulse"/>
                  <p className=" flex pb-2 h-10 bg-slate-300 dark:bg-gray-600 rounded w-full col-span-2 animate-pulse"/>
                  <p className=" flex pb-2 h-10 bg-slate-300 dark:bg-gray-600 rounded w-full col-span-2 animate-pulse"/>
                  <p className=" flex pb-2 h-10 bg-slate-300 dark:bg-gray-600 rounded w-full col-span-2 animate-pulse"/>
                  <p className=" flex pb-2 h-10 bg-slate-300 dark:bg-gray-600 rounded w-full col-span-2 animate-pulse"/>
                  <p className=" flex pb-2 h-10 bg-slate-300 dark:bg-gray-600 rounded w-full col-span-2 animate-pulse"/>
                  <p className=" flex pb-2 h-10 bg-slate-300 dark:bg-gray-600 rounded w-full col-span-2 animate-pulse"/>
                  <p className=" flex pb-2 h-10 bg-slate-300 dark:bg-gray-600 rounded w-full col-span-2 animate-pulse"/>
                  <p className=" flex pb-2 h-10 bg-slate-300 dark:bg-gray-600 rounded w-full col-span-2 animate-pulse"/>
                </div>
              </div>
        </div>
      )}
    </div>
  );
}

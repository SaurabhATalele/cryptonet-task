"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://randomuser.me/api/?page=1&results=1&seed=abc"
      );
      const respData = await response.json();
      console.log(respData);
      setData(respData?.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data && (
        <div className="flex items-center justify-around w-[500px] p-4  shadow-slate-300 rounded-md  shadow-lg border-[1px]">
          <Image
            src={data?.picture?.large}
            alt="Next.js Logo"
            width={700}
            height={700}
            className="rounded-full w-[40%] h-[40%]"
          />
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-[1.5rem] font-medium">
                {data?.name?.title} {data?.name?.first} {data?.name?.last}
              </h1>
            </div>
            <div>
              <h2 className="px-3 py-1 rounded-full bg-green-200 w-fit capitalize flex gap-3">
                <span className="text-[1rem] font-bold">
                  {data.gender === "female" ? "♀ " : "♂ "}
                </span>
                {data.gender}
              </h2>
            </div>
            <div className="px-3 py-1 rounded-full bg-red-200 w-fit capitalize flex items-center gap-3">
              <Image
                width={96}
                height={96}
                src="https://img.icons8.com/material-outlined/96/000000/phone.png"
                alt="phone"
                className="w-5 h-5"
              />
              {data.cell}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

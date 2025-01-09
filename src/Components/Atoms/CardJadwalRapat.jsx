import React from "react";

export default function CardJadwalRapat({ title, date }) {
  return (
    <div className="bg-blue-950 flex flex-col 2xl:p-8 p-4 text-white w-4/5 rounded-lg shadow-lg">
      <div className="flex 2xl:gap-5 gap-3">
        <div>
          <h2 className="2xl:text-3xl text-xl font-bold whitespace-nowrap">
            {title}
          </h2>
        </div>
        <div>
          <p className="2xl:text-2xl pt-1">{date}</p>
        </div>
      </div>
    </div>
  );
}

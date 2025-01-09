import React from "react";

export default function CardAtom({ text, icon, link = "/" }) {
  const handleClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <div
    className="flex-col text-white bg-blue-950 shadow-lg px-4 py-10 md:py-20 lg:py-8 rounded-3xl flex-1 basis-1/3 md:basis-1/5 flex justify-center items-center cursor-pointer hover:bg-opacity-20 transition-colors"
    onClick={handleClick}
  >
  

      <h3 className="text-[18rem] font-semibold text-center">{icon}</h3>
      <h3 className="text-5xl mt-auto font-semibold text-center">{text}</h3>
    </div>
  );
}

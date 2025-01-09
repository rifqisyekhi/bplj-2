import React from "react";

export default function CardDetailLayanan({ text, action }) {
  return (
    <div
      className="bg-blue-950 px-8 py-6 rounded-lg flex-1 basis-1/3 md:basis-1/2 flex justify-center items-center cursor-pointer hover:bg-blue-800 transition-all duration-300 transform hover:scale-105"
      onClick={action}
    >
      <h3 className="text-xl font-bold text-white text-center">{text}</h3>
    </div>
  );
}

import React from "react";
import { ReactTyped } from "react-typed";

export default function HeaderComponent() {
  return (
    <div
      className="shadow-md py-24 lg:py-36 px-4 flex flex-col justify-start"
      style={{
        backgroundImage: "url('BG.png')",
        backgroundSize: "cover",
      }}
    >
      {/* Judul bagian header */}
      <h2 className="text-3xl lg:text-2xl text-center text-white font-semibold text-shadow tracking-tight">
        SELAMAT DATANG DI
      </h2>

      {/* Typing Animation */}
      <h1 className="text-4xl lg:text-5xl text-center text-white font-extrabold py-1 text-shadow tracking-tight">
        <ReactTyped
          strings={[
            "BALAI PERKERASAN DAN LINGKUNGAN JALAN",
            "BALAI PERKERASAN DAN LINGKUNGAN JALAN",
          ]}
          typeSpeed={50} // Typing speed in milliseconds
          backSpeed={30} // Backspacing speed in milliseconds
          loop // Infinite loop
        />
      </h1>

      <div className="flex justify-center mt-20">
      <button
        className="text-xl w-fit bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition-colors duration-300"
        onClick={() => { window.location.href = "/profil"; }}
      >
        Profil
      </button>
      </div>

    </div>
  );
}

import React from "react";
import { RiHome6Line } from "react-icons/ri";

export default function Nspk() {
  return (
    <div className="flex flex-col gap-8 justify-center h-screen">
      {/* Background Image */}
      <div
        className="text-center md:w-full md:h-auto lg:h-64"
        style={{
          backgroundImage: "url('nspk img.png')",
          backgroundSize: "cover",
        }}
      ></div>

      {/* QR Code Section */}
      <div className="flex flex-col justify-center items-center my-auto pb-[300px]">
        <p className="text-6xl font-bold mb-4">Scan Disini</p>
        <img src="nspk-qr.png" alt="NSPK QR" className="w-1/2 h-auto" />
        <p className="text-center text-5xl mt-20">s.id/nspk-pupr</p>
      </div>

      {/* Home Icon */}
      <div className="flex justify-center text-5xl pb-10">
        <a href="/">
          <RiHome6Line />
        </a>
      </div>
    </div>
  );
}

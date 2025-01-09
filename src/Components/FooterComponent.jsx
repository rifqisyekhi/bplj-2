import React from "react";

export default function FooterComponent() {
  return (
    <div className="bg-white flex justify-around lg:justify-between mx-8 items-center lg:mt-6 pb-2">
      <div>
        <img src="footer.png" className="w-36 lg:w-[370px]" alt="bplj" />
      </div>
      <div className="pt-1 lg:pr-12">
        <h4 className="font-bold text-sm lg:text-2xl">Kontak Kami</h4>
        <div className="text-gray-600">
          <p className="text-[0.5em] lg:text-lg">
            Balai Perkerasan dan Lingkungan Jalan
          </p>
          <p className="text-[0.5em] lg:text-lg">
            Jl.AH Nasution No.264 Ujungberung,
          </p>
          <p className="text-[0.5em] lg:text-lg">Bandung - Jawa Barat</p>
          <p className="text-[0.5em] lg:text-lg">Kode Pos : 40294</p>
        </div>
      </div>
    </div>
  );
}

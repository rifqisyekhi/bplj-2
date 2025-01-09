import React from "react";

export default function MaskotModal({ action }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={action} // Handle clicks on the overlay
    >
      <div
        className="bg-white rounded-lg p-6 w-11/12 max-w-md"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        <div className="text-sm text-center bg-blue-950 p-2">
          <p className="text-white font-semibold mb-2">
            Maskot BLPJ yang merupakan hasil mufakat dari seluruh pegawai BPLJ.
            Nama HADE berasal dari Bahasa Sunda yang berarti baik. HADE menjadi
            cerminan karakter dari pegawai BPLJ.HADE merupakan singkatan
            dari Harmonic, Adaptive, Dedication, dan Excellent yang juga menjadi
            tagline internal BPLJ.
          </p>
        </div>
        <div className="mt-4">
          <img
            src="maskot-hade.png"
            alt="maskot-hade"
            className="w-68 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

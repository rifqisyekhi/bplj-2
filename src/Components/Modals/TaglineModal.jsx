import React from "react";

export default function TaglineModal({ action }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={action} // Handle clicks on the overlay
    >
      <div
        className="bg-white rounded-lg p-6 w-11/12 max-w-md"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        <div className="text-sm text-justify bg-blue-950 p-2">
          <p className="text-white mb-2">
            <span className="font-semibold">Tagline HADE</span> merupakan sebuah
            kata yang sering diucapkan pegawai BPLJ untuk mengapresiasi atau
            menyetujui sesuatu. Selain itu, HADE memiliki makna tersendiri.
          </p>
          <p className="text-white font-semibold mb-2">
            <span className="font-semibold">Harmonic,</span> berarti harmonis
            untuk menghargai keberagaman dan menjadikannya sebagai kekuatan
            untuk kolaborasi
          </p>
          <p className="text-white font-semibold mb-2">
            <span className="font-semibold">Adaptive,</span> berarti adaptif
            untuk terus berinovasi, antusias, dan berkontribusi dalam menghadapi
            perubahan
          </p>
          <p className="text-white font-semibold mb-2">
            <span className="font-semibold"> Dedication,</span> yang berarti
            berdedikasi untuk pengabdian dan mengutamakan kepentingan organisasi
          </p>
          <p className="text-white font-semibold mb-2">
            <span className="font-semibold">Excellent,</span> yang berarti
            unggul untuk terus belajar dan mengembangkan kapasitas (profesional
            dan kompeten), sehingga bisa memberikan pelayanan prima bagi
            pelanggan
          </p>
        </div>
        <div className="mt-4 flex">
          <div className="text-3xl mx-auto">
            <p className="font-semibold">
              <span className="text-blue-700 font-bold">H</span>armonic
            </p>
            <p className="font-semibold">
              <span className="text-blue-700 font-bold">A</span>daptive
            </p>
            <p className="font-semibold">
              <span className="text-blue-700 font-bold">D</span>edicated
            </p>
            <p className="font-semibold">
              <span className="text-blue-700 font-bold">E</span>xcellent
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

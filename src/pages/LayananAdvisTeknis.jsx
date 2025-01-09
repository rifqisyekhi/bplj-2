import React, { useState, useEffect } from "react";
import { RiHome6Line } from "react-icons/ri";
import { SlArrowDown } from "react-icons/sl"; // Import the icon

export default function LayananAdvisTeknis() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const handleOpenModal = (type) => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  // Trigger animation on load
  useEffect(() => {
    setTimeout(() => setIsAnimated(true), 100); // Delay animation for smooth transition
  }, []);

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#FCF5E5" }}
    >
      {/* Animated SVG Background */}
      <svg
        preserveAspectRatio="xMidYMid slice"
        viewBox="10 10 80 80"
        className="fixed top-0 left-0 w-full h-screen"
      >
        <defs>
          <style>
            {`
                @keyframes rotate {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
                .out-top {
                  animation: rotate 20s linear infinite;
                  transform-origin: 13px 25px;
                }
                .in-top {
                  animation: rotate 10s linear infinite;
                  transform-origin: 13px 25px;
                }
                .out-bottom {
                  animation: rotate 25s linear infinite;
                  transform-origin: 84px 93px;
                }
                .in-bottom {
                  animation: rotate 15s linear infinite;
                  transform-origin: 84px 93px;
                }
              `}
          </style>
        </defs>
        <path
          fill="#F9BB19"
          className="out-top"
          d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"
        />
        <path
          fill="#1E2A5E"
          className="in-top"
          d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"
        />
        <path
          fill="#F9BB19"
          className="out-bottom"
          d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"
        />
        <path
          fill="#1E2A5E"
          className="in-bottom"
          d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"
        />
      </svg>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col gap-8 justify-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 h-screen text-center text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950">
          Advis Teknis
        </h1>
        <div className="text-justify bg-blue-950 p-6 sm:p-12 md:p-16 lg:p-20 rounded-lg shadow-lg">
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
            <span className="font-bold">Advis Teknik</span> merupakan layanan
            teknis BPLJ yang membantu stakeholders dalam mengatasi
            masalah-masalah teknis pelaksanaan pekerjaan fisik bidang jalan dan
            jembatan khususnya perkerasan, geometrik, keselamatan, dan
            lingkungan jalan. Hasil dari pelayanan ini berupa rekomendasi teknis
            dari ahli-ahli kami yang dapat dijadikan alternatif solusi
            permasalahan di lapangan sesuai dengan peraturan atau pedoman yang
            berlaku.
          </p>
        </div>

        <div className="text-justify bg-white p-4 sm:p-8 rounded-lg shadow-lg">
          <p className="text-blue-950 text-lg sm:text-xl md:text-2xl mb-4 leading-relaxed">
            <span className="font-bold">Informasi Tambahan:</span> Untuk
            informasi lebih lanjut terkait layanan Advis Teknis, Anda dapat
            menghubungi kami melalui email atau telepon. Kami siap membantu Anda
            dengan solusi teknis terbaik.
          </p>
          <ul className="text-blue-950 text-lg sm:text-xl">
            <li className="flex gap-2">
              <span className="font-bold w-16">Mail:</span>
              <span>bplj.djbm@pu.go.id</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold w-16">Telp:</span>
              <span>(022) 7802112</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold w-16">WA‎ ‎:</span>
              <span>+62 813-8788-2112</span>
            </li>
          </ul>
        </div>

        <div className="flex justify-center">
          <button
            className="text-blue-950 font-semibold border-4 border-blue-950 rounded-lg px-12 py-6 text-2xl sm:text-3xl"
            onClick={() => {
              handleOpenModal("maskot");
            }}
          >
            Alur Permintaan Advis Teknis
          </button>
        </div>

        <div className="flex mt-auto justify-center text-3xl">
          <a href="/">
            <RiHome6Line />
          </a>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 transition ease-in-out duration-300"
            onClick={handleOverlayClick}
          >
            <div
              className="bg-white w-full max-w-full aspect-[16/9] rounded-lg shadow-xl p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-center px-8">
                <img
                  src="alur-advis-teknis.png"
                  alt="Alur Advis Teknis" 
                  className="w-full max-w-screen-lg h-auto object-contain" // Limit the width of the image
                />
              </div>

              {/* Back Button with Icon */}
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleCloseModal}
                  className="text-blue-950 font-semibold border-4 border-blue-950 rounded-lg px-8 py-4 text-xl flex items-center gap-2"
                >
                  <SlArrowDown />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

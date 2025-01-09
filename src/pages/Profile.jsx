import React, { useState } from "react";
import { RiHome6Line } from "react-icons/ri";
import FilosofiModal from "../Components/Modals/FilosofiModal";
import MaskotModal from "../Components/Modals/MaskotModal";
import TaglineModal from "../Components/Modals/TaglineModal";

export default function Profile() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [type, setType] = useState("");

  const handleOpenModal = (type) => {
    setType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setType("");
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className="flex flex-col justify-start items-center gap-12 px-8 py-2 h-screen w-screen bg-gray-100">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-950">
          Profil
        </h1>
      </div>

      {/* Gambar Utama */}
      <div className="flex justify-center mb-40">
        <img
          src="bpljori.png"
          className="w-72 md:w-96 lg:w-[480px] xl:w-[640px] cursor-pointer transition-transform hover:scale-110"
          alt="bplj"
          onClick={() => handleOpenModal("filosofi")}
        />
      </div>

      {/* Maskot Section */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-12 w-full mb-40">
        <button
          className="text-red-700 font-bold border-4 border-yellow-400 rounded-full px-6 md:px-8 py-3 md:py-4 text-lg md:text-2xl lg:text-3xl hover:bg-yellow-400 hover:text-white transition-all"
          onClick={() => handleOpenModal("maskot")}
        >
          Maskot HADE
        </button>
        <img
          src="maskot-hade.png"
          className="w-64 md:w-80 lg:w-96 xl:w-96 transition-transform hover:scale-110"
          alt="maskot-hade"
        />
      </div>

      {/* Tagline Section */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-12 w-full">
        <div className="text-center md:text-left text-3xl md:text-6xl lg:text-8xl space-y-6">
          <p className="font-bold">
            <span className="text-blue-700 font-bold">H</span>armonic
          </p>
          <p className="font-bold">
            <span className="text-blue-700 font-bold">A</span>daptive
          </p>
          <p className="font-bold">
            <span className="text-blue-700 font-bold">D</span>edicated
          </p>
          <p className="font-bold">
            <span className="text-blue-700 font-bold">E</span>xcellent
          </p>
        </div>
        <button
          className="text-blue-700 font-bold border-4 border-blue-700 rounded-full px-6 md:px-8 py-3 md:py-4 text-lg md:text-2xl lg:text-3xl hover:bg-blue-700 hover:text-white transition-all"
          onClick={() => handleOpenModal("tagline")}
        >
          Tagline HADE
        </button>
      </div>

      {/* Home Icon */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center text-5xl md:text-6xl">
        <a href="/" className="text-gray-700 hover:text-blue-700 transition-colors">
          <RiHome6Line />
        </a>
      </div>

      {/* Modal */}
      {isModalOpen && type === "filosofi" && (
        <FilosofiModal action={handleOverlayClick} />
      )}
      {isModalOpen && type === "maskot" && (
        <MaskotModal action={handleOverlayClick} />
      )}
      {isModalOpen && type === "tagline" && (
        <TaglineModal action={handleOverlayClick} />
      )}
    </div>
  );
}

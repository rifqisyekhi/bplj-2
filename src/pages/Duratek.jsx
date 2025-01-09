import React, { useEffect, useRef, useState } from "react";
import { RiHome6Line } from "react-icons/ri";

export default function Duratek() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isAnimated, setIsAnimated] = useState(false);

  // Ref array for each accordion
  const accordionRefs = useRef([]);

  // Accordion titles
  const accordionTitles = [
    "Manual Desain Perkerasan (MDP) 2024",
    "Pedoman Kapasitas Jalan Indonesia",
    "Pedoman JPD Jalur Perhentian Darurat",
    "Pedoman Desain Geometrik Simpang",
    "Pedoman Pembangunan Jalan dan Bangunan Mitigasi Kawasan Hutan",
    "Pedoman Persyaratan Teknis Konstruksi Berkelanjutan",
    "Pedoman Inspeksi",
  ];

  // Toggle accordion to open or close
  const toggleAccordion = (index) => {
    setOpenAccordion((prev) => (prev === index ? null : index));
    if (accordionRefs.current[index]) {
      accordionRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  // Trigger animation on load
  useEffect(() => {
    setTimeout(() => setIsAnimated(true), 100); // Delay animation for smooth transition
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden" style={{ backgroundColor: '#FCF5E5' }}>
      {/* SVG Animation as Background */}
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
      <div className="relative z-10 flex flex-col justify-center items-center h-full bg-transparent text-center text-white">
        <h1
          className="text-5xl font-bold mb-6"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Menambahkan shadow pada teks
          }}
        >
          DURATEK
        </h1>
        <div className="flex flex-col gap-6 w-3/4">
          {accordionTitles.map((title, index) => (
            <div
              key={index}
              className={`bg-[#F8FAFC] p-4 rounded-lg shadow-lg text-blue-950 text-xl font-semibold transform transition-all duration-700 ease-out ${
                isAnimated
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }} // Delay each card for smooth appearance
              ref={(el) => (accordionRefs.current[index] = el)}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <span>{title}</span>
                <span>{openAccordion === index ? "-" : "+"}</span>
              </div>
              {openAccordion === index && (
                <div className="flex justify-center mt-4">
                  <img
                    src={`/duratek/${index + 1}.png`}
                    alt={`Accordion ${index + 1}`}
                    className="w-auto"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="absolute bottom-10 flex justify-center w-full text-3xl">
          <a href="/">
            <RiHome6Line />
          </a>
        </div>
      </div>
    </div>
  );
}

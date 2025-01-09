import React, { useEffect, useState } from "react";
import CardLayananPengujian from "../Components/Atoms/CardLayananPengujian";
import { RiHome6Line } from "react-icons/ri";
import { getAllLayanan } from "../libs/layanan";

export default function LayananPengujian() {
  const [layanan, setLayanan] = useState([]);

  // Fetch data from the /layanan endpoint
  useEffect(() => {
    const fetchLayanan = async () => {
      try {
        const response = await getAllLayanan();
        setLayanan(response.data);
      } catch (error) {
        console.error("Error fetching layanan:", error);
      }
    };

    fetchLayanan();
  }, []);

  return (
    <div className="relative min-h-screen min-w-full" style={{ backgroundColor: '#FCF5E5' }}>
      {/* SVG Animation as Background */}
      <svg
        preserveAspectRatio="xMidYMid slice"
        viewBox="10 10 80 80"
        className="fixed top-0 left-0 w-full h-full"
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
      <div className="relative z-10 flex flex-col bg-transparent min-h-screen pt-10 px-4">
        <div className="flex flex-wrap justify-center gap-6 pt-8">
          {layanan.map((item) => (
            <CardLayananPengujian
              key={item.id}
              text={item.nama_layanan} // Example, you can change this to any field you want
              link={`/layanan-pengujian/${item.id}`} // Using _id as part of the URL
              image={item.image_layanan} // Pass the image path
            />
          ))}
        </div>
        <div className="flex justify-center text-6xl text-blue-950 mt-auto pb-8">
          <a href="/">
            <RiHome6Line />
          </a>
        </div>
      </div>
    </div>
  );
}

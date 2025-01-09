import React from "react";

export default function CardLayananPengujian({ text, link = "/", image }) {
  const handleClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <div
      className="py-4 rounded-lg flex-1 basis-1/3 flex justify-center items-center cursor-pointer 
    hover:shadow-lg hover:scale-105 transition-all duration-300"
      style={{ backgroundColor: '#FAF9F6' }}
      onClick={handleClick}
    >
      <div className="flex flex-col h-full">
  <div className="my-auto px-4"> {/* Add padding on the left and right */}
    <img
      src={process.env.REACT_APP_API_URL + "/" + image} // Default placeholder if no image provided
      className="w-64 h-64 object-cover mx-auto" // Set width and height to the same size, use object-cover for resizing
      alt={text}
          />
        </div>
        <div className="mt-auto px-2">
          <h3 className="mt-1 text-xl font-semibold text-blue-950 text-center">
            {text}
          </h3>
        </div>
      </div>
    </div>
  );
}

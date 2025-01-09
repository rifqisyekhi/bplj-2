import React from "react";

export default function DetailPengujianModal({ action, content, title }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={action}
    >
      <div
        className="bg-white rounded-lg p-4 w-11/12 max-w-md transform opacity-0 scale-95 transition-transform duration-300 ease-out animate-modalIn"
        onClick={(e) => e.stopPropagation()}
        style={{ animationDelay: "0.3s" }} // Delay animasi
      >
        {/* Modal Header */}
        {title && (
          <h2 className="text-lg font-bold mb-4 text-center">{title}</h2>
        )}

        {/* Modal Body */}
        <div className="text-sm text-justify bg-blue-950 p-4 mt-2 text-white rounded">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes modalIn {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-modalIn {
          animation: modalIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

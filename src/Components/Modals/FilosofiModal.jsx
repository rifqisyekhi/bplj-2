import React from "react";

export default function FilosofiModal({ action }) {
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
            <span className="font-bold">
              Balai Perkerasan dan Lingkungan Jalan (BPLJ)
            </span>{" "}
            merupakan sebuah balai teknik baru dari adanya perubahan struktur
            organisasi pada Kementerian Pekerjaan Umum dan Perumahan Rakyat pada
            tahun 2020.
          </p>
          <p className="text-white">
            Berdasarkan Peraturan Menteri Pekerjaan Umum dan Perumahan Rakyat
            Nomor 16 Tahun 2020 tentang Organisasi Dan Tata Kerja Unit Pelaksana
            Teknis Di Kementerian Pekerjaan Umum Dan Perumahan Rakyat, Balai
            Perkerasan dan Lingkungan Jalan merupakan salah satu unit pelaksana
            teknis di bawah Direktorat Jenderal Bina Marga yang bertanggung
            jawab kepada Direktur Jenderal Bina Marga melalui Direktur Bina
            Teknik Jalan dan Jembatan.
          </p>
        </div>
        <div className="text-sm text-justify bg-blue-950 p-2 mt-4">
          <p className="text-white">
            Logo BPLJ dibuat oleh pegawai BPLJ sendiri yaitu Anjang Nugroho.
            Logo ini merupakan desain sederhana yang terinspirasi dari jalan
            nasional yang memiliki warna marka kuning yang melambangkan
            perkerasan jalan dan ornament daun berwarna hijau untuk mewakili
            unsur lingkungan.
          </p>
        </div>
        <div className="mt-4">
          <img src="bpljori.png" alt="bplj" className="w-36 mx-auto" />
        </div>
      </div>
    </div>
  );
}

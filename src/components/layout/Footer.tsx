import React from 'react';
import logoApp from '../../assets/bxs_tv.png';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white border-t border-zinc-900 py-6 px-4 md:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Bagian Kiri: Logo dan Nama Brand  */}
        <div className="flex items-center gap-2">
          <img src={logoApp} alt="Movie App Logo" className="w-full h-full object-contain" />

          <div className="text-white"></div>
          <span className="text-xl font-bold tracking-wide">Movie</span>
        </div>

        {/* Bagian Kanan: Teks Hak Cipta */}
        <div className="text-zinc-500 text-sm font-normal tracking-wide text-center sm:text-right">
          Copyright ©2025 Movie Explorer
        </div>
      </div>
    </footer>
  );
};

export default Footer;

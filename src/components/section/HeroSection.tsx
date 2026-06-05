import React from 'react';
import { Play } from 'lucide-react';
import heroBg from '../../assets/Hero-section.png';

export const HeroSection: React.FC = () => {
  return (
    // h-[65vh] di mobile agar pas dengan teks, dan md:h-[85vh] di desktop agar sinematik penuh
    <div className="relative w-full h-[70vh] sm:h-[75vh] md:h-[85vh] bg-[#08080A] flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center md:bg-[center_top_15%] select-none pointer-events-none"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Efek Gradasi Samping & Bawah v4 */}
        <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-[#08080A] via-transparent to-black/10" />

        {/* Gradasi dasar diperkecil agar tidak menenggelamkan gambar */}
        <div className="absolute bottom-0 left-0 right-0 h-[15vh] bg-linear-to-t from-[#08080A] to-transparent" />
      </div>

      {/* Konten Teks */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full pt-28 md:pt-20">
        <div className="max-w-xl md:max-w-2xl text-left flex flex-col items-start gap-5 md:gap-6">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight select-none">
            The Gorge
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed text-justify md:text-left font-normal opacity-90 max-w-lg">
            Two highly trained operatives grow close from a distance after being sent to guard
            opposite sides of a mysterious gorge. When an evil below emerges, they must work
            together to survive what lies within.
          </p>
          <div className="flex items-center gap-4 w-full sm:w-auto text-xs sm:text-sm font-semibold mt-2">
            <button className="flex items-center justify-center gap-3 bg-[#A81C07] hover:bg-[#C2240B] text-white px-5 py-3 md:px-6 md:py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-black/50 group cursor-pointer">
              <span>Watch Trailer</span>
              <div className="bg-white text-[#A81C07] rounded-full p-1">
                <Play className="w-3 h-3 fill-current ml-px" />
              </div>
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md cursor-pointer">
              See Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

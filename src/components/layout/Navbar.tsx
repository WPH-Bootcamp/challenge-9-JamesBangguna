import React from 'react';
import { Search, Menu, X } from 'lucide-react';
import logoApp from '../../assets/bxs_tv.png';
import { useMovieStore } from '../../store/useMovieStore';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  // Ambil fungsi navigasi dan state pencarian dari Zustand Store
  const {
    setActivePage,
    setActiveMovieId,
    setIsViewFromNavbarFavorite,
    searchQuery,
    setSearchQuery,
  } = useMovieStore();

  // Fungsi pengontrol input pencarian dinamis (Desktop & Mobile)
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() !== '') {
      setActivePage('search'); // Otomatis pindah ke halaman search jika ada teks
    } else {
      setActivePage('home'); // Kembali ke home jika input dikosongkan
    }
  };

  // Fungsi saat menu Favorites diklik (Membuka halaman list favorit Fill.jpg)
  const handleFavoritesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setSearchQuery(''); // Reset text pencarian saat pindah menu
    setActivePage('favorites'); // Pindah ke halaman list favorit
    setIsMenuOpen(false); // Tutup modal menu jika di mobile
  };

  // Fungsi saat menu Home atau Logo diklik (Kembali ke Katalog Beranda Utama)
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setSearchQuery(''); // Reset text pencarian
    setActiveMovieId(null); // Reset ID film aktif
    setIsViewFromNavbarFavorite(false); // Reset flag favorit
    setActivePage('home'); // Pindah ke halaman beranda
    setIsMenuOpen(false); // Tutup modal menu jika di mobile
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMenuOpen ? 'bg-[#08080A]' : 'bg-linear-to-b from-black/90 via-black/40 to-transparent'
      }`}
    >
      {/* Baris Navigasi Utama */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-5 md:py-6 flex items-center justify-between relative z-50">
        {/* KIRI: Logo Gambar & Links */}
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3 cursor-pointer" onClick={handleHomeClick}>
            <div className="w-9 h-9 flex items-center justify-center overflow-hidden rounded-xl bg-white/5 p-1">
              <img src={logoApp} alt="Movie App Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-white font-bold text-xl tracking-wider">Movie</span>
          </div>

          {/* Navigasi Desktop */}
          {!isMenuOpen && (
            <div className="hidden md:flex items-center gap-8 text-sm font-medium animate-fade-in">
              <a
                href="#"
                onClick={handleHomeClick}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                onClick={handleFavoritesClick}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Favorites
              </a>
            </div>
          )}
        </div>

        {/* KANAN: Search Input Desktop */}
        {!isMenuOpen && (
          <div className="hidden md:flex items-center relative w-64 lg:w-80 animate-fade-in">
            <Search className="absolute left-4 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search Movie"
              className="w-full bg-[#16161A]/60 text-white pl-11 pr-4 py-2 rounded-xl text-sm border border-white/10 focus:outline-none focus:border-white/20 transition-all placeholder:text-gray-500"
            />
          </div>
        )}

        {/* Tombol Hamburger Menu Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-colors cursor-pointer relative z-50"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* FULL PANEL MENU MODAL MOBILE */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#08080A] pt-28 px-6 md:px-16 flex flex-col justify-start max-w-7xl mx-auto z-40 animate-fade-in">
          <div className="flex flex-col gap-6 md:gap-8 max-w-md mt-6">
            <a
              href="#"
              onClick={handleHomeClick}
              className="text-white font-bold text-2xl md:text-4xl hover:text-[#A81C07] transition-all tracking-wide py-2 border-b border-white/5"
            >
              Home
            </a>
            <a
              href="#"
              onClick={handleFavoritesClick}
              className="text-gray-400 font-bold text-2xl md:text-4xl hover:text-white transition-all tracking-wide py-2 border-b border-white/5"
            >
              Favorites
            </a>

            {/* Input Pencarian Besar di Mobile Menu Screen */}
            <div className="relative w-full mt-4">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search Movie..."
                className="w-full bg-white/5 text-white text-base pl-14 pr-4 py-3.5 rounded-2xl border border-white/10 focus:outline-none focus:border-[#A81C07] transition-all placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

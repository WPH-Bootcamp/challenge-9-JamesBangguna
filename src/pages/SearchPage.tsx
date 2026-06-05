import React from 'react';
import { Star, Clapperboard, Search, Heart, ArrowLeft, Smile, Mic } from 'lucide-react';
import { useMovieStore } from '../store/useMovieStore';

// Menggunakan aset gambar lokal kamu
import posterCaptain from '../assets/Captain.png';

const SearchPage: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    setActivePage,
    setActiveMovieId,
    setIsViewFromNavbarFavorite,
  } = useMovieStore();

  // Data tiruan database film untuk dicocokkan dengan query pencarian
  const allMovies = [
    {
      id: 'captain-america-2025',
      title: 'Captain America: Brave New World',
      rating: '6.2/10',
      overview:
        'After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before t...',
      imageUrl: posterCaptain,
    },
  ];

  // Filter film berdasarkan ketikan teks di input navbar
  const filteredMovies = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectMovie = (id: string) => {
    setActiveMovieId(id);
    setIsViewFromNavbarFavorite(false); // Set default false (Not Favorite)
    setActivePage('movie-detail');
  };

  const clearSearch = () => {
    setSearchQuery('');
    setActivePage('home');
  };

  return (
    <div className="w-full bg-[#08080A] pt-24 min-h-screen flex flex-col justify-between text-left animate-fadeIn">
      {/* CONTAINER UTAMA (Rata Kiri-Kanan Konsisten) */}
      {/* BERHASIL DIPERBAIKI: max-w-[1440px] -> max-w-7xl & flex-grow -> grow */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-4 grow">
        {/* HEADER EXTRA UNTUK RESPONSIVE MOBILE BAR */}
        <div className="flex md:hidden items-center gap-4 mb-6">
          {/* BERHASIL DIPERBAIKI: Menambahkan title dan aria-label pada tombol back */}
          <button
            type="button"
            onClick={clearSearch}
            title="Back to home"
            aria-label="Back to home page"
            className="text-white cursor-pointer"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          {/* BERHASIL DIPERBAIKI: flex-grow -> grow */}
          <div className="relative grow">
            <Search className="absolute left-4 top-3 w-4 h-4 text-gray-500" />
            {/* BERHASIL DIPERBAIKI: Menambahkan title dan placeholder untuk standard aksesibilitas form */}
            <input
              type="text"
              title="Search Movie Input"
              placeholder="Search Movie..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#16161A] text-white py-2.5 pl-11 pr-10 rounded-xl text-sm border border-white/5 focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                title="Clear input"
                aria-label="Clear search input"
                className="absolute right-3 top-3 text-xs bg-zinc-800 text-zinc-400 rounded-full w-4 h-4 flex items-center justify-center cursor-pointer"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* =========================================================
            KONDISI 1: INITIAL STATE / SEDANG MENGETIK KOSONG 
           ========================================================= */}
        {searchQuery.trim() === '' && (
          <div className="w-full flex items-center justify-center pt-20 text-zinc-600 text-sm">
            Ready to explore? Type your favorite movie title above.
          </div>
        )}

        {/* =========================================================
            KONDISI 2: DATA TIDAK DITEMUKAN
           ========================================================= */}
        {searchQuery.trim() !== '' && filteredMovies.length === 0 && (
          <div className="w-full flex flex-col items-center justify-center pt-24 text-center animate-fadeIn">
            <div className="relative mb-6 text-zinc-700">
              <Clapperboard className="w-24 h-24 stroke-[1.2]" />
              <Search className="w-10 h-10 absolute -bottom-2 -right-2 text-zinc-500 bg-[#08080A] p-1 rounded-full border-4 border-[#08080A]" />
            </div>
            <h3 className="text-white font-bold text-base md:text-lg tracking-wide">
              Data Not Found
            </h3>
            <p className="text-zinc-500 text-xs md:text-sm mt-1">Try other keywords</p>
          </div>
        )}

        {/* =========================================================
            KONDISI 3: DATA BERHASIL DITEMUKAN
           ========================================================= */}
        {searchQuery.trim() !== '' && filteredMovies.length > 0 && (
          <div className="space-y-6 mt-4 animate-fadeIn">
            {filteredMovies.map((movie) => (
              <div
                key={movie.id}
                className="flex gap-4 md:gap-6 pb-6 border-b border-zinc-900/60 items-start group"
              >
                {/* Poster Card */}
                {/* BERHASIL DIPERBAIKI: aspect-[2/3] -> aspect-2/3 & flex-shrink-0 -> shrink-0 */}
                <div
                  onClick={() => handleSelectMovie(movie.id)}
                  className="w-24 sm:w-28 md:w-32 aspect-2/3 rounded-xl overflow-hidden bg-zinc-900 shrink-0 cursor-pointer border border-zinc-800/50 group-hover:border-zinc-700 transition-all"
                >
                  <img
                    src={movie.imageUrl}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info Metadata */}
                {/* BERHASIL DIPERBAIKI: flex-grow -> grow */}
                <div className="grow pt-1">
                  <h2
                    onClick={() => handleSelectMovie(movie.id)}
                    className="text-base md:text-xl font-bold hover:text-red-500 cursor-pointer transition-colors inline-block"
                  >
                    {movie.title}
                  </h2>
                  <div className="flex items-center gap-1.5 text-zinc-400 text-xs md:text-sm mt-1 mb-2">
                    <Star className="w-4 h-4 text-amber-500 fill-current" />
                    <span className="font-medium text-zinc-200">{movie.rating}</span>
                  </div>
                  <p className="text-zinc-500 text-xs md:text-sm leading-relaxed max-w-4xl hidden sm:line-clamp-2 md:line-clamp-3">
                    {movie.overview}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleSelectMovie(movie.id)}
                    className="mt-4 flex items-center gap-2 px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all text-xs md:text-sm"
                  >
                    Watch Trailer
                  </button>
                </div>

                {/* Ikon Heart Batas Kanan */}
                <div className="pt-2">
                  {/* BERHASIL DIPERBAIKI: Menambahkan title dan aria-label pada tombol favorit */}
                  <button
                    type="button"
                    title="Add to favorites"
                    aria-label={`Add ${movie.title} to favorites`}
                    className="p-2.5 rounded-full border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* =========================================================
          VIRTUAL MOBILE KEYBOARD UI WRAPPER
         ========================================================= */}
      {searchQuery.trim() === '' && (
        <div className="block md:hidden w-full bg-[#1c1c1e] text-white p-2 select-none font-sans border-t border-zinc-800 animate-slideUp">
          {/* Baris 1 */}
          <div className="flex justify-center gap-1 mb-1.5 text-lg">
            {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((k) => (
              <span
                key={k}
                className="flex-1 bg-[#2c2c2e] py-2 rounded text-center active:bg-zinc-600"
              >
                {k}
              </span>
            ))}
          </div>
          {/* Baris 2 */}
          <div className="flex justify-center gap-1 mb-1.5 text-lg px-3">
            {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map((k) => (
              <span
                key={k}
                className="flex-1 bg-[#2c2c2e] py-2 rounded text-center active:bg-zinc-600"
              >
                {k}
              </span>
            ))}
          </div>
          {/* Baris 3 */}
          <div className="flex items-center justify-between gap-1 mb-1.5 text-lg">
            <span className="w-12 bg-[#3a3a3c] py-2 rounded flex justify-center">⇧</span>
            {['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((k) => (
              <span
                key={k}
                className="flex-1 bg-[#2c2c2e] py-2 rounded text-center active:bg-zinc-600"
              >
                {k}
              </span>
            ))}
            <span className="w-12 bg-[#3a3a3c] py-2 rounded flex justify-center">⌫</span>
          </div>
          {/* Baris 4 (Spacebar & Aksi) */}
          <div className="flex items-center justify-between gap-1.5 text-sm px-1 pb-1">
            <span className="px-3 bg-[#3a3a3c] py-2.5 rounded">123</span>
            <span className="bg-[#3a3a3c] py-2.5 rounded flex-1 text-center font-medium">
              space
            </span>
            <span className="px-3 bg-[#3a3a3c] py-2.5 rounded">return</span>
          </div>
          {/* Baris Ikon Pelengkap Paling Bawah */}
          <div className="flex justify-between items-center px-6 pt-1 text-zinc-400">
            <Smile className="w-5 h-5" />
            <div className="w-32 h-1 bg-white rounded-full mx-auto my-1" />
            <Mic className="w-5 h-5" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;

import React from 'react';
import { Star, Heart } from 'lucide-react';
import { useMovieStore } from '../store/useMovieStore';

// Menggunakan aset lokal yang kamu miliki
import posterCaptain from '../assets/Captain.png';

const Favorites: React.FC = () => {
  const { setActivePage, setActiveMovieId, setIsViewFromNavbarFavorite } = useMovieStore();

  // Data list film tiruan sesuai tampilan visual gambar Fill.jpg
  const favoriteMovies = [
    {
      id: 'captain-america-2025',
      title: 'Captain America: Brave New World',
      rating: '6.2/10',
      overview:
        'After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before t...',
      imageUrl: posterCaptain,
    },
    {
      id: 'the-gorge',
      title: 'The Gorge',
      rating: '7.9/10',
      overview:
        'Two highly trained operatives grow close from a distance after being sent to guard opposite sides of a mysterious gorge. When an evil below emerges, they must work together to survive w...',
      imageUrl: '/src/assets/Trending-1.png',
    },
    {
      id: 'mufasa',
      title: 'Mufasa: The Lion King',
      rating: '7.0/10',
      overview:
        'Mufasa, a cub lost and alone, meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey of a group of misfits search...',
      imageUrl: '/src/assets/Trending-2.png',
    },
  ];

  const handleSelectMovie = (id: string) => {
    setActiveMovieId(id);
    setIsViewFromNavbarFavorite(true); // Supaya saat masuk detail, tombol hatinya otomatis merah penuh
    setActivePage('movie-detail');
  };

  return (
    <div className="w-full bg-[#08080A] text-white pt-24 min-h-screen text-left animate-fadeIn">
      {/* BERHASIL DIPERBAIKI: max-w-[1440px] diganti ke max-w-7xl agar rapi dan standar */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide mb-8">Favorites</h1>

        {/* LIST CONTAINER */}
        <div className="space-y-6">
          {favoriteMovies.map((movie) => (
            <div
              key={movie.id}
              className="flex gap-4 md:gap-6 pb-6 border-b border-zinc-900 items-start group"
            >
              {/* Poster Film */}
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

              {/* Konten Metadata Tengah */}
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
                  onClick={() => handleSelectMovie(movie.id)}
                  className="mt-4 flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold rounded-full transition-all text-xs md:text-sm"
                >
                  Watch Trailer
                </button>
              </div>

              {/* Tombol Hati Merah di Ujung Kanan */}
              <div className="pt-2">
                {/* BERHASIL DIPERBAIKI: Menambahkan aria-label dan title untuk mengatasi error Axe Accessibility */}
                <button
                  type="button"
                  title="Remove from favorites"
                  aria-label={`Remove ${movie.title} from favorites`}
                  className="p-2.5 rounded-full bg-[#A81C07]/10 border border-[#A81C07]/30 text-red-500 cursor-pointer transition-colors hover:bg-[#A81C07]/20"
                >
                  <Heart className="w-4 h-4 fill-current" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;

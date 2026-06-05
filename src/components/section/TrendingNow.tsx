import React from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { useMovieStore } from '../../store/useMovieStore';

interface Movie {
  id: number;
  rank: number;
  title: string;
  rating: string;
  image: string;
  slug?: string;
}

export const TrendingNow: React.FC = () => {
  // AMBIL TAMBAHAN FUNGSI STATE MANAGEMENT YANG DIBUTUHKAN DISINI
  const { setActiveMovieId, setActivePage, setIsViewFromNavbarFavorite } = useMovieStore();

  const movies: Movie[] = [
    {
      id: 1,
      rank: 1,
      title: 'The Gorge',
      rating: '7.9/10',
      image: '/src/assets/Trending-1.png',
    },
    {
      id: 2,
      rank: 2,
      title: 'Mufasa: The Lion King',
      rating: '7.5/10',
      image: '/src/assets/Trending-2.png',
    },
    {
      id: 3,
      rank: 4,
      title: 'The Brutalist',
      rating: '7.0/10',
      image: '/src/assets/Trending-3.png',
    },
    {
      id: 4,
      rank: 5,
      title: 'Companion',
      rating: '7.1/10',
      image: '/src/assets/Trending-4.png',
    },
    {
      id: 5,
      rank: 6,
      title: 'Brave New World',
      rating: '6.2/10',
      image: '/src/assets/Trending-5.png',
      slug: 'captain-america-2025',
    },
    { id: 6, rank: 7, title: 'Dog Man', rating: '7.0/10', image: '/src/assets/dogman-poster.jpg' },
  ];

  // PERBAIKAN UTAMA: SINKRONISASI ROUTING & RESET FLAG FAVORITE
  const handleMovieClick = (movie: Movie) => {
    if (movie.slug === 'captain-america-2025' || movie.title === 'Brave New World') {
      setActiveMovieId('captain-america-2025');

      // 1. Reset flag menjadi false agar ikon hati menjadi kosong (Not Favorite)
      if (setIsViewFromNavbarFavorite) {
        setIsViewFromNavbarFavorite(false);
      }

      // 2. Pindahkan halaman aktif ke halaman detail film
      if (setActivePage) {
        setActivePage('movie-detail');
      }
    }
  };

  return (
    <section className="w-full bg-[#08080A] px-6 md:px-16 pt-2 pb-12 relative select-none">
      <div className="max-w-7xl mx-auto mb-8">
        <h2 className="text-white text-2xl md:text-3xl font-bold tracking-wide">Trending Now</h2>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex md:grid md:grid-cols-6 gap-5 overflow-x-auto md:overflow-x-visible pb-6 md:pb-0 scrollbar-none snap-x">
          {movies.map((movie, index) => {
            const isLastCard = index === movies.length - 1;

            return (
              <div
                key={movie.id}
                onClick={() => handleMovieClick(movie)}
                className="min-w-[170px] sm:min-w-[200px] md:min-w-0 snap-start flex flex-col gap-3 group/card cursor-pointer relative"
              >
                {/* Container Gambar Poster */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-white/5 border border-white/5 group-hover/card:border-white/20 transition-all duration-300 shadow-md">
                  {/* Badge Nomor Peringkat */}
                  {!isLastCard && (
                    <div className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-md text-white font-bold text-xs sm:text-sm w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-white/10">
                      {movie.rank}
                    </div>
                  )}

                  {/* Gambar Poster Film */}
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      isLastCard
                        ? 'blur-[6px] brightness-40 md:blur-[8px]'
                        : 'group-hover/card:scale-105'
                    }`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://placehold.co/300x400/16161a/ffffff?text=Poster';
                    }}
                  />

                  {/* Jika kartu terakhir, sisipkan Tombol Panah Kanan */}
                  {isLastCard && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/10">
                      <div className="bg-[#A81C07] hover:bg-[#C2240B] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform group-hover/card:scale-110 border border-white/10 flex items-center justify-center">
                        <ChevronRight className="w-6 h-6 stroke-[3]" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Detail Info Film */}
                <div className="flex flex-col gap-1 px-1">
                  <h3 className="text-white text-sm sm:text-base font-semibold truncate group-hover/card:text-[#A81C07] transition-colors">
                    {movie.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-400">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="font-medium text-amber-500/90">{movie.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

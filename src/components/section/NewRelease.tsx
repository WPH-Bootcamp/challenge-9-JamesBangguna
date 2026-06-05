import React from 'react';
import { Star } from 'lucide-react';

// Interface untuk data film
interface Movie {
  id: number;
  title: string;
  rating: string;
  imageUrl: string;
}

const NewReleaseGrid: React.FC = () => {
  // Data film berdasarkan gambar yang diunggah
  const movies: Movie[] = [
    {
      id: 1,
      title: 'Conclave',
      rating: '7.1/10',
      imageUrl: '/src/assets/NewRelease-1.png',
    }, // Ganti dengan URL gambar asli kamu
    {
      id: 2,
      title: 'Flight Risk',
      rating: '5.8/10',
      imageUrl: '/src/assets/NewRelease-2.png',
    },
    {
      id: 3,
      title: 'Paddington in Peru',
      rating: '7.0/10',
      imageUrl: '/src/assets/NewRelease-3.png',
    },
    {
      id: 4,
      title: 'My Fault: London',
      rating: '7.67/10',
      imageUrl: '/src/assets/NewRelease-4.png',
    },
    {
      id: 5,
      title: 'Mad About the Boy',
      rating: '6.8/10',
      imageUrl: '/src/assets/NewRelease-5.png',
    },
    {
      id: 6,
      title: 'Better Man',
      rating: '7.5/10',
      imageUrl: '/src/assets/NewRelease-6.png',
    },
    {
      id: 7,
      title: 'Sirens of the Deep',
      rating: '7.3/10',
      imageUrl: '/src/assets/NewRelease-7.png',
    },
    {
      id: 8,
      title: 'Nosferatu',
      rating: '6.7/10',
      imageUrl: '/src/assets/NewRelease-8.png',
    },
    {
      id: 9,
      title: 'September 5',
      rating: '6.9/10',
      imageUrl: '/src/assets/NewRelease-9.png',
    },
    {
      id: 10,
      title: 'Anora',
      rating: '7.0/10',
      imageUrl: '/src/assets/NewRelease-10.png',
    },
    // 5 Film terakhir yang akan diberi efek blur di baris bawah
    {
      id: 11,
      title: 'Ne Zha 2',
      rating: '7.8/10',
      imageUrl: '/src/assets/NewRelease-11.png',
    },
    {
      id: 12,
      title: 'The Last Showgirl',
      rating: '6.7/10',
      imageUrl: '/src/assets/NewRelease-12.png',
    },
    {
      id: 13,
      title: 'Sonic the Hedgehog 3',
      rating: '7.7/10',
      imageUrl: '/src/assets/NewRelease-13.png',
    },
    {
      id: 14,
      title: 'La Dolce Villa',
      rating: '6.4/10',
      imageUrl: '/src/assets/NewRelease-14.png',
    },
    {
      id: 15,
      title: 'The Order',
      rating: '6.6/10',
      imageUrl: '/src/assets/NewRelease-15.png',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8 md:px-12 lg:px-24">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-left tracking-wide">New Release</h2>

      {/* Grid Container */}
      <div className="relative pb-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8 justify-between">
          {movies.map((movie, index) => {
            // Cek apakah item termasuk dalam 5 item terakhir (baris paling bawah)
            const isLastRow = index >= movies.length - 5;

            return (
              <div
                key={movie.id}
                className={`flex flex-col transition-all duration-300 ${
                  isLastRow ? 'blur-[2px] opacity-60' : ''
                }`}
              >
                {/* Poster Film */}
                <div className="aspect-[2/3] w-full rounded-lg overflow-hidden bg-zinc-800 shadow-md hover:scale-105 transition-transform duration-200">
                  <img
                    src={movie.imageUrl}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Info Judul & Rating */}
                <div className="mt-3 flex flex-col gap-1 text-left">
                  <h3 className="font-semibold text-sm md:text-base line-clamp-1">{movie.title}</h3>
                  <div className="flex items-center gap-1 text-amber-500 text-xs md:text-sm">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="text-zinc-400 font-medium">{movie.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tombol Bayang Load More (Overlay Gradasi Rata Kiri-Kanan) */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent flex items-end justify-center">
          <button className="w-full py-3 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-white font-medium rounded-4xl transition-all duration-200 backdrop-blur-sm shadow-xl tracking-wide max-w-xs sm:max-w-md md:max-w-lg mb-2">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewReleaseGrid;

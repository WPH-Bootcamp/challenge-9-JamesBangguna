import React, { useState } from 'react';
import { Calendar, Star, Film, ShieldAlert, Play, Heart, ArrowLeft } from 'lucide-react';
import { useMovieStore } from '../store/useMovieStore';

// Menggunakan image dari assets lokal
import backdropHero from '../assets/Hulk.png';
import posterMovie from '../assets/Captain.png';

const MovieDetail: React.FC = () => {
  const { setActivePage, setActiveMovieId, isViewFromNavbarFavorite } = useMovieStore();

  const [isFavorite, setIsFavorite] = useState<boolean>(isViewFromNavbarFavorite);

  const movieData = {
    title: 'Captain America: Brave New World',
    releaseDate: '12 Februari 2025',
    overview:
      'After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.',
    rating: '6.2/10',
    genre: 'Action',
    ageLimit: '13',
    casts: [
      {
        id: 1,
        name: 'Anthony Mackie',
        character: 'Sam Wilson / Captain America',
        imageUrl: '/src/assets/Anthony.png',
      },
      {
        id: 2,
        name: 'Harrison Ford',
        character: 'President Thaddeus Ross',
        imageUrl: '/src/assets/Harisson.png',
      },
      {
        id: 3,
        name: 'Danny Ramirez',
        character: 'Joaquin Torres',
        imageUrl: '/src/assets/Danny.png',
      },
      {
        id: 4,
        name: 'Shira Haas',
        character: 'Ruth Bat-Seraph',
        imageUrl: '/src/assets/Shira.png',
      },
      {
        id: 5,
        name: 'Tim Blake Nelson',
        character: 'Samuel Sterns',
        imageUrl: '/src/assets/Tim.png',
      },
    ],
  };

  const handleBackNavigation = () => {
    if (isViewFromNavbarFavorite) {
      setActivePage('favorites');
    } else {
      setActiveMovieId(null);
      setActivePage('home');
    }
  };

  // BERHASIL DIPERBAIKI: Memindahkan inline-style ke dalam objek konstanta terpisah untuk menghindari error webhint no-inline-styles
  const backdropStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 60%, #000000 100%), url('${backdropHero}')`,
  };

  return (
    <div className="w-full bg-black text-white text-left animate-fadeIn">
      {/* HERO BANNER */}
      <div
        className="relative w-full min-h-[50vh] md:min-h-[65vh] bg-cover bg-top flex items-end"
        style={backdropStyle}
      >
        <button
          type="button"
          onClick={handleBackNavigation}
          title="Go back"
          aria-label="Go back to previous page"
          className="absolute top-4 left-4 md:left-12 lg:left-24 z-20 flex items-center gap-2 bg-black/60 hover:bg-zinc-900 border border-zinc-800 text-sm py-2 px-4 rounded-full transition-all text-white cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        {/* Info Grid Atas: Poster & Metadata */}
        {/* BERHASIL DIPERBAIKI: max-w-[1440px] -> max-w-7xl */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24 pb-6 flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-end z-10">
          {/* Poster Film */}
          {/* BERHASIL DIPERBAIKI: aspect-[2/3] -> aspect-2/3 & flex-shrink-0 -> shrink-0 */}
          <div className="w-44 sm:w-52 md:w-60 aspect-2/3 rounded-xl overflow-hidden border border-zinc-800 shadow-2xl shrink-0 bg-zinc-900">
            <img src={posterMovie} alt={movieData.title} className="w-full h-full object-cover" />
          </div>

          {/* Info Judul & Tombol */}
          {/* BERHASIL DIPERBAIKI: flex-grow -> grow */}
          <div className="grow text-center md:text-left">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
              {movieData.title}
            </h1>

            <div className="flex items-center justify-center md:justify-start gap-2 text-zinc-400 text-xs md:text-sm mb-6">
              <Calendar className="w-4 h-4" />
              <span>{movieData.releaseDate}</span>
            </div>

            {/* Aksi: Watch Trailer & Favorite Button */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <button
                type="button"
                className="flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold rounded-full transition-all duration-200 text-sm shadow-md cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" /> Watch Trailer
              </button>

              {/* Tombol Heart */}
              {/* BERHASIL DIPERBAIKI: Menambahkan title dan aria-label untuk menyelesaikan error Axe Accessibility */}
              <button
                type="button"
                onClick={() => setIsFavorite(!isFavorite)}
                title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                aria-label={
                  isFavorite ? 'Remove this movie from favorites' : 'Add this movie to favorites'
                }
                className={`p-2.5 rounded-full border transition-all duration-200 active:scale-90 cursor-pointer ${
                  isFavorite
                    ? 'bg-red-600 border-red-600 text-white'
                    : 'border-zinc-700 text-white hover:bg-zinc-800'
                }`}
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Grid 3 Kotak Info Singkat */}
            <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto md:mx-0">
              <div className="bg-zinc-950/70 border border-zinc-900 rounded-xl p-2.5 flex flex-col items-center justify-center backdrop-blur-md">
                <Star className="w-4 h-4 text-amber-500 fill-current mb-0.5" />
                <span className="text-zinc-500 text-[10px]">Rating</span>
                <span className="font-bold text-xs md:text-sm">{movieData.rating}</span>
              </div>
              <div className="bg-zinc-950/70 border border-zinc-900 rounded-xl p-2.5 flex flex-col items-center justify-center backdrop-blur-md">
                <Film className="w-4 h-4 text-zinc-400 mb-0.5" />
                <span className="text-zinc-500 text-[10px]">Genre</span>
                <span className="font-bold text-xs md:text-sm">{movieData.genre}</span>
              </div>
              <div className="bg-zinc-950/70 border border-zinc-900 rounded-xl p-2.5 flex flex-col items-center justify-center backdrop-blur-md">
                <ShieldAlert className="w-4 h-4 text-zinc-400 mb-0.5" />
                <span className="text-zinc-500 text-[10px]">Age Limit</span>
                <span className="font-bold text-xs md:text-sm">{movieData.ageLimit}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LOWER SECTION: Overview & Cast */}
      {/* BERHASIL DIPERBAIKI: max-w-[1440px] -> max-w-7xl */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24 py-8 space-y-8">
        {/* Overview */}
        <div className="space-y-2">
          <h2 className="text-lg md:text-xl font-bold tracking-wide">Overview</h2>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-4xl">
            {movieData.overview}
          </p>
        </div>

        {/* Cast & Crew */}
        <div className="space-y-4">
          <h2 className="text-lg md:text-xl font-bold tracking-wide">Cast & Crew</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {movieData.casts.map((cast) => (
              <div
                key={cast.id}
                className="flex items-center gap-3.5 p-2 bg-zinc-950/40 border border-zinc-900/60 rounded-xl"
              >
                {/* BERHASIL DIPERBAIKI: flex-shrink-0 -> shrink-0 */}
                <div className="w-11 h-13 rounded-lg overflow-hidden shrink-0 bg-zinc-800">
                  <img src={cast.imageUrl} alt={cast.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-xs md:text-sm text-zinc-200">{cast.name}</span>
                  <span className="text-[11px] text-zinc-500 mt-0.5">{cast.character}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

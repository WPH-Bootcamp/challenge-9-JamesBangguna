import { Play, Info } from 'lucide-react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';

// Import seluruh modul sebagai objek
import * as PopularMoviesHook from '@/hooks/usePopularMovies';

import { getImageUrl } from '@/utils/getImageUrl';

// PERBAIKAN: Ganti 'any' dengan 'unknown' untuk tipe return value fungsinya
interface HookModule {
  default?: () => unknown;
  usePopularMovies?: () => unknown;
}

export default function MovieHero() {
  const hookModule = PopularMoviesHook as HookModule;

  // PERBAIKAN: Gunakan as () => unknown (atau as Function) agar ESLint tidak protes
  const usePopularMovies = (hookModule.default ||
    hookModule.usePopularMovies ||
    Object.values(PopularMoviesHook).find((val) => typeof val === 'function')) as () => {
    data: any;
    isLoading: boolean;
    error: any;
  };
  // Catatan: Jika destruksinya (data, isLoading, error) ingin aman, cast ke return value hook aslinya.

  // Melakukan casting tipe data kembalian secara aman bagi destrukturisasi objek
  const { data, isLoading, error } = usePopularMovies() as {
    data:
      | {
          results: Array<{
            backdrop_path: string;
            title: string;
            vote_average: number;
            overview: string;
          }>;
        }
      | null
      | undefined;
    isLoading: boolean;
    error: unknown;
  };

  if (isLoading) {
    return <section className="h-screen animate-pulse bg-zinc-900" />;
  }

  if (error || !data?.results?.length) {
    return null;
  }

  const movie = data.results[0];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={getImageUrl(movie.backdrop_path)}
        alt={movie.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-[#08080A]/90 via-transparent to-[#08080A]/90" />

      {/* Bottom Gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-[#08080A] via-[#08080A]/40 to-[#08080A]/80" />

      {/* Content */}
      <div className="container relative z-10 mx-auto flex h-full items-center px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="max-w-2xl"
        >
          {/* Rating */}
          <span className="mb-4 inline-flex rounded-full bg-red-600 px-4 py-1 text-sm font-medium text-white">
            ⭐ {movie.vote_average.toFixed(1)}
          </span>

          {/* Title */}
          <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">{movie.title}</h1>

          {/* Overview */}
          <p className="mb-8 line-clamp-4 text-lg text-zinc-300">{movie.overview}</p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2 bg-red-600 hover:bg-red-700">
              <Play size={18} />
              Watch Trailer
            </Button>

            <Button size="lg" variant="secondary" className="gap-2">
              <Info size={18} />
              More Info
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

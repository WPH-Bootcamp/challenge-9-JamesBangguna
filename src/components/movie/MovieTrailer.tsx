import { PlayCircle } from 'lucide-react';

export default function MovieTrailer() {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold">Trailer</h2>

      <div className="relative overflow-hidden rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c"
          alt="Trailer"
          className="h-100 w-full object-cover"
        />

        <button
          type="button"
          aria-label="Close Movie Trailer"
          className="absolute inset-0 flex items-center justify-center"
        >
          <PlayCircle className="h-20 w-20 text-white" />
        </button>
      </div>
    </section>
  );
}

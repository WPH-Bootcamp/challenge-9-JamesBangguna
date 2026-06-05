import { Star, Calendar } from 'lucide-react';

export default function MovieInfo() {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold">Movie Information</h2>

      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <img src="https://via.placeholder.com/400x600" alt="Poster" className="rounded-xl" />
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              8.5
            </span>

            <span className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              2025-06-01
            </span>
          </div>

          <p className="text-zinc-300 leading-relaxed">
            Movie overview will appear here from TMDB API.
          </p>
        </div>
      </div>
    </section>
  );
}

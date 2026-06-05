export default function SimilarMovies() {
  const movies = Array.from({ length: 8 });

  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold">Similar Movies</h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {movies.map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl bg-zinc-900 transition hover:scale-105"
          >
            <img src="https://via.placeholder.com/400x600" alt="Movie" className="w-full" />

            <div className="p-4">
              <h3 className="font-semibold">Movie Title</h3>

              <p className="text-sm text-zinc-400">2025</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

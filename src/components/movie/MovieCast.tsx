export default function MovieCast() {
  const cast = Array.from({ length: 6 });

  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold">Cast & Crew</h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
        {cast.map((_, index) => (
          <div key={index} className="rounded-xl bg-zinc-900 p-4">
            <img
              src="https://via.placeholder.com/200x300"
              alt="Actor"
              className="mb-3 rounded-lg"
            />

            <h3 className="font-medium">Actor Name</h3>

            <p className="text-sm text-zinc-400">Character</p>
          </div>
        ))}
      </div>
    </section>
  );
}

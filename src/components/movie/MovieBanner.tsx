import { motion } from 'framer-motion';

export default function MovieBanner() {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
        alt="Movie Banner"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

      <div className="relative z-10 flex h-full items-end">
        <div className="container mx-auto px-6 pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white md:text-7xl"
          >
            Movie Title
          </motion.h1>
        </div>
      </div>
    </section>
  );
}

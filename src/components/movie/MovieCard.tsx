// PERBAIKAN: Tambahkan import framer-motion ini di bagian paling atas file
import { motion } from 'framer-motion';

// ... import komponen atau utilitas lainnya jika ada ...

export default function MovieCard() {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
    >
      {/* ... isi konten MovieCard Anda ... */}
    </motion.div>
  );
}

import { useState } from 'react'; // Tambahkan ini untuk state Navbar
import { Navbar } from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { HeroSection } from '@/components/section/HeroSection';
import { TrendingNow } from '@/components/section/TrendingNow';
import NewRelease from '@/components/section/NewRelease';
// Hapus SearchForm jika file-nya memang tidak ada atau belum dipakai

export default function HomePage() {
  // Tambahkan state untuk Navbar agar memenuhi kriteria NavbarProps
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mengirimkan props yang dibutuhkan oleh Navbar */}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main className="pt-20">
        <HeroSection />

        <TrendingNow />

        <NewRelease />
      </main>

      <Footer />
    </>
  );
}

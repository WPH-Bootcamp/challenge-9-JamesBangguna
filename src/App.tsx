import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/section/HeroSection';
import { TrendingNow } from './components/section/TrendingNow';
import NewRelease from './components/section/NewRelease';
import Footer from './components/layout/Footer';

import MovieDetail from './pages/MovieDetail';
import Favorites from './pages/Favorites';
import SearchPage from './pages/SearchPage'; // Berhasil menambahkan import SearchPage
import { useMovieStore } from './store/useMovieStore';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Ambil state halaman aktif dari Zustand Store untuk mengatur routing komponen
  const { activePage } = useMovieStore();

  return (
    <div className="min-h-screen bg-[#08080A] text-white antialiased flex flex-col justify-between relative overflow-x-hidden">
      {/* Bagian Atas & Konten Tengah */}
      <div className="w-full flex-grow">
        {/* Navbar Global - Selalu muncul di setiap halaman */}
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        {/* Jika hamburger menu mobile sedang terbuka, sembunyikan konten utama di bawahnya */}
        {!isMenuOpen && (
          <div className="animate-fadeIn">
            {/* LOGIKA ROUTING KONDISIONAL */}
            {(() => {
              switch (activePage) {
                case 'movie-detail':
                  return <MovieDetail />;
                case 'favorites':
                  return <Favorites />;
                case 'search':
                  return <SearchPage />; // Berhasil menambahkan case routing baru untuk SearchPage
                case 'home':
                default:
                  return (
                    <>
                      {/* Komponen Halaman Beranda Utama */}
                      <HeroSection />
                      <TrendingNow />
                      <NewRelease />
                    </>
                  );
              }
            })()}
          </div>
        )}
      </div>

      {/* Footer Global - Selalu berada di paling bawah layar */}
      <Footer />
    </div>
  );
}

export default App;

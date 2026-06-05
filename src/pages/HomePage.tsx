import { Navbar } from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { HeroSection } from '@/components/section/HeroSection';
import SearchForm from '@/components/forms/SearchForm';
import { TrendingNow } from '@/components/section/TrendingNow';
import NewRelease from '@/components/section/NewRelease';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <HeroSection />

        <TrendingNow />

        <NewRelease />

        <SearchForm />
      </main>

      <Footer />
    </>
  );
}

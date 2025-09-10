import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutUs from '@/components/sections/AboutUs';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
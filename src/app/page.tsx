import CustomCursor from '@/components/animation/CustomCursor';
import ScrollProgress from '@/components/animation/ScrollProgress';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import AboutSection from '@/components/sections/AboutSection';
import CTASection from '@/components/sections/CTASection';
import HeroSection from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

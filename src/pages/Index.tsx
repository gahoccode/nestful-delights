
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { ParallaxProvider } from 'react-scroll-parallax';

const Index = () => {
  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <HeroSection />
          <ProductSection />
          <BenefitsSection />
          <AboutSection />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  );
};

export default Index;

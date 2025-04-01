
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThreeDPhotoCarouselDemo } from "@/components/ThreeDPhotoCarouselDemo";

const Index = () => {
  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <HeroSection />
          <section className="py-20 bg-secondary/30">
            <div className="container-custom">
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-10 text-center">Our Photo Gallery</h2>
              <ThreeDPhotoCarouselDemo />
            </div>
          </section>
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


import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import { Footer } from "@/components/ui/footer-demo"; // Import the new footer
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
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-center">Our Swiftlet Birds</h2>
              <p className="text-center max-w-2xl mx-auto mb-10 text-muted-foreground">
                Explore these beautiful swiftlets that produce the high-quality bird's nest used in our premium products. 
                Our sustainable practices ensure these birds thrive in their natural habitat.
              </p>
              <ThreeDPhotoCarouselDemo />
            </div>
          </section>
          <ProductSection />
          <BenefitsSection />
          <AboutSection />
          <CallToAction />
        </main>
        <Footer /> {/* Using the new Footer component */}
      </div>
    </ParallaxProvider>
  );
};

export default Index;

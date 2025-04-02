
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import { Footer } from "@/components/ui/footer-demo"; // Import the new footer
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThreeDPhotoCarouselDemo } from "@/components/ThreeDPhotoCarouselDemo";
import { ShimmerButtonDemo } from "@/components/ui/shimmer-button-demo"; // Import the ShimmerButton demo

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
          <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
            <div className="container-custom">
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4 text-center">Experience Our Premium Products</h2>
              <p className="text-center max-w-2xl mx-auto mb-10 text-muted-foreground">
                Discover the luxury of our premium bird's nest products with just a click.
              </p>
              <ShimmerButtonDemo />
            </div>
          </section>
          <CallToAction />
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  );
};

export default Index;


import * as React from "react";
import { Button } from "@/components/ui/button";
import { useParallax } from 'react-scroll-parallax';

const HeroSection = () => {
  const parallaxImage = useParallax<HTMLDivElement>({
    speed: -15,
  });
  
  const contentParallax = useParallax<HTMLDivElement>({
    speed: 10,
    easing: 'easeInQuad',
  });

  return (
    <section className="relative pt-32 pb-28 md:pt-40 md:pb-36 bg-gradient-to-b from-secondary/50 to-background overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div ref={contentParallax.ref} className="flex flex-col space-y-8">
            <div className="space-y-4">
              <div className="inline-block py-1 px-3 rounded-full bg-nest-200/70 text-nest-800 text-sm font-medium">
                Premium Quality
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-foreground">
                Premium Edible <span className="text-nest-700">Bird's Nest</span> – Natural, Pure, and Nutritious
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed md:pr-10">
                Discover the highest quality edible bird's nest, sourced from sustainable farms and carefully processed to retain its natural nutrients.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-nest-600 hover:bg-nest-700 text-white font-medium rounded-md py-6 px-8 text-lg" asChild>
                <a href="#products">Explore Products</a>
              </Button>
              <Button variant="outline" className="border-nest-400 text-nest-700 hover:bg-nest-50 font-medium rounded-md py-6 px-8 text-lg" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>
          <div ref={parallaxImage.ref} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-nest-300/20 to-gold-200/30 rounded-full blur-3xl opacity-70"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-700">
              <img 
                src="/lovable-uploads/96098727-e382-4518-8ada-7da7a635317e.png" 
                alt="Premium bird's nest soup with visible strands" 
                className="w-full h-auto object-cover aspect-square md:aspect-auto transform transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full bg-gold-200/40 blur-xl animate-pulse"></div>
            <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-nest-300/30 blur-xl"></div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,249,228,0.4),transparent_70%)]"></div>
      </div>
    </section>
  );
};

export default HeroSection;

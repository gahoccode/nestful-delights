
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-foreground">
              Premium Edible Bird's Nest – Natural, Pure, and Nutritious
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover the highest quality edible bird's nest, sourced from sustainable farms and carefully processed to retain its natural nutrients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary/90 text-white font-medium rounded-md py-6 px-8 text-lg" asChild>
                <a href="#products">Shop Now</a>
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-medium rounded-md py-6 px-8 text-lg" asChild>
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-nest-300/20 to-gold-200/30 rounded-full blur-3xl opacity-70"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src="/public/lovable-uploads/96098727-e382-4518-8ada-7da7a635317e.png" 
                alt="Premium bird's nest soup with visible strands" 
                className="w-full h-auto object-cover aspect-square md:aspect-auto transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

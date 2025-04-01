
import * as React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useParallax } from 'react-scroll-parallax';

const products = [
  {
    id: 1,
    title: "Raw Edible Bird's Nest",
    description: "100% natural and unprocessed, hand-cleaned to maintain purity. Ideal for those who prefer traditional preparation.",
    image: "/lovable-uploads/445e9f57-d7ae-4514-8e7d-cc7ecb8ead8c.png",
  },
  {
    id: 2,
    title: "Processed Bird's Nest",
    description: "Ready-to-cook and easy to prepare, carefully cleaned and packaged for convenience while preserving natural taste and nutrients.",
    image: "/lovable-uploads/02c23252-51be-4e72-a052-6d3df7e62b6f.png",
  },
  {
    id: 3,
    title: "Premium Bird's Nest with Goji Berry",
    description: "Our premium bird's nest enhanced with antioxidant-rich goji berries, offering a delightful blend of traditional nutrition and modern wellness.",
    image: "/lovable-uploads/8a54e3e4-397c-481c-9361-65e7ad7b24de.png",
  }
];

const ProductSection = () => {
  const headerParallax = useParallax<HTMLDivElement>({
    speed: 10,
  });

  return (
    <section id="products" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(243,235,217,0.5),transparent_70%)]"></div>
      
      <div className="container-custom relative z-10">
        <div ref={headerParallax.ref} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-nest-100 text-nest-800 text-sm font-medium mb-4">
            Our Selection
          </div>
          <h2 className="text-4xl font-serif font-medium mb-6">
            Premium Bird's Nest Collection
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer premium types of edible bird's nest to suit your needs, sourced from sustainable farms and processed with care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const productParallax = useParallax<HTMLDivElement>({
              speed: 5,
              translateY: ['-10px', '10px'],
              scale: [0.98, 1.02],
              easing: 'easeInOutQuad',
              startScroll: 400,
              endScroll: 800,
            });
            
            return (
              <div ref={productParallax.ref} key={product.id}>
                <Card className="overflow-hidden border border-border/50 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm h-full">
                  <div className="overflow-hidden h-[280px]">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl text-nest-800">{product.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">{product.description}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

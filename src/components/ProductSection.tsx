import * as React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
    image: "/lovable-uploads/c218765e-71a4-43af-b65e-a489bb494c87.png",
  }
];

const ProductSection = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Our Product Selection</h2>
          <p className="text-muted-foreground text-lg">
            We offer premium types of edible bird's nest to suit your needs, sourced from sustainable farms and processed with care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border border-border/50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="overflow-hidden h-[300px]">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">{product.title}</CardTitle>
                <CardDescription className="text-muted-foreground mt-2">{product.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

import * as React from "react";
import { Check } from "lucide-react";

const benefits = [
  "Supporting skin health and anti-aging",
  "Enhancing immunity and overall well-being",
  "Improving digestion and respiratory function",
  "Providing essential nutrients for prenatal and postpartum care",
  "Rich in collagen, amino acids, and essential minerals",
  "Natural, with no additives or preservatives"
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-bl from-nest-200/30 to-gold-200/20 rounded-full blur-3xl opacity-70"></div>
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="space-y-4">
                <img 
                  src="/lovable-uploads/02c23252-51be-4e72-a052-6d3df7e62b6f.png" 
                  alt="Raw bird's nest" 
                  className="w-full h-auto rounded-2xl shadow-lg transform -rotate-2"
                />
                <img 
                  src="/lovable-uploads/6f5b4f16-ff27-4615-9b53-e288ea081b61.png" 
                  alt="Bird's nest close up" 
                  className="w-full h-auto rounded-2xl shadow-lg transform rotate-2"
                />
              </div>
              <div className="mt-12">
                <img 
                  src="/lovable-uploads/96098727-e382-4518-8ada-7da7a635317e.png" 
                  alt="Bird's nest soup" 
                  className="w-full h-auto rounded-2xl shadow-lg transform rotate-3"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="section-title">Health Benefits of Edible Bird's Nest</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Edible bird's nest has been valued for centuries for its numerous health benefits. Our products are rich in collagen, amino acids, and essential minerals, making them the perfect health supplement for all ages.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1 flex-shrink-0 bg-gold-400 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

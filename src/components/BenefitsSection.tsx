import * as React from "react";
import { Check } from "lucide-react";

import { getAssetPath } from "@/utils/assetPath";

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
    <section id="benefits" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_right,rgba(243,235,217,0.5),transparent_70%)]"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-bl from-nest-200/30 to-gold-200/20 rounded-full blur-3xl opacity-70"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                  src={getAssetPath("/lovable-uploads/02c23252-51be-4e72-a052-6d3df7e62b6f.png")}
                  alt="Bird's nest enhancing skin health" 
                />
                <img 
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                  src={getAssetPath("/lovable-uploads/6f5b4f16-ff27-4615-9b53-e288ea081b61.png")}
                  alt="Bird's nest supporting immune system" 
                />
              </div>
              <div className="mt-12">
                <img 
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                  src={getAssetPath("/lovable-uploads/96098727-e382-4518-8ada-7da7a635317e.png")}
                  alt="Bird's nest promoting respiratory health" 
                />
              </div>
            </div>
          </div>
          
          <div>
            <div className="space-y-6">
              <div className="inline-block py-1 px-3 rounded-full bg-gold-200 text-nest-800 text-sm font-medium">
                Health Benefits
              </div>
              <h2 className="text-4xl font-serif font-medium mb-6 text-nest-800">
                The Natural Power of Bird's Nest
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Edible bird's nest has been valued for centuries for its numerous health benefits. Our products are rich in collagen, amino acids, and essential minerals, making them the perfect health supplement for all ages.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="mr-3 flex-shrink-0 bg-gold-400 rounded-full p-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

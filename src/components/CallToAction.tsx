import * as React from "react";
import { Button } from "@/components/ui/button";

import { getAssetPath } from "@/utils/assetPath";

const CallToAction = () => {

  const bgImagePath = getAssetPath("/lovable-uploads/6f5b4f16-ff27-4615-9b53-e288ea081b61.png");

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-nest-500 to-nest-700 z-0"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
        style={{ backgroundImage: `url(${bgImagePath})` }}
      ></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 text-white">
            Experience the Natural Goodness
          </h2>
          <p className="text-lg mb-10 text-white/90">
            Discover the natural goodness of our bird's nest products. Whether you prefer the raw form for traditional preparation or the processed version for convenience, we have the perfect option for your health and wellness needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-nest-700 hover:bg-white/90 font-medium text-lg py-6 px-10 rounded-md" asChild>
              <a href="#products">Explore Products</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-medium text-lg py-6 px-10 rounded-md" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

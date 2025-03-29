import * as React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Why Choose Us?</h2>
            <p className="text-lg mb-6">
              Our commitment to quality ensures that every product is sourced ethically, cleaned with precision, and delivered fresh to your doorstep. We believe in bringing you the purest edible bird's nest with no additives or preservatives.
            </p>
            <p className="text-lg mb-6">
              Our mission is to provide the finest edible bird's nest, ensuring the highest quality from sourcing to delivery. We are dedicated to customer satisfaction and maintaining the integrity of this treasured delicacy.
            </p>
            <p className="text-lg">
              With decades of experience and expertise in the industry, we have perfected the art of harvesting, cleaning, and preparing bird's nests to retain their natural goodness and nutritional value.
            </p>
          </div>
          
          <div className="relative mt-10 lg:mt-0">
            <div className="absolute -inset-4 bg-gradient-to-tr from-nest-200/20 to-gold-200/20 rounded-full blur-3xl opacity-70"></div>
            <div className="relative grid grid-cols-2 gap-6">
              <img 
                src="/lovable-uploads/02c23252-51be-4e72-a052-6d3df7e62b6f.png" 
                alt="Natural bird's nest" 
                className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 col-span-2"
              />
              <img 
                src="/lovable-uploads/6f5b4f16-ff27-4615-9b53-e288ea081b61.png" 
                alt="Premium bird's nest" 
                className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="/lovable-uploads/2611ad15-9abc-4550-a339-d0b54d36aeb9.png" 
                alt="Bird's nest with red dates" 
                className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

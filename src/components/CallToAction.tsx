
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-nest-500 to-nest-700 text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Shop Now for Premium Quality Bird's Nest
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Browse our selection and experience the natural goodness of our bird's nest products. Whether you prefer the raw form for traditional preparation or the processed version for convenience, we have the perfect option for you.
          </p>
          <Button size="lg" className="bg-white text-nest-700 hover:bg-white/90 font-medium text-lg py-6 px-10" asChild>
            <a href="#products">Shop Now</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

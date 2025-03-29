
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    title: "Raw Edible Bird's Nest",
    description: "100% natural and unprocessed, hand-cleaned to maintain purity. Ideal for those who prefer traditional preparation.",
    image: "/public/lovable-uploads/445e9f57-d7ae-4514-8e7d-cc7ecb8ead8c.png",
    price: "$79.99",
  },
  {
    id: 2,
    title: "Processed Bird's Nest",
    description: "Ready-to-cook and easy to prepare, carefully cleaned and packaged for convenience while preserving natural taste and nutrients.",
    image: "/public/lovable-uploads/8a54e3e4-397c-481c-9361-65e7ad7b24de.png",
    price: "$89.99",
  },
  {
    id: 3,
    title: "Premium Bird's Nest with Goji Berry",
    description: "Our premium bird's nest enhanced with antioxidant-rich goji berries, offering a delightful blend of traditional nutrition and modern wellness.",
    image: "/public/lovable-uploads/c218765e-71a4-43af-b65e-a489bb494c87.png",
    price: "$99.99",
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
              <CardFooter className="flex justify-between items-center">
                <span className="text-xl font-medium text-primary">{product.price}</span>
                <Button className="bg-primary hover:bg-primary/90">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

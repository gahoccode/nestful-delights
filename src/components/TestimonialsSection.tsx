import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "The raw bird's nest is incredibly fresh and pure. I've been using it for my traditional recipes, and the quality is exceptional. Highly recommended!",
    author: "Sarah L.",
    rating: 5
  },
  {
    id: 2,
    text: "The processed bird's nest is so convenient and tastes amazing! I've been making it for my mother who loves the traditional benefits, and she's noticed a significant improvement in her overall well-being.",
    author: "Michael C.",
    rating: 5
  },
  {
    id: 3,
    text: "I was skeptical at first, but after trying the Premium Bird's Nest with Red Dates, I'm completely sold. The quality is outstanding, and the customer service is excellent.",
    author: "Jessica T.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">What Our Customers Say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-gold-500 fill-gold-500" : "text-muted"}`} 
                    />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
                <p className="text-primary font-medium">— {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

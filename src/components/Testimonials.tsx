import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Su vida me enseñó que el amor verdadero no conoce límites y que la fe puede mover montañas.",
      author: "Ana María G.",
      role: "Seguidora",
    },
    {
      quote:
        "Cecilia nos mostró que los caminos de Dios, aunque incomprensibles, siempre conducen a la luz.",
      author: "Juan Carlos R.",
      role: "Devoto",
    },
    {
      quote:
        "Su testimonio transformó mi vida y me dio la fuerza para enfrentar mis propios desafíos con fe.",
      author: "María Teresa S.",
      role: "Testimonio",
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Testimonios
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-warm"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Voces de quienes han sido tocados por su testimonio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-soft hover-lift relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <Quote className="h-12 w-12 text-secondary/30 mb-4" />
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-warm opacity-10 rounded-full -mr-16 -mt-16"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

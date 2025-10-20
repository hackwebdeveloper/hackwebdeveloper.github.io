import { Heart, Star, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Heart,
      title: "Amor sin límites",
      description: "Una vida dedicada al amor de Dios y al servicio de los demás",
      color: "text-accent",
    },
    {
      icon: Star,
      title: "Luz en la oscuridad",
      description: "Su testimonio ilumina el camino de muchos que buscan sentido",
      color: "text-secondary",
    },
    {
      icon: BookOpen,
      title: "Legado eterno",
      description: "Sus palabras y acciones continúan inspirando a generaciones",
      color: "text-primary",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Sobre Cecilia
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-warm"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-soft p-8 md:p-12 animate-scale-in">
            <p className="text-lg leading-relaxed text-foreground mb-6">
              María Cecilia Perrín de Buide fue una mujer extraordinaria cuya vida estuvo marcada
              por una fe profunda y un amor incondicional. Su camino, aunque desafiante, fue un
              testimonio vivo de la gracia divina.
            </p>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              A través de su testimonio, nos enseñó que los caminos de Dios, aunque parezcan una
              locura para el mundo, están llenos de sentido, propósito y una belleza que trasciende
              nuestro entendimiento humano.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground italic">
              "Sus caminos son una locura de amor que transforma corazones y cambia vidas."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="border-0 shadow-soft hover-lift overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-full bg-muted group-hover:scale-110 transition-transform ${item.color}`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

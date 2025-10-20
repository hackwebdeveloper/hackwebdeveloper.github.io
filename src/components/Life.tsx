import { Card, CardContent } from "@/components/ui/card";

const Life = () => {
  const timeline = [
    {
      title: "Sus primeros años",
      description:
        "Nació en una familia cristiana donde aprendió desde pequeña los valores del amor y la fe.",
      color: "bg-primary",
    },
    {
      title: "Encuentro con Dios",
      description:
        "Un momento transformador que marcó el inicio de su camino de entrega total y servicio.",
      color: "bg-secondary",
    },
    {
      title: "Testimonio de vida",
      description:
        "Su vida se convirtió en un ejemplo viviente de amor incondicional y fe inquebrantable.",
      color: "bg-accent",
    },
    {
      title: "Legado perpetuo",
      description:
        "Sus enseñanzas y ejemplo continúan inspirando a miles de personas en todo el mundo.",
      color: "bg-primary",
    },
  ];

  return (
    <section id="vida" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Su Vida
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-warm"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Un recorrido por los momentos más significativos de su camino de fe
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-5/12">
                    <Card className="border-0 shadow-soft hover-lift">
                      <CardContent className="p-6">
                        <div
                          className={`inline-block px-4 py-1 rounded-full ${item.color} text-white text-sm font-semibold mb-4`}
                        >
                          {index + 1}
                        </div>
                        <h3 className="text-2xl font-heading font-semibold mb-3 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div
                      className={`w-6 h-6 rounded-full ${item.color} border-4 border-background shadow-strong z-10`}
                    ></div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Life;

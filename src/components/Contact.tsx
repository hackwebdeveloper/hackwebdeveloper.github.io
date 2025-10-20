import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "contacto@ceciliaperrin.org",
      color: "text-primary",
    },
    {
      icon: Phone,
      title: "Teléfono",
      detail: "+54 11 1234-5678",
      color: "text-secondary",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      detail: "Buenos Aires, Argentina",
      color: "text-accent",
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Contacto
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-warm"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o quieres compartir tu testimonio? Nos encantaría escucharte
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-semibold mb-8">Información de Contacto</h3>
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-soft hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className={`p-3 rounded-full bg-muted ${item.color}`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-muted-foreground">{item.detail}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="bg-primary/10 rounded-xl p-6 mt-8">
              <p className="text-foreground leading-relaxed italic">
                "La vida es un don precioso que debe ser vivido en plenitud, con amor y gratitud
                cada día."
              </p>
              <p className="text-sm text-muted-foreground mt-4">- Cecilia Perrín</p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-strong">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Escribe tu mensaje aquí..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-card hover:opacity-90 text-white font-semibold py-6 text-base shadow-strong"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">María Cecilia Perrín</h3>
            <p className="text-white/80 leading-relaxed">
              Un testimonio de amor, fe y entrega que continúa inspirando corazones.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#inicio" className="hover:text-secondary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-secondary transition-colors">
                  Sobre Cecilia
                </a>
              </li>
              <li>
                <a href="#vida" className="hover:text-secondary transition-colors">
                  Su Vida
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-secondary transition-colors">
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-white/80">
              <li>contacto@ceciliaperrin.org</li>
              <li>+54 11 1234-5678</li>
              <li>Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 flex items-center justify-center gap-2">
            Hecho con <Heart className="h-4 w-4 text-accent fill-accent" /> en memoria de Cecilia
          </p>
          <p className="text-white/50 text-sm mt-2">
            © {new Date().getFullYear()} María Cecilia Perrín de Buide. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

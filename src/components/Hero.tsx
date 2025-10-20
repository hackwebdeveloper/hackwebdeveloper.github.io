import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Camino de luz"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
            María Cecilia Perrín de Buide
          </h1>
          <div className="h-1 w-32 mx-auto bg-secondary"></div>
          <p className="text-2xl md:text-4xl font-heading text-white/95 italic">
            "Tus caminos son una locura"
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Un testimonio de amor, fe y entrega total
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="#sobre"
              className="inline-flex items-center justify-center rounded-lg bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground shadow-strong hover:bg-secondary/90 transition-all hover:-translate-y-1"
            >
              Conoce su historia
            </a>
            <a
              href="#vida"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border-2 border-white/50 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 transition-all hover:-translate-y-1"
            >
              Su vida
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useState } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO - Startup",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      content:
        "A parceria com esta empresa transformou completamente meu negócio. o desenvolvedor é extremamente profissional e os resultados superaram todas as expectativas. Recomendo sem hesitar!",
      rating: 5,
    },
    {
      name: "João Santos",
      role: "Diretor - ComércioOnline",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao",
      content:
        "Excelente atendimento e soluções inovadoras. Minha empresa cresceu 120% após implementarmos o site desenvolvido. Profissionalismo de alto nível!",
      rating: 5,
    },
    {
      name: "Ana Costa",
      role: "Fundadora - ComércioOnline",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
      content:
        "Trabalho impecável do início ao fim. A o João Pedroso entendeu perfeitamente nossas necessidades e entregou uma solução que excedeu todas as expectativas. Simplesmente fantástico!",
      rating: 5,
    },
    {
      name: "Pedro Oliveira",
      role: "Gerente - Startup",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro",
      content:
        "A melhor decisão que tomei foi contratar esta empresa. O ROI foi incrível e o suporte contínuo faz toda diferença. Parceiros de verdade!",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-block px-4 py-2 rounded-full mb-4"
            style={{
              backgroundColor: "var(--primary-light)",
              color: "var(--primary-color)",
            }}
          >
            <span className="font-semibold text-sm">DEPOIMENTOS</span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            O Que Nossos Clientes{" "}
            <span className="text-gradient">Dizem</span>
          </h2>

          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            Histórias reais de sucesso de empresas que transformaram seus
            negócios conosco.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div
            className="p-8 md:p-12 rounded-2xl shadow-xl relative"
            style={{ backgroundColor: "var(--card-bg)" }}
          >
            {/* Quote Icon */}
            <div
              className="absolute -top-6 left-8 w-12 h-12 rounded-full flex items-center justify-center text-2xl"
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              <span style={{ color: "var(--text-light)" }}>"</span>
            </div>

            {/* Content */}
            <div className="mt-4">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6"
                    style={{ color: "var(--accent-color)" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p
                className="text-lg md:text-xl mb-8 leading-relaxed"
                style={{ color: "var(--text-primary)" }}
              >
                {testimonials[activeIndex].content}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full"
                  style={{ border: "3px solid var(--primary-color)" }}
                />
                <div>
                  <div
                    className="font-bold text-lg"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {testimonials[activeIndex].name}
                  </div>
                  <div style={{ color: "var(--text-secondary)" }}>
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 mt-8 justify-center md:absolute md:bottom-8 md:right-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
                style={{
                  backgroundColor: "var(--primary-light)",
                  color: "var(--primary-color)",
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
                style={{
                  backgroundColor: "var(--primary-color)",
                  color: "var(--text-light)",
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor:
                    index === activeIndex
                      ? "var(--primary-color)"
                      : "var(--card-border)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

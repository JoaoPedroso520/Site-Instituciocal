import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSaibaModalOpen, setIsSaibaModalOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--bg-dark)" }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="img/topo.webp"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-overlay)" }}
        />
      </div>

      {/* Floating Shapes Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ backgroundColor: "var(--accent-color)" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{ backgroundColor: "var(--primary-color)", animationDelay: "1s" }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center px-4 py-2 rounded-full mb-6 mt-20 backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full mr-2"
              style={{ backgroundColor: "var(--accent-color)" }}
            />
            <span className="text-sm font-medium" style={{ color: "var(--text-light)" }}>
              Soluções Inovadoras para o Seu Negócio
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ color: "var(--text-light)" }}
          >
            Transforme Sua Visão
            <br />
            em <span className="text-gradient-hero">Realidade</span>
          </h1>

          {/* Description */}
          <p
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
            style={{ color: "rgba(255, 255, 255, 0.9)" }}
          >
            Oferecemos soluções completas e profissionais para impulsionar seu
            negócio. Tecnologia de ponta, equipe especializada e resultados comprovados.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundColor: "var(--btn-primary-bg)",
                color: "var(--btn-primary-text)",
              }}
            >
              Comece Gratuitamente
            </a>
            <button
              type="button"
              onClick={() => setIsSaibaModalOpen(true)}
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "var(--text-light)",
                border: "2px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              Saiba Mais -&gt;
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-80">
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: "var(--text-light)" }}>
                10+
              </div>
              <div className="text-sm" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                Clientes Satisfeitos
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white opacity-30" />
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: "var(--text-light)" }}>
                98%
              </div>
              <div className="text-sm" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                Taxa de Sucesso
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white opacity-30" />
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: "var(--text-light)" }}>
                24/7
              </div>
              <div className="text-sm" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                Suporte Disponível
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6"
          style={{ color: "var(--text-light)" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      {isSaibaModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
          onClick={() => setIsSaibaModalOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="saiba-modal-title"
            className="w-full max-w-xl rounded-2xl p-6 md:p-8 shadow-2xl"
            style={{
              backgroundColor: "var(--card-bg)",
              color: "var(--text-primary)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 id="saiba-modal-title" className="text-2xl font-bold">
                Saiba mais sobre mim
              </h3>
              <button
                type="button"
                aria-label="Fechar"
                className="w-9 h-9 rounded-full font-bold text-lg flex items-center justify-center"
                style={{
                  backgroundColor: "var(--primary-light)",
                  color: "var(--primary-color)",
                }}
                onClick={() => setIsSaibaModalOpen(false)}
              >
                X
              </button>
            </div>
            <p className="text-base md:text-lg" style={{ color: "var(--text-secondary)" }}>
              Minha jornada na tecnologia começou com a curiosidade de entender como sites e sistemas funcionam. Com o tempo, essa curiosidade se transformou em estudo, prática e desenvolvimento de projetos, até se tornar minha área de atuação profissional.
<br />
              Hoje atuo como desenvolvedor focado em criar experiências digitais claras, modernas e eficientes. Meu trabalho combina design, desenvolvimento e estratégia para construir soluções que realmente gerem resultados para cada cliente.
<br />
              Tenho experiência no desenvolvimento de sites, sistemas web e plataformas digitais, incluindo softwares completos e lojas virtuais (e-commerce). Cada projeto é desenvolvido com foco em desempenho, organização e facilidade de uso.
<br />
              Além do desenvolvimento, também realizo testes, ajustes e ofereço suporte no treinamento dos clientes para garantir que cada solução funcione corretamente no dia a dia.
<br />
              Se você tem uma ideia, projeto ou precisa de uma solução digital para o seu negócio, estou pronto para ajudar. Entre em contato e vamos transformar sua ideia em realidade.

            </p>
          </div>
        </div>
      )}

      <style>{`
        .text-gradient-hero {
          background: linear-gradient(135deg, var(--accent-color) 0%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

export default Hero;

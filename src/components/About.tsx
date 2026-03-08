import { useState } from "react";

const About = () => {
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

  return (
    <section
      id="about"
      className="py-20 md:py-32"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div
              className="absolute -top-6 -left-6 w-full h-full rounded-2xl opacity-20"
              style={{ backgroundColor: "var(--primary-color)" }}
            />
            <img
              src="img/empresa.webp"
              alt="Nossa Equipe"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
            {/* Floating Card */}
            <div
              className="absolute -bottom-6 -right-6 p-6 rounded-xl shadow-2xl backdrop-blur-sm"
              style={{ backgroundColor: "var(--card-bg)" }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--primary-color)" }}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: "var(--text-light)" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <div>
                  <div
                    className="text-2xl font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    2+ Anos
                  </div>
                  <div style={{ color: "var(--text-secondary)" }}>
                    de Experiência
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div
              className="inline-block px-4 py-2 rounded-full mb-4"
              style={{
                backgroundColor: "var(--primary-light)",
                color: "var(--primary-color)",
              }}
            >
              <span className="font-semibold text-sm">SOBRE NÓS</span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Sua Parceira de Confiança para o{" "}
              <span className="text-gradient">Sucesso</span>
            </h2>

            <p
              className="text-lg mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              Somos uma empresa dedicada a oferecer soluções inovadoras e
              personalizadas para o seu negócio. Com mais de dois anos de
              experiência no mercado, entendemos as necessidades únicas de cada
              cliente.
            </p>

            <p
              className="text-lg mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Nossa missão é transformar desafios em oportunidades, utilizando
              tecnologia de ponta e com treinamento altamente qualificado. Acreditamos
              que cada empresa tem potencial único para crescer e prosperar.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {[
                {
                  icon: "✓",
                  title: "Excelência em Atendimento",
                  description: "Suporte dedicado 24/7 para garantir sua satisfação",
                },
                {
                  icon: "✓",
                  title: "Soluções Personalizadas",
                  description: "Adaptadas às necessidades específicas do seu negócio",
                },
                {
                  icon: "✓",
                  title: "Resultados Comprovados",
                  description: "Track record de sucesso com centenas de clientes",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold"
                    style={{
                      backgroundColor: "var(--primary-light)",
                      color: "var(--primary-color)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-lg mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={() => setIsHistoryModalOpen(true)}
              className="mt-8 inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: "var(--btn-primary-bg)",
                color: "var(--btn-primary-text)",
              }}
            >
              Conheça Nossa História -&gt;
            </button>
          </div>
        </div>
      </div>

      {isHistoryModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
          onClick={() => setIsHistoryModalOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="history-modal-title"
            className="w-full max-w-xl rounded-2xl p-6 md:p-8 shadow-2xl"
            style={{
              backgroundColor: "var(--card-bg)",
              color: "var(--text-primary)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 id="history-modal-title" className="text-2xl font-bold">
                Minha história
              </h3>
              <button
                type="button"
                aria-label="Fechar"
                className="w-9 h-9 rounded-full font-bold text-lg flex items-center justify-center"
                style={{
                  backgroundColor: "var(--primary-light)",
                  color: "var(--primary-color)",
                }}
                onClick={() => setIsHistoryModalOpen(false)}
              >
                X
              </button>
            </div>
            <p className="text-base md:text-lg" style={{ color: "var(--text-secondary)" }}>
              Sou desenvolvedor web especializado na criação de soluções digitais modernas e eficientes. Meu trabalho é transformar ideias em plataformas funcionais, combinando design, tecnologia e estratégia para entregar resultados reais para cada cliente.
<br />
              Desenvolvo sites institucionais, sistemas web e plataformas digitais pensadas para oferecer alto desempenho, segurança e uma experiência intuitiva para os usuários. Cada projeto é planejado para funcionar perfeitamente tanto em computadores quanto em dispositivos móveis.
<br />
              Também trabalho com o desenvolvimento de softwares completos e lojas virtuais (e-commerce), ajudando empresas a fortalecer sua presença digital e expandir suas oportunidades no mercado online.
<br />

              Meu objetivo é criar soluções tecnológicas que não apenas atendam às necessidades atuais de cada negócio, mas que também estejam preparadas para acompanhar seu crescimento no futuro. Se você busca inovação, qualidade e um parceiro tecnológico confiável, entre em contato para conversarmos sobre seu projeto.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;

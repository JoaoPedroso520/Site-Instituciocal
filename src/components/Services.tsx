const Services = () => {
  const services = [
    {
      icon: "🚀",
      title: "Consultoria Estratégica",
      description:
        "Análise completa do seu negócio com plano de ação personalizado para alcançar seus objetivos.",
      features: ["Análise de Mercado", "Planejamento", "Implementação"],
    },
    {
      icon: "💼",
      title: "Gestão Empresarial",
      description:
        "Otimização de processos e gestão eficiente para maximizar resultados e reduzir custos.",
      features: ["Otimização", "Automação", "Monitoramento"],
    },
    {
      icon: "📊",
      title: "Análise de Dados",
      description:
        "Transforme dados em insights acionáveis para decisões estratégicas inteligentes.",
      features: ["Business Intelligence", "Relatórios", "Dashboards"],
    },
    {
      icon: "🎯",
      title: "Marketing Digital",
      description:
        "Estratégias completas para aumentar sua presença online e conquistar mais clientes.",
      features: ["SEO", "Social Media", "Campanhas"],
    },
    {
      icon: "💻",
      title: "Desenvolvimento Tech",
      description:
        "Soluções tecnológicas customizadas, desde websites até sistemas complexos.",
      features: ["Web", "Mobile", "Integração"],
    },
    {
      icon: "🎓",
      title: "Treinamento & Capacitação",
      description:
        "Programas de treinamento para desenvolver habilidades da sua equipe.",
      features: ["Workshops", "Cursos", "Treinamento"],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-5">
        <img
          src="https://static.lumi.new/c5/c5f3b6db330872bd1724b4830da59f70.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-block px-4 py-2 rounded-full mb-4"
            style={{
              backgroundColor: "var(--primary-light)",
              color: "var(--primary-color)",
            }}
          >
            <span className="font-semibold text-sm">NOSSOS SERVIÇOS</span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Soluções Completas para Seu{" "}
            <span className="text-gradient">Negócio</span>
          </h2>

          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            Oferecemos uma gama abrangente de serviços profissionais para
            atender todas as necessidades da sua empresa e impulsionar seu
            crescimento.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer"
              style={{
                backgroundColor: "var(--card-bg)",
                boxShadow: "var(--shadow-md)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 40px var(--card-hover-shadow)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
              }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "var(--gradient-primary)",
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: "var(--primary-color)" }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span style={{ color: "var(--text-secondary)" }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-semibold transition-all duration-300 group-hover:gap-3"
                style={{ color: "var(--primary-color)" }}
              >
                Saiba Mais
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p
            className="text-lg mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            Não encontrou o que precisa? Nós criamos soluções personalizadas!
          </p>
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: "var(--btn-primary-bg)",
              color: "var(--btn-primary-text)",
            }}
          >
            Fale com um Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

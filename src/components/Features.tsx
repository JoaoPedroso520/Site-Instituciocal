const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 7H7v6h6V7z" />
          <path
            fillRule="evenodd"
            d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Tecnologia de Ponta",
      description:
        "Utilizamos as mais recentes tecnologias e metodologias para garantir eficiência e inovação.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Qualidade Garantida",
      description:
        "Processos rigorosos de controle de qualidade em cada etapa do projeto.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: "Crescimento Escalável",
      description:
        "Soluções que crescem junto com seu negócio, adaptando-se às suas necessidades.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Entrega Rápida",
      description:
        "Metodologias ágeis para entregas rápidas sem comprometer a qualidade.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      ),
      title: "Equipe Especializada",
      description:
        "Profissionais altamente qualificados e experientes dedicados ao seu sucesso.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Suporte Contínuo",
      description:
        "Assistência completa antes, durante e após a implementação dos projetos.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 md:py-32"
      style={{ backgroundColor: "var(--bg-primary)" }}
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
            <span className="font-semibold text-sm">NOSSOS DIFERENCIAIS</span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Por Que Escolher a{" "}
            <span className="text-gradient">Minha Empresa</span>
          </h2>

          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            Combinamos expertise, tecnologia e dedicação para entregar resultados
            excepcionais que superam expectativas.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105"
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: "2px solid var(--card-border)",
              }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: "var(--primary-light)",
                  color: "var(--primary-color)",
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p style={{ color: "var(--text-secondary)" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div
          className="mt-16 p-8 md:p-12 rounded-2xl text-center"
          style={{
            background: "var(--gradient-primary)",
          }}
        >
          <h3
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--text-light)" }}
          >
            Pronto para Transformar Seu Negócio?
          </h3>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: "rgba(255, 255, 255, 0.9)" }}
          >
            Junte-se a empresas que já estão alcançando resultados
            extraordinários com as minhas soluções.
          </p>
          <button
            onClick={() =>
              window.open(
                "https://wa.me/5543996877731?text=Olá,%20vim%20pela%20demonstração,%20gostaria%20de%20mais%20informações%20sobre%20o%20seu%20negócio.",
                "_blank"
              )
            }
            className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundColor: "var(--card-bg)",
              color: "var(--primary-color)",
            }}
          >
            Agende uma Demonstração
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;

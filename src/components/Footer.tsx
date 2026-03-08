const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: {
      title: "Empresa",
      links: [
        { name: "Sobre Nós", href: "#about" },
        { name: "Carreira", href: "#team" },
        { name: "Blog", href: "#" },
        { name: "Imprensa", href: "#" },
      ],
    },
    services: {
      title: "Serviços",
      links: [
        { name: "Consultoria", href: "#services" },
        { name: "Desenvolvimento", href: "#services" },
        { name: "Marketing", href: "#services" },
        { name: "Treinamento", href: "#services" },
      ],
    },
    support: {
      title: "Suporte",
      links: [
        { name: "Central de Ajuda", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Documentação", href: "#" },
        { name: "Contato", href: "#contact" },
      ],
    },
    legal: {
      title: "Legal",
      links: [
        { name: "Privacidade", href: "#" },
        { name: "Termos de Uso", href: "#" },
        { name: "Cookies", href: "#" },
        { name: "Licenças", href: "#" },
      ],
    },
  };

  return (
    <footer className="pt-20 pb-8" style={{ backgroundColor: "var(--bg-darker)" }}>
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center space-x-2 mb-6">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl"
                style={{
                  background: "var(--gradient-primary)",
                  color: "var(--text-light)",
                }}
              >
                <img src="img/JP.png" alt="logo" />
              </div>
              <span className="font-bold text-xl" style={{ color: "var(--text-light)" }}>
                Desenvolvedor JP
              </span>
            </a>

            <p className="mb-6 leading-relaxed" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              Transformamos desafios em oportunidades através de soluções
              inovadoras e personalizadas para o seu negócio.
            </p>

            {/* Social Media Icons */}
            <div className="grid grid-cols-4 gap-2 w-fit mx-auto lg:mx-0">
              {[
                {
                  name: "facebook",
                  icon: <img src="img/facebook.svg" alt="Facebook" className="w-4 h-4" />,
                  link: "https://www.facebook.com/joaoclaudio.caleffipedroso",
                },
                {
                  name: "whatsapp",
                  icon: <img src="img/whatsapp.svg" alt="Whatsapp" className="w-4 h-4" />,
                  link: "https://wa.me/5543996877731",
                },
                {
                  name: "instagram",
                  icon: <img src="img/instagram.svg" alt="Instagram" className="w-4 h-4" />,
                  link: "https://www.instagram.com/joao_pedroso_15/",
                },
                {
                  name: "linkedin",
                  icon: <img src="img/linkedin.svg" alt="Linkedin" className="w-4 h-4" />,
                  link: "https://www.linkedin.com/in/jo%C3%A3o-pedroso-/",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "var(--text-light)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--primary-color)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-bold text-lg mb-4" style={{ color: "var(--text-light)" }}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="transition-colors duration-300"
                      style={{ color: "rgba(255, 255, 255, 0.7)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--text-light)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
        >
          <p style={{ color: "rgba(255, 255, 255, 0.7)" }}>
            © {currentYear} João Pedroso. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="transition-colors duration-300"
              style={{ color: "rgba(255, 255, 255, 0.7)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
              }}
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="transition-colors duration-300"
              style={{ color: "rgba(255, 255, 255, 0.7)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
              }}
            >
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

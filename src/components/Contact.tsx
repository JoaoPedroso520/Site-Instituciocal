import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const text = `
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Assunto: ${formData.subject}

Mensagem:
${formData.message}
`;

    const numero = "5543996877731";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(url, "_blank");

      setSubmitMessage("Abrindo WhatsApp...");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setIsSubmitting(false);

      setTimeout(() => setSubmitMessage(""), 4000);
    }, 500);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      title: "Email",
      content: "joaoclaudiocaleffipedroso520@gmail.com",
      link: "mailto:joaoclaudiocaleffipedroso520@gmail.com",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      title: "Telefone",
      content: "+55 (43) 99687-7731",
      link: "https://wa.me/5543996877731"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "EndereÃ§o",
      content: "Av. MaranhÃ£o, 1465 - IvaiporÃ£, PR",
      link: "#",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "HorÃ¡rio",
      content: "Seg - Sex: 9h Ã s 17h",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
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
            <span className="font-semibold text-sm">ENTRE EM CONTATO</span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Vamos Conversar Sobre Seu{" "}
            <span className="text-gradient">Projeto</span>
          </h2>

          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            Estamos prontos para ajudar vocÃª a alcanÃ§ar seus objetivos. Entre em
            contato e descubra como podemos transformar sua visÃ£o em realidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex items-start gap-4 p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  backgroundColor: "var(--card-bg)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "var(--primary-light)",
                    color: "var(--primary-color)",
                  }}
                >
                  {info.icon}
                </div>
                <div>
                  <div
                    className="font-semibold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {info.title}
                  </div>
                  <div style={{ color: "var(--text-secondary)" }}>
                    {info.content}
                  </div>
                </div>
              </a>
            ))}

            {/* Social Media */}
            <div
              className="p-6 rounded-xl"
              style={{
                backgroundColor: "var(--card-bg)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <div
                className="font-semibold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Siga-nos nas Redes Sociais
              </div>

              <div className="flex gap-3">
                {[
                  {
                    name: "facebook",
                    link: "https://www.facebook.com/joaoclaudio.caleffipedroso",
                  },
                  {
                    name: "whatsapp",
                    link: "https://wa.me/5543996877731",
                  },
                  {
                    name: "instagram",
                    link: "https://www.instagram.com/joao_pedroso_15/",
                  },
                  {
                    name: "linkedin",
                    link: "https://www.linkedin.com/in/jo%C3%A3o-pedroso-/",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{
                      backgroundColor: "var(--primary-light)",
                      color: "var(--primary-color)",
                    }}
                  >
                    <span className="sr-only">{social.name}</span>

                    <img
                      src={`img/${social.name}.svg`}
                      alt={social.name}
                      className="w-5 h-5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="lg:col-span-2 p-8 rounded-2xl"
            style={{
              backgroundColor: "var(--card-bg)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block mb-2 font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none"
                    style={{
                      border: "2px solid var(--card-border)",
                      color: "var(--text-primary)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--primary-color)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--card-border)";
                    }}
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label
                    className="block mb-2 font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none"
                    style={{
                      border: "2px solid var(--card-border)",
                      color: "var(--text-primary)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--primary-color)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--card-border)";
                    }}
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block mb-2 font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none"
                    style={{
                      border: "2px solid var(--card-border)",
                      color: "var(--text-primary)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--primary-color)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--card-border)";
                    }}
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label
                    className="block mb-2 font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Assunto *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none"
                    style={{
                      border: "2px solid var(--card-border)",
                      color: "var(--text-primary)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--primary-color)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--card-border)";
                    }}
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="criar-site">Criar Site</option>
                    <option value="contratar">Contratar</option>
                    <option value="suporte">Suporte</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  className="block mb-2 font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none resize-none"
                  style={{
                    border: "2px solid var(--card-border)",
                    color: "var(--text-primary)",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--primary-color)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--card-border)";
                  }}
                  placeholder="Como podemos ajudar vocÃª?"
                />
              </div>

              {submitMessage && (
                <div
                  className="p-4 rounded-lg"
                  style={{
                    backgroundColor: "var(--primary-light)",
                    color: "var(--primary-color)",
                  }}
                >
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "var(--btn-primary-bg)",
                  color: "var(--btn-primary-text)",
                }}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


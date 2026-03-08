const Team = () => {
  const teamMembers = [
    {
      name: "João Pedroso",
      role: "Desenvolvedor",
      image: "img/Joao.jpg",
      bio: "+2 anos de experiência na área de desenvolvimento web",
      social: {
        linkedin: "https://www.linkedin.com/in/jo%C3%A3o-pedroso-/",
        whatsapp: "https://wa.me/5543996877731",
        email: "joaoclaudiocaleffipedroso520@gmail.com",
      },
    },
  ];

  return (
    <section
      id="team"
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
            <span className="font-semibold text-sm">NOSSA EQUIPE</span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Conheça os <span className="text-gradient">Especialistas</span>
          </h2>

          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            Profissionais talentosos e apaixonados, comprometidos em entregar
            excelência em cada projeto.
          </p>
        </div>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group text-center w-full max-w-sm md:max-w-none md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
            >
              {/* Image Container */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "var(--gradient-overlay)" }}
                >
                  {/* Social Links */}
                  <div className="flex gap-4">
                    {/* LinkedIn */}
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
                      style={{ backgroundColor: "var(--card-bg)" }}
                    >
                      <svg
                        className="w-6 h-6"
                        style={{ color: "var(--primary-color)" }}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.345V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.601 0 4.267 2.369 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM6.956 20.452H3.717V9h3.239v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
                      </svg>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={member.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
                      style={{ backgroundColor: "var(--card-bg)" }}
                    >
                      <svg
                        className="w-6 h-6"
                        style={{ color: "var(--primary-color)" }}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.54 0 .2 5.34.2 11.86c0 2.09.55 4.13 1.59 5.93L0 24l6.39-1.67a11.84 11.84 0 005.67 1.44h.01c6.52 0 11.86-5.34 11.86-11.86 0-3.17-1.24-6.15-3.41-8.43zM12.07 21.6a9.64 9.64 0 01-4.91-1.34l-.35-.21-3.79.99 1.01-3.69-.23-.38a9.63 9.63 0 01-1.48-5.11c0-5.32 4.33-9.65 9.65-9.65 2.58 0 5.01 1 6.83 2.82a9.58 9.58 0 012.82 6.83c0 5.32-4.33 9.65-9.65 9.65zm5.29-7.23c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.9 1.12-.16.19-.33.22-.62.07-.29-.15-1.23-.45-2.35-1.43-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.55-.88-2.12-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43s1.02 2.81 1.16 3c.15.19 2 3.05 4.86 4.27.68.29 1.21.46 1.63.59.69.22 1.32.19 1.82.12.56-.08 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.11-.26-.17-.55-.31z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {member.name}
              </h3>
              <div
                className="font-semibold mb-2"
                style={{ color: "var(--primary-color)" }}
              >
                {member.role}
              </div>
              <p style={{ color: "var(--text-secondary)" }}>{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div
          className="mt-16 p-8 md:p-12 rounded-2xl text-center"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <h3
            className="text-3xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Quer Fazer Parte do Time?
          </h3>
          <p
            className="text-lg mb-6 max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Estou sempre em busca de pessoas para se juntar a mim e conseguir
            novos clientes. Confira as oportunidades pelo WhatsApp!
          </p>
          <button
            onClick={() => window.open("https://wa.me/5543996877731", "_blank")}
            className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: "var(--btn-primary-bg)",
              color: "var(--btn-primary-text)",
            }}
          >
            Ver Oportunidades de Carreira
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;

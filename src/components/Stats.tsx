import { useEffect, useState, useRef } from "react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { number: 10, suffix: "+", label: "Clientes Ativos", icon: "👥" },
    { number: 20, suffix: "+", label: "Projetos Entregues", icon: "📦" },
    { number: 98, suffix: "%", label: "Taxa de Satisfação", icon: "⭐" },
    { number: 2, suffix: "+", label: "Anos de Experiência", icon: "🏆" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Counter = ({
    end,
    suffix,
  }: {
    end: number;
    suffix: string;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, end]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-dark)" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--text-light) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-block px-4 py-2 rounded-full mb-4"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "var(--text-light)",
            }}
          >
            <span className="font-semibold text-sm">NÚMEROS QUE IMPRESSIONAM</span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--text-light)" }}
          >
            Resultados que Falam por Si
          </h2>

          <p className="text-lg" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
            Nossa trajetória de sucesso refletida em números que demonstram
            compromisso e excelência.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{stat.icon}</div>

              {/* Number */}
              <div
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: "var(--text-light)" }}
              >
                <Counter end={stat.number} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <div
                className="text-sm md:text-base font-medium"
                style={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            Esses números são resultado de dedicação, expertise e parcerias
            duradouras com clientes que confiam em nosso trabalho.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;

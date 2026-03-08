# Site Institucional Profissional

**Descrição**: Site institucional completo e profissional, totalmente customizável, desenvolvido para ser vendido e adaptado a diversos segmentos de negócios (varejo, tecnologia, saúde, educação, serviços, etc.).

**Tech Stack**: React + TypeScript + Vite + Tailwind CSS | Backend: N/A | Auth: N/A

## Preferências do Usuário
- **Idioma**: pt-BR
- **Estilo de Código**: Componentes modulares, clean code, separação clara de responsabilidades
- **Sistema de Design**: CSS Variables para customização total de cores e estilos

## Estrutura de Diretórios
- `/src`: Código fonte do frontend
  - `/components`: Componentes React (Navbar, Hero, About, Services, Features, Stats, Testimonials, Team, Contact, Footer)
  - `/styles`: Arquivos CSS com sistema de variáveis CSS customizáveis (theme.css)
- `/public`: Assets estáticos

## Recursos Implementados

### Implementados
1. **Navbar Responsivo**: Menu de navegação fixo com efeito de scroll, menu mobile hamburger - `src/components/Navbar.tsx`
2. **Hero Section**: Seção principal impactante com CTA, animações, indicadores de confiança e scroll indicator - `src/components/Hero.tsx`
3. **Seção Sobre**: Apresentação da empresa com imagem, features destacadas e CTA - `src/components/About.tsx`
4. **Serviços**: Grid de 6 serviços com cards interativos, ícones e hover effects - `src/components/Services.tsx`
5. **Features/Diferenciais**: Grid de 6 diferenciais com ícones SVG e seção CTA - `src/components/Features.tsx`
6. **Estatísticas**: Contadores animados com números-chave (clientes, projetos, satisfação, anos) - `src/components/Stats.tsx`
7. **Depoimentos**: Carrossel de testemunhos com navegação e indicadores - `src/components/Testimonials.tsx`
8. **Equipe**: Grid de membros da equipe com overlay de redes sociais no hover - `src/components/Team.tsx`
9. **Contato**: Formulário funcional + informações de contato + redes sociais - `src/components/Contact.tsx`
10. **Footer**: Footer completo com links organizados, newsletter, redes sociais e copyright - `src/components/Footer.tsx`
11. **Sistema de Cores CSS Variables**: Arquivo theme.css com variáveis customizáveis para todas as cores (primária, secundária, accent, fundos, containers, botões, texto, gradientes) - `src/styles/theme.css`

### Características Especiais
- **100% Customizável**: Todas as cores podem ser alteradas através de variáveis CSS em `src/styles/theme.css`
- **Responsivo**: Design mobile-first totalmente adaptável
- **Animações**: Fade-in, slide, hover effects, contadores animados
- **Profissional**: Design premium adequado para venda como template
- **Versátil**: Adaptável para múltiplos segmentos (tecnologia, varejo, saúde, educação, serviços)

### Limitações Conhecidas
- Formulário de contato simula envio (não conectado a backend real)
- Newsletter não tem integração com serviço de email marketing
- Links sociais são placeholders
- Imagens de avatares da equipe usam dicebear API

## Schema de Database
**Tipo**: N/A

Não há banco de dados implementado neste projeto.

## Funções Deno
N/A

Não há funções Deno neste projeto.

## Endpoints da API
N/A

Este é um site estático frontend-only, sem endpoints de API.

## Oportunidades de Melhoria

### Alta Prioridade
- [ ] **Integração de Formulário**: Conectar formulário de contato a serviço de backend (email/CRM)
- [ ] **Newsletter**: Integrar com serviço de email marketing (Mailchimp, SendGrid)
- [ ] **Analytics**: Adicionar Google Analytics ou similar para rastreamento

### Média Prioridade
- [ ] **CMS**: Permitir edição de conteúdo sem código
- [ ] **Multilíngua**: Suporte para múltiplos idiomas
- [ ] **Blog**: Adicionar seção de blog com posts

### Baixa Prioridade / Melhorias Futuras
- [ ] **Animações Avançadas**: Adicionar parallax, scroll-triggered animations mais complexas
- [ ] **Dark Mode**: Implementar tema escuro alternativo
- [ ] **A/B Testing**: Sistema para testar variações de conteúdo
- [ ] **Chat ao Vivo**: Widget de chat para atendimento em tempo real

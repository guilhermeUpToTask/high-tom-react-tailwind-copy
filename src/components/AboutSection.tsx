import React from 'react';
import ValueCard from './ValueCard';

// Placeholder Icons (replace with actual SVGs/components e.g. from lucide-react)
const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket w-6 h-6 text-purple-400">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </svg>
);

const TargetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-6 h-6 text-purple-400">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
    </svg>
);

const AboutSection: React.FC = () => {
  // Note: The animations (opacity, transform) from the original HTML's style attribute
  // would ideally be handled with a library like Framer Motion or Intersection Observer API
  // for triggering animations on scroll. This basic version omits those for simplicity.

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Gradients are now part of BackgroundEffects component */}

      <div className="container mx-auto px-4 relative z-10"> {/* Added z-10 to ensure content is above background elements */}
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Quem Somos</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Conheça mais sobre a Hightom e nossa missão de transformar o mercado de pagamentos
            </p>
          </div>

          {/* History & Mission */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Nossa História */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center">
                  <RocketIcon />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Nossa História</h2>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-white/80 leading-relaxed">
                  Somos uma empresa dedicada a fornecer soluções de gateway de pagamento personalizadas, impulsionando o comércio eletrônico e simplificando transações financeiras online.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  Na Hightom, acreditamos que os pagamentos online não precisam ser apenas transações rotineiras; podem ser experiências memoráveis que refletem a identidade e visão únicas de cada negócio.
                </p>
                 <p className="text-lg text-white/80 leading-relaxed">
                   Nossa equipe está comprometida em antecipar as tendências do mercado e incorporar as mais recentes inovações em nossas soluções. Ao escolher a Hightom, você está optando por uma parceria que cresce e evolui junto com as demandas dinâmicas do mundo digital.
                 </p>
              </div>
            </div>

            {/* Nossa Missão */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center">
                  <TargetIcon />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Nossa missão</h2>
              </div>
              <div className="space-y-4">
                 <p className="text-lg text-white/80 leading-relaxed">
                   É capacitar empresas a estabelecerem uma presença digital marcante, oferecendo soluções de pagamento que vão além da simplicidade funcional.
                 </p>
                 <p className="text-lg text-white/80 leading-relaxed">
                   Buscamos constantemente desenvolver gateways de pagamento que não apenas atendam às necessidades técnicas, mas também acrescentem valor à marca, proporcionando uma jornada de compra fluida e memorável.
                 </p>
                 <p className="text-lg text-white/80 leading-relaxed">
                    Nosso compromisso é com a inovação contínua, segurança de ponta e uma experiência de usuário excepcional que ajuda nossos clientes a crescerem e prosperarem no competitivo mercado digital.
                 </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="max-w-6xl mx-auto mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Nossos Valores</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ValueCard
                // icon={<InnovationIcon />} // Pass specific icons if created
                title="Inovação"
                description="Buscamos constantemente novas tecnologias e abordagens para oferecer soluções de pagamento de ponta."
              />
              <ValueCard
                // icon={<SecurityIcon />}
                title="Segurança"
                description="Protegemos cada transação com os mais altos padrões de segurança do mercado."
              />
              <ValueCard
                // icon={<TransparencyIcon />}
                title="Transparência"
                description="Mantemos uma comunicação clara e honesta com nossos clientes e parceiros."
              />
            </div>
          </div>
        </div>
      </div>

       {/* Decorative elements moved to BackgroundEffects or kept here if section-specific */}
       {/* <div className="absolute -bottom-20 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"></div> */}
       {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-3xl pointer-events-none"></div> */}

    </section>
  );
};

export default AboutSection;

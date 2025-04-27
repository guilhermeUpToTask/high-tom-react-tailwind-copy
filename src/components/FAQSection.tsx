import React, { useState } from 'react';
// Import animation library if needed, e.g., import { motion, useInView } from 'framer-motion';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  index: number; // For animation delay
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Animation setup
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true, amount: 0.2 });
  // const variants = {
  //   hidden: { opacity: 0, y: 10 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.05 } }
  // };

  return (
    // Use motion.div for animations
    <div
      // ref={ref}
      data-state={isOpen ? 'open' : 'closed'}
      className="border-b border-purple-500/20 group bg-purple-900/10 backdrop-blur-sm rounded-lg px-6 transition-all duration-300 hover:bg-purple-900/20"
      // initial="hidden"
      // animate={isInView ? "visible" : "hidden"}
      // variants={variants}
    >
      <h3 className="flex">
        <button
          type="button"
          aria-expanded={isOpen}
          data-state={isOpen ? 'open' : 'closed'}
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-1 items-center justify-between py-4 font-medium text-white group-hover:text-purple-400 transition-colors duration-300 data-[state=open]:text-purple-400 no-underline hover:no-underline w-full" // Added w-full
        >
          <span className="block py-4 text-left flex-1 pr-2">{title}</span> {/* Added flex-1 pr-2 */}
          {/* Chevron Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
      </h3>
      {/* Content Area */}
      <div
        // Use a library like 'react-animate-height' for smooth height transition or CSS transitions
        className={`overflow-hidden text-sm text-white/70 transition-[max-height] duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`} // Example height transition
      >
         <div className="pt-0 pb-4">{children}</div> {/* Content wrapper with padding */}
      </div>
    </div>
  );
};


const FAQSection: React.FC = () => {
  const faqs = [
    { q: "Qual o prazo de implementação do gateway?", a: "O prazo de implementação pode variar, mas nosso objetivo é ter tudo pronto rapidamente. Entre em contato para uma estimativa precisa." },
    { q: "Quais formas de pagamento estão disponíveis?", a: "Oferecemos Pix, Boleto e Cartão de Crédito/Débito (nacional e internacional), integrados com os principais adquirentes do mercado." },
    { q: "Há custos mensais fixos?", a: "Nosso modelo principal é baseado em taxas por transação, sem mensalidades fixas obrigatórias. Planos personalizados podem ser discutidos." },
    { q: "Como funciona o white label?", a: "Permite que você personalize completamente a plataforma com sua marca, logotipo, cores e domínio, oferecendo uma experiência única aos seus clientes como se fosse sua própria tecnologia." },
    { q: "É necessário ter CNPJ?", a: "Sim, para operar um gateway de pagamentos e processar transações financeiras no Brasil, é legalmente necessário possuir um CNPJ ativo." },
    { q: "Preciso de conhecimento técnico?", a: "Não necessariamente. Oferecemos um painel intuitivo e integrações 'No Code'. Para desenvolvedores, fornecemos uma API robusta e bem documentada." },
    { q: "Posso personalizar o domínio?", a: "Sim, você pode configurar seu próprio domínio para o checkout e outras interfaces voltadas ao cliente, reforçando sua marca." },
    { q: "Como faço o monitoramento das transações?", a: "Através do nosso painel administrativo completo, você tem acesso a relatórios detalhados, dashboards e monitoramento em tempo real de todas as transações." },
    { q: "O gateway é compatível com outros checkouts?", a: "Sim, nossa API flexível permite a integração com diversas plataformas de e-commerce, sistemas de CRM e checkouts externos." },
  ];

  // Animation setup for the section title
  // const titleRef = useRef(null);
  // const titleInView = useInView(titleRef, { once: true, amount: 0.5 });

  return (
    <section className="py-20 relative bg-black">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Use motion.div for animations */}
        <div
          // ref={titleRef}
          className="text-center mb-12"
          // initial={{ opacity: 0, y: 20 }}
          // animate={titleInView ? { opacity: 1, y: 0 } : {}}
          // transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-white/70">
            Tire suas dúvidas sobre nossa plataforma
          </p>
        </div>
        <div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} title={faq.q} index={index}>
                {faq.a}
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

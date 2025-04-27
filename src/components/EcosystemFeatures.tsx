import React from 'react';
// Import animation library if needed, e.g., import { motion, useInView } from 'framer-motion';
// Import icon components or SVGs

// Placeholder icons - replace with actual SVGs or icon components
const GlobeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-4 h-4 text-purple-400"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>;
const ZapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap w-4 h-4 text-purple-400"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>;
const WebhookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-webhook w-4 h-4 text-purple-400"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path></svg>;
const DashboardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard w-4 h-4 text-purple-400"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>;
const SmartphoneIconSmall = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone w-4 h-4 text-purple-400"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-4 h-4 text-purple-400"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const UsersRoundIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-round w-4 h-4 text-purple-400"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>;
const ShoppingCartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart w-4 h-4 text-purple-400"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>;
const ShareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share2 w-4 h-4 text-purple-400"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>;


interface FeatureItemProps {
    icon: React.ReactNode;
    text: React.ReactNode; // Allows JSX for highlighting
    index: number; // For staggered animation delay
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text }) => {
    // Animation setup (example with framer-motion)
    // const ref = useRef(null);
    // const isInView = useInView(ref, { once: true, amount: 0.5 });
    // const variants = {
    //   hidden: { opacity: 0, y: 20 },
    //   visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.05 } } // Staggered delay
    // };

    return (
        // Use motion.div for animations
        <div
            // ref={ref}
            className="relative"
            // initial="hidden"
            // animate={isInView ? "visible" : "hidden"}
            // variants={variants}
        >
            <div className="relative flex items-center gap-3 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-full px-4 py-3 border border-purple-500/20 h-full"> {/* Added h-full */}
                <div className="relative flex-shrink-0 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center overflow-hidden">
                    {icon}
                </div>
                <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white/90">{text}</p>
                </div>
            </div>
        </div>
    );
};

const EcosystemFeatures: React.FC = () => {
    const features = [
        { icon: <GlobeIcon />, text: <>Checkout com <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent font-semibold">domínio dos usuários</span></> },
        { icon: <ZapIcon />, text: <>Recuperação de vendas com <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent font-semibold">IA</span></> },
        { icon: <WebhookIcon />, text: <>Webhooks</> }, // Removed empty span
        { icon: <DashboardIcon />, text: <>Dashboard <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent font-semibold">intuitiva</span></> },
        { icon: <SmartphoneIconSmall />, text: <>Aplicativo <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent font-semibold">mobile</span></> },
        { icon: <UsersIcon />, text: <>Area de <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent font-semibold">membros</span></> },
        { icon: <UsersRoundIcon />, text: <>Co-produção</> },
        { icon: <ShoppingCartIcon />, text: <>Marketplace</> },
        { icon: <ShareIcon />, text: <>Sistema de <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent font-semibold">indique e ganhe</span></> },
    ];

    return (
        <section className="py-20 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-1/2 h-64 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-1/2 h-64 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 py-12 border border-purple-500/20 rounded-3xl bg-black/80 backdrop-blur-sm shadow-[0_0_50px_rgba(168,85,247,0.03)] relative z-10">
                <h2 className="text-2xl md:text-3xl font-medium text-center mb-16 bg-gradient-to-b from-white via-white/70 to-white/50 bg-clip-text text-transparent">
                    Tudo que o Ecossistema Hightom Oferece
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {features.map((feature, index) => (
                        <FeatureItem key={index} icon={feature.icon} text={feature.text} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EcosystemFeatures;

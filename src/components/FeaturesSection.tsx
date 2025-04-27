import React, { useState, useRef, lazy, Suspense } from "react";
const IphoneScene = lazy(() => import("./IphoneScene"));
import macbookImage from "../../assets/images/macbook-members-area.png"; // Adjust path as needed
// Import animation library if needed, e.g., import { motion, useInView } from 'framer-motion';
// Import icon components or SVGs
// Example: import { TargetIcon, SmartphoneIcon, LibraryIcon } from './Icons';

// Placeholder Icon Components (replace with actual SVGs or library)
const TargetIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-black"
    >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"></path>
        <path d="M12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
    </svg>
);
const SmartphoneIcon = () => (
    <svg
        className="w-8 h-8 text-black relative z-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        ></path>
    </svg>
);
const LibraryIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-black relative z-10"
    >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
    </svg>
);

interface FeatureBlockProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    buttonText?: string;
    children?: React.ReactNode; // For custom content like the theme switcher or canvas
    reverseLayout?: boolean; // To alternate layout
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({
    icon,
    title,
    description,
    buttonText = "Saber mais",
    children,
    reverseLayout = false,
}) => {
    // Ref for scroll animations
    const ref = useRef(null);
    // const isInView = useInView(ref, { once: true, amount: 0.3 }); // Example with framer-motion

    // Animation variants (example)
    // const variants = {
    //   hidden: { opacity: 0, x: reverseLayout ? -20 : 20 },
    //   visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    // };

    return (
        // Use motion.div for animations
        <div
            ref={ref}
            className={`grid lg:grid-cols-2 gap-12 items-center ${
                reverseLayout ? "lg:grid-flow-row-dense" : ""
            }`}
            // initial="hidden"
            // animate={isInView ? "visible" : "hidden"}
            // variants={variants}
        >
            <div
                className={`relative ${reverseLayout ? "lg:col-start-2" : ""}`}
            >
                <div className="relative group">
                    <div className="space-y-6">
                        <div className="w-16 h-16 rounded-full bg-[#C1F664] flex items-center justify-center relative group mb-8">
                            <div className="absolute inset-0 rounded-full bg-[#C1F664] blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <div className="relative z-10">{icon}</div>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-medium text-white mb-6 whitespace-pre-line">
                            {title}
                        </h3>
                        <p className="text-lg text-[#9b9b9b] leading-relaxed mb-8">
                            {description}
                        </p>
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-10 py-2 bg-black hover:bg-black/80 text-white border border-[#6938D3] transition-colors rounded-lg group px-6 mt-4">
                            {buttonText}
                            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                                →
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`relative ${reverseLayout ? "lg:col-start-1" : ""}`}
            >
                {children}
            </div>
        </div>
    );
};

// Example Theme Switcher Component (Conceptual)
const ThemeSwitcher: React.FC = () => {
    const themes = [
        {
            name: "Zinc",
            color: "bg-zinc-400/20",
            activeColor: "bg-zinc-500",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zinc-2OM8pFgMjEXYYffbAsopNhbokpBJ80.png",
        },
        {
            name: "Red",
            color: "bg-red-500/20",
            activeColor: "bg-red-500",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/red-FRjXX6wXTPaPzxKws3PWZ11csiNTvU.png",
        },
        {
            name: "Blue",
            color: "bg-blue-500/20",
            activeColor: "bg-blue-500",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blue-NN3tzmiIqhw6ET3vtGdOQF8xcRgXR3.png",
        }, // Add path
        {
            name: "Green",
            color: "bg-green-500/20",
            activeColor: "bg-green-500",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/green-kIfF2LmlXvfuGPDhgtIUucg6hLD5O3.png",
        },
        {
            name: "Purple",
            color: "bg-purple-500/20",
            activeColor: "bg-purple-500",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto.JPEG-VaMPh3xEbootvvdtPF7SjXWkRkjTf6.jpeg",
        }, // Add path
        {
            name: "Cyan",
            color: "bg-cyan-500/20",
            activeColor: "bg-cyan-500",
            image: "https://www.hightomdev.com/images/cyan-theme-dark.png",
        }, // Add path
        {
            name: "Orange",
            color: "bg-orange-500/20",
            activeColor: "bg-orange-500",
            image: "https://www.hightomdev.com/images/orange-theme-dark.png",
        },
        {
            name: "Yellow",
            color: "bg-yellow-500/20",
            activeColor: "bg-yellow-500",
            image: "https://www.hightomdev.com/images/yellow-theme-dark.png",
            default: true,
        }, // Adjust path
        {
            name: "Violet",
            color: "bg-violet-500/20",
            activeColor: "bg-violet-500",
            image: "https://www.hightomdev.com/images/violet-theme-light.png",
        }, // Add path
    ];
    const defaultTheme = themes.find((t) => t.default) || themes[0];
    const [activeTheme, setActiveTheme] = useState<string>(defaultTheme.name);
    const [currentImage, setCurrentImage] = useState<string>(
        defaultTheme.image
    );

    const handleThemeChange = (themeName: string) => {
        const selectedTheme = themes.find((t) => t.name === themeName);
        if (selectedTheme) {
            setActiveTheme(selectedTheme.name);
            setCurrentImage(selectedTheme.image);
        }
    };

    return (
        <div className="relative">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-purple-500/20 bg-black">
                <div className="relative w-full h-full">
                    {/* Use a key to force image remount on change for transition */}
                    <div
                        key={activeTheme}
                        className="absolute inset-0 animate-fade-in"
                    >
                        {" "}
                        {/* Simple fade animation */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-20"></div>
                        <img
                            alt={`Dashboard Interface - ${activeTheme} Theme Dark`}
                            decoding="async"
                            className="object-fill bg-black absolute h-full w-full inset-0 text-transparent"
                            src={currentImage}
                            onError={(e) => {
                                e.currentTarget.src =
                                    "https://placehold.co/1600x900/000000/ffffff?text=Image+Error";
                            }} // Basic fallback
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
                {themes.map((theme) => (
                    <button
                        key={theme.name}
                        onClick={() => handleThemeChange(theme.name)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            activeTheme === theme.name
                                ? `${theme.activeColor} w-4`
                                : theme.color
                        }`}
                        aria-label={`Switch to ${theme.name} theme`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

const FeaturesSection: React.FC = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-black text-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <div className="mb-6">
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input hover:text-accent-foreground h-10 py-2 bg-[#14141F] border-none text-white/80 hover:bg-[#1a1a2f] transition-colors rounded-full px-6">
                            Desperte seu potencial
                        </button>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-medium mb-6">
                        Horizontes Infinitos
                    </h2>
                    <p className="text-lg text-[#9b9b9b] leading-relaxed mb-16 max-w-2xl mx-auto">
                        Desbrave novos mercados com nossa solução white label!
                        Conecte-se com os melhores produtores, aproveite taxas
                        imbatíveis e transforme sua visão em um negócio de
                        sucesso. O futuro do seu empreendimento começa aqui!
                    </p>
                </div>

                {/* Feature Block 1: Identity */}
                <FeatureBlock
                    icon={<TargetIcon />}
                    title="Sua Identidade, Seu Poder, Seu Sucesso"
                    description="Dê vida à sua identidade: molde cada detalhe, escolha suas cores e crie uma experiência que reflita sua essência única!"
                >
                    <ThemeSwitcher />
                </FeatureBlock>

                {/* Feature Block 2: Mobile App */}
                <div className="mt-32">
                    <FeatureBlock
                        icon={<SmartphoneIcon />}
                        title="Aplicativo mobile"
                        description="Em nosso ecossistema, oferecemos também um app mobile disponível para Android e iOS, onde os seus produtores recebem notificações e podem acompanhar suas vendas."
                        reverseLayout={true} // Alternate layout
                    >
                        <div
                            className="relative h-[600px]"
                            style={{ opacity: 1, transform: "none" }}
                        >
                            <div className="w-full h-full overflow-hidden bg-black/30 rounded-2xl">
                                <div className="w-full h-full relative">
                                    {/* The Spline component replaces the manual canvas tag */}
                                    {/* It will create and manage its own canvas element */}

                                    <Suspense fallback={<>Loading</>}>
                                        <IphoneScene />
                                    </Suspense>

                                    {/* This div seems to be an overlay element */}
                                    <div className="absolute bottom-0 left-0 right-0 h-14 bg-black z-20"></div>
                                </div>
                                {/* This div seems to be another overlay element */}
                                {/* Note: There are two identical divs at the end of your provided HTML, */}
                                {/* I've included both here as per your HTML structure. */}
                                <div className="absolute bottom-0 left-0 right-0 h-14 bg-black z-20"></div>
                            </div>
                        </div>
                    </FeatureBlock>
                </div>

                {/* Feature Block 3: Members Area */}
                <div className="mt-32">
                    <FeatureBlock
                        icon={<LibraryIcon />}
                        title="Área de Membros Exclusiva"
                        description="No nosso ecossistema, você conta com uma área de membros intuitiva e segura, perfeita para centralizar e gerenciar seu conteúdo. Seja para cursos, mentorias ou materiais exclusivos, oferecemos uma experiência fluida e profissional para você."
                    >
                        <div className="relative">
                            {/* Apply perspective and rotation for the 3D effect */}
                            <div className="relative w-full aspect-[16/10] transform perspective-[2000px] rotate-x-[10deg] rotate-y-[-10deg] rotate-z-[-5deg] translate-z-[-50px] shadow-2xl">
                                <img
                                    alt="MacBook Dashboard Interface - Área de Membros"
                                    decoding="async"
                                    className="object-contain absolute h-full w-full inset-0 text-transparent bg-transparent"
                                    // Adjust path
                                    src={macbookImage}
                                />
                            </div>
                        </div>
                    </FeatureBlock>
                </div>
            </div>
            {/* Add global background elements if needed */}
        </section>
    );
};

export default FeaturesSection;

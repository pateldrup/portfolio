import { useEffect, useRef, Suspense } from "react";
import gsap from "gsap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineArrowDown } from "react-icons/hi";
import { HeroObject3D } from "../components/HeroObject3D";

export const Hero = () => {
    const containerRef = useRef();
    const textRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered reveal animation - subtle and elegant
            const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

            tl.from(".hero-reveal", {
                y: 60,
                opacity: 0,
                stagger: 0.15,
                delay: 0.3,
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={containerRef}
            className="min-h-screen relative flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden"
        >
            {/* Subtle gradient orb - minimal background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Main Content Grid - Text Left, 3D Right */}
            <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center z-10">

                {/* Left: Typography */}
                <div ref={textRef} className="text-center md:text-left">

                    {/* Overline */}
                    <p className="hero-reveal text-sm md:text-base uppercase tracking-[0.25em] text-gray-500 mb-4">
                        B.Tech Student
                    </p>

                    {/* Primary Headline */}
                    <h1 className="hero-reveal text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white tracking-tight leading-[1.05] mb-6">
                        Drup<br />Patel
                    </h1>

                    {/* Subheadline */}
                    <p className="hero-reveal text-base md:text-lg text-gray-400 max-w-md mx-auto md:mx-0 mb-10 leading-relaxed font-light">
                        Crafting performant, elegant digital experiences.<br className="hidden sm:block" />
                        Full Stack Developer.
                    </p>

                    {/* CTAs */}
                    <div className="hero-reveal flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-10">
                        <a
                            href="#projects"
                            className="group px-7 py-3 bg-white text-black rounded-full font-medium text-sm tracking-wide hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
                        >
                            View Work
                            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </a>
                        <a
                            href="#contact"
                            className="px-7 py-3 border border-white/20 text-white/80 rounded-full font-medium text-sm tracking-wide hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="hero-reveal flex gap-6 justify-center md:justify-start">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-white transition-colors duration-300"
                            aria-label="GitHub"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-white transition-colors duration-300"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Right: 3D Hero Object */}
                <div className="hidden md:flex items-center justify-center h-[500px] lg:h-[600px]">
                    <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-gray-600">Loading...</div>}>
                        <HeroObject3D />
                    </Suspense>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-reveal absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                <HiOutlineArrowDown className="animate-bounce" size={16} />
            </div>
        </section>
    );
};

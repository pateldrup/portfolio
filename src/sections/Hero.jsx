import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineArrowDown, HiDownload } from "react-icons/hi";

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
            <div className="container mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center z-10">

                {/* Left: Typography */}
                <div ref={textRef} className="text-center md:text-left">

                    {/* Primary Headline - New Style */}
                    <h1 className="hero-reveal text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[1.1] mb-8">
                        <span className="text-white italic">Hi, I'm</span>
                        <br />
                        <span className="text-cyan-400">Drup Patel</span>
                        <br />
                        <span className="text-white">Full-Stack</span>
                        <br />
                        <span className="text-white">Developer</span>
                    </h1>

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
                        <a
                            href="/resume.pdf"
                            download
                            className="group px-7 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium text-sm tracking-wide hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2"
                        >
                            <HiDownload size={18} />
                            Download Resume
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="hero-reveal flex gap-6 justify-center md:justify-start">
                        <a
                            href="https://github.com/pateldrup"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-white transition-colors duration-300"
                            aria-label="GitHub"
                        >
                            <FaGithub size={28} />
                        </a>
                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-white transition-colors duration-300"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={28} />
                        </a>
                        <a
                            href="https://leetcode.com/u/BvG8JaFD6S/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-yellow-500 transition-colors duration-300"
                            aria-label="LeetCode"
                        >
                            <SiLeetcode size={28} />
                        </a>
                        <a
                            href="https://x.com/PatelDrup"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
                            aria-label="Twitter"
                        >
                            <FaTwitter size={28} />
                        </a>
                        <a
                            href="https://www.youtube.com/@TechWithDrup/videos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-red-500 transition-colors duration-300"
                            aria-label="YouTube"
                        >
                            <FaYoutube size={28} />
                        </a>
                    </div>
                </div>

                {/* Right: Profile Photo */}
                <div className="hidden md:flex items-center justify-center h-[500px] lg:h-[600px]">
                    <div className="hero-reveal relative">
                        {/* Glow effect behind image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/30 rounded-full blur-3xl scale-110" />

                        {/* Profile Image Container */}
                        <div className="relative w-[350px] h-[350px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/20 hover:scale-105 transition-transform duration-500">
                            <img
                                src="/profile.jpg"
                                alt="Drup Patel"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Decorative ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-white/10 scale-125 animate-pulse" />
                    </div>
                </div>
            </div>

            {/* Right Side Scroll Indicator */}
            <a
                href="#about"
                className="hero-reveal hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-50 group cursor-pointer"
            >
                {/* Vertical text */}
                <span className="text-[11px] uppercase tracking-[0.3em] text-gray-500 group-hover:text-cyan-400 transition-colors duration-300 [writing-mode:vertical-rl] rotate-180">
                    Scroll to explore
                </span>

                {/* Animated line */}
                <div className="w-[1px] h-20 bg-gradient-to-b from-gray-500/50 to-transparent relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-cyan-400 to-transparent animate-scroll-line" />
                </div>

                {/* Arrow */}
                <div className="w-8 h-8 rounded-full border border-gray-500/50 group-hover:border-cyan-400 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <HiOutlineArrowDown className="text-gray-500 group-hover:text-cyan-400 animate-bounce" size={14} />
                </div>
            </a>

            {/* Bottom Scroll Indicator */}
            <div className="hero-reveal absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 lg:hidden">
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                <HiOutlineArrowDown className="animate-bounce" size={16} />
            </div>
        </section>
    );
};

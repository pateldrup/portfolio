import { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// Social Links Data
const socialLinks = [
    {
        id: "github",
        icon: FaGithub,
        href: "https://github.com/pateldrup",
        color: "#FFFFFF",
        hoverColor: "#6e5494",
    },
    {
        id: "linkedin",
        icon: FaLinkedin,
        href: "https://linkedin.com/in/pateldrup",
        color: "#FFFFFF",
        hoverColor: "#0A66C2",
    },
    {
        id: "twitter",
        icon: FaTwitter,
        href: "https://x.com/pateldrup?s=11",
        color: "#FFFFFF",
        hoverColor: "#1DA1F2",
    },
];

// Social Icon Component with GSAP hover effects
const SocialIcon = ({ social, index }) => {
    const iconRef = useRef(null);
    const glowRef = useRef(null);

    useLayoutEffect(() => {
        const icon = iconRef.current;
        const glow = glowRef.current;
        if (!icon || !glow) return;

        const handleMouseEnter = () => {
            gsap.to(icon, {
                scale: 1.2,
                color: social.hoverColor,
                duration: 0.3,
                ease: "power2.out",
            });
            gsap.to(glow, {
                opacity: 0.6,
                scale: 1.5,
                duration: 0.3,
            });
        };

        const handleMouseLeave = () => {
            gsap.to(icon, {
                scale: 1,
                color: social.color,
                duration: 0.3,
                ease: "power2.out",
            });
            gsap.to(glow, {
                opacity: 0,
                scale: 1,
                duration: 0.3,
            });
        };

        icon.addEventListener("mouseenter", handleMouseEnter);
        icon.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            icon.removeEventListener("mouseenter", handleMouseEnter);
            icon.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [social]);

    const Icon = social.icon;

    return (
        <motion.a
            ref={iconRef}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-white text-2xl cursor-pointer transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
        >
            {/* Glow effect */}
            <div
                ref={glowRef}
                className="absolute inset-0 rounded-full blur-xl opacity-0 -z-10"
                style={{ backgroundColor: social.hoverColor }}
            />
            <Icon />
        </motion.a>
    );
};

// Logo Component
const Logo = () => {
    const logoRef = useRef(null);

    useLayoutEffect(() => {
        const logo = logoRef.current;
        if (!logo) return;

        const handleMouseEnter = () => {
            gsap.to(logo, {
                textShadow: "0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.4)",
                duration: 0.3,
            });
        };

        const handleMouseLeave = () => {
            gsap.to(logo, {
                textShadow: "none",
                duration: 0.3,
            });
        };

        logo.addEventListener("mouseenter", handleMouseEnter);
        logo.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            logo.removeEventListener("mouseenter", handleMouseEnter);
            logo.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <motion.div
            ref={logoRef}
            className="text-xl md:text-2xl font-bold cursor-pointer transition-all"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <span className="text-gray-400">&lt; /&gt;</span>{" "}
            <span className="text-white">Drup</span>
            <span className="text-cyan-400">Portfolio</span>
        </motion.div>
    );
};

export const Footer = () => {
    return (
        <motion.footer
            className="relative py-8 px-6 border-t border-white/10"
            style={{
                background: "linear-gradient(to bottom, rgba(0,0,0,0.95), #000000)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                    {/* Logo - Left Side */}
                    <Logo />

                    {/* Social Icons - Right Side */}
                    <div className="flex items-center gap-6">
                        {socialLinks.map((social, index) => (
                            <SocialIcon key={social.id} social={social} index={index} />
                        ))}
                    </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

                {/* Copyright Text - Bottom */}
                <motion.p
                    className="text-center text-gray-500 text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    © 2026 Drup Portfolio. All rights reserved.
                </motion.p>
            </div>
        </motion.footer>
    );
};

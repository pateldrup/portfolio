import { useMemo } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";

// Certificate data
const CERTIFICATES = [
    {
        id: 1,
        title: "Introduction to C",
        issuer: "Sololearn",
        date: "April 2026",
        description: "Successfully completed the course by demonstrating theoretical and practical understanding of Introduction to C.",
        image: "https://i.ibb.co/svJmfP9D/cert-c.png",
        tags: ["C", "Programming"],
        link: "https://www.sololearn.com/certificates/CC-IFHOOVV1",
    },
    {
        id: 2,
        title: "CSS (Basic)",
        issuer: "HackerRank",
        date: "March 2026",
        description: "This certification validates knowledge of CSS basics including selectors, the box model, positioning, and common styling patterns.",
        image: "/cert-css.png",
        tags: ["CSS", "Frontend"],
        link: "https://www.hackerrank.com/certificates/9964dce4447d",
    },
    {
        id: 3,
        title: "JavaScript (Intermediate)",
        issuer: "HackerRank",
        date: "March 2026",
        description: "This certification covers intermediate JavaScript concepts like asynchronous programming, functional programming, and data manipulation.",
        image: "/cert-js.png",
        tags: ["JavaScript", "Frontend"],
        link: "https://www.hackerrank.com/certificates/609de6b7132f",
    },
    {
        id: 4,
        title: "Problem Solving (Intermediate)",
        issuer: "HackerRank",
        date: "March 2026",
        description: "This certification demonstrates proficiency in data structures and algorithms, specifically in intermediate-level implementation and optimization.",
        image: "/cert-ps.png",
        tags: ["Data Structures", "Algorithms"],
        link: "https://www.hackerrank.com/certificates/630d9e2f1255",
    },
];

// Optimized Starfield - Uses CSS animations for performance
const StarfieldBackground = () => {
    const stars = useMemo(() => {
        const arr = [];
        for (let i = 0; i < 25; i++) {
            arr.push({
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: 1 + Math.random() * 1.5,
                delay: Math.random() * 2,
            });
        }
        return arr;
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((star, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-white/60 animate-pulse"
                    style={{
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        width: star.size,
                        height: star.size,
                        animationDelay: `${star.delay}s`,
                        animationDuration: '3s',
                    }}
                />
            ))}
        </div>
    );
};

// Certificate Card Component - Optimized
const CertificateCard = ({ certificate, index }) => {
    return (
        <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
            }}
        >
            <div
                className="relative flex flex-col md:flex-row gap-5 p-5 rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-200 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]"
                style={{
                    background: "rgba(255,255,255,0.02)",
                }}
            >
                {/* Certificate Image */}
                <div className="relative w-full md:w-48 h-32 md:h-36 flex-shrink-0 rounded-xl overflow-hidden bg-white/5">
                    {/* Icon Overlay */}
                    <div className="absolute top-2 left-2 z-10 w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                        <FaAward className="text-cyan-400 text-sm" />
                    </div>
                    {/* Image */}
                    <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>

                {/* Certificate Details */}
                <div className="flex-1 flex flex-col">
                    {/* Issuer & Date */}
                    <p className="text-xs text-gray-500 mb-1">
                        {certificate.issuer} • {certificate.date}
                    </p>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                        {certificate.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
                        {certificate.description}
                    </p>

                    {/* Tags */}
                    {certificate.tags[0] && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {certificate.tags.map((tag, i) => (
                                tag && (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                                    >
                                        {tag}
                                    </span>
                                )
                            ))}
                        </div>
                    )}

                    {/* View Link */}
                    <a
                        href={certificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 mt-auto"
                    >
                        <FaExternalLinkAlt className="text-xs" />
                        View Certificate
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export const Certificates = () => {
    return (
        <section id="certificates" className="min-h-screen py-24 px-6 relative overflow-hidden">
            <StarfieldBackground />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.h2
                    className="text-3xl md:text-5xl font-bold text-white mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <span className="text-cyan-400">Certificates</span>
                </motion.h2>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {CERTIFICATES.map((cert, index) => (
                        <CertificateCard key={cert.id} certificate={cert} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

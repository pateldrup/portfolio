import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export const Loading = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsComplete(true);
                    return 100;
                }
                // Random increment for natural feel
                const increment = Math.random() * 8 + 2;
                return Math.min(prev + increment, 100);
            });
        }, 80);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isComplete) {
            // Fade out and call onComplete
            const tl = gsap.timeline({ onComplete });
            tl.to(".loader-bg", {
                opacity: 0,
                duration: 0.6,
                delay: 0.3,
                ease: "power2.inOut",
            });
        }
    }, [isComplete, onComplete]);

    return (
        <div className="loader-bg fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
            {/* Code Brackets Icon */}
            <motion.div
                className="flex items-center gap-2 mb-10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <motion.span
                    className="text-5xl md:text-6xl font-light text-cyan-400"
                    animate={{ x: [-3, 3, -3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    {"<"}
                </motion.span>
                <motion.span
                    className="text-5xl md:text-6xl font-light text-cyan-400"
                    animate={{ x: [3, -3, 3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    {">"}
                </motion.span>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-64 md:w-80 relative">
                {/* Progress Bar Background */}
                <div className="h-[2px] bg-gray-800 rounded-full overflow-hidden">
                    {/* Progress Bar Fill */}
                    <motion.div
                        className="h-full rounded-full"
                        style={{
                            background: "linear-gradient(90deg, #06b6d4, #8b5cf6, #06b6d4)",
                            backgroundSize: "200% 100%",
                        }}
                        initial={{ width: "0%" }}
                        animate={{
                            width: `${progress}%`,
                            backgroundPosition: ["0% 0%", "100% 0%"],
                        }}
                        transition={{
                            width: { duration: 0.1 },
                            backgroundPosition: { duration: 2, repeat: Infinity, ease: "linear" }
                        }}
                    />
                </div>

                {/* Progress Bar Glow */}
                <motion.div
                    className="absolute top-0 h-[2px] rounded-full blur-sm"
                    style={{
                        background: "linear-gradient(90deg, #06b6d4, #8b5cf6)",
                        width: `${progress}%`,
                    }}
                />
            </div>

            {/* Percentage */}
            <motion.div
                className="mt-6 text-2xl md:text-3xl font-light text-white tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                {Math.round(progress)}%
            </motion.div>

            {/* Loading Text */}
            <motion.p
                className="mt-3 text-sm md:text-base text-gray-500 tracking-widest uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                Loading Portfolio Experience
            </motion.p>
        </div>
    );
};

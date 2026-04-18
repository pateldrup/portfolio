import { useState, useRef, useLayoutEffect, useMemo } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaSpinner, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa";

// Starfield Background
const StarfieldBackground = () => {
    const stars = useMemo(() => {
        const arr = [];
        for (let i = 0; i < 80; i++) {
            arr.push({
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: 1 + Math.random() * 2,
                delay: Math.random() * 3,
                duration: 2 + Math.random() * 3,
            });
        }
        return arr;
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((star, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        width: star.size,
                        height: star.size,
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: star.duration,
                        delay: star.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
            {/* Gradient overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.5) 100%)",
                }}
            />
        </div>
    );
};

// Input Field Component with GSAP animations
const InputField = ({ label, type = "text", name, value, onChange, placeholder, required, index }) => {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        const input = inputRef.current;
        if (!input) return;

        const handleFocus = () => {
            gsap.to(input, {
                boxShadow: "0 0 20px rgba(6, 182, 212, 0.4), 0 0 40px rgba(6, 182, 212, 0.2)",
                borderColor: "rgba(6, 182, 212, 0.8)",
                duration: 0.3,
            });
        };

        const handleBlur = () => {
            gsap.to(input, {
                boxShadow: "none",
                borderColor: "rgba(255, 255, 255, 0.1)",
                duration: 0.3,
            });
        };

        input.addEventListener("focus", handleFocus);
        input.addEventListener("blur", handleBlur);

        return () => {
            input.removeEventListener("focus", handleFocus);
            input.removeEventListener("blur", handleBlur);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <label className="block text-sm font-medium text-gray-300 mb-2">
                {label} {required && <span className="text-cyan-400">*</span>}
            </label>
            {type === "textarea" ? (
                <textarea
                    ref={inputRef}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    rows={5}
                    placeholder={placeholder}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-all resize-none"
                />
            ) : (
                <input
                    ref={inputRef}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-all"
                />
            )}
        </motion.div>
    );
};

// Glassmorphism Card Component
const GlassCard = ({ children, className = "", delay = 0 }) => {
    const cardRef = useRef(null);

    useLayoutEffect(() => {
        // No floating animation - cards are now static
    }, []);

    return (
        <motion.div
            ref={cardRef}
            className={`relative backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden ${className}`}
            style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    );
};

export const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null);
    const containerRef = useRef(null);
    const buttonRef = useRef(null);

    // Parallax effect
    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX / innerWidth - 0.5) * 6;
            const y = (clientY / innerHeight - 0.5) * 6;

            gsap.to(container, {
                rotateY: x,
                rotateX: -y,
                duration: 0.5,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Button hover effect
    useLayoutEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseEnter = () => {
            gsap.to(button, {
                scale: 1.02,
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)",
                duration: 0.3,
            });
        };

        const handleMouseLeave = () => {
            gsap.to(button, {
                scale: 1,
                boxShadow: "none",
                duration: 0.3,
            });
        };

        button.addEventListener("mouseenter", handleMouseEnter);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mouseenter", handleMouseEnter);
            button.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        try {
            // 1. Send email via EmailJS
            const emailResult = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,      // The person sending the message
                    reply_to: formData.email,      // The default variable for sender's email
                    email_id: formData.email,      // Common alternative variable
                    subject: formData.subject,     // What the subject is
                    message: formData.message,     // The actual message body
                    to_name: 'Drup',
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            console.log('Email sent successfully:', emailResult.text);

            // Success
            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setStatus(null), 5000);

        } catch (error) {
            console.error('Error:', error);
            setStatus("error");
            setTimeout(() => setStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="min-h-screen py-24 px-6 pb-8 relative overflow-hidden">
            <StarfieldBackground />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Get In <span className="text-cyan-400">Touch</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        {/* Have a project in mind or want to collaborate? Feel free to reach out! */}
                    </p>
                </motion.div>

                {/* Main Grid */}
                <div
                    ref={containerRef}
                    className="grid grid-cols-1 lg:grid-cols-5 gap-8"
                    style={{ perspective: "1000px" }}
                >
                    {/* Left Side - Contact Form */}
                    <GlassCard className="lg:col-span-3 p-8" delay={0}>
                        <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <InputField
                                    label="Your Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                    index={0}
                                />
                                <InputField
                                    label="Your Email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                    index={1}
                                />
                            </div>
                            <InputField
                                label="Subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="What is this about?"
                                required
                                index={2}
                            />
                            <InputField
                                label="Message"
                                type="textarea"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message here ..."
                                required
                                index={3}
                            />

                            <motion.button
                                ref={buttonRef}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <FaSpinner className="animate-spin" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <FaPaperPlane />
                                    </>
                                )}
                            </motion.button>

                            {status === "success" && (
                                <motion.p
                                    className="text-green-400 text-center flex items-center justify-center gap-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <FaCheckCircle /> Message sent successfully!
                                </motion.p>
                            )}
                            {status === "error" && (
                                <motion.p
                                    className="text-red-400 text-center flex items-center justify-center gap-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    ❌ Failed to send. Please try again.
                                </motion.p>
                            )}
                        </form>
                    </GlassCard>

                    {/* Right Side - Info Cards */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        {/* Contact Information Card */}
                        <GlassCard className="p-6" delay={0.2}>
                            <h3 className="text-lg font-semibold text-white mb-5">Contact Information</h3>
                            <div className="space-y-4">
                                <motion.div
                                    className="flex items-center gap-4"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                                        <FaEnvelope className="text-cyan-400 text-lg" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Email</p>
                                        <p className="text-white">pateldrup.cg@gmail.com</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-center gap-4"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                                        <FaMapMarkerAlt className="text-purple-400 text-lg" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Location</p>
                                        <p className="text-white">Swaminarayan  University, Gandhinagar</p>
                                    </div>
                                </motion.div>
                            </div>
                        </GlassCard>

                        {/* Let's Work Together Card */}
                        <GlassCard className="p-6 flex-1" delay={0.3}>
                            <h3 className="text-lg font-semibold text-white mb-4">Let's Work Together</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                I'm currently available for freelance work and full-time opportunities.
                                If you have a project that needs a creative developer, let's talk!
                            </p>

                            <div className="space-y-3">
                                <motion.div
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-gray-300 text-sm">Status: <span className="text-green-400">Available</span></span>
                                </motion.div>

                                <motion.div
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <FaClock className="text-cyan-400" />
                                    <span className="text-gray-300 text-sm">Response Time: <span className="text-white">Within 24 hours</span></span>
                                </motion.div>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

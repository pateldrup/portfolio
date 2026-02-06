import { useEffect, useRef } from "react";
import gsap from "gsap";

export const About = () => {
    const sectionRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Simple entrance animation (no ScrollTrigger to avoid conflict with Drei ScrollControls)
            gsap.from(".about-reveal", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.3,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" className="min-h-screen py-24 px-6 relative" ref={sectionRef}>
            <div className="max-w-6xl mx-auto w-full">

                {/* ========================================= */}
                {/* SECTION 1: ABOUT ME (Text + Image) */}
                {/* ========================================= */}
                <div className="mb-24">
                    {/* Section Header */}
                    <div className="about-reveal mb-12">
                        <p className="text-sm uppercase tracking-[0.25em] text-blue-400 mb-4">About Me</p>
                    </div>

                    {/* Two Column Layout: Text Left, Image Right */}
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Left Column: About Me Text */}
                        <div className="about-reveal order-2 md:order-1">
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                I'm a <span className="text-white">passionate full stack developer</span> with a strong foundation in computer science and a keen eye for creating seamless, user-centric web applications.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                My journey in tech began at <span className="text-white">Swaminarayan University</span>, where I honed my skills in various programming languages and software development methodologies.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                I believe in clean code, intuitive design, and continuous learning.
                            </p>
                        </div>

                        {/* Right Column: Personal Image */}
                        <div className="about-reveal order-1 md:order-2 flex justify-center">
                            <div className="relative">
                                <img
                                    src="/profile.jpg"
                                    alt="Drup Patel - Full Stack Developer"
                                    className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl"
                                />
                                {/* Subtle glow effect behind image */}
                                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent rounded-2xl blur-2xl scale-110" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ========================================= */}
                {/* SECTION 2: EDUCATION (Full Width Below) */}
                {/* ========================================= */}
                <div className="about-reveal">
                    <div className="mb-12">
                        <p className="text-sm uppercase tracking-[0.25em] text-blue-400 mb-4">Education</p>
                        <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                            Academic Journey
                        </h3>
                    </div>

                    {/* Full Width Vertical Timeline */}
                    <div className="max-w-3xl">
                        <div className="border-l-2 border-white/10 pl-8 space-y-10">

                            {/* College - B.Tech */}
                            <div className="relative">
                                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#050505]" />
                                <span className="text-xs text-blue-400 font-mono uppercase tracking-wider">2025</span>
                                <h4 className="text-xl text-white font-medium mt-2">B.Tech in Computer Science Engineering</h4>
                                <p className="text-gray-500 mt-1">Swaminarayan University</p>
                                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                                    Pursuing Computer Science with focus on software development, data structures, algorithms, and full-stack web technologies.
                                </p>
                            </div>

                            {/* HSC - Higher Secondary */}
                            <div className="relative">
                                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#050505]" />
                                <span className="text-xs text-purple-400 font-mono uppercase tracking-wider">2023 - 2025</span>
                                <h4 className="text-xl text-gray-200 font-medium mt-2">HSC (Higher Secondary Certificate)</h4>
                                <p className="text-gray-500 mt-1">Pioneer School of Science Patan</p>
                                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                                    Completed 12th grade with Science stream (Physics, Chemistry, Mathematics) and Computer Science.
                                </p>
                            </div>

                            {/* SSC - Secondary */}
                            <div className="relative">
                                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-gray-600 border-4 border-[#050505]" />
                                <span className="text-xs text-gray-500 font-mono uppercase tracking-wider">2022 - 2023</span>
                                <h4 className="text-xl text-gray-300 font-medium mt-2">SSC (Secondary School Certificate)</h4>
                                <p className="text-gray-500 mt-1">Pioneer School of Science Patan</p>
                                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                                    Completed 10th grade with distinction, developing early interest in computers and programming.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

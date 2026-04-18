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
                {/* SECTION 1: ABOUT ME (Centered Text, No Image) */}
                {/* ========================================= */}
                <div className="mb-24">
                    {/* Section Header - Centered & Bigger */}
                    <div className="about-reveal mb-16 text-center">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">About Me</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Centered Text Content */}
                    <div className="about-reveal max-w-4xl mx-auto text-center">
                        <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-8">
                            I'm a <span className="text-cyan-400 font-semibold">passionate full stack developer</span> with a strong foundation in computer science and a keen eye for creating seamless, user-centric web applications.
                        </p>
                        <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-8">
                            My journey in tech began at <span className="text-cyan-400 font-semibold">Swaminarayan University</span>, where I honed my skills in various programming languages and software development methodologies.
                        </p>
                        <p className="text-gray-300 text-xl md:text-2xl leading-relaxed">
                            I believe in clean code, intuitive design, and continuous learning.
                        </p>
                    </div>
                </div>

                {/* ========================================= */}
                {/* SECTION 2: EDUCATION (Card-based Zigzag Layout) */}
                {/* ========================================= */}
                <div className="about-reveal">
                    {/* Section Header - Bigger */}
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">Education</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Zigzag Timeline Container */}
                    <div className="relative max-w-5xl mx-auto">

                        {/* Center Vertical Line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-cyan-500/30 -translate-x-1/2"></div>

                        {/* Education Card 1 - B.Tech (Left Side) */}
                        <div className="relative flex flex-col md:flex-row items-center mb-16">
                            <div className="w-full md:w-1/2 md:pr-12 md:text-right">
                                <div className="bg-gray-900/80 border border-cyan-500/30 rounded-xl p-6 md:p-8 hover:border-cyan-500/60 transition-all duration-300">
                                    <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">Computer Science</h3>
                                    <div className="space-y-2 mb-4">
                                        <p className="text-white text-lg md:text-xl flex items-center justify-end gap-2">
                                            <span>Swaminarayan University</span>
                                            <span className="text-cyan-400">🎓</span>
                                        </p>
                                        <p className="text-gray-400 text-base md:text-lg flex items-center justify-end gap-2">
                                            <span>Kalol, Gujarat, India</span>
                                            <span className="text-cyan-400">📍</span>
                                        </p>
                                        <p className="text-gray-400 text-base md:text-lg flex items-center justify-end gap-2">
                                            <span>2025 - 2029</span>
                                            <span className="text-cyan-400">📅</span>
                                        </p>
                                    </div>
                                    <ul className="text-gray-300 text-base md:text-lg space-y-2 md:text-right">
                                        <li>• Strong foundation in Frontend and Backend Web Development</li>
                                        <li>• Proficient in HTML, CSS, JavaScript, React, Node.js, Express, MongoDB</li>
                                        <li>• Skilled in problem solving, UI/UX design, and database management</li>
                                        <li>• Actively learning advanced web technologies</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Timeline Dot */}
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-gray-900 z-10"></div>
                            <div className="w-full md:w-1/2"></div>
                        </div>

                        {/* Education Card 2 - HSC (Right Side) */}
                        <div className="relative flex flex-col md:flex-row items-center mb-16">
                            <div className="w-full md:w-1/2"></div>
                            {/* Timeline Dot */}
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-gray-900 z-10"></div>
                            <div className="w-full md:w-1/2 md:pl-12">
                                <div className="bg-gray-900/80 border border-cyan-500/30 rounded-xl p-6 md:p-8 hover:border-cyan-500/60 transition-all duration-300">
                                    <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">Higher Secondary Education (Science)</h3>
                                    <div className="space-y-2 mb-4">
                                        <p className="text-white text-lg md:text-xl flex items-center gap-2">
                                            <span className="text-cyan-400">🎓</span>
                                            <span>Pioneer School of Science</span>
                                        </p>
                                        <p className="text-gray-400 text-base md:text-lg flex items-center gap-2">
                                            <span className="text-cyan-400">📍</span>
                                            <span>Patan, Gujarat, India</span>
                                        </p>
                                        <p className="text-gray-400 text-base md:text-lg flex items-center gap-2">
                                            <span className="text-cyan-400">📅</span>
                                            <span>2023 - 2025</span>
                                        </p>
                                    </div>
                                    <ul className="text-gray-300 text-base md:text-lg space-y-2">
                                        <li>• Completed 12th grade with Science stream (PCM)</li>
                                        <li>• Focus on Physics, Chemistry, and Mathematics</li>
                                        <li>• Built strong academic foundation for engineering</li>
                                        <li>• Participated in science fairs and tech activities</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Education Card 3 - SSC (Left Side) */}
                        <div className="relative flex flex-col md:flex-row items-center">
                            <div className="w-full md:w-1/2 md:pr-12 md:text-right">
                                <div className="bg-gray-900/80 border border-cyan-500/30 rounded-xl p-6 md:p-8 hover:border-cyan-500/60 transition-all duration-300">
                                    <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">Secondary School Certificate (SSC)</h3>
                                    <div className="space-y-2 mb-4">
                                        <p className="text-white text-lg md:text-xl flex items-center justify-end gap-2">
                                            <span>Pioneer School of Science</span>
                                            <span className="text-cyan-400">🎓</span>
                                        </p>
                                        <p className="text-gray-400 text-base md:text-lg flex items-center justify-end gap-2">
                                            <span>Patan, Gujarat, India</span>
                                            <span className="text-cyan-400">📍</span>
                                        </p>
                                        <p className="text-gray-400 text-base md:text-lg flex items-center justify-end gap-2">
                                            <span>2022 - 2023</span>
                                            <span className="text-cyan-400">📅</span>
                                        </p>
                                    </div>
                                    <ul className="text-gray-300 text-base md:text-lg space-y-2 md:text-right">
                                        <li>• Completed 10th grade with distinction</li>
                                        <li>• Strong aptitude in Mathematics and Science</li>
                                        <li>• Developed early interest in computers and programming</li>
                                        <li>• Recognized for discipline and academic excellence</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Timeline Dot */}
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-gray-900 z-10"></div>
                            <div className="w-full md:w-1/2"></div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

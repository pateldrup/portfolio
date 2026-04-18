import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.4 });

        const sections = ["home", "about", "skills", "projects", "certificates", "contact"];
        sections.forEach((section) => {
            const el = document.getElementById(section);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="flex items-center">
                    {/* DP Logo with black background and green text */}
                    <div className="bg-black px-3 py-1.5 rounded-lg border border-white/10">
                        <span className="text-2xl font-bold italic text-emerald-500 tracking-tight" style={{ fontFamily: 'cursive' }}>DP</span>
                    </div>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#home" className={`text-lg transition-colors ${activeSection === 'home' ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'}`}>Home</a>
                    <a href="#about" className={`text-lg transition-colors ${activeSection === 'about' ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'}`}>About</a>
                    <a href="#skills" className={`text-lg transition-colors ${activeSection === 'skills' ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'}`}>Skills</a>
                    <a href="#projects" className={`text-lg transition-colors ${activeSection === 'projects' ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'}`}>Projects</a>
                    <a href="#certificates" className={`text-lg transition-colors ${activeSection === 'certificates' ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'}`}>Certificates</a>
                    <a href="#contact" className={`text-lg transition-colors ${activeSection === 'contact' ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'}`}>Contact</a>
                </div>

                <div className="md:hidden z-50 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
                    <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`}></div>
                    <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
                </div>
            </div>
        </nav>
    );
};

import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 left-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold font-mono text-white tracking-tighter">
                    {"<Drup />"}
                </a>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                    <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                    <a href="#certificates" className="text-gray-300 hover:text-white transition-colors">Certificates</a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                </div>

                <div className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
                    <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`}></div>
                    <div className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
                </div>
            </div>
        </nav>
    );
};

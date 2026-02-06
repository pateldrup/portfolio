export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div
            className={`fixed top-0 left-0 w-full h-full bg-[rgba(10,10,10,0.95)] backdrop-blur-xl z-40 transform transition-transform duration-300 flex items-center justify-center ${menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <div className="flex flex-col items-center gap-8 text-2xl font-semibold text-white">
                <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition-colors">Home</a>
                <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition-colors">About</a>
                <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition-colors">Skills</a>
                <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition-colors">Projects</a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition-colors">Contact</a>
            </div>
        </div>
    );
};

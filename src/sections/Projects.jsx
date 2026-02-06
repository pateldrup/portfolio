import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
    {
        id: 1,
        title: "CNBC clone",
        category: "Full Stack",
        image: "/project-ecommerce.png",
        description: "CNBC Website clone with modern responsive UI. Built homepage with breaking news sections, market updates, category navigation, trending news, and clean layout.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
        github: "https://github.com/pateldrup/WebSite_1.git",
        live: "https://graceful-brigadeiros-6228a8.netlify.app/"
    },
    // {
    //     id: 2,
    //     title: "Task Management App",
    //     category: "Full Stack",
    //     image: "https://placehold.co/800x600/101010/2563eb?text=Task+App",
    //     description: "A Trello-style task management application. Users can create boards, lists, and cards with drag-and-drop functionality using React Beautiful DnD.",
    //     tech: ["React", "Firebase", "Tailwind CSS", "DnD"],
    //     github: "#",
    //     live: "#"
    // },
    // {
    //     id: 3,
    //     title: "3D Portfolio Website",
    //     category: "Frontend",
    //     image: "https://placehold.co/800x600/101010/2563eb?text=Portfolio",
    //     description: "Interactive personal portfolio featuring 3D elements with Three.js, smooth animations with GSAP, and a fully responsive design.",
    //     tech: ["React", "Three.js", "GSAP", "Framer Motion"],
    //     github: "#",
    //     live: "#"
    // },
    // {
    //     id: 4,
    //     title: "Weather Dashboard",
    //     category: "Frontend",
    //     image: "https://placehold.co/800x600/101010/2563eb?text=Weather",
    //     description: "Real-time weather application using OpenWeatherMap API. Features location search, 5-day forecast, and dynamic backgrounds.",
    //     tech: ["React", "API", "Chart.js"],
    //     github: "#",
    //     live: "#"
    // },
    {
        id: 5,
        title: "Havells Clone",
        category: "Frontend",
        image: "/project-havells.png",
        description: "A responsive e-commerce website clone of Havells India - featuring product catalog, category filters, search functionality, and modern UI design for electronics shopping.",
        tech: ["React", "CSS", "JavaScript", "Responsive Design"],
        github: "https://github.com/pateldrup/WebSite_2.git",
        live: "https://harmonious-tarsier-59ea5d.netlify.app/"
    },
    {
        id: 6,
        title: "APEUni Clone",
        category: "Frontend",
        image: "/project-apeuni.png",
        description: "A PTE Academic & PTE Core practice platform clone with AI-powered scoring features. Modern landing page with course navigation, practice modules, and user authentication.",
        tech: ["React", "CSS", "JavaScript", "Responsive Design"],
        github: "https://github.com/pateldrup/WebSite_3.git",
        live: "https://steady-medovik-9e9c73.netlify.app/"
    },
    {
        id: 7,
        title: "Tata Motors Clone",
        category: "Frontend",
        image: "/project-tata.png",
        description: "A stunning automotive website clone of Tata Motors featuring car showcases, dealer locator, festive offers, and responsive design with modern animations.",
        tech: ["React", "CSS", "JavaScript", "Responsive Design"],
        github: "https://github.com/pateldrup/WebSite_4",
        live: "https://tata-motors-cobbler-afad84.netlify.app/"
    },
    {
        id: 8,
        title: "Jio Clone",
        category: "Frontend",
        image: "/project-jio.png",
        description: "A telecom website clone of Jio featuring mobile recharge plans, bill payments, 5G offers, and a modern festive-themed landing page with smooth animations.",
        tech: ["React", "CSS", "JavaScript", "Responsive Design"],
        github: "https://github.com/pateldrup/WebSite_5.git",
        live: " https://jio-rabanadas-b37c64.netlify.app/"
    },
    {
        id: 9,
        title: "Alani Nutrition Clone",
        category: "Frontend",
        image: "/project-alani.png",
        description: "A nutrition and recipes website clone featuring recipe categories, product showcases, rewards system, and a beautiful pastel-themed responsive design.",
        tech: ["React", "CSS", "JavaScript", "Responsive Design"],
        github: "https://github.com/pateldrup/WebSite_6.git",
        live: "https://stupendous-cat-afe0fe.netlify.app/"
    },
    {
        id: 10,
        title: "Click Counter Game",
        category: "Frontend",
        image: "/project-clickgame.png",
        description: "An interactive click counter game with timer, high score tracking, clicks per second stats, pause/resume functionality, and a sleek neon-themed UI design.",
        tech: ["JavaScript", "CSS", "HTML", "Game Logic"],
        github: "https://github.com/pateldrup/Click_counter_Game.git",
        live: "https://click-count-game.netlify.app/"
    },
    {
        id: 11,
        title: "Typing Speed Test",
        category: "Frontend",
        image: "/project-typing.png",
        description: "A typing speed test application with WPM calculation, accuracy tracking, multiple time modes (15/30/60 sec), best WPM records, and a beautiful purple gradient UI.",
        tech: ["JavaScript", "CSS", "HTML", "Game Logic"],
        github: "https://github.com/pateldrup/Typing_Speed_Test.git",
        live: "https://typing-speeds-game.netlify.app/"
    }
];

// Project Card Component matching the reference design
const ProjectCard = ({ project }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
            className="group bg-gradient-to-b from-[#0d1117] to-[#161b22] rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
        >
            {/* Image Section */}
            <div className="relative overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-60" />
            </div>

            {/* Content Section */}
            <div className="p-6 pt-4">
                {/* Title */}
                <h3 className="text-2xl font-bold text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.slice(0, 4).map((tech, i) => (
                        <span
                            key={i}
                            className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.tech.length > 4 && (
                        <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                            +{project.tech.length - 4}
                        </span>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-2 border-t border-white/5">
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors group/link"
                    >
                        <FaExternalLinkAlt className="text-base" />
                        <span className="font-medium">Live Demo</span>
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors group/link"
                    >
                        <FaGithub className="text-lg" />
                        <span className="font-medium">Code</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export const Projects = () => {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? projectsData
        : projectsData.filter(project => project.category.includes(filter) || project.category === filter);

    return (
        <section id="projects" className="min-h-screen bg-[#0a0a0a] py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
                    Featured <span className="text-blue-500">Projects</span>
                </h2>

                {/* Filters */}
                <div className="flex justify-center gap-4 mb-12">
                    {["All", "Full Stack", "Frontend"].map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === category
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                                : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

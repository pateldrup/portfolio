import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

export const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 50 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[#111] border border-white/10 rounded-2xl w-full max-w-3xl overflow-hidden relative shadow-2xl"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 bg-black/50 p-2 rounded-full"
                    >
                        <FaTimes size={20} />
                    </button>

                    {/* Image */}
                    <div className="h-64 md:h-80 bg-gray-800 relative">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-blue-400 font-medium">{project.category}</p>
                            </div>
                            <div className="flex gap-4">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaGithub size={24} /></a>
                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaExternalLinkAlt size={22} /></a>
                            </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

                        <div className="mb-6">
                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

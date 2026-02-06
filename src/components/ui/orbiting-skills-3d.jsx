import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { PLANETS } from "../../lib/solar-system.config";

export default function OrbitingSkills3D() {
    const containerRef = useRef(null);
    const planetRefs = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            planetRefs.current.forEach((planet, i) => {
                const config = PLANETS[i];

                if (!planet) return;

                // ORBIT ROTATION
                gsap.to(planet, {
                    rotateZ: 360,
                    duration: config.orbitDuration,
                    repeat: -1,
                    ease: "none",
                    force3D: true,
                });

                // SELF ROTATION
                // Counter-rotate the inner element to keep text upright if desired, 
                // or just rotate for 3D effect. The config says "Self Rotation", usually means spinning on axis.
                if (planet.firstChild) {
                    gsap.to(planet.firstChild, {
                        rotateY: 360,
                        duration: config.selfRotation,
                        repeat: -1,
                        ease: "linear",
                        force3D: true,
                    });
                }
            });

            // MOUSE PARALLAX
            const handleMouseMove = (e) => {
                const { innerWidth, innerHeight } = window;
                const x = (e.clientX / innerWidth - 0.5) * 30;
                const y = (e.clientY / innerHeight - 0.5) * 30;

                gsap.to(containerRef.current, {
                    rotateY: x,
                    rotateX: -y,
                    duration: 0.6,
                    ease: "power2.out",
                });
            };

            window.addEventListener("mousemove", handleMouseMove);

            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
            };

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] flex items-center justify-center perspective-[1200px]"
        >
            {/* SUN */}
            <div className="absolute w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 shadow-[0_0_100px_rgba(255,165,0,0.6)] animate-pulse z-10 flex items-center justify-center">
                <span className="text-white font-bold tracking-widest text-xs md:text-base">SKILLS</span>
            </div>

            {PLANETS.map((planet, i) => (
                <div
                    key={planet.id}
                    ref={(el) => {
                        if (el) planetRefs.current[i] = el;
                    }}
                    className="absolute top-1/2 left-1/2"
                    style={{
                        transformStyle: "preserve-3d",
                        transform: `
              translate(-50%, -50%)
              rotateX(${planet.tiltX}deg)
              rotateY(${planet.tiltY}deg)
            `,
                    }}
                >
                    <div
                        className="rounded-full flex items-center justify-center shadow-xl border border-white/20 backdrop-blur-sm cursor-pointer hover:scale-110 transition-transform"
                        style={{
                            width: planet.size,
                            height: planet.size,
                            background: `linear-gradient(135deg, ${planet.color}dd, ${planet.color})`,
                            transform: `translateX(${planet.orbitRadius}px) translateZ(${planet.depth}px)`,
                            boxShadow: `0 0 20px ${planet.color}66`
                        }}
                    >
                        <span className="text-[10px] md:text-xs font-bold text-white drop-shadow-md">
                            {planet.label}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

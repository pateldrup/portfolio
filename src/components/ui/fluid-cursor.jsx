import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FluidCursor() {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        let posX = 0, posY = 0;
        let mouseX = 0, mouseY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Instant follow for small dot
            gsap.to(cursor, {
                x: mouseX,
                y: mouseY,
                duration: 0.1,
                ease: "power2.out"
            });
        };

        const loop = () => {
            posX += (mouseX - posX) * 0.1;
            posY += (mouseY - posY) * 0.1;

            // Fluid trailing effect for larger circle
            gsap.set(follower, {
                x: posX - 12, // Center offset (w-6 = 24px)
                y: posY - 12,
            });

            requestAnimationFrame(loop);
        };

        window.addEventListener("mousemove", onMouseMove);
        loop();

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full mix-blend-difference pointer-events-none z-[9999]"
                style={{ transform: "translate(-50%, -50%)" }}
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-blue-500/50 mix-blend-difference pointer-events-none z-[9998] transition-transform duration-75 ease-out"
            />
            {/* Fluid Trail (Visual Trick with multiple elements if needed, keeping simple for perf) */}
        </>
    );
}

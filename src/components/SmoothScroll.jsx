import { useEffect } from "react";
import Lenis from "lenis";

export const SmoothScroll = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.05, // 0.05 is the sweet spot for god-level buttery scrolling
            wheelMultiplier: 1.0,
            smoothWheel: true,
            smoothTouch: false, // Native touch is already hardware accelerated
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};

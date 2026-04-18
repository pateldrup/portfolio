import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Loading } from "./components/Loading";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import IsoLevelWarp from "./components/ui/isometric-wave-grid-background";
import FluidCursor from "./components/ui/fluid-cursor";
import { SmoothScroll } from "./components/SmoothScroll";
import { Interface } from "./components/Interface";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <FluidCursor />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <SmoothScroll>
          {/* Main 3D Canvas - Fixed in Background */}
          <div className="fixed inset-0 z-0 bg-[#050505] pointer-events-none">
            {/* Background Grid */}
            <IsoLevelWarp
              className="absolute inset-0 z-0"
              color="100, 50, 250"
              density={50}
              speed={1.5}
            />

            {/* 3D Canvas on top, transparent */}
            <div className="absolute inset-0 z-10">
              <Canvas
                shadows
                camera={{ position: [0, 0, 5], fov: 30 }}
                dpr={[1, 2]} /* Cap pixel ratio for performance */
                gl={{ antialias: false, powerPreference: "high-performance" }}
              >
                <Suspense fallback={null}>
                  <Experience />
                </Suspense>
              </Canvas>
            </div>
          </div>

          {/* HTML Overlay - Scrolls naturally with Lenis */}
          <div className="relative z-10 w-full">
            <Interface />
          </div>
      </SmoothScroll>

      {/* Overlay Loader - Fades out */}
      {!isLoaded && <Loading onComplete={() => setIsLoaded(true)} />}
    </>
  );
}

export default App;

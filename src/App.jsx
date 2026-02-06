import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Loading } from "./components/Loading";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import IsoLevelWarp from "./components/ui/isometric-wave-grid-background";
import FluidCursor from "./components/ui/fluid-cursor";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <FluidCursor />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* 
          Main 3D Canvas
          We remove the standard <main> and put everything inside the Canvas
          except the Navbar which stays fixed on top.
      */}
      <div className="relative w-full h-screen bg-[#050505] overflow-hidden">
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
          >
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </Canvas>
        </div>
      </div>

      {/* Overlay Loader - Fades out */}
      {!isLoaded && <Loading onComplete={() => setIsLoaded(true)} />}
    </>
  );
}

export default App;

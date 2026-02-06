import { ScrollControls, Scroll } from "@react-three/drei";
import { StarField } from "./StarField";
import { Interface } from "./Interface";
// import { HeroSection } from "./HeroSection"; // To be created

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <StarField />

            <ScrollControls pages={8} damping={0.5} >
                {/* 3D Content Layer */}
                {/* <HeroSection />  */}

                {/* HTML Overlays */}
                <Scroll html style={{ width: "100%" }}>
                    <Interface />
                </Scroll>
            </ScrollControls>
        </>
    );
};

import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Skills } from "../sections/Skills";
import { Projects } from "../sections/Projects";
import { Certificates } from "../sections/Certificates";
import { Contact } from "../sections/Contact";

// This component acts as the layout for the scrolling content
// We need to wrap sections to position them correctly in the scroll layout
export const Interface = () => {
    return (
        <div className="flex flex-col items-center w-full">
            {/* 
         Each section takes up roughly one visual "page" of height 
         (100vh) or more, synced with ScrollControls pages.
      */}
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certificates />
            <Contact />
        </div>
    );
};

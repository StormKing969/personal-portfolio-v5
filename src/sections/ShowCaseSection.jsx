import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/**
 * ShowCaseSection component that displays a showcase of projects with animations.
 * Includes three project cards that animate into view as the user scrolls.
 *
 * @returns {JSX.Element} The showcase section containing project details and animations.
 */
const ShowCaseSection = () => {
  // References to DOM elements for animations
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  /**
   * Initializes GSAP animations for the showcase section and project cards.
   * Animates the opacity of the section and the position/opacity of each project card.
   */
  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    // Animate each project card with a staggered effect
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50, // Initial vertical position
          opacity: 0, // Initial opacity
        },
        {
          y: 0, // Final vertical position
          opacity: 1, // Final opacity
          duration: 1, // Animation duration
          delay: 0.3 * (index + 1), // Staggered delay
          scrollTrigger: {
            trigger: card, // Element that triggers the animation
            start: "top bottom -= 100", // Start animation when the element is near the viewport
          },
        },
      );
    });

    // Animate the opacity of the entire section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 }, // Initial opacity
      { opacity: 1, duration: 1.5 }, // Final opacity and duration
    );
  }, []);

  return (
    <div id={"work"} ref={sectionRef} className={"app-showcase"}>
      <div className={"w-full"}>
        <div className={"show-case-layout"}>
          {/* LEFT SIDE: First project */}
          <div className={"first-project-wrapper"} ref={project1Ref}>
            <div className={"image-wrapper"}>
              <img
                src={"/images/projects/project1.png"} // Image source for the first project
                alt="The Personal Movie Review App" // Alt text for accessibility
              />
            </div>

            <div className={"text-content"}>
              <h2>
                The Personal Movie Review App is a sleek and responsive web
                platform that lets users search, rate, and review movies with
                ease.
              </h2>
              <p className={"text-white-50 md:text-xl"}>
                Built with React and Material UI, it offers a clean interface,
                real-time movie data, and personalized features like watchlist
                and favorites.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Additional projects */}
          <div className={"project-list-wrapper overflow-hidden"}>
            {/* Second project */}
            <div className={"project"} ref={project2Ref}>
              <div className={"image-wrapper bg-[#ffefdb]"}>
                <img
                  src={"/images/projects/project2.png"} // Image source for the second project
                  alt="3D Earth Plane" // Alt text for accessibility
                  className={"py-3"}
                />
              </div>
              <h2>
                3D Earth Plane is a visually immersive web experience that
                allows users to interact with a realistic, three-dimensional
                model of Earth—right from their browser.
              </h2>
            </div>

            {/* Third project */}
            <div className={"project"} ref={project3Ref}>
              <div className={"image-wrapper bg-[#ffe7eb]"}>
                <img
                  src={"/images/projects/project3.png"} // Image source for the third project
                  alt="Advice Generator" // Alt text for accessibility
                  className={"py-3"}
                />
              </div>
              <h2>
                Advice Generator is a fun and interactive web app that provides
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseSection;
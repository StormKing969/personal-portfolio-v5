import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom -= 100",
          },
        },
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );
  }, []);

  return (
    <div id={"work"} ref={sectionRef} className={"app-showcase"}>
      <div className={"w-full"}>
        <div className={"showcaselayout"}>
          {/* LEFT SIDE */}
          <div className={"first-project-wrapper"} ref={project1Ref}>
            <div className={"image-wrapper"}>
              <img
                src={"/images/project1.png"}
                alt="The Personal Movie Review App"
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

          {/* RIGHT SIDE */}
          <div className={"project-list-wrapper overflow-hidden"}>
            <div className={"project"} ref={project2Ref}>
              <div className={"image-wrapper bg-[#ffefdb]"}>
                <img
                  src={"/images/project2.png"}
                  alt="3D Earth Plane"
                  className={"py-3"}
                />
              </div>
              <h2>
                3D Earth Plane is a visually immersive web experience that
                allows users to interact with a realistic, three-dimensional
                model of Earth—right from their browser.
              </h2>
            </div>

            <div className={"project"} ref={project3Ref}>
              <div className={"image-wrapper bg-[#ffe7eb]"}>
                <img
                  src={"/images/project3.png"}
                  alt="Advice Generator"
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
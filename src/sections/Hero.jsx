import React from "react";
import { HeroText } from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import AnimatedCounter from "../components/AnimatedCounter.jsx";

/**
 * Hero section component that displays the main introductory content of the page.
 * Includes animated text, a call-to-action button, and a 3D model.
 *
 * @returns {JSX.Element} The Hero section containing text, a button, and a 3D model.
 */
const Hero = () => {
  /**
   * Initializes GSAP animations for the hero text.
   * Animates the text elements with a staggered effect.
   */
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50, // Initial vertical position
        opacity: 0, // Initial opacity
      },
      {
        y: 0, // Final vertical position
        opacity: 1, // Final opacity
        stagger: 0.5, // Delay between animations
        duration: 2, // Animation duration
        ease: "power2.inOut", // Easing function
      },
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background image */}
      <div className={"absolute top-0 left-0 z-10"}>
        <img src={"/images/bg.png"} alt={"background"} />
      </div>
      <div className={"hero-layout"}>
        {/* LEFT: HERO CONTENT */}
        <header
          className={
            "flex flex-col justify-center md:w-full w-screen md:px-20 px-5"
          }
        >
          <div className={"flex flex-col gap-7"}>
            <div className={"hero-text"}>
              <h1>
                Shaping{" "}
                <span className={"slide"}>
                  <span className={"wrapper"}>
                    {HeroText.map((item, index) => (
                      <span
                        key={index} // Unique key for each text item
                        className={"flex items-center md:gap-3 gap-1 pb-2"}
                      >
                        <img
                          src={item.imgPath} // Path to the associated image
                          alt={item.text} // Alt text for the image
                          className={
                            "xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                          }
                        />
                        {item.text} {/* Text content */}
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            {/* Introductory paragraph */}
            <p
              className={
                "text-white-50 md:text-xl relative z-10 pointer-events-none lg:w-1/2"
              }
            >
              "Hi, I'm Saj — a curious mind fueled by creativity, connection,
              and the joy of building meaningful things. Enchanté de faire votre
              connaissance!
            </p>

            {/* Call-to-action button */}
            <Button
              className={"md:w-80 md:h-16 w-60 h-12"} // Button dimensions
              id={"button"} // Button ID
              text={"See my Work"} // Button text
            />
          </div>
        </header>

        {/* RIGHT: 3D MODEL */}
        <figure>
          <div className={"hero-3d-layout"}>
            <HeroExperience /> {/* 3D model component */}
          </div>
        </figure>
      </div>
      <AnimatedCounter /> {/* Animated counter component */}
    </section>
  );
};

export default Hero;
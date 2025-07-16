import React from "react";
import { HeroText } from "../constants/index.js";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
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
                        key={index}
                        className={"flex items-center md:gap-3 gap-1 pb-2"}
                      >
                        <img
                          src={item.imgPath}
                          alt={item.text}
                          className={
                            "xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                          }
                        />
                        {item.text}
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p
              className={
                "text-white-50 md:text-xl relative z-10 pointer-events-none"
              }
            >
              "Hi, I'm Saj — a curious mind fueled by creativity, connection,
              and the joy of building meaningful things. Enchanté de faire votre
              connaissance!
            </p>

            <Button
              className={"md:w-80 md:h-16 w-60 h-12"}
              id={"button"}
              text={"See my Work"}
            />
          </div>
        </header>

        {/* RIGHT: 3D MODEL */}
      </div>
    </section>
  );
};
export default Hero;
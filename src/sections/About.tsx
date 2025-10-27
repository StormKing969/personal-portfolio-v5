import { Globe } from "../components/Globe.tsx";
import CopyEmailButton from "../components/CopyEmailButton.tsx";
import { Frameworks } from "../components/Frameworks.tsx";
import {
  BehavioralQualities,
  Card1Context,
  Card1Title,
  Card3Context,
  Card3Title,
  Card4Context,
  Card5Context,
  Card5Title,
} from "../../constants/about";
import { WordRotate } from "../components/WordRotate.tsx";
import { FlickeringGrid } from "../components/FlickeringGrid.tsx";

const About = () => {
  return (
    <section id={"about"} className={"c-space section-spacing"}>
      <h2 className={"text-heading"}>About Me</h2>
      <div
        className={
          "grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12"
        }
      >
        {/*  Grid 1  */}
        <div className={"flex items-end grid-default-color grid-1"}>
          <img
            src={"assets/coding-pov.png"}
            alt={"coding pov"}
            className={
              "absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            }
          />
          <div className={"z-10"}>
            <p className={"head-text"}>{Card1Title}</p>
            <p className={"subtext"}>{Card1Context}</p>
          </div>

          <div
            className={
              "absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"
            }
          />
        </div>

        {/*  Grid 2  */}
        <div className={"grid-default-color grid-2"}>
          <div
            className={
              "flex flex-col items-center justify-center gap-5 w-full h-full"
            }
          >
            <FlickeringGrid
              className="absolute inset-0 z-0 size-full"
              squareSize={4}
              gridGap={6}
              color="#6B7280"
              maxOpacity={0.5}
              flickerChance={0.1}
              height={800}
              width={800}
            />
            <WordRotate
              className="text-4xl text-center font-bold text-white"
              words={BehavioralQualities}
            />
          </div>
        </div>

        {/*  Grid 3  */}
        <div className={"grid-black-color grid-3"}>
          <div className={"z-10 w-[50%]"}>
            <p className={"head-text"}>{Card3Title}</p>
            <p className={"subtext"}>{Card3Context}</p>
          </div>
          <figure className={"absolute left-[30%] top-[10%]"}>
            <Globe />
          </figure>
        </div>

        {/*  Grid 4  */}
        <div className={"grid-special-color grid-4"}>
          <div
            className={
              "flex flex-col items-center justify-center gap-4 size-full"
            }
          >
            <p className={"text-center head-text"}>{Card4Context}</p>
            <CopyEmailButton />
          </div>
        </div>

        {/*  Grid 5  */}
        <div className={"grid-default-color grid-5"}>
          <div className={"z-10 w-[50%]"}>
            <p className={"head-text"}>{Card5Title}</p>
            <p className={"subtext"}>{Card5Context}</p>
          </div>

          <div
            className={
              "absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125"
            }
          >
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
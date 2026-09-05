import { FlipWords } from "./FlipWords.tsx";
import { FlipHeroTextWords } from "../../constants";
import { motion } from "motion/react";
import { heroEntrance } from "../utils/heroEntrance.ts";

const HeroText = () => {
  return (
    <div
      className={
        "z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text"
      }
    >
      <div className={"flex flex-col c-space"}>
        <motion.h1 className={"text-4xl font-medium"} {...heroEntrance(1)}>
          Hi, I'm Sajana!
        </motion.h1>
        <div className={"flex flex-col items-center md:items-start"}>
          <motion.p
            className={"text-4xl md:text-5xl font-medium text-neutral-300"}
            {...heroEntrance(1.2)}
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div {...heroEntrance(1.5)}>
            <FlipWords
              words={FlipHeroTextWords}
              className={"font-black text-white text-5xl md:text-8xl"}
            />
          </motion.div>

          <motion.p
            className={"text-3xl md:text-4xl font-medium text-neutral-300"}
            {...heroEntrance(1.8)}
          >
            AI Enabled Web Solutions
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;

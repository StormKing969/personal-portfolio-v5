import { motion } from "framer-motion";
import type { ApproachType } from "../../types";
import { useState } from "react";

const HiddenCard = ({ phase, title, content }: ApproachType) => {
  const [displayText, setDisplayText] = useState(false);

  return (
    <div
      className="relative my-6 mx-3 w-full h-full cursor-pointer overflow-hidden flex items-center justify-center"
      onMouseEnter={() => setDisplayText(true)}
      onMouseLeave={() => setDisplayText(false)}
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: displayText ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-10"
      >
        <div className="relative flex items-center justify-center text-center w-[350px] h-[400px] rounded-lg border-[2px] border-gray-400">
          <div className={"p-[2px] relative overflow-hidden rounded-lg"}>
            <div
              className="absolute top-1/2 left-1/2 w-[350px] h-[400px] animate-spin-slow"
              style={{
                background:
                  "conic-gradient( rgba(168, 85, 247, 1) 60deg, rgba(230, 230, 250, 1) 90deg, transparent 0deg)",
              }}
            />

            <div
              className={
                "relative flex items-center justify-center bg-[#030412] px-6 py-2 rounded-lg"
              }
            >
              <h2 className={"text-heading"}>Phase {phase}</h2>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hidden text reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: displayText ? 1 : 0,
          y: displayText ? 0 : 20,
        }}
        transition={{ duration: 0.5 }}
        className="absolute z-0 text-center"
      >
        <div
          className={"flex flex-col items-center gap-4 px-4 py-6 rounded-lg transition-colors duration-500 max-w-xl"}
        >
          <h2 className="text-heading">{title}</h2>
          <p className="subtext">{content}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default HiddenCard;
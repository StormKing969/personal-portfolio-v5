import { motion } from "motion/react";
import type { CSSProperties, RefObject } from "react";

const Card = ({
  text,
  style,
  image,
  containerRef,
}: {
  text: string | null;
  style?: CSSProperties;
  image: string | null;
  containerRef?: RefObject<HTMLDivElement | null>;
}) => {
  return image && !text ? (
    <motion.img
      className={"absolute w-15 cursor-grab"}
      src={image}
      alt="Card Image"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag={true}
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      className={
        "absolute px-1 py-4 text-lg text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
      }
      style={style}
      whileHover={{ scale: 1.05 }}
      drag={true}
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;
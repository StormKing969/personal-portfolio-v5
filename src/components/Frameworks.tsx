import { OrbitingCircles } from "./OrbitingCircles.tsx";
import { Card5Skills } from "../../constants/about";
import { assetUrl } from "../utils/asset.ts";

export const Frameworks = () => {
  return (
    <div className="relative flex h-60 w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {Card5Skills.map((skill, i) => (
          <Icons
            key={i}
            src={assetUrl(`logos/${skill.file}`)}
            alt={skill.label}
          />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...Card5Skills].reverse().map((skill, i) => (
          <Icons
            key={i}
            src={assetUrl(`logos/${skill.file}`)}
            alt={skill.label}
          />
        ))}
      </OrbitingCircles>
    </div>
  );
};

const Icons = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    className={"rounded-sm hover:scale-110 duration-200"}
  />
);

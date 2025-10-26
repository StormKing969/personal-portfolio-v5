import { OrbitingCircles } from "./OrbitingCircles.tsx";
import { Card5Skills } from "../../constants/about";

export const Frameworks = () => {
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {Card5Skills.map((skill, i) => (
          <Icons key={i} src={`assets/logos/${skill}`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {Card5Skills.reverse().map((skill, i) => (
          <Icons key={i} src={`assets/logos/${skill}`} />
        ))}
      </OrbitingCircles>
    </div>
  );
};

const Icons = ({ src }: { src: string }) => (
  <img
    src={src}
    alt="icon img"
    className={"rounded-sm hover:scale-110 duration-200"}
  />
);
import HeroText from "../components/HeroText.tsx";
import ParallaxBackground from "../components/ParallaxBackground.tsx";
import { Canvas } from "@react-three/fiber";
import { Astronaut } from "../components/Astronaut.tsx";
import { useMediaQuery } from "react-responsive";
import { Rig } from "../utils/Rig.ts";
import { Float } from "@react-three/drei";
import { Suspense } from "react";
import Loader from "../components/Loader.tsx";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section
      id={"home"}
      className={
        "flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space"
      }
    >
      <HeroText />
      <ParallaxBackground />
      <figure
        className={"absolute inset-0"}
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile ? 0.23 : 0.3}
                position={isMobile ? [0, -1.5, 0] : [1.3, -1, 0]}
              />
            </Float>
          </Suspense>
          <Rig />
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
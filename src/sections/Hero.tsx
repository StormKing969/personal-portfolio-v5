import HeroText from "../components/HeroText.tsx";
import ParallaxBackground from "../components/ParallaxBackground.tsx";
import { Canvas } from "@react-three/fiber";
import { Astronaut } from "../components/Astronaut.tsx";
import { useMediaQuery } from "react-responsive";
import { Rig } from "../utils/Rig.ts";
import { Float } from "@react-three/drei";
import { Suspense } from "react";
import Loader from "../components/Loader.tsx";
import WebGLErrorBoundary from "../components/WebGLErrorBoundary.tsx";
import { assetUrl } from "../utils/asset.ts";

// Static render of the 3D astronaut, shown when WebGL is unavailable so the
// hero still looks intentional instead of empty. The parallax space scene
// behind it is plain CSS, so it renders regardless.
const astronautPoster = (
  <img
    src={assetUrl("hero-astronaut.png")}
    alt="Illustrated astronaut floating in space"
    className={
      "pointer-events-none absolute bottom-0 left-1/2 h-[45%] w-auto -translate-x-1/2 object-contain select-none md:left-auto md:right-[6%] md:h-[85%] md:translate-x-0"
    }
  />
);

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
        <WebGLErrorBoundary fallback={astronautPoster}>
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
        </WebGLErrorBoundary>
      </figure>
    </section>
  );
};

export default Hero;

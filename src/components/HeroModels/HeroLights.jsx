import React from "react";
import { RectAreaLight } from "three";

/**
 * HeroLights component that defines various light sources for the hero section.
 * Utilizes Three.js lighting elements to create a visually appealing 3D scene.
 *
 * @returns {JSX.Element} A collection of light components for the 3D hero section.
 */
const HeroLights = () => {
  return (
    <>
      {/* White spotlight positioned above and slightly forward */}
      <spotLight
        position={[1, 5.5, 4]}
        angle={0.13}
        intensity={100}
        penumbra={0.2}
        color={"#ffffff"}
      />

      {/* Blue spotlight positioned to the right */}
      <spotLight
        position={[4, 5, 4]}
        angle={0.3}
        intensity={40}
        penumbra={0.5}
        color={"#4cc9f0"}
      />

      {/* Purple spotlight positioned to the left */}
      <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        intensity={60}
        penumbra={1}
        color={"#9d4edd"}
      />

      {/* Rectangular area light with a purple hue */}
      <primitive
        object={new RectAreaLight("#A259FF", 8, 3, 2)}
        position={[1, 3, 4]}
        intensity={15}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />

      {/* Purple point light positioned near the center */}
      <pointLight position={[0, 1, 0]} intensity={10} color={"#7209b7"} />

      {/* Blue point light positioned slightly behind */}
      <pointLight position={[1, 2, -2]} intensity={10} color={"#0d00a4"} />
    </>
  );
};

export default HeroLights;
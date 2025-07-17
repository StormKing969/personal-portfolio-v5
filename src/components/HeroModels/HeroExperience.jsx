import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { ComputerRoom } from "./ComputerRoom.jsx";
import HeroLights from "./HeroLights.jsx";
import Particles from "./Particles.jsx";

/**
 * HeroExperience component that renders a 3D scene for the hero section.
 * Utilizes React Three Fiber for 3D rendering and includes interactive controls.
 *
 * @returns {JSX.Element} A 3D canvas containing lights, particles, and a computer room model.
 */
const HeroExperience = () => {
  // Media query to check if the screen width is less than or equal to 1024px (tablet view).
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  // Media query to check if the screen width is greater than or equal to 768px (mobile view).
  const isMobile = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* OrbitControls for camera interaction */}
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Lighting setup for the 3D scene */}
      <HeroLights />

      {/* Particle effects */}
      <Particles count={100} />

      {/* Group containing the computer room model, scaled and positioned based on screen size */}
      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <ComputerRoom />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
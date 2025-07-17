import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

/**
 * Particles component that renders a collection of animated particles in a 3D scene.
 * The particles move vertically and reset their position when they go out of bounds.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {number} [props.count=200] - The number of particles to render.
 * @returns {JSX.Element} A points object containing the animated particles.
 */
const Particles = ({ count = 200 }) => {
  // Reference to the mesh object for direct manipulation
  const mesh = useRef();

  /**
   * Memoized array of particle data, including initial positions and speeds.
   * Ensures the particle data is only recalculated when the count changes.
   */
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10, // Random x position
          Math.random() * 10 + 5, // Random y position (higher starting point)
          (Math.random() - 0.5) * 10, // Random z position
        ],
        speed: 0.005 + Math.random() * 0.001, // Random speed for vertical movement
      });
    }
    return temp;
  }, [count]);

  /**
   * Updates the position of each particle on every frame.
   * Particles move downward and reset their position when they go out of bounds.
   */
  useFrame(() => {
    const positions = mesh.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      let y = positions[i * 3 + 1]; // Access the y-coordinate
      y -= particles[i].speed; // Move particle downward
      if (y < -2) y = Math.random() * 10 + 5; // Reset position if out of bounds
      positions[i * 3 + 1] = y; // Update y-coordinate
    }
    mesh.current.geometry.attributes.position.needsUpdate = true; // Mark geometry for update
  });

  // Initialize particle positions in a Float32Array
  const positions = new Float32Array(count * 3);
  particles.forEach((p, i) => {
    positions[i * 3] = p.position[0]; // x-coordinate
    positions[i * 3 + 1] = p.position[1]; // y-coordinate
    positions[i * 3 + 2] = p.position[2]; // z-coordinate
  });

  return (
    <points ref={mesh}>
      {/* Geometry defining the particle positions */}
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3} // Each particle has 3 coordinates (x, y, z)
        />
      </bufferGeometry>
      {/* Material defining the appearance of the particles */}
      <pointsMaterial
        color="#ffffff" // White color
        size={0.05} // Size of each particle
        transparent // Enable transparency
        opacity={0.9} // Set opacity
        depthWrite={false} // Disable depth writing for better blending
      />
    </points>
  );
};

export default Particles;
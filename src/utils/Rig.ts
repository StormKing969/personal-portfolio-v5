import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

export const Rig = () => {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta,
    );
  });
};
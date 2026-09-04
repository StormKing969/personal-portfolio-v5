import type { MotionProps } from "motion/react";

// Entrance animation for hero lines: slide in from the left and fade in.
//
// One source for what was a variants object duplicated across the desktop and
// mobile hero blocks. Object-form initial/animate matches the pattern FlipWords
// already uses in this file. The `animate` target is the resting state, so the
// copy ends fully visible — a future edit can't strand a hero line at opacity:0.
export const heroEntrance = (delay: number): MotionProps => ({
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { delay },
});

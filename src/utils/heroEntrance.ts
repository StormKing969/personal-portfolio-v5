import type { MotionProps } from "motion/react";

// Entrance animation for hero lines: a smooth rightward glide, transform-only.
//
// Opacity is deliberately untouched so the hero text paints immediately at
// t=0 — the staggered delays (up to 1.8s) used to gate visibility, leaving the
// hero blank for the first ~1s and hurting LCP/first impression. Now the delay
// only staggers the slide, and the copy is legible from the first frame.
//
// The transform defaults to a spring (snappy/subtle); we override it with a
// longer eased tween so the slide from the left reads as a deliberate, smooth
// glide to the right rather than a quick snap. easeOutExpo decelerates hard at
// the end, so each line settles into place softly.
//
// One source for what was a variants object duplicated across the desktop and
// mobile hero blocks. Object-form initial/animate matches the pattern FlipWords
// already uses in this file.
export const heroEntrance = (delay: number): MotionProps => ({
  initial: { x: -80 },
  animate: { x: 0 },
  transition: { delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
});

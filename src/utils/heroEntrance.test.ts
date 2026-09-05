import { describe, expect, it } from "vitest";
import { heroEntrance } from "./heroEntrance";

// Transform-only: opacity must never be touched, so the hero text paints at
// t=0 (LCP) and the delay only staggers the slide. Must stay object-form (the
// pattern motion animates from here) rather than reverting to variant-labels.
describe("heroEntrance", () => {
  it("never gates opacity — text is visible from the first frame", () => {
    const { initial, animate } = heroEntrance(1.2);
    expect(initial).not.toHaveProperty("opacity");
    expect(animate).not.toHaveProperty("opacity");
  });

  it("rests at the natural position: x 0", () => {
    expect(heroEntrance(1.2).animate).toEqual({ x: 0 });
  });

  it("uses object-form props, not variant-label strings", () => {
    const props = heroEntrance(1);
    expect(typeof props.initial).toBe("object");
    expect(typeof props.animate).toBe("object");
  });

  it("passes the delay through to the transition", () => {
    expect(heroEntrance(1.8).transition).toMatchObject({ delay: 1.8 });
  });
});

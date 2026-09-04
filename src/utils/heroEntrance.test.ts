import { describe, expect, it } from "vitest";
import { heroEntrance } from "./heroEntrance";

// The entrance must rest at a *visible* state so no hero line can be stranded
// at opacity:0, and must stay object-form (the pattern motion animates from
// here) rather than reverting to variant-label props.
describe("heroEntrance", () => {
  it("rests visible: opacity 1, no offset", () => {
    const { animate } = heroEntrance(1.2);
    expect(animate).toEqual({ opacity: 1, x: 0 });
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

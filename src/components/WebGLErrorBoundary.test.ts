import { describe, expect, it } from "vitest";
import WebGLErrorBoundary from "./WebGLErrorBoundary.tsx";

// Exercises the boundary's branching directly (no DOM renderer needed):
// on a caught error it must switch to the fallback, else pass children through.
describe("WebGLErrorBoundary", () => {
  it("flips to error state when a child throws", () => {
    expect(WebGLErrorBoundary.getDerivedStateFromError()).toEqual({
      hasError: true,
    });
  });

  it("renders the fallback (default: nothing) after an error", () => {
    const children = "canvas";
    const fallback = "static image";

    const withFallback = new WebGLErrorBoundary({ children, fallback });
    withFallback.state = { hasError: true };
    expect(withFallback.render()).toBe(fallback);

    const noFallback = new WebGLErrorBoundary({ children });
    noFallback.state = { hasError: true };
    expect(noFallback.render()).toBeNull();
  });

  it("renders children when there is no error", () => {
    const children = "canvas";
    const boundary = new WebGLErrorBoundary({ children });
    boundary.state = { hasError: false };
    expect(boundary.render()).toBe(children);
  });
});

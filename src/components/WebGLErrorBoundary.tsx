import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** Rendered instead of the children when WebGL/3D content throws. Defaults to nothing. */
  fallback?: ReactNode;
}

/**
 * Catches render/mount errors from WebGL surfaces (react-three-fiber Canvas,
 * cobe Globe) so a browser that can't create a WebGL context degrades to the
 * fallback instead of crashing the whole React tree to a blank page.
 */
class WebGLErrorBoundary extends Component<Props, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn("WebGL content failed to render, showing fallback.", error, info);
  }

  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}

export default WebGLErrorBoundary;

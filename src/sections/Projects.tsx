import { MyProjects } from "../../constants/projects";
import Project from "../components/Project.tsx";
import type { PreviewType, ProjectType } from "../../types";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useState } from "react";

const Projects = () => {
  const [preview, setPreview] = useState<PreviewType | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (event: { clientX: number; clientY: number }) => {
    x.set(event.clientX + 20);
    y.set(event.clientY + 20);
  };

  return (
    <section
      className={"relative c-space section-spacing"}
      onMouseMove={handleMouseMove}
    >
      <h2 className={"text-heading"}>My Projects</h2>
      <div
        className={
          "bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-px w-full"
        }
      />
      {MyProjects.map((project: ProjectType) => (
        <Project key={project.id} project={project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          className={
            "fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          }
          style={{ x: springX, y: springY }}
          src={`/assets/projects/project-${preview?.id}/${preview?.imageUrl}`}
        />
      )}
    </section>
  );
};

export default Projects;
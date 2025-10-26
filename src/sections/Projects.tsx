import { MyProjects } from "../../constants/projects";
import Project from "../components/Project.tsx";
import type { ProjectType } from "../../types";

const Projects = () => {
  return (
    <section className={"relative c-space section-spacing"}>
      <h2 className={"text-heading"}>My Projects</h2>
      <div
        className={
          "bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-px w-full"
        }
      />
      {MyProjects.map((project: ProjectType) => (
        <Project key={project.id} project={project} />
      ))}
    </section>
  );
};

export default Projects;
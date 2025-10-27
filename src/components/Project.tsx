import type { PreviewType, ProjectType } from "../../types";
import ProjectDetails from "./ProjectDetails";
import { type Dispatch, type SetStateAction, useState } from "react";

const Project = ({
  project: {
    id,
    title,
    description,
    subDescription,
    repoLink,
    liveLink,
    projectLogo,
    projectImage,
    tags,
  },
  setPreview,
}: {
  project: ProjectType;
  setPreview: Dispatch<SetStateAction<PreviewType | null>>;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={
        "flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
      }
      onMouseEnter={() => setPreview({ id: id, imageUrl: projectImage })}
      onMouseLeave={() => setPreview(null)}
    >
      <div>
        <div className={"inline-flex items-center gap-1"}>
          {projectLogo && (
            <span>
              <img
                src={`/assets/projects/project-${id}/${projectLogo}`}
                alt={title}
                className={"max-h-6"}
              />{" "}
            </span>
          )}{" "}
          <p className={"text-2xl"}>{title}</p>
        </div>

        <div className={"flex gap-5 mt-2 text-sand"}>
          {tags && tags.map((tag) => <span key={tag.id}>{tag.name}</span>)}
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={"flex items-center gap-1 cursor-pointer hover-animation"}
      >
        Read More
        <img
          src={"/assets/arrow-right.svg"}
          className={"w-5"}
          alt={"arrow-right"}
        />
      </button>

      <div
        className={
          "bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-px w-full"
        }
      />
      {isOpen && (
        <ProjectDetails
          id={id}
          title={title}
          description={description}
          subDescription={subDescription}
          repoLink={repoLink}
          liveLink={liveLink}
          projectLogo={projectLogo}
          projectImage={projectImage}
          tags={tags}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default Project;
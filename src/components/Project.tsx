import type { PreviewType, ProjectType } from "../../types";
import ProjectDetails from "./ProjectDetails";
import { assetUrl, projectAsset } from "../utils/asset.ts";
import { type Dispatch, type SetStateAction, useState } from "react";

const Project = ({
  project,
  setPreview,
}: {
  project: ProjectType;
  setPreview: Dispatch<SetStateAction<PreviewType | null>>;
}) => {
  const { id, title, projectLogo, projectImage, tags } = project;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={
          "flex-wrap items-center justify-between py-10 space-y-14 sm:flex md:space-y-0"
        }
        onMouseEnter={() => setPreview({ id: id, imageUrl: projectImage })}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <div className={"inline-flex items-center gap-1"}>
            {projectLogo && (
              <span>
                <img
                  src={projectAsset(id, projectLogo)}
                  alt={title}
                  className={"max-h-6"}
                />{" "}
              </span>
            )}{" "}
            <p className={"text-2xl"}>{title}</p>
          </div>

          <div
            className={"flex flex-wrap sm:max-w-[550px] gap-5 mt-2 text-sand"}
          >
            {tags && tags.map((tag) => <span key={tag.id}>{tag.name}</span>)}
          </div>
        </div>
        <button
          onClick={() => {
            setIsOpen(true);
            setPreview(null);
          }}
          className={"flex items-center gap-1 cursor-pointer hover-animation"}
        >
          Read More
          <img src={assetUrl("arrow-right.svg")} className={"w-5"} alt={""} />
        </button>

        {isOpen && (
          <ProjectDetails project={project} onClose={() => setIsOpen(false)} />
        )}
      </div>

      <div
        className={
          "bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full"
        }
      />
    </>
  );
};

export default Project;

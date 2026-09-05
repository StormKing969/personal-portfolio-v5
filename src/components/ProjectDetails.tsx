import { motion } from "motion/react";
import type { ProjectType } from "../../types";
import { assetUrl, projectAsset } from "../utils/asset.ts";

const ProjectDetails = ({
  project,
  onClose,
}: {
  project: ProjectType;
  onClose: () => void;
}) => {
  const {
    id,
    title,
    description,
    subDescription,
    repoLink,
    liveLink,
    projectImage,
    tags,
  } = project;

  return (
    <div
      className={
        "fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm"
      }
    >
      <motion.div
        className={
          "relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        }
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={onClose}
          aria-label="Close project details"
          className={
            "absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
          }
        >
          <img src={assetUrl("close.svg")} alt="" className={"w-6 h-6"} />
        </button>
        <img
          src={projectAsset(id, projectImage)}
          alt={title}
          className={
            "w-full h-full max-w-[1920px] max-h-[1080px] object-cover rounded-t-2xl"
          }
        />
        <div className={"p-5"}>
          <h5 className={"mb-2 text-2xl font-bold text-white"}>{title}</h5>
          <p className={"mb-3 font-normal text-neutral-400"}>{description}</p>
          <ul className={"max-h-[200px] overflow-y-auto pr-[2px]"}>
            {subDescription &&
              subDescription.map((desc: string, index: number) => (
                <li
                  key={index}
                  className={"mb-3 ml-6 font-normal text-neutral-400 list-disc"}
                >
                  {desc}
                </li>
              ))}
          </ul>
          <div className={"flex items-center justify-between mt-4"}>
            <div className={"flex flex-wrap gap-3"}>
              {tags &&
                tags.map((tag) => (
                  <img
                    key={tag.id}
                    src={assetUrl(`projects/logos/${tag.imageUrl}`)}
                    alt={tag.name}
                    className={"rounded-lg size-10 hover-animation"}
                  />
                ))}
            </div>

            <div className={"flex flex-col gap-1"}>
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    "inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                  }
                >
                  Live Site{" "}
                  <img
                    src={assetUrl("arrow-up.svg")}
                    alt=""
                    className={"size-4"}
                  />
                </a>
              )}
              {repoLink && (
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    "inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                  }
                >
                  GitHub Repo{" "}
                  <img
                    src={assetUrl("arrow-up.svg")}
                    alt=""
                    className={"size-4"}
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
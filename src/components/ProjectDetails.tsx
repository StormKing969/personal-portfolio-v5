import { motion } from "motion/react";
import type { PreviewType, ProjectType } from "../../types";
import type { Dispatch, SetStateAction } from "react";

type ProjectDetailsProps = ProjectType & {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setPreview: Dispatch<SetStateAction<PreviewType | null>>;
};

const ProjectDetails = ({
  id,
  title,
  description,
  subDescription,
  repoLink,
  liveLink,
  projectImage,
  tags,
  isOpen,
  setIsOpen,
  setPreview,
}: ProjectDetailsProps) => {
  setPreview(null);

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
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={
            "absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
          }
        >
          <img src={"assets/close.svg"} alt="close" className={"w-6 h-6"} />
        </button>
        <img
          src={`/assets/projects/project-${id}/${projectImage}`}
          alt={title}
          className={
            "w-full h-full max-w-[1920px] max-h-[1080px] object-cover rounded-t-2xl"
          }
        />
        <div className={"p-5"}>
          <h5 className={"mb-2 text-2xl font-bold text-white"}>{title}</h5>
          <p className={"mb-3 font-normal text-neutral-400"}>{description}</p>
          <ul>
            {subDescription &&
              subDescription.map((desc: string, index: number) => (
                <li key={index} className={"mb-3 ml-6 font-normal text-neutral-400 list-disc"}>
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
                    src={tag.url}
                    alt={tag.name}
                    className={"rounded-lg size-10 hover-animation"}
                  />
                ))}
            </div>

            <div className={"flex flex-col gap-1"}>
              <a
                href={repoLink}
                className={
                  "inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                }
              >
                View on GitHub{" "}
                <img
                  src={"assets/arrow-up.svg"}
                  alt={"arrow-up"}
                  className={"size-4"}
                />
              </a>
              {liveLink && (
                <a
                  href={liveLink}
                  className={
                    "inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                  }
                >
                  View Live Site{" "}
                  <img
                    src={"assets/arrow-up.svg"}
                    alt={"arrow-up"}
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
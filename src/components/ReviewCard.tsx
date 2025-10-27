import type { ReviewType } from "../../types";
import { twMerge } from "tailwind-merge";

const ReviewCard = ({
  name,
  username,
  userProfileLink,
  content,
  imgUrl,
}: ReviewType) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {imgUrl && (
          <img
            className="rounded-full bg-white/10 object-cover"
            width="32"
            height="32"
            alt={username}
            src={`${import.meta.env.BASE_URL}assets/reviews/${imgUrl}`}
          />
        )}
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <a
            href={userProfileLink}
            className="text-xs font-medium text-white/40 hover:scale-125 duration-200"
          >
            {username}
          </a>
        </div>
      </div>
      <blockquote className="mt-2 text-sm max-h-[95px] overflow-y-auto pr-[2px]">
        {content}
      </blockquote>
    </figure>
  );
};

export default ReviewCard;
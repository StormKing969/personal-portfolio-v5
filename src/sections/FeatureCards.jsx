import React from "react";
import { AbilitiesList } from "../constants/index.js";

/**
 * FeatureCards component that displays a grid of feature cards.
 * Each card represents an ability with an image, title, and description.
 *
 * @returns {JSX.Element} The rendered feature cards section.
 */
const FeatureCards = () => {
  return (
    <div className={"w-full padding-x-lg"}>
      <div className={"mx-auto grid-3-cols"}>
        {AbilitiesList.map(({ imgPath, title, description }, index) => (
          <div
            key={index}
            className={"card-border rounded-xl p-8 flex flex-col gap-4"}
          >
            {/* Icon container */}
            <div
              className={
                "size-14 flex items-center justify-center rounded-full"
              }
            >
              <img src={imgPath} alt={title} />
            </div>

            {/* Card title */}
            <h3 className={"text-white text-2xl font-semibold mt-2"}>
              {title}
            </h3>

            {/* Card description */}
            <p className={"text-white-50 text-lg"}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
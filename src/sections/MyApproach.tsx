import { MyApproachContent, MyApproachHeader } from "../../constants";
import HiddenCard from "../components/HiddenCard.tsx";
import type { ApproachType } from "../../types";

const MyApproach = () => {
  return (
    <section className={"c-space mt-25 md:mt-35"}>
      <h2 className={"text-heading"}>{MyApproachHeader}</h2>
      <div className={"flex flex-col lg:flex-row justify-center items-center mt-12 gap-5"}>
        {MyApproachContent.map((item: ApproachType, idx: number) => (
          <HiddenCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};

export default MyApproach;
import { Marquee } from "../components/Marquee.tsx";
import { Reviews, ReviewSectionHeader } from "../../constants";
import ReviewCard from "../components/ReviewCard.tsx";

const Testimonial = () => {
  const firstRow = Reviews.slice(0, Reviews.length / 2);
  const secondRow = Reviews.slice(Reviews.length / 2);

  return (
    <section className={"items-start mt-25 md:mt-35 c-space"}>
      <h2 className={"text-heading"}>{ReviewSectionHeader}</h2>
      <div className="relative flex w-full flex-col items-center justify-center mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="from-primary pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-primary pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </div>
    </section>
  );
};

export default Testimonial;
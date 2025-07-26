import React from "react";
import { CounterData } from "../constants/index.js";
import CountUp from "react-countup";

/**
 * AnimatedCounter component that displays a grid of counters with animated values.
 * Each counter animates its value using the CountUp library and includes a label.
 *
 * @returns {JSX.Element} A section containing animated counters with labels.
 */
const AnimatedCounter = () => {
  return (
    <div id={"counter"} className={"padding-x-lg xl:mt-0 mt-45"}>
      {/* Grid container for counters */}
      <div className={"mx-auto grid-4-cols"}>
        {CounterData.map((counter, index) => (
          <div
            key={index} // Unique key for each counter
            className={
              "bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
            }
          >
            {/* Animated counter value */}
            <div
              className={"counter-number text-white text-5xl font-bold mb-2"}
            >
              <CountUp end={counter.value} suffix={counter.suffix} />
            </div>

            {/* Counter label */}
            <div className={"text-white-50 text-lg"}>{counter.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
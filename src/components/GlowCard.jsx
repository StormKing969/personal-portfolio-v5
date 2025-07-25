import React, { useCallback, useRef } from "react";

const GlowCard = ({ data, children, index }) => {
  const cardRef = useRef([]);

  const setCardRef = useCallback(
    (ele) => {
      cardRef.current[index] = ele;
    },
    [index],
  );

  const handleMouseMove = (index) => (e) => {
    const card = cardRef.current[index];
    if (!card) {
      return;
    }

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={setCardRef}
      onMouseMove={handleMouseMove(index)}
      className={"card card-border rounded-xl p-10"}
    >
      <div className={"glow"} />

      <div className={"mb-5"}>
        <p className={"text-white-50 text-lg"}>{data.companyDescription}</p>
      </div>

      {children}
    </div>
  );
};
export default GlowCard;
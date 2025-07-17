import React from "react";

/**
 * Button component that renders a styled call-to-action (CTA) button.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.className] - Additional CSS classes to style the button.
 * @param {string} props.text - The text to display inside the button.
 * @param {string} [props.id] - An optional ID for the button element.
 * @returns {JSX.Element} A styled button component.
 */
const Button = ({ className, text, id }) => {
  return (
    <a className={`${className ?? ""} cta-wrapper`}>
      <div className={"cta-button group"}>
        <div className={"bg-circle"} />
        <p className={"text"}>{text}</p>
        <div className={"arrow-wrapper"}>
          <img src={"/images/arrow-down.svg"} alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
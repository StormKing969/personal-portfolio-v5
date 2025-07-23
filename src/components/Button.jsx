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
    <a
      onClick={(e) => {
        e.preventDefault(); // Prevent default anchor behavior
        if (id) {
          const element = document.getElementById("counter"); // Get the element with ID "counter"
          if (element) {
            const offset = window.innerHeight * 0.15; // Calculate offset based on viewport height
            const elementPosition =
              element.getBoundingClientRect().top + window.scrollY - offset; // Calculate the scroll position
            window.scrollTo({ top: elementPosition, behavior: "smooth" }); // Smoothly scroll to the calculated position
          }
        }
      }}
      className={`${className ?? ""} cta-wrapper`} // Apply additional CSS classes if provided
    >
      <div className={"cta-button group"}>
        <div className={"bg-circle"} /> {/* Background circle for styling */}
        <p className={"text"}>{text}</p> {/* Display the button text */}
        <div className={"arrow-wrapper"}>
          <img src={"/images/components/arrow-down.svg"} alt="arrow" /> {/* Arrow icon */}
        </div>
      </div>
    </a>
  );
};

export default Button;
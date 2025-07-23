import React from "react";
import { CompanyLogosList } from "../constants/index.js";
import Marquee from "react-fast-marquee";

/**
 * LogoIcon component that renders a single company logo.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.icon - The icon object containing the image path and company name.
 * @param {string} props.icon.imgPath - The file path to the company logo image.
 * @param {string} props.icon.name - The name of the company.
 * @returns {JSX.Element} The rendered logo icon.
 */
const LogoIcon = ({ icon: { imgPath, name } }) => {
  return (
    <div className="flex-none flex-center marquee-item md:mx-12 mx-5">
      <img src={imgPath} alt={name} />
    </div>
  );
};

/**
 * LogoSection component that displays a scrolling marquee of company logos.
 * The logos are displayed in a repeating pattern for a continuous scrolling effect.
 *
 * @returns {JSX.Element} The rendered logo section.
 */
const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      {/* Gradient edges for visual styling */}
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      {/* Marquee container for scrolling logos */}
      <div className="marquee h-52">
        <Marquee className="marquee-box" style={{ width: "100vw" }}>
          {/* Render the company logos multiple times for a seamless scrolling effect */}
          {CompanyLogosList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}

          {CompanyLogosList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}

          {CompanyLogosList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}

          {CompanyLogosList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LogoSection;
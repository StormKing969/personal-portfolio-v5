import React, { useEffect, useState } from "react";
import { NavigationLinks } from "../constants/index.js";

/**
 * NavBar component that renders a responsive navigation bar.
 * The navigation bar changes its style when the user scrolls down the page.
 *
 * @returns {JSX.Element} The navigation bar component.
 */
const NavBar = () => {
  // State to track whether the page has been scrolled
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    /**
     * Event handler to update the `scrolled` state based on the scroll position.
     */
    const handleScrolled = () => {
      const isScrolled = window.scrollY > 10; // Check if the user has scrolled more than 10px
      setScrolled(isScrolled);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScrolled);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScrolled);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className={"inner"}>
        {/* Logo linking to the hero section */}
        <a className={"logo"} href={"#hero"}>
          Sajana Wijesinghe
        </a>

        {/* Desktop navigation menu */}
        <nav className={"desktop"}>
          <ul>
            {NavigationLinks.map(({ link, name }) => (
              <li key={name} className={"group"}>
                <a href={link}>
                  <span>{name}</span>
                  <span className={"underline"} /> {/* Underline animation */}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact button linking to the contact section */}
        <a href={"#contact"} className={"contact-btn group"}>
          <div className={"inner"}>
            <span>Contact Me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
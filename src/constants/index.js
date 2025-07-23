/**
 * Array of objects representing the hero text content and associated images.
 * Each object contains a text string and the path to an image.
 *
 * @type {Array<{text: string, imgPath: string}>}
 * @property {string} text - The text to display in the hero section.
 * @property {string} imgPath - The file path to the associated image.
 */
export const HeroText = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

/**
 * Array of objects representing counter data for an animated counter component.
 * Each object contains a value, suffix, and label for the counter.
 *
 * @type {Array<{value: string, suffix: string, label: string}>}
 * @property {string} value - The numerical value to display in the counter.
 * @property {string} suffix - The suffix to append to the counter value (e.g., "+" or "%").
 * @property {string} label - The descriptive label for the counter.
 */
export const CounterData = [
  { value: "5", suffix: "+", label: "Years of Experience" },
  { value: "100", suffix: "+", label: "Completed Projects" },
  { value: "100", suffix: "+", label: "GitHub Commits" },
  { value: "3", suffix: "", label: "Mentorship Provided" },
];

/**
 * Array of objects representing navigation links for the website.
 * Each object contains a name and a link to a specific section of the page.
 *
 * @type {Array<{name: string, link: string}>}
 * @property {string} name - The name of the navigation link.
 * @property {string} link - The URL or anchor link for the navigation item.
 */
export const NavigationLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
];

/**
 * Array of objects representing company logos and their associated names.
 * Each object contains the file path to the logo image and the company name.
 *
 * @type {Array<{imgPath: string, name: string}>}
 * @property {string} imgPath - The file path to the company logo image.
 * @property {string} name - The name of the company.
 */
export const CompanyLogosList = [
  { imgPath: "/images/logos/company-logo-1.png", name: "General Motors Inc." },
  { imgPath: "/images/logos/company-logo-2.png", name: "CVS Health" },
  { imgPath: "/images/logos/company-logo-3.png", name: "Verbotics" },
];
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
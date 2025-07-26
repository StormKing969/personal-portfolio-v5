/**
 * Array of objects representing the hero text content and associated images.
 * Each object contains a text string and the path to an image.
 *
 * @type {Array<{text: string, imgPath: string}>}
 * @property {string} text - The text to display in the hero section.
 * @property {string} imgPath - The file path to the associated image.
 */
export const HeroText = [
  { text: "Ideas", imgPath: "/images/components/ideas.svg" },
  { text: "Concepts", imgPath: "/images/components/concepts.svg" },
  { text: "Designs", imgPath: "/images/components/designs.svg" },
  { text: "Code", imgPath: "/images/components/code.svg" },
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
  { value: "3", suffix: "+", label: "Years of Experience" },
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

export const AbilitiesList = [
  {
    imgPath: "/images/abilities/time.png",
    title: "Commitment to Timely Delivery",
    description:
      "I value timeliness as a key part of professionalism—delivering work on schedule without compromising quality. By managing priorities effectively and staying organized, I ensure that deadlines are met and expectations are exceeded.",
  },
  {
    imgPath: "/images/abilities/chat.png",
    title: "Reliable & Clear Communication",
    description:
      "I prioritize clear, consistent, and timely communication to ensure alignment across teams and stakeholders. Whether collaborating on code or coordinating project goals, I believe reliability in communication builds trust and drives successful outcomes.",
  },
  {
    imgPath: "/images/abilities/seo.png",
    title: "Commitment to Quality",
    description:
      "I’m committed to building software that is reliable, maintainable, and user-focused, with an emphasis on performance, accessibility, and clean architecture. Quality is at the core of everything I do—from thoughtful design to rigorous testing and continuous improvement.",
  },
];

export const WorkExperienceList = [
  {
    companyDescription:
      "General Motors Inc. (GM) is a global automotive company headquartered in Detroit, Michigan, known for designing, manufacturing, and selling vehicles under brands like Chevrolet, GMC, Cadillac, and Buick. With a growing focus on electric and autonomous vehicles, GM is leading innovation in sustainable transportation and mobility solutions worldwide.",
    companyImgPath: "/images/experience/exp1.png",
    logoPath: "/images/experience/logo1.png",
    companyName: "General Motors Inc.",
    companyLink: "https://www.gm.com",
    title: "Software Engineer",
    duration: "May 2022 - Present",
    responsibilities: [
      "Spearheaded UI modernization using React, TypeScript, and Bootstrap to enhance accessibility and maintainability.",
      "Strengthened enterprise security by optimizing access control and authentication APIs, mitigating risks, and improving protection against threats.",
      "Designed and implemented role-based access control (RBAC) for improved scalability and security compliance.",
      "Led Kafka messaging system development, optimizing event-driven architecture and improving message processing efficiency across distributed applications.",
      "Integrated GitHub Copilot and ChatGPT into development workflows to generate JavaDocs, unit tests, and technical documentation, enhancing development speed and quality.",
      "Conducted backward compatibility assessments, ensuring seamless integration of new features while preserving system stability.",
      "Led code reviews, architectural discussions, and approval processes, shaping technical direction and maintaining development standards.",
      "Authored detailed technical stories, defining structured development roadmaps for engineers to execute effectively.",
    ],
  },
  {
    companyDescription:
      "CVS Health is a leading American healthcare company that integrates pharmacy services, retail, and insurance through its brands like CVS Pharmacy, MinuteClinic, and Aetna. It focuses on improving health outcomes by providing accessible, affordable care across a wide range of services from prescriptions to primary care.",
    companyImgPath: "/images/experience/exp2.png",
    logoPath: "/images/experience/logo2.png",
    companyName: "CVS Health",
    companyLink: "https://www.cvshealth.com/",
    title: "Operations Supervisor",
    duration: "June 2020 - April 2022",
    responsibilities: [
      "Managed daily store operations, ensuring financial accuracy and adherence to regulatory compliance.",
      "Conducted proactive staffing and inventory assessments, optimizing workflows for efficiency and improved customer satisfaction.",
      "Resolved customer concerns through team-driven problem-solving, fostering a positive environment aligned with company objectives.",
    ],
  },
  {
    companyDescription:
      "Verbotics AI is a technology-driven company specializing in artificial intelligence solutions, with a focus on modernizing IT infrastructure and optimizing information access. It develops smart, scalable tools that enhance search functionality, automate processes, and support data-driven decision-making across various industries.",
    companyImgPath: "/images/experience/exp3.png",
    logoPath: "/images/experience/logo3.png",
    companyName: "Verbotics AI",
    companyLink: "https://verboticsai.com/",
    title: "Project Leader & Frontend Developer",
    duration: "January 2020 - May 2020",
    responsibilities: [
      "Led a modernization initiative for IT infrastructure, assessing medical usage metrics and defining access control improvements.",
      "Designed and implemented Al-powered search functionality, improving efficiency in information retrieval.",
      "Directed project execution through effective delegation, delivering a comprehensive proposal, prototype, and stakeholder presentation for approval and implementation.",
    ],
  },
];
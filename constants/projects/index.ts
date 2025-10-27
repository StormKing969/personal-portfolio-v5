import type { ProjectType } from "../../types";

export const MyProjects: ProjectType[] = [
  {
    id: 1,
    title: "Rock-Paper-Scissors with AI",
    description:
      "An interactive web-based Rock-Paper-Scissors game where users compete against an AI opponent that adapts and predicts moves, blending classic gameplay with modern web technologies.",
    subDescription: [
      "The app is built with React 19, Vite, TypeScript, and Tailwind CSS, ensuring a modern, performant, and maintainable frontend stack.",
      "It provides an intuitive user interface where players can select rock, paper, or scissors and instantly see results against an AI opponent.",
      "Routing and data flow are managed through React’s component-driven architecture, with state updates ensuring smooth gameplay and score tracking.",
      "Form-like interactions, such as move selection and game resets, are validated to prevent invalid states and ensure consistent user experience.",
      "Styling and theming are handled with Tailwind CSS, delivering a responsive, accessible, and visually appealing design across devices.",
      "Performance is optimized through Vite’s fast build pipeline, React’s efficient rendering, and lightweight assets for quick load times.",
      "Future improvements include expanding AI difficulty levels, adding multiplayer support, and enhancing analytics for player performance tracking.",
    ],
    repoLink: "https://github.com/StormKing969/rock-paper-scissors-game",
    liveLink: "https://rock-paper-scissors-with-ai-game.netlify.app/",
    projectLogo: "logo.svg",
    projectImage: "rock-paper-scissors.png",
    tags: [
      {
        id: 1,
        name: "React",
        imageUrl: "react.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        imageUrl: "typescript.svg",
      },
      {
        id: 3,
        name: "Vite",
        imageUrl: "vitejs.svg",
      },
      {
        id: 4,
        name: "Tailwind CSS",
        imageUrl: "tailwindcss.svg",
      },
    ],
  },
];
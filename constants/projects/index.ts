import type { ProjectType } from "../../types";

export const MyProjects: ProjectType[] = [
  {
    id: 1,
    title: "Rock Paper Scissors Lizard Spock",
    description:
      "A responsive React + Vite game implementing Rock, Paper, Scissors, Lizard, Spock where you play against an AI opponent.",
    subDescription: [
      "Built with React and Vite for fast dev feedback and production performance",
      "Styled with Tailwind CSS for a responsive, component-driven UI",
      "Session scorekeeping, clear win/lose/tie feedback, and accessible controls",
      "Deployed on Netlify for a fast, shareable demo",
    ],
    repoLink: "https://github.com/StormKing969/rock-paper-scissors-game",
    liveLink: "https://rock-paper-scissors-with-ai-game.netlify.app/",
    projectLogo: "logo.svg",
    projectImage: "rock-paper-scissors.png",
    tags: [
      {
        id: 1,
        name: "React",
        url: "https://react.dev/",
      },
      {
        id: 2,
        name: "Vite",
        url: "https://vitejs.dev/",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        url: "https://tailwindcss.com/",
      },
      {
        id: 4,
        name: "Netlify",
        url: "https://www.netlify.com/",
      },
    ],
  },
];
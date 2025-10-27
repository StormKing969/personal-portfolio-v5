import type { ProjectType } from "../../types";

export const MyProjects: ProjectType[] = [
  {
    id: 1,
    title: "Rock Paper Scissors Lizard Spock",
    description:
      "A responsive React + Vite game implementing Rock, Paper, Scissors, Lizard, Spock where you play against a custom AI opponent.",
    subDescription: [
      "Built with React and Vite for fast dev feedback and production performance",
      "Styled with Tailwind CSS for a responsive, component-driven UI",
      "Session scorekeeping, clear win/lose/tie feedback, and accessible controls",
      "Deployed on Netlify for a fast, shareable demo",
      "Custom AI using Hugging Face",
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
  {
    id: 2,
    title: "Personal Image Storage Webapp",
    description:
      "A type-safe, responsive image storage and management webapp built with React, Appwrite, Vite, and TypeScript.",
    subDescription: [
      "Client built with React and TypeScript for predictable, maintainable UI logic",
      "Backend and file storage powered by Appwrite for authentication, database, and object storage",
      "Styled with Tailwind CSS; responsive gallery, upload flow, and simple metadata management",
      "Deployed on Netlify for a fast, shareable demo",
    ],
    repoLink: "https://github.com/StormKing969/image-storage-webapp",
    liveLink: "https://personal-image-storage-webapp.netlify.app/",
    projectLogo: null,
    projectImage: null,
    tags: [
      { id: 1, name: "React", url: "https://react.dev/" },
      { id: 2, name: "TypeScript", url: "https://www.typescriptlang.org/" },
      { id: 3, name: "Appwrite", url: "https://appwrite.io/" },
      { id: 4, name: "Tailwind CSS", url: "https://tailwindcss.com/" },
      { id: 5, name: "Vite", url: "https://vitejs.dev/" },
      { id: 6, name: "Netlify", url: "https://www.netlify.com/" },
    ],
  },
];
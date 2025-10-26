import type { NavigationLinkType, ReviewType, SocialType } from "../types";

export const NavLinks: NavigationLinkType[] = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Work",
    link: "#work",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];

export const FlipHeroTextWords: string[] = [
  "Secure",
  "Contemporary",
  "Scalable",
];

export const SocialLinks: SocialType[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sajana-wijesinghe/",
    iconUrl: "assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/wijesinghesaj/",
    iconUrl: "assets/socials/instagram.svg",
  },
];

export const Reviews: ReviewType[] = [
  {
    name: "Daniel Kolov",
    username: "@daniel-kolov",
    jobTitle: "Software Engineer",
    userProfileLink: "linkedin.com/in/daniel-kolov-110599160",
    content:
      "Sajana has been essential part of VOM and a great teammate to have, always willing to land a helping hand. " +
      "Recently we got assigned Spring Boot/Java upgrade to work on together, and while there is still ways to go " +
      "before we call it done, a lot of the progress we've made is due to Sajana's 'Innovate Now' mindset and work etiquette.",
    imgUrl: null,
  },
  {
    name: "Pam Neill",
    username: "@pam-neill",
    jobTitle:
      "Leading Vehicle Order Management for Global Sales, Marketing and Customer Experience",
    userProfileLink: "linkedin.com/in/pam-neill-07b6a02",
    content:
      "Great job, Saj, integrating quickly into the VOM team and moving forward. Appreciate that you have made UI changes, " +
      "backend changes, batch changes, production support changes and helped with production support. Great job emerging as " +
      "a subject matter expert for the Kafka communication protocol showing 'Look Ahead', 'It's On Me' and 'One Team'. " +
      "Well Done!",
    imgUrl: null,
  },
  {
    name: "Sudhir Gupta",
    username: "@sudhir-gupta",
    jobTitle: "Principal Engineer",
    userProfileLink: "linkedin.com/in/sudhir-gupta-029190",
    content:
      "Thank you, Sajana, for demonstrating innovative behavior as you structured configuration in VOM2.0 codebase and made " +
      "it more relevant and simplified. As we continue to add more functionality, these elements are going to be crucial for " +
      "future maintainability and sustainability of 2.0 codebase. Thank you for your diligence and innovative thinking! Great job!",
    imgUrl: null,
  },
  {
    name: "Huan Wu",
    username: "@huan-wu",
    jobTitle: "Software Developer",
    userProfileLink: "linkedin.com/in/huanwu2020",
    content:
      "I just wanted to take a moment to thank you for your support in resolving the database connection and toke issues " +
      "when I started to work on VOM2.0. I really appreciate the time and effort you put into helping me get everything up " +
      "and running smoothly.",
    imgUrl: null,
  },
];
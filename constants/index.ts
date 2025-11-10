import type {
  ApproachType,
  NavigationLinkType,
  ReviewType,
  SocialType,
} from "../types";

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

export const FlipHeroTextWords: string[] = ["Secure", "Responsive", "Scalable"];

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
  {
    name: "GitHub",
    href: "https://github.com/StormKing969",
    iconUrl: "assets/socials/github.png",
  },
];

export const Reviews: ReviewType[] = [
  {
    name: "Daniel Kolov",
    username: "@daniel-kolov",
    userProfileLink: "linkedin.com/in/daniel-kolov-110599160",
    content:
      "Sajana has been essential part of VOM and a great teammate to have, always willing to land a helping hand. " +
      "Recently we got assigned Spring Boot/Java upgrade to work on together, and while there is still ways to go " +
      "before we call it done, a lot of the progress we've made is due to Sajana's 'Innovate Now' mindset and work etiquette.",
    imgUrl: "daniel-kolov.jpg",
  },
  {
    name: "Pam Neill",
    username: "@pam-neill",
    userProfileLink: "linkedin.com/in/pam-neill-07b6a02",
    content:
      "Great job, Saj, integrating quickly into the VOM team and moving forward. Appreciate that you have made UI changes, " +
      "backend changes, batch changes, production support changes and helped with production support. Great job emerging as " +
      "a subject matter expert for the Kafka communication protocol showing 'Look Ahead', 'It's On Me' and 'One Team'. " +
      "Well Done!",
    imgUrl: "pam-neill.jpg",
  },
  {
    name: "Sudhir Gupta",
    username: "@sudhir-gupta",
    userProfileLink: "linkedin.com/in/sudhir-gupta-029190",
    content:
      "Thank you, Sajana, for demonstrating innovative behavior as you structured configuration in VOM2.0 codebase and made " +
      "it more relevant and simplified. As we continue to add more functionality, these elements are going to be crucial for " +
      "future maintainability and sustainability of 2.0 codebase. Thank you for your diligence and innovative thinking! Great job!",
    imgUrl: "john.png",
  },
  {
    name: "Huan Wu",
    username: "@huan-wu",
    userProfileLink: "linkedin.com/in/huanwu2020",
    content:
      "I just wanted to take a moment to thank you for your support in resolving the database connection and toke issues " +
      "when I started to work on VOM2.0. I really appreciate the time and effort you put into helping me get everything up " +
      "and running smoothly.",
    imgUrl: "huan-wu.jpg",
  },
];

export const MyApproachHeader: string = "My Approach";

export const MyApproachContent: ApproachType[] = [
  {
    phase: "1",
    title: "Planning & Strategy",
    content:
      "We clarify goals, requirements, and success metrics. I deliver a scoped roadmap with milestones and a clear estimate.",
    bgColor: "bg-green-500",
  },
  {
    phase: "2",
    title: "Development & Progress Updates",
    content:
      "I build features in short iterations and run tests for quality. You receive concise progress summaries and review demos each sprint.",
    bgColor: "bg-red-500",
  },
  {
    phase: "3",
    title: "Deployment & Launch",
    content:
      "I perform final QA, deploy to production, and verify functionality. You get handover docs and a short support window after launch.",
    bgColor: "bg-blue-500",
  },
];

export const ReviewSectionHeader: string = "Here’s What People Are Saying";

export const ContactSectionHeader: string =
  "Feel free to reach out—I’d be glad to connect.";

export const ContactSectionContext: string =
  "From launching a brand-new website to enhancing your current platform or developing a one-of-a-kind project, I’m ready to support your vision.";
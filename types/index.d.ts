import type { CSSProperties } from "react";

export interface NavigationLinkType {
  title: string;
  link: string;
}

export interface BehavioralQualityType {
  title: string | null;
  cardStyle: CSSProperties;
  imageUrl: string | null;
}

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  subDescription: string[];
  repoLink: string;
  liveLink: string | null;
  projectLogo: string | null;
  projectImage: string | null;
  tags: ProjectTag[];
}

interface ProjectTag {
  id: number;
  name: string;
  url: string;
}

export interface SocialType {
  name: string;
  href: string;
  iconUrl: string;
}

export interface ExperienceType {
  title: string;
  company: string;
  description: string[];
  duration: string;
}

export interface ReviewType {
  name: string;
  username: string;
  jobTitle: string;
  userProfileLink: string;
  content: string;
  imgUrl: string | null;
}

export interface PreviewType {
  id: number;
  imageUrl: string | null;
}
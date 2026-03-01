export const ProjectCardType = {
  REPO: "repo",
  WEBSITE: "website",
  NONE: "none",
} as const;

export type ProjectCardType = (typeof ProjectCardType)[keyof typeof ProjectCardType];

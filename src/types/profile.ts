export type Skill = {
  id: string;
  name: string;
};

export type SocialLink = {
  id: string;
  platform: string;
  url: string;
};

export type Profile = {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatarUrl?: string;
  skills: Skill[];
  socialLinks: SocialLink[];
};


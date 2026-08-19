export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username?: string;
  isPlaceholder?: boolean;
}

export type SkillLevel = 'Beginner' | 'Learning' | 'Developing';

export interface SkillItem {
  name: string;
  level: SkillLevel;
  iconName?: string;
  category: 'Video Editing' | 'Graphic Design' | 'Digital Marketing';
  description?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'Video Editing' | 'Graphic Design' | 'Digital Marketing';
}

export interface LearningExperience {
  title: string;
  course: string;
  institute: string;
  location: string;
  status: string;
  description: string;
  learningAreas: string[];
}

export interface PersonalInfo {
  name: string;
  headline: string;
  location: string;
  country: string;
  status: string;
  course: string;
  institute: string;
  skillLevel: string;
  bioShort: string;
  bioFull: string[];
  avatarUrl: string;
  emailPlaceholder: string;
  socials: SocialLink[];
  infoCard: {
    name: string;
    location: string;
    currentRole: string;
    course: string;
    institute: string;
    experienceLevel: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string; // Spam protection
}

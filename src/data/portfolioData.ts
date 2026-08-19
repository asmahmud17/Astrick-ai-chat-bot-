import { PersonalInfo, SkillItem, ServiceItem, LearningExperience } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Anas Mahmud",
  headline: "Video Editing Learner, Graphic Design Learner & Digital Marketing Learner",
  location: "Dhaka, Bangladesh",
  country: "Bangladesh",
  status: "Student",
  course: "SBMC — Small Business Management Course",
  institute: "As-Sunnah Skill Development Institute",
  skillLevel: "Beginner",
  bioShort: "I am Anas Mahmud, an aspiring video editor and graphic designer from Dhaka, Bangladesh. Currently, I am learning video editing, graphic design, and digital marketing through the SBMC course at As-Sunnah Skill Development Institute.",
  bioFull: [
    "I am Anas Mahmud, an aspiring video editor and graphic designer from Dhaka, Bangladesh. I am currently studying the SBMC — Small Business Management Course at As-Sunnah Skill Development Institute, where I am developing my knowledge of video editing, graphic design, and digital marketing.",
    "I am passionate about creating visually engaging content and improving my creative and technical skills. As a beginner, I am continuously learning through practical assignments and creative exercises."
  ],
  avatarUrl: "https://i.postimg.cc/LXYH7KfT/self-photo.png",
  emailPlaceholder: "YOUR_EMAIL@example.com",
  infoCard: {
    name: "Anas Mahmud",
    location: "Dhaka, Bangladesh",
    currentRole: "Student and Creative Learner",
    course: "SBMC — Small Business Management Course",
    institute: "As-Sunnah Skill Development Institute",
    experienceLevel: "Beginner"
  },
  socials: [
    {
      platform: "Facebook",
      url: "#",
      icon: "Facebook",
      username: "@anasmahmud.bd",
      isPlaceholder: true
    },
    {
      platform: "Instagram",
      url: "#",
      icon: "Instagram",
      username: "@anasmahmud.creatives",
      isPlaceholder: true
    },
    {
      platform: "YouTube",
      url: "#",
      icon: "Youtube",
      username: "@AnasMahmudLearns",
      isPlaceholder: true
    },
    {
      platform: "LinkedIn",
      url: "#",
      icon: "Linkedin",
      username: "anas-mahmud",
      isPlaceholder: true
    },
    {
      platform: "Twitter",
      url: "#",
      icon: "Twitter",
      username: "@anasmahmud",
      isPlaceholder: true
    }
  ]
};

export const skillsData: SkillItem[] = [
  {
    name: "Adobe Premiere Pro",
    level: "Beginner",
    category: "Video Editing",
    description: "Timeline editing, cutting clips, basic transition effects, and audio alignment.",
    iconName: "Video"
  },
  {
    name: "Adobe Photoshop",
    level: "Beginner",
    category: "Graphic Design",
    description: "Basic photo editing, graphic composition, banner layouts, and image cutouts.",
    iconName: "Image"
  },
  {
    name: "Adobe Illustrator",
    level: "Learning",
    category: "Graphic Design",
    description: "Vector graphics basics, typography creation, and simple logo designs.",
    iconName: "Palette"
  },
  {
    name: "Adobe After Effects",
    level: "Learning",
    category: "Video Editing",
    description: "Basic motion keyframing, animated titles, and simple visual overlays.",
    iconName: "Sparkles"
  },
  {
    name: "Video Editing",
    level: "Developing",
    category: "Video Editing",
    description: "Pacing narrative sequences, cutting B-roll, and adding title animations.",
    iconName: "Film"
  },
  {
    name: "Graphic Design",
    level: "Developing",
    category: "Graphic Design",
    description: "Visual hierarchy, color combination principles, and clean alignment.",
    iconName: "LayoutGrid"
  },
  {
    name: "Motion Graphics",
    level: "Learning",
    category: "Video Editing",
    description: "Intro animations, text motion effects, and lower-third graphics.",
    iconName: "Zap"
  },
  {
    name: "Social Media Content Design",
    level: "Developing",
    category: "Graphic Design",
    description: "Designing engaging posts, story graphics, and promotional banners.",
    iconName: "Share2"
  },
  {
    name: "Basic Digital Marketing",
    level: "Learning",
    category: "Digital Marketing",
    description: "Understanding online audience engagement and content publishing strategies.",
    iconName: "TrendingUp"
  },
  {
    name: "Basic Meta Marketing",
    level: "Learning",
    category: "Digital Marketing",
    description: "Facebook and Instagram campaign preparation, page setup, and ad concepts.",
    iconName: "Megaphone"
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "service-1",
    title: "YouTube Video Editing",
    description: "Basic editing support for YouTube videos, including cuts, transitions, audio arrangement, and visual improvements.",
    icon: "Youtube",
    category: "Video Editing"
  },
  {
    id: "service-2",
    title: "Social Media Video Editing",
    description: "Short-form video editing for social media platforms, including reels, shorts, and promotional content.",
    icon: "Smartphone",
    category: "Video Editing"
  },
  {
    id: "service-3",
    title: "Poster Design",
    description: "Clean and creative poster designs for events, promotions, announcements, and social media.",
    icon: "FileImage",
    category: "Graphic Design"
  },
  {
    id: "service-4",
    title: "Thumbnail Design",
    description: "Eye-catching thumbnail designs that help make video content more visually attractive.",
    icon: "Sparkles",
    category: "Graphic Design"
  },
  {
    id: "service-5",
    title: "Social Media Post Design",
    description: "Basic social media graphics for announcements, promotions, branding, and content publishing.",
    icon: "Layout",
    category: "Graphic Design"
  },
  {
    id: "service-6",
    title: "Motion Graphics",
    description: "Beginner-level motion graphics and animated visual elements for digital content.",
    icon: "Zap",
    category: "Video Editing"
  },
  {
    id: "service-7",
    title: "Basic Digital Marketing Support",
    description: "Basic support and learning-based assistance for digital marketing activities.",
    icon: "Target",
    category: "Digital Marketing"
  },
  {
    id: "service-8",
    title: "Basic Meta Marketing Support",
    description: "Beginner-level support for Facebook and Instagram marketing concepts and campaign preparation.",
    icon: "Share2",
    category: "Digital Marketing"
  }
];

export const serviceDisclaimer = "Services are currently provided at a beginner and learning level while I continue developing my professional skills.";

export const learningExperienceData: LearningExperience = {
  title: "Current Learning Experience",
  course: "SBMC — Small Business Management Course",
  institute: "As-Sunnah Skill Development Institute",
  location: "Dhaka, Bangladesh",
  status: "Ongoing",
  description: "I am currently developing my skills through the SBMC — Small Business Management Course at As-Sunnah Skill Development Institute. My learning journey focuses on video editing, graphic design, motion graphics, and basic digital marketing.",
  learningAreas: [
    "Practical video editing exercises",
    "Graphic design assignments",
    "Adobe Creative Cloud tools",
    "Social media content creation",
    "Basic Meta marketing concepts",
    "Creative problem-solving",
    "Visual communication"
  ]
};

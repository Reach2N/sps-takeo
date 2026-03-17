export interface StaffMember {
  id: string;
  nameEn: string;
  nameKh: string;
  role: string;
  roleKh: string;
  department: "khmer" | "gep" | "operation";
  level: string;
  photo: string;
}

export interface NewsPost {
  slug: string;
  title: string;
  titleKh: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
}

export interface Program {
  slug: string;
  title: string;
  titleKh: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
  image: string;
}

export interface Activity {
  id: string;
  title: string;
  titleKh: string;
  description: string;
  date: string;
  department: "khmer" | "gep";
  type: "in-site" | "out-site" | "community";
  images: string[];
}

export interface ELearningResource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  icon: string;
}

export interface NavItem {
  title: string;
  titleKh?: string;
  href: string;
  children?: NavItem[];
}

export interface SiteConfig {
  name: string;
  nameKh: string;
  branch: string;
  description: string;
  address: string;
  addressKh: string;
  phone: string;
  email: string;
  socialLinks: {
    facebook: string;
    telegram: string;
    youtube: string;
    tiktok: string;
  };
  appStoreUrl: string;
  playStoreUrl: string;
  mapsEmbed: string;
}

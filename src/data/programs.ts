import type { Program } from "@/types";

export const programs: Program[] = [
  {
    slug: "khmer-general-education",
    title: "Khmer General Education",
    titleKh: "កម្មវិធីអប់រំទូទៅខ្មែរ",
    description:
      "The Khmer General Education program follows the national curriculum set by the Ministry of Education, Youth and Sport (MoEYS). Students learn core subjects in Khmer language, building a strong academic foundation from kindergarten through high school.",
    features: [
      "National MoEYS curriculum",
      "Khmer language instruction",
      "Science and mathematics",
      "Social studies and history",
      "Physical education and arts",
      "Moral and civic education",
    ],
    icon: "BookOpen",
    color: "brand-red",
    image: "/images/khmer-education.jpg",
  },
  {
    slug: "gep-program",
    title: "Global English Program (GEP)",
    titleKh: "កម្មវិធីអង់គ្លេសសកល (GEP)",
    description:
      "The Global English Program (GEP) offers a bilingual education pathway where students study core subjects in both Khmer and English. This program prepares students for global opportunities while maintaining strong Khmer cultural identity.",
    features: [
      "Bilingual instruction (Khmer & English)",
      "International standard curriculum",
      "English proficiency development",
      "STEM-focused learning",
      "Critical thinking and creativity",
      "Global citizenship education",
    ],
    icon: "Globe",
    color: "brand-blue",
    image: "/images/gep-program.jpg",
  },
  {
    slug: "facilities",
    title: "School Facilities",
    titleKh: "គ្រឿងបរិក្ខារសាលា",
    description:
      "Sovannaphumi School Takeo is equipped with modern facilities to support an effective learning environment. Our campus features well-maintained classrooms, science labs, computer rooms, a library, and recreational areas.",
    features: [
      "Modern air-conditioned classrooms",
      "Science and computer laboratories",
      "Library and reading rooms",
      "Sports courts and playground",
      "Assembly hall and multipurpose room",
      "Safe and clean campus environment",
    ],
    icon: "Building",
    color: "brand-gold",
    image: "/images/facilities.jpg",
  },
  {
    slug: "scholarships",
    title: "Scholarships",
    titleKh: "អាហារូបករណ៍",
    description:
      "Sovannaphumi School provides scholarship opportunities for outstanding and underprivileged students. Our scholarship programs aim to make quality education accessible to all students in Takeo Province.",
    features: [
      "Academic merit scholarships",
      "Need-based financial aid",
      "Community service awards",
      "Entrance exam scholarships",
      "Sibling and alumni discounts",
      "Partial and full tuition coverage",
    ],
    icon: "Award",
    color: "brand-blue",
    image: "/images/scholarships.jpg",
  },
];

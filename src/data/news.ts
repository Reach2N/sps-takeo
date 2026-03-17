import type { NewsPost } from "@/types";

export const news: NewsPost[] = [
  {
    slug: "new-branch-grand-opening",
    title: "Grand Opening of Sovannaphumi School Takeo — 25th Branch",
    titleKh: "ពិធីបើកសម្ពោធសាលាសុវណ្ណភូមិ សាខាតាកែវ — សាខាទី២៥",
    excerpt:
      "Sovannaphumi School officially opens its 25th branch in Takeo Province, bringing quality education closer to local communities.",
    content:
      "We are thrilled to announce the grand opening of the Sovannaphumi School Takeo branch, marking a significant milestone as the 25th branch in our growing network of schools across Cambodia. The new campus features modern classrooms, science laboratories, computer rooms, and recreational facilities designed to provide the best learning environment for students from kindergarten through high school.\n\nThe opening ceremony was attended by local officials, educators, parents, and community members who share our vision of making quality education accessible to all children in Takeo Province.",
    date: "2025-09-01",
    category: "Announcement",
    image: "/images/news-placeholder.jpg",
  },
  {
    slug: "enrollment-open-2026",
    title: "Enrollment Now Open for Academic Year 2025–2026",
    titleKh: "ការចុះឈ្មោះចូលរៀនឆ្នាំសិក្សា ២០២៥–២០២៦ បានបើកហើយ",
    excerpt:
      "Registration is now open for new and returning students. Secure your child's place in our Khmer or GEP program.",
    content:
      "Sovannaphumi School Takeo is now accepting enrollments for the upcoming academic year 2025–2026. We offer two comprehensive programs: the Khmer General Education program following the national MoEYS curriculum, and the Global English Program (GEP) providing bilingual education.\n\nEarly registration discounts and scholarship opportunities are available. Visit our campus or contact us for more information about admission requirements and fee structures.",
    date: "2025-10-15",
    category: "Enrollment",
    image: "/images/news-placeholder.jpg",
  },
  {
    slug: "science-fair-winners",
    title: "Students Excel at Provincial Science Fair",
    titleKh: "សិស្សទទួលជ័យជម្នះក្នុងពិព័រណ៍វិទ្យាសាស្ត្រខេត្ត",
    excerpt:
      "Our students won multiple awards at the Takeo Provincial Science Fair, showcasing their innovative projects.",
    content:
      "We are proud to announce that students from Sovannaphumi School Takeo won three top awards at the recent Takeo Provincial Science Fair. Their projects ranged from renewable energy solutions to agricultural innovations tailored for local farming communities.\n\nThese achievements reflect our commitment to hands-on, inquiry-based learning that encourages students to apply scientific knowledge to real-world problems.",
    date: "2025-11-20",
    category: "Achievement",
    image: "/images/news-placeholder.jpg",
  },
  {
    slug: "teacher-training-workshop",
    title: "Professional Development Workshop for Teachers",
    titleKh: "វគ្គបណ្ដុះបណ្ដាលវិជ្ជាជីវៈសម្រាប់គ្រូ",
    excerpt:
      "Our teaching staff participated in a comprehensive professional development workshop focused on modern pedagogical methods.",
    content:
      "Sovannaphumi School Takeo organized a three-day professional development workshop for all teaching staff. The workshop covered modern teaching methodologies, classroom management techniques, and technology integration in education.\n\nInvited education experts led sessions on student-centered learning approaches, assessment strategies, and differentiated instruction to ensure our teachers continue to deliver the highest quality education.",
    date: "2025-12-05",
    category: "School Life",
    image: "/images/news-placeholder.jpg",
  },
  {
    slug: "khmer-new-year-celebration",
    title: "Khmer New Year Celebration at School",
    titleKh: "ពិធីបុណ្យចូលឆ្នាំថ្មីខ្មែរនៅសាលា",
    excerpt:
      "Students and staff celebrated Khmer New Year with traditional games, performances, and cultural activities.",
    content:
      "The entire school community came together to celebrate Khmer New Year with a vibrant festival featuring traditional Khmer games, dance performances, and cultural activities. Students dressed in traditional attire and participated in various competitions.\n\nThe celebration emphasized the importance of preserving Cambodian cultural heritage while fostering a sense of community and school spirit.",
    date: "2026-01-10",
    category: "School Life",
    image: "/images/news-placeholder.jpg",
  },
];

export function getNewsPost(slug: string): NewsPost | undefined {
  return news.find((n) => n.slug === slug);
}

import type { Activity } from "@/types";

export const activities: Activity[] = [
  // Khmer In-Site
  {
    id: "kh-in-1",
    title: "Science Exhibition",
    titleKh: "ពិព័រណ៍វិទ្យាសាស្ត្រ",
    description: "Students showcase their science projects and experiments in the annual school science exhibition.",
    date: "2025-12-15",
    department: "khmer",
    type: "in-site",
    images: ["/images/activity-placeholder.jpg"],
  },
  {
    id: "kh-in-2",
    title: "Khmer Literature Day",
    titleKh: "ទិវាអក្សរសិល្ប៍ខ្មែរ",
    description: "Celebrating Khmer literary heritage with poetry recitals, storytelling, and creative writing competitions.",
    date: "2025-11-20",
    department: "khmer",
    type: "in-site",
    images: ["/images/activity-placeholder.jpg"],
  },
  {
    id: "kh-in-3",
    title: "Sports Day",
    titleKh: "ទិវាកីឡា",
    description: "Annual sports day featuring athletics, team sports, and fun activities for all grade levels.",
    date: "2025-10-05",
    department: "khmer",
    type: "in-site",
    images: ["/images/activity-placeholder.jpg"],
  },
  // Khmer Out-Site
  {
    id: "kh-out-1",
    title: "Historical Site Visit",
    titleKh: "ទស្សនកិច្ចតំបន់ប្រវត្តិសាស្ត្រ",
    description: "Students visit important historical sites in Takeo Province to learn about Cambodian history firsthand.",
    date: "2025-11-10",
    department: "khmer",
    type: "out-site",
    images: ["/images/activity-placeholder.jpg"],
  },
  {
    id: "kh-out-2",
    title: "Nature Exploration Trip",
    titleKh: "ដំណើរស្វែងយល់ធម្មជាតិ",
    description: "Field trip to natural areas for environmental science learning and ecological awareness.",
    date: "2025-09-25",
    department: "khmer",
    type: "out-site",
    images: ["/images/activity-placeholder.jpg"],
  },
  // Khmer Community
  {
    id: "kh-com-1",
    title: "Clean-Up Campaign",
    titleKh: "យុទ្ធនាការសម្អាត",
    description: "Students participate in community clean-up efforts around the school neighborhood.",
    date: "2025-10-20",
    department: "khmer",
    type: "community",
    images: ["/images/activity-placeholder.jpg"],
  },
  {
    id: "kh-com-2",
    title: "Charity Drive",
    titleKh: "យុទ្ធនាការសប្បុរសធម៌",
    description: "Organizing donation drives to support underprivileged families in Takeo Province.",
    date: "2025-12-01",
    department: "khmer",
    type: "community",
    images: ["/images/activity-placeholder.jpg"],
  },
  // GEP In-Site
  {
    id: "gep-in-1",
    title: "English Speech Contest",
    titleKh: "ការប្រកួតសុន្ទរកថាជាភាសាអង់គ្លេស",
    description: "Students compete in English public speaking and debate competitions.",
    date: "2025-11-15",
    department: "gep",
    type: "in-site",
    images: ["/images/activity-placeholder.jpg"],
  },
  {
    id: "gep-in-2",
    title: "STEM Innovation Day",
    titleKh: "ទិវាច្នៃប្រឌិត STEM",
    description: "Hands-on STEM workshops and project presentations showcasing student innovation.",
    date: "2025-10-25",
    department: "gep",
    type: "in-site",
    images: ["/images/activity-placeholder.jpg"],
  },
  // GEP Out-Site
  {
    id: "gep-out-1",
    title: "International School Exchange",
    titleKh: "ការផ្លាស់ប្តូរសាលាអន្តរជាតិ",
    description: "GEP students visit international schools for cultural exchange and collaborative learning.",
    date: "2025-09-15",
    department: "gep",
    type: "out-site",
    images: ["/images/activity-placeholder.jpg"],
  },
  // GEP Community
  {
    id: "gep-com-1",
    title: "English Teaching Outreach",
    titleKh: "កម្មវិធីបង្រៀនភាសាអង់គ្លេស",
    description: "GEP students volunteer to teach basic English to children in rural communities.",
    date: "2025-11-05",
    department: "gep",
    type: "community",
    images: ["/images/activity-placeholder.jpg"],
  },
];

export function getActivities(
  department: string,
  type: string
): Activity[] {
  return activities.filter(
    (a) => a.department === department && a.type === type
  );
}

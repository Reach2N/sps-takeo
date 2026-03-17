import type { NavItem } from "@/types";

export const navigation: NavItem[] = [
  { title: "Home", titleKh: "ទំព័រដើម", href: "/" },
  {
    title: "Programs",
    titleKh: "កម្មវិធីសិក្សា",
    href: "/programs",
    children: [
      {
        title: "Khmer General Education",
        titleKh: "កម្មវិធីខ្មែរទូទៅ",
        href: "/programs/khmer-general-education",
      },
      {
        title: "GEP Program",
        titleKh: "កម្មវិធី GEP",
        href: "/programs/gep-program",
      },
      {
        title: "Facilities",
        titleKh: "គ្រឿងបរិក្ខារ",
        href: "/programs/facilities",
      },
      {
        title: "Scholarships",
        titleKh: "អាហារូបករណ៍",
        href: "/programs/scholarships",
      },
    ],
  },
  {
    title: "Staff",
    titleKh: "បុគ្គលិក",
    href: "/staff",
    children: [
      {
        title: "Khmer Program",
        titleKh: "កម្មវិធីខ្មែរ",
        href: "#",
        children: [
          {
            title: "Kindergarten",
            titleKh: "មត្តេយ្យ",
            href: "/staff/khmer/kindergarten",
          },
          {
            title: "Primary",
            titleKh: "បឋមសិក្សា",
            href: "/staff/khmer/primary",
          },
          {
            title: "Lower Secondary",
            titleKh: "មធ្យមសិក្សាបឋមភូមិ",
            href: "/staff/khmer/lower-secondary",
          },
          {
            title: "High School",
            titleKh: "វិទ្យាល័យ",
            href: "/staff/khmer/high-school",
          },
        ],
      },
      {
        title: "GEP Program",
        titleKh: "កម្មវិធី GEP",
        href: "#",
        children: [
          {
            title: "Kindergarten",
            titleKh: "មត្តេយ្យ",
            href: "/staff/gep/kindergarten",
          },
          {
            title: "Primary",
            titleKh: "បឋមសិក្សា",
            href: "/staff/gep/primary",
          },
          {
            title: "Lower Secondary",
            titleKh: "មធ្យមសិក្សាបឋមភូមិ",
            href: "/staff/gep/lower-secondary",
          },
          {
            title: "High School",
            titleKh: "វិទ្យាល័យ",
            href: "/staff/gep/high-school",
          },
        ],
      },
      {
        title: "Operation",
        titleKh: "ប្រតិបត្តិការ",
        href: "#",
        children: [
          {
            title: "Receptionist",
            titleKh: "បុគ្គលិកទទួលភ្ញៀវ",
            href: "/staff/operation/receptionist",
          },
          { title: "Guard", titleKh: "សន្តិសុខ", href: "/staff/operation/guard" },
          { title: "ICT", titleKh: "បច្ចេកវិទ្យា", href: "/staff/operation/ict" },
          {
            title: "Cleaner",
            titleKh: "អ្នកសម្អាត",
            href: "/staff/operation/cleaner",
          },
        ],
      },
    ],
  },
  {
    title: "Activities",
    titleKh: "សកម្មភាព",
    href: "/activities",
    children: [
      {
        title: "Khmer Program",
        titleKh: "កម្មវិធីខ្មែរ",
        href: "#",
        children: [
          {
            title: "In-Site",
            titleKh: "សកម្មភាពក្នុងសាលា",
            href: "/activities/khmer/in-site",
          },
          {
            title: "Out-Site",
            titleKh: "សកម្មភាពក្រៅសាលា",
            href: "/activities/khmer/out-site",
          },
          {
            title: "Community",
            titleKh: "សកម្មភាពសហគមន៍",
            href: "/activities/khmer/community",
          },
        ],
      },
      {
        title: "GEP Program",
        titleKh: "កម្មវិធី GEP",
        href: "#",
        children: [
          {
            title: "In-Site",
            titleKh: "សកម្មភាពក្នុងសាលា",
            href: "/activities/gep/in-site",
          },
          {
            title: "Out-Site",
            titleKh: "សកម្មភាពក្រៅសាលា",
            href: "/activities/gep/out-site",
          },
          {
            title: "Community",
            titleKh: "សកម្មភាពសហគមន៍",
            href: "/activities/gep/community",
          },
        ],
      },
    ],
  },
  { title: "News", titleKh: "ព័ត៌មាន", href: "/news" },
  { title: "E-Learning", titleKh: "រៀនអនឡាញ", href: "/e-learning" },
  { title: "Contact", titleKh: "ទំនាក់ទំនង", href: "/contact" },
];

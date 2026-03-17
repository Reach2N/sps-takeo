import type { StaffMember } from "@/types";

// Placeholder staff data — replace with real data later
function generateStaff(
  department: "khmer" | "gep" | "operation",
  level: string,
  count: number
): StaffMember[] {
  const roles: Record<string, { en: string; kh: string }[]> = {
    kindergarten: [
      { en: "Head Teacher", kh: "គ្រូប្រធាន" },
      { en: "Teacher", kh: "គ្រូ" },
      { en: "Assistant Teacher", kh: "ជំនួយការគ្រូ" },
    ],
    primary: [
      { en: "Head Teacher", kh: "គ្រូប្រធាន" },
      { en: "Teacher", kh: "គ្រូ" },
      { en: "Math Teacher", kh: "គ្រូគណិតវិទ្យា" },
    ],
    "lower-secondary": [
      { en: "Head Teacher", kh: "គ្រូប្រធាន" },
      { en: "Subject Teacher", kh: "គ្រូមុខវិជ្ជា" },
      { en: "Science Teacher", kh: "គ្រូវិទ្យាសាស្ត្រ" },
    ],
    "high-school": [
      { en: "Head Teacher", kh: "គ្រូប្រធាន" },
      { en: "Subject Teacher", kh: "គ្រូមុខវិជ្ជា" },
      { en: "Counselor", kh: "ទីប្រឹក្សា" },
    ],
    receptionist: [
      { en: "Receptionist", kh: "បុគ្គលិកទទួលភ្ញៀវ" },
    ],
    guard: [
      { en: "Security Guard", kh: "សន្តិសុខ" },
    ],
    ict: [
      { en: "ICT Staff", kh: "បុគ្គលិកបច្ចេកវិទ្យា" },
    ],
    cleaner: [
      { en: "Cleaner", kh: "អ្នកសម្អាត" },
    ],
  };

  const levelRoles = roles[level] || [{ en: "Staff", kh: "បុគ្គលិក" }];
  const names = [
    { en: "Sok Dara", kh: "សុខ តារា" },
    { en: "Chan Sophea", kh: "ចាន់ សុផា" },
    { en: "Kim Sothea", kh: "គីម សុថា" },
    { en: "Noun Chanthy", kh: "នួន ចន្ធី" },
    { en: "Phan Sokha", kh: "ផាន់ សុខា" },
    { en: "Rin Bopha", kh: "រិន បុប្ផា" },
    { en: "Thy Visal", kh: "ធី វិសាល" },
    { en: "Meas Rachana", kh: "មាស រចនា" },
  ];

  return Array.from({ length: count }, (_, i) => {
    const name = names[i % names.length];
    const role = levelRoles[i % levelRoles.length];
    return {
      id: `${department}-${level}-${i + 1}`,
      nameEn: name.en,
      nameKh: name.kh,
      role: role.en,
      roleKh: role.kh,
      department,
      level,
      photo: "/images/avatar-placeholder.jpg",
    };
  });
}

export const staff: StaffMember[] = [
  // Khmer Program
  ...generateStaff("khmer", "kindergarten", 6),
  ...generateStaff("khmer", "primary", 8),
  ...generateStaff("khmer", "lower-secondary", 6),
  ...generateStaff("khmer", "high-school", 6),
  // GEP Program
  ...generateStaff("gep", "kindergarten", 4),
  ...generateStaff("gep", "primary", 6),
  ...generateStaff("gep", "lower-secondary", 5),
  ...generateStaff("gep", "high-school", 5),
  // Operation
  ...generateStaff("operation", "receptionist", 2),
  ...generateStaff("operation", "guard", 3),
  ...generateStaff("operation", "ict", 2),
  ...generateStaff("operation", "cleaner", 4),
];

export function getStaffByDepartmentAndLevel(
  department: string,
  level: string
): StaffMember[] {
  return staff.filter(
    (s) => s.department === department && s.level === level
  );
}

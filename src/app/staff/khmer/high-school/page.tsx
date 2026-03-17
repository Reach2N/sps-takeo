import type { Metadata } from "next";
import { StaffListPage } from "@/components/pages/staff-list-page";

export const metadata: Metadata = { title: "Khmer Program — High School Staff" };

export default function Page() {
  return (
    <StaffListPage
      department="khmer"
      departmentKh="កម្មវិធីខ្មែរ"
      level="high-school"
      levelKh="វិទ្យាល័យ"
    />
  );
}

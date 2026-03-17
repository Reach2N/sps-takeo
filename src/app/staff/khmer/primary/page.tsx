import type { Metadata } from "next";
import { StaffListPage } from "@/components/pages/staff-list-page";

export const metadata: Metadata = { title: "Khmer Program — Primary Staff" };

export default function Page() {
  return (
    <StaffListPage
      department="khmer"
      departmentKh="កម្មវិធីខ្មែរ"
      level="primary"
      levelKh="បឋមសិក្សា"
    />
  );
}

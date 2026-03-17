import type { Metadata } from "next";
import { StaffListPage } from "@/components/pages/staff-list-page";

export const metadata: Metadata = { title: "Khmer Program — Lower Secondary Staff" };

export default function Page() {
  return (
    <StaffListPage
      department="khmer"
      departmentKh="កម្មវិធីខ្មែរ"
      level="lower-secondary"
      levelKh="មធ្យមសិក្សាបឋមភូមិ"
    />
  );
}

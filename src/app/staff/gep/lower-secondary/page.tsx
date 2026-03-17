import type { Metadata } from "next";
import { StaffListPage } from "@/components/pages/staff-list-page";

export const metadata: Metadata = { title: "GEP Program — Lower Secondary Staff" };

export default function Page() {
  return (
    <StaffListPage
      department="gep"
      departmentKh="កម្មវិធី GEP"
      level="lower-secondary"
      levelKh="មធ្យមសិក្សាបឋមភូមិ"
    />
  );
}

import type { Metadata } from "next";
import { StaffListPage } from "@/components/pages/staff-list-page";

export const metadata: Metadata = { title: "GEP Program — Primary Staff" };

export default function Page() {
  return (
    <StaffListPage
      department="gep"
      departmentKh="កម្មវិធី GEP"
      level="primary"
      levelKh="បឋមសិក្សា"
    />
  );
}

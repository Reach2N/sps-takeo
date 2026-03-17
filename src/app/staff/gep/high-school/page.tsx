import type { Metadata } from "next";
import { StaffListPage } from "@/components/pages/staff-list-page";

export const metadata: Metadata = { title: "GEP Program — High School Staff" };

export default function Page() {
  return (
    <StaffListPage
      department="gep"
      departmentKh="កម្មវិធី GEP"
      level="high-school"
      levelKh="វិទ្យាល័យ"
    />
  );
}

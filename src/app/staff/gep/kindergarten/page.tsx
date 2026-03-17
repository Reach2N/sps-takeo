import type { Metadata } from "next";
import { StaffListPage } from "@/components/pages/staff-list-page";

export const metadata: Metadata = { title: "GEP Program — Kindergarten Staff" };

export default function Page() {
  return (
    <StaffListPage
      department="gep"
      departmentKh="កម្មវិធី GEP"
      level="kindergarten"
      levelKh="មត្តេយ្យ"
    />
  );
}

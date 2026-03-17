import type { Metadata } from "next";
import { StaffListPage } from "@/components/pages/staff-list-page";

export const metadata: Metadata = { title: "Operation — Receptionist Staff" };

export default function Page() {
  return (
    <StaffListPage
      department="operation"
      departmentKh="ប្រតិបត្តិការ"
      level="receptionist"
      levelKh="បុគ្គលិកទទួលភ្ញៀវ"
    />
  );
}

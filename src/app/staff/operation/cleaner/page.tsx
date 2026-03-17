import type { Metadata } from "next";
import { StaffListPage } from "@/components/pages/staff-list-page";

export const metadata: Metadata = { title: "Operation — Cleaner Staff" };

export default function Page() {
  return (
    <StaffListPage
      department="operation"
      departmentKh="ប្រតិបត្តិការ"
      level="cleaner"
      levelKh="អ្នកសម្អាត"
    />
  );
}

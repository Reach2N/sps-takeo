import type { Metadata } from "next";
import { ActivityListPage } from "@/components/pages/activity-list-page";

export const metadata: Metadata = { title: "Khmer Program — Out-Site Activities" };

export default function Page() {
  return (
    <ActivityListPage
      department="khmer"
      departmentKh="កម្មវិធីខ្មែរ"
      type="out-site"
      typeKh="សកម្មភាពក្រៅសាលា"
    />
  );
}

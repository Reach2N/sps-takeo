import type { Metadata } from "next";
import { ActivityListPage } from "@/components/pages/activity-list-page";

export const metadata: Metadata = { title: "Khmer Program — Community Activities" };

export default function Page() {
  return (
    <ActivityListPage
      department="khmer"
      departmentKh="កម្មវិធីខ្មែរ"
      type="community"
      typeKh="សកម្មភាពសហគមន៍"
    />
  );
}

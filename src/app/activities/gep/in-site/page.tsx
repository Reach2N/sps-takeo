import type { Metadata } from "next";
import { ActivityListPage } from "@/components/pages/activity-list-page";

export const metadata: Metadata = { title: "GEP Program — In-Site Activities" };

export default function Page() {
  return (
    <ActivityListPage
      department="gep"
      departmentKh="កម្មវិធី GEP"
      type="in-site"
      typeKh="សកម្មភាពក្នុងសាលា"
    />
  );
}

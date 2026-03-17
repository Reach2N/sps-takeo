import type { Metadata } from "next";
import { ActivityListPage } from "@/components/pages/activity-list-page";

export const metadata: Metadata = { title: "GEP Program — Out-Site Activities" };

export default function Page() {
  return (
    <ActivityListPage
      department="gep"
      departmentKh="កម្មវិធី GEP"
      type="out-site"
      typeKh="សកម្មភាពក្រៅសាលា"
    />
  );
}

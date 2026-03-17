import type { Metadata } from "next";
import { ActivityListPage } from "@/components/pages/activity-list-page";

export const metadata: Metadata = { title: "GEP Program — Community Activities" };

export default function Page() {
  return (
    <ActivityListPage
      department="gep"
      departmentKh="កម្មវិធី GEP"
      type="community"
      typeKh="សកម្មភាពសហគមន៍"
    />
  );
}

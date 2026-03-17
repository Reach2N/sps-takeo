import { PageHeader } from "@/components/layout/page-header";
import { ActivityCard } from "@/components/cards/activity-card";
import { getActivities } from "@/data/activities";

interface ActivityListPageProps {
  department: string;
  departmentKh: string;
  type: string;
  typeKh: string;
}

const departmentLabels: Record<string, string> = {
  khmer: "Khmer Program",
  gep: "GEP Program",
};

const typeLabels: Record<string, string> = {
  "in-site": "In-Site Activities",
  "out-site": "Out-Site Activities",
  community: "Community Activities",
};

export function ActivityListPage({
  department,
  departmentKh,
  type,
  typeKh,
}: ActivityListPageProps) {
  const activityList = getActivities(department, type);
  const deptLabel = departmentLabels[department] || department;
  const tLabel = typeLabels[type] || type;

  return (
    <>
      <PageHeader
        title={`${deptLabel} — ${tLabel}`}
        titleKh={`${departmentKh} — ${typeKh}`}
        subtitle={`Explore ${tLabel.toLowerCase()} from our ${deptLabel}.`}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {activityList.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activityList.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-muted-foreground">
            <p>Activities will be updated soon.</p>
            <p className="font-khmer mt-1 text-sm">
              សកម្មភាពនឹងត្រូវបានធ្វើបច្ចុប្បន្នភាពឆាប់ៗ។
            </p>
          </div>
        )}
      </div>
    </>
  );
}

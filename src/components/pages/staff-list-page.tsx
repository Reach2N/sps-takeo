import { PageHeader } from "@/components/layout/page-header";
import { StaffCard } from "@/components/cards/staff-card";
import { getStaffByDepartmentAndLevel } from "@/data/staff";

interface StaffListPageProps {
  department: string;
  departmentKh: string;
  level: string;
  levelKh: string;
}

const departmentLabels: Record<string, string> = {
  khmer: "Khmer Program",
  gep: "GEP Program",
  operation: "Operation",
};

const levelLabels: Record<string, string> = {
  kindergarten: "Kindergarten",
  primary: "Primary",
  "lower-secondary": "Lower Secondary",
  "high-school": "High School",
  receptionist: "Receptionist",
  guard: "Guard",
  ict: "ICT",
  cleaner: "Cleaner",
};

export function StaffListPage({
  department,
  departmentKh,
  level,
  levelKh,
}: StaffListPageProps) {
  const staffMembers = getStaffByDepartmentAndLevel(department, level);
  const deptLabel = departmentLabels[department] || department;
  const lvlLabel = levelLabels[level] || level;

  return (
    <>
      <PageHeader
        title={`${deptLabel} — ${lvlLabel} Staff`}
        titleKh={`${departmentKh} — ${levelKh}`}
        subtitle={`Meet our dedicated ${lvlLabel.toLowerCase()} staff in the ${deptLabel}.`}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {staffMembers.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {staffMembers.map((member) => (
              <StaffCard key={member.id} staff={member} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-muted-foreground">
            <p>Staff information will be updated soon.</p>
            <p className="font-khmer mt-1 text-sm">
              ព័ត៌មានបុគ្គលិកនឹងត្រូវបានធ្វើបច្ចុប្បន្នភាពឆាប់ៗ។
            </p>
          </div>
        )}
      </div>
    </>
  );
}

import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import type { StaffMember } from "@/types";

interface StaffCardProps {
  staff: StaffMember;
}

export function StaffCard({ staff }: StaffCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="flex items-center gap-4 p-4">
        <Avatar className="h-14 w-14 shrink-0 border-2 border-brand-blue/20">
          <AvatarFallback className="bg-brand-blue text-white font-semibold">
            {staff.nameEn
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <h3 className="font-semibold text-sm truncate">{staff.nameEn}</h3>
          <p className="font-khmer text-xs text-muted-foreground truncate">
            {staff.nameKh}
          </p>
          <p className="mt-1 text-xs text-brand-blue dark:text-brand-blue-300">
            {staff.role}
          </p>
          <p className="font-khmer text-xs text-muted-foreground">
            {staff.roleKh}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

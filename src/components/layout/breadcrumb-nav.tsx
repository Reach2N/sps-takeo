"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

const labelMap: Record<string, string> = {
  programs: "Programs",
  "khmer-general-education": "Khmer General Education",
  "gep-program": "GEP Program",
  facilities: "Facilities",
  scholarships: "Scholarships",
  staff: "Staff",
  khmer: "Khmer Program",
  gep: "GEP Program",
  operation: "Operation",
  kindergarten: "Kindergarten",
  primary: "Primary",
  "lower-secondary": "Lower Secondary",
  "high-school": "High School",
  receptionist: "Receptionist",
  guard: "Guard",
  ict: "ICT",
  cleaner: "Cleaner",
  activities: "Activities",
  "in-site": "In-Site",
  "out-site": "Out-Site",
  community: "Community",
  news: "News",
  "e-learning": "E-Learning",
  contact: "Contact",
};

export function BreadcrumbNav() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" className="flex items-center gap-1">
              <Home className="h-3.5 w-3.5" />
              <span className="sr-only">Home</span>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;
          const label = labelMap[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

          return (
            <Fragment key={href}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/layout/page-header";
import { programs } from "@/data/programs";
import { BookOpen, Globe, Building, Award, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore our educational programs at Sovannaphumi School Takeo.",
};

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Globe,
  Building,
  Award,
};

const colorMap: Record<string, string> = {
  "brand-red": "bg-brand-red",
  "brand-blue": "bg-brand-blue",
  "brand-gold": "bg-brand-gold",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        title="Our Programs"
        titleKh="កម្មវិធីសិក្សារបស់យើង"
        subtitle="Discover the educational pathways available at Sovannaphumi School Takeo."
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {programs.map((program) => {
            const Icon = iconMap[program.icon] || BookOpen;
            return (
              <Link key={program.slug} href={`/programs/${program.slug}`}>
                <Card className="group h-full overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                  {/* Colored banner */}
                  <div
                    className={`h-3 ${colorMap[program.color] || "bg-brand-blue"}`}
                  />
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${colorMap[program.color] || "bg-brand-blue"} text-white`}
                      >
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold group-hover:text-brand-blue transition-colors">
                          {program.title}
                        </h2>
                        <p className="font-khmer text-sm text-brand-red dark:text-brand-red-300">
                          {program.titleKh}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      {program.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {program.features.slice(0, 3).map((f) => (
                        <Badge key={f} variant="secondary" className="text-xs">
                          {f}
                        </Badge>
                      ))}
                      {program.features.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{program.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="mt-4 flex items-center text-sm font-medium text-brand-blue dark:text-brand-blue-300">
                      Learn More{" "}
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

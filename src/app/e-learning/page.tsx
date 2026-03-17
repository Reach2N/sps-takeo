import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { eLearningResources } from "@/data/e-learning";
import {
  GraduationCap,
  BookOpen,
  Laptop,
  Building,
  Globe,
  Microscope,
  Calculator,
  Code,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "E-Learning",
  description: "Access online learning resources for Sovannaphumi School students.",
};

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  BookOpen,
  Laptop,
  Building,
  Globe,
  Microscope,
  Calculator,
  Code,
};

export default function ELearningPage() {
  return (
    <>
      <PageHeader
        title="E-Learning Resources"
        titleKh="ធនធានរៀនអនឡាញ"
        subtitle="Access curated online learning resources to supplement your studies."
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {eLearningResources.map((resource) => {
            const Icon = iconMap[resource.icon] || BookOpen;
            return (
              <a
                key={resource.id}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="group h-full transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/20 dark:text-brand-blue-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <h3 className="mt-4 font-semibold group-hover:text-brand-blue transition-colors">
                      {resource.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {resource.description}
                    </p>
                    <Badge variant="secondary" className="mt-3 text-xs">
                      {resource.category}
                    </Badge>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

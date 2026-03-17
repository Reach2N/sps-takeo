import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Activity } from "@/types";

interface ActivityCardProps {
  activity: Activity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      {/* Placeholder image */}
      <div className="relative h-48 bg-gradient-to-br from-brand-blue-100 to-brand-gold-100 dark:from-brand-blue-800 dark:to-brand-blue-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl opacity-30">📸</span>
        </div>
        <div className="absolute bottom-2 left-2">
          <Badge className="bg-brand-blue text-white text-xs">
            {activity.type.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold group-hover:text-brand-blue transition-colors">
          {activity.title}
        </h3>
        <p className="font-khmer text-sm text-brand-red/70 dark:text-brand-red-300/70">
          {activity.titleKh}
        </p>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {activity.description}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          {new Date(activity.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </CardContent>
    </Card>
  );
}

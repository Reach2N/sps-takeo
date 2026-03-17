import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { NewsPost } from "@/types";

interface NewsCardProps {
  post: NewsPost;
}

export function NewsCard({ post }: NewsCardProps) {
  return (
    <Link href={`/news/${post.slug}`}>
      <Card className="group h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
        {/* Placeholder image */}
        <div className="h-48 bg-gradient-to-br from-brand-blue-100 to-brand-blue-200 dark:from-brand-blue-800 dark:to-brand-blue-900" />
        <CardContent className="p-5">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              {post.category}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <h3 className="mt-2 font-semibold line-clamp-2 group-hover:text-brand-blue transition-colors">
            {post.title}
          </h3>
          <p className="font-khmer mt-1 text-sm text-brand-red/60 dark:text-brand-red-300/60 line-clamp-1">
            {post.titleKh}
          </p>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {post.excerpt}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

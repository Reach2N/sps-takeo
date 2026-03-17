import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar } from "lucide-react";
import { news, getNewsPost } from "@/data/news";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function NewsDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getNewsPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageHeader title={post.title} titleKh={post.titleKh} />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link href="/news">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to News
          </Link>
        </Button>

        <div className="flex items-center gap-3">
          <Badge>{post.category}</Badge>
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Image placeholder */}
        <div className="mt-6 aspect-video rounded-xl bg-gradient-to-br from-brand-blue-100 to-brand-blue-200 dark:from-brand-blue-800 dark:to-brand-blue-900" />

        <Separator className="my-8" />

        <article className="prose prose-slate dark:prose-invert max-w-none">
          {post.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </article>

        <Separator className="my-8" />

        <div className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/news">All News</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </>
  );
}

"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { NewsCard } from "@/components/cards/news-card";
import { Badge } from "@/components/ui/badge";
import { news } from "@/data/news";

const categories = ["All", ...Array.from(new Set(news.map((n) => n.category)))];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? news
      : news.filter((n) => n.category === activeCategory);

  return (
    <>
      <PageHeader
        title="News & Updates"
        titleKh="ព័ត៌មាន និងបច្ចុប្បន្នភាព"
        subtitle="Stay informed about the latest happenings at Sovannaphumi School Takeo."
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Category filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}>
              <Badge
                variant={activeCategory === cat ? "default" : "outline"}
                className={
                  activeCategory === cat
                    ? "bg-brand-blue text-white cursor-pointer"
                    : "cursor-pointer hover:bg-accent"
                }
              >
                {cat}
              </Badge>
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            <p>No news found in this category.</p>
          </div>
        )}
      </div>
    </>
  );
}

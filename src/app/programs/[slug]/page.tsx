import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { programs } from "@/data/programs";
import { BookOpen, Globe, Building, Award, CheckCircle } from "lucide-react";
import { notFound } from "next/navigation";

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Globe,
  Building,
  Award,
};

const colorBg: Record<string, string> = {
  "brand-red": "from-brand-red/10 to-brand-red/5",
  "brand-blue": "from-brand-blue/10 to-brand-blue/5",
  "brand-gold": "from-brand-gold/10 to-brand-gold/5",
};

const colorText: Record<string, string> = {
  "brand-red": "text-brand-red",
  "brand-blue": "text-brand-blue",
  "brand-gold": "text-brand-gold-600",
};

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return { title: "Program Not Found" };
  return {
    title: program.title,
    description: program.description,
  };
}

export default async function ProgramDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  const Icon = iconMap[program.icon] || BookOpen;

  return (
    <>
      <PageHeader
        title={program.title}
        titleKh={program.titleKh}
        subtitle={program.description.slice(0, 100) + "..."}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Banner */}
        <div
          className={`rounded-2xl bg-gradient-to-br ${colorBg[program.color] || colorBg["brand-blue"]} p-8 sm:p-12`}
        >
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <div
              className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg dark:bg-card`}
            >
              <Icon
                className={`h-10 w-10 ${colorText[program.color] || "text-brand-blue"}`}
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">{program.title}</h2>
              <p className="font-khmer mt-1 text-lg text-brand-red dark:text-brand-red-300">
                {program.titleKh}
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-10 max-w-3xl">
          <h3 className="text-xl font-bold">About This Program</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {program.description}
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-10">
          <h3 className="text-xl font-bold">Key Features</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {program.features.map((feature) => (
              <Card key={feature}>
                <CardContent className="flex items-start gap-3 p-4">
                  <CheckCircle
                    className={`h-5 w-5 shrink-0 mt-0.5 ${colorText[program.color] || "text-brand-blue"}`}
                  />
                  <span className="text-sm">{feature}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Photo gallery placeholder */}
        <div className="mt-10">
          <h3 className="text-xl font-bold">Gallery</h3>
          <div className="mt-6 grid gap-4 grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-lg bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center"
              >
                <span className="text-3xl opacity-20">📷</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-xl border bg-card p-8 text-center">
          <h3 className="text-xl font-bold">Interested in This Program?</h3>
          <p className="font-khmer mt-1 text-sm text-brand-red dark:text-brand-red-300">
            ចាប់អារម្មណ៍ក្នុងកម្មវិធីនេះ?
          </p>
          <p className="mt-3 text-muted-foreground">
            Contact us to learn more about enrollment and admission requirements.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/programs">All Programs</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

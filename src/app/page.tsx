"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Globe,
  Building,
  Award,
  ChevronRight,
  GraduationCap,
  Users,
  Trophy,
  Quote,
  Smartphone,
} from "lucide-react";
import { programs } from "@/data/programs";
import { news } from "@/data/news";
import { siteConfig } from "@/data/site-config";

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

function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-display text-4xl font-bold sm:text-5xl">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

const stats = [
  {
    label: "Branch",
    labelKh: "សាខា",
    value: 25,
    suffix: "th",
    icon: Building,
  },
  {
    label: "Students",
    labelKh: "សិស្ស",
    value: 1200,
    suffix: "+",
    icon: Users,
  },
  {
    label: "Teachers",
    labelKh: "គ្រូ",
    value: 80,
    suffix: "+",
    icon: GraduationCap,
  },
  {
    label: "Awards",
    labelKh: "ពានរង្វាន់",
    value: 50,
    suffix: "+",
    icon: Trophy,
  },
];

const testimonials = [
  {
    name: "Chea Sokha",
    nameKh: "ជា សុខា",
    role: "Parent",
    quote:
      "My children love studying at Sovannaphumi. The teachers are dedicated and the school environment is excellent.",
  },
  {
    name: "Kim Phally",
    nameKh: "គីម ផល្លី",
    role: "Grade 10 Student",
    quote:
      "The GEP program has greatly improved my English and given me confidence to pursue my dreams internationally.",
  },
  {
    name: "Noun Ratha",
    nameKh: "នួន រ័ត្ន",
    role: "Parent",
    quote:
      "We chose Sovannaphumi for its strong academic reputation and the caring community of educators.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-blue-800 text-white">
        {/* Diagonal clip overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-900/90 via-brand-blue-800/80 to-brand-red/30" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 sm:px-6 sm:py-28 lg:flex-row lg:gap-12 lg:px-8 lg:py-36">
          <div className="flex-1 text-center lg:text-left">
            <Badge className="mb-4 bg-brand-gold text-brand-blue-800 hover:bg-brand-gold-400">
              25th Branch — Takeo Province
            </Badge>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Sovannaphumi School
              <span className="block text-brand-gold">Takeo</span>
            </h1>
            <p className="font-khmer mt-3 text-xl text-white/80 sm:text-2xl">
              សាលាសុវណ្ណភូមិ សាខាតាកែវ
            </p>
            <p className="mt-6 max-w-lg text-lg text-white/70">
              Providing quality Khmer and bilingual education from kindergarten
              to high school. Building bright futures in Takeo Province.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button
                size="lg"
                className="bg-brand-gold text-brand-blue-800 hover:bg-brand-gold-400"
                asChild
              >
                <Link href="/programs">
                  Explore Programs <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          <div className="mt-12 flex-shrink-0 lg:mt-0">
            <div className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80">
              <div className="absolute inset-0 rounded-full bg-brand-gold/20 blur-3xl" />
              <Image
                src="/logo-sm.png"
                alt="Sovannaphumi School Logo"
                width={320}
                height={320}
                className="relative drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Diagonal bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 60h1440V30L720 60 0 30v30z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-3 border-brand-blue text-brand-blue">
              Our Programs
            </Badge>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Excellence in Education
            </h2>
            <p className="font-khmer mt-2 text-brand-red dark:text-brand-red-300">
              ឧត្តមភាពក្នុងការអប់រំ
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {programs.map((program) => {
              const Icon = iconMap[program.icon] || BookOpen;
              return (
                <Link key={program.slug} href={`/programs/${program.slug}`}>
                  <Card className="group h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="flex gap-4 p-6">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${colorMap[program.color] || "bg-brand-blue"} text-white`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold group-hover:text-brand-blue transition-colors">
                          {program.title}
                        </h3>
                        <p className="font-khmer text-sm text-brand-red/70 dark:text-brand-red-300/70">
                          {program.titleKh}
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                          {program.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="bg-brand-blue py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <Icon className="mx-auto mb-3 h-8 w-8 text-brand-gold" />
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  <div className="mt-1 text-sm font-medium text-white/80">
                    {stat.label}
                  </div>
                  <div className="font-khmer text-xs text-white/50">
                    {stat.labelKh}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-3 border-brand-gold text-brand-gold-600 dark:text-brand-gold">
              Testimonials
            </Badge>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              What People Say
            </h2>
            <p className="font-khmer mt-2 text-brand-red dark:text-brand-red-300">
              មតិពីមាតាបិតា និងសិស្ស
            </p>
          </div>

          <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {testimonials.map((t, i) => (
              <Card
                key={i}
                className="min-w-[300px] flex-shrink-0 snap-center sm:min-w-[350px]"
              >
                <CardContent className="p-6">
                  <Quote className="mb-3 h-8 w-8 text-brand-gold" />
                  <p className="text-muted-foreground italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="font-khmer text-xs text-muted-foreground">
                        {t.nameKh} — {t.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="bg-muted/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <Badge variant="outline" className="mb-3 border-brand-red text-brand-red dark:text-brand-red-300">
                Latest News
              </Badge>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                School Updates
              </h2>
              <p className="font-khmer mt-1 text-brand-red dark:text-brand-red-300">
                ព័ត៌មានថ្មីៗ
              </p>
            </div>
            <Button variant="outline" asChild className="hidden sm:flex">
              <Link href="/news">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/news/${post.slug}`}>
                <Card className="group h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                  {/* Placeholder image */}
                  <div className="h-48 bg-gradient-to-br from-brand-blue-100 to-brand-blue-200 dark:from-brand-blue-800 dark:to-brand-blue-900" />
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        className="text-xs"
                      >
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
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center sm:hidden">
            <Button variant="outline" asChild>
              <Link href="/news">
                View All News <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden bg-gradient-to-r from-brand-blue-800 to-brand-blue-600 text-white">
            <CardContent className="flex flex-col items-center gap-8 p-8 sm:flex-row sm:p-12">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                <Smartphone className="h-10 w-10 text-brand-gold" />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="font-display text-2xl font-bold sm:text-3xl">
                  Download Our App
                </h2>
                <p className="font-khmer mt-1 text-white/70">
                  ទាញយកកម្មវិធីរបស់យើង
                </p>
                <p className="mt-3 text-white/60">
                  Stay connected with school updates, grades, and more through
                  the Sovannaphumi mobile app.
                </p>
              </div>
              <div className="flex shrink-0 gap-3">
                <a
                  href={siteConfig.appStoreUrl}
                  className="flex h-12 items-center rounded-lg border border-white/20 px-4 text-sm transition-colors hover:bg-white/10"
                >
                  🍎 App Store
                </a>
                <a
                  href={siteConfig.playStoreUrl}
                  className="flex h-12 items-center rounded-lg border border-white/20 px-4 text-sm transition-colors hover:bg-white/10"
                >
                  ▶️ Google Play
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

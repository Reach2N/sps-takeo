import { BreadcrumbNav } from "./breadcrumb-nav";

interface PageHeaderProps {
  title: string;
  titleKh?: string;
  subtitle?: string;
}

export function PageHeader({ title, titleKh, subtitle }: PageHeaderProps) {
  return (
    <div className="border-b bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <BreadcrumbNav />
        <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h1>
        {titleKh && (
          <p className="font-khmer mt-1 text-lg text-brand-red dark:text-brand-red-300">
            {titleKh}
          </p>
        )}
        {subtitle && (
          <p className="mt-2 text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

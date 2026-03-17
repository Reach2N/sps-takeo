"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { MobileNav } from "./mobile-nav";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-[3px] left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/80 shadow-sm backdrop-blur-xl"
            : "bg-background/60 backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-brand-blue",
                    isActive(item.href)
                      ? "text-brand-blue dark:text-brand-blue-300"
                      : "text-foreground/80"
                  )}
                >
                  {item.title}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <div className="pointer-events-none absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="min-w-[220px] rounded-lg border bg-popover p-2 shadow-lg">
                      {item.children.map((child) =>
                        child.children ? (
                          <div key={child.title} className="group/sub relative">
                            <span className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground">
                              {child.title}
                            </span>
                            <div className="ml-2 border-l border-border pl-2">
                              {child.children.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  className={cn(
                                    "block rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-brand-blue",
                                    isActive(sub.href)
                                      ? "text-brand-blue font-medium"
                                      : "text-foreground/70"
                                  )}
                                >
                                  {sub.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-brand-blue",
                              isActive(child.href)
                                ? "text-brand-blue font-medium"
                                : "text-foreground/70"
                            )}
                          >
                            {child.title}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Spacer for fixed header + accent bar */}
      <div className="h-[calc(3px+4rem)]" />
    </>
  );
}

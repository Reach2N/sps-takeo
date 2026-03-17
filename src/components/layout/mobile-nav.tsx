"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Logo } from "@/components/shared/logo";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [subExpanded, setSubExpanded] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const toggle = (title: string) => {
    setExpanded(expanded === title ? null : title);
    setSubExpanded(null);
  };

  const toggleSub = (title: string) => {
    setSubExpanded(subExpanded === title ? null : title);
  };

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent side="left" className="w-[300px] overflow-y-auto p-0">
        <SheetHeader className="border-b px-4 py-4">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <div className="flex items-center justify-between">
            <Logo width={32} height={32} />
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </SheetHeader>

        <nav className="flex flex-col p-4">
          {navigation.map((item) => (
            <div key={item.title}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggle(item.title)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "text-brand-blue"
                        : "text-foreground/80 hover:text-brand-blue"
                    )}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        expanded === item.title && "rotate-180"
                      )}
                    />
                  </button>
                  {expanded === item.title && (
                    <div className="ml-3 border-l border-brand-blue/20 pl-3">
                      {item.children.map((child) =>
                        child.children ? (
                          <div key={child.title}>
                            <button
                              onClick={() => toggleSub(child.title)}
                              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-brand-blue"
                            >
                              <span>{child.title}</span>
                              <ChevronDown
                                className={cn(
                                  "h-3 w-3 transition-transform",
                                  subExpanded === child.title && "rotate-180"
                                )}
                              />
                            </button>
                            {subExpanded === child.title && (
                              <div className="ml-3 border-l border-brand-gold/30 pl-3">
                                {child.children.map((sub) => (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    onClick={onClose}
                                    className={cn(
                                      "block rounded-md px-3 py-1.5 text-sm transition-colors hover:text-brand-blue",
                                      isActive(sub.href)
                                        ? "text-brand-blue font-medium"
                                        : "text-foreground/60"
                                    )}
                                  >
                                    {sub.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            className={cn(
                              "block rounded-md px-3 py-2 text-sm transition-colors hover:text-brand-blue",
                              isActive(child.href)
                                ? "text-brand-blue font-medium"
                                : "text-foreground/60"
                            )}
                          >
                            {child.title}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-brand-blue"
                      : "text-foreground/80 hover:text-brand-blue"
                  )}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

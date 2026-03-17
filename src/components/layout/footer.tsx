import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/data/site-config";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  // Using lucide icons for social
} from "lucide-react";

const quickLinks = [
  { title: "Programs", href: "/programs" },
  { title: "News", href: "/news" },
  { title: "E-Learning", href: "/e-learning" },
  { title: "Staff", href: "/staff/khmer/kindergarten" },
  { title: "Activities", href: "/activities/khmer/in-site" },
  { title: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-brand-blue-800 text-white dark:bg-brand-blue-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & about */}
          <div className="space-y-4">
            <Logo width={48} height={48} showText={false} />
            <h3 className="text-lg font-bold">{siteConfig.name}</h3>
            <p className="font-khmer text-sm text-white/70">
              {siteConfig.nameKh} — {siteConfig.branch}
            </p>
            <p className="text-sm text-white/60">{siteConfig.description}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-gold"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 shrink-0 text-brand-gold" />
                {siteConfig.address}
              </li>
              <li className="flex gap-2 text-sm text-white/70">
                <Phone className="h-4 w-4 shrink-0 text-brand-gold" />
                {siteConfig.phone}
              </li>
              <li className="flex gap-2 text-sm text-white/70">
                <Mail className="h-4 w-4 shrink-0 text-brand-gold" />
                {siteConfig.email}
              </li>
            </ul>
          </div>

          {/* Social & apps */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-gold hover:text-brand-blue-800"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-gold hover:text-brand-blue-800"
                aria-label="Telegram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a
                href={siteConfig.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-gold hover:text-brand-blue-800"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href={siteConfig.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-gold hover:text-brand-blue-800"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>

            <div className="mt-6 space-y-2">
              <a
                href={siteConfig.appStoreUrl}
                className="flex h-10 items-center justify-center rounded-lg border border-white/20 text-sm transition-colors hover:bg-white/10"
              >
                📱 Download on App Store
              </a>
              <a
                href={siteConfig.playStoreUrl}
                className="flex h-10 items-center justify-center rounded-lg border border-white/20 text-sm transition-colors hover:bg-white/10"
              >
                📱 Get it on Google Play
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name} —{" "}
            {siteConfig.branch}. All rights reserved.
          </p>
          <p className="font-khmer">សាលាសុវណ្ណភូមិ សាខាតាកែវ</p>
        </div>
      </div>
    </footer>
  );
}

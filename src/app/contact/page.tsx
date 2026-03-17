import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/data/site-config";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sovannaphumi School Takeo.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        titleKh="ទំនាក់ទំនងមកយើង"
        subtitle="We'd love to hear from you. Reach out through any of the channels below."
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="space-y-6 p-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-sm text-muted-foreground">
                      {siteConfig.address}
                    </p>
                    <p className="font-khmer text-sm text-muted-foreground">
                      {siteConfig.addressKh}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-sm text-muted-foreground">
                      {siteConfig.phone}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      {siteConfig.email}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Office Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Monday – Friday: 7:00 AM – 5:00 PM
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Saturday: 7:00 AM – 12:00 PM
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social links */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href={siteConfig.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href={siteConfig.socialLinks.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
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
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
                    aria-label="YouTube"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* App download */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Download Our App</h3>
                <div className="flex gap-3">
                  <a
                    href={siteConfig.appStoreUrl}
                    className="flex h-10 flex-1 items-center justify-center rounded-lg border text-sm transition-colors hover:bg-accent"
                  >
                    🍎 App Store
                  </a>
                  <a
                    href={siteConfig.playStoreUrl}
                    className="flex h-10 flex-1 items-center justify-center rounded-lg border text-sm transition-colors hover:bg-accent"
                  >
                    ▶️ Google Play
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps */}
          <div>
            <Card className="h-full">
              <CardContent className="p-0 h-full">
                {siteConfig.mapsEmbed ? (
                  <div
                    className="h-full min-h-[400px] rounded-lg overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: siteConfig.mapsEmbed }}
                  />
                ) : (
                  <div className="flex h-full min-h-[400px] items-center justify-center rounded-lg bg-muted">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="mx-auto mb-3 h-12 w-12 opacity-30" />
                      <p className="font-semibold">Google Maps</p>
                      <p className="text-sm">
                        Map embed will be added here
                      </p>
                      <p className="font-khmer text-xs mt-1">
                        ផែនទី Google នឹងត្រូវបានបន្ថែមនៅទីនេះ
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

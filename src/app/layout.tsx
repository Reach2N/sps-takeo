import type { Metadata } from "next";
import { Inter, Nunito, Noto_Sans_Khmer } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const notoSansKhmer = Noto_Sans_Khmer({
  variable: "--font-khmer",
  subsets: ["khmer"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Sovannaphumi School Takeo — 25th Branch",
    template: "%s | Sovannaphumi School Takeo",
  },
  description:
    "Sovannaphumi School Takeo (25th Branch) — quality Khmer and bilingual education from kindergarten to high school in Takeo Province, Cambodia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${nunito.variable} ${notoSansKhmer.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-[calc(100vh-4rem)]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

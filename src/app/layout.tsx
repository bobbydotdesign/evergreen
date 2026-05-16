import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { MobileSidebar } from "@/components/docs/mobile-sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://evergreen.dev";
const description =
  "An agentic design framework. Go from idea to deployed prototype using Claude Code, shadcn/ui, and Vercel.";

export const metadata: Metadata = {
  title: {
    default: "Evergreen",
    template: "%s — Evergreen",
  },
  description,
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/evergreen.svg",
    apple: "/evergreen.svg",
  },
  openGraph: {
    title: "Evergreen",
    description,
    url: siteUrl,
    siteName: "Evergreen",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Evergreen — An opinionated agentic design framework" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evergreen",
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex">
        {/* Logo */}
        {/* Logo — desktop only (mobile logo is in the header bar) */}
        <a href="/" className="fixed top-8 right-10 z-50 hidden transition-all duration-300 hover:scale-110 lg:block">
          <img src="/evergreen.svg" alt="Evergreen" className="h-6 w-auto" />
        </a>

        {/* Desktop sidebar */}
        <aside className="hidden w-64 shrink-0 border-r border-border p-6 lg:fixed lg:inset-y-0 lg:block lg:overflow-y-auto">
          <DocsSidebar />
        </aside>

        {/* Mobile header */}
        <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border bg-background px-4 py-3 lg:hidden">
          <MobileSidebar />
          <a href="/" className="mr-1">
            <img src="/evergreen.svg" alt="Evergreen" className="h-5 w-auto" />
          </a>
        </div>

        {/* Main content */}
        <div className="@container flex min-h-full flex-1 flex-col overflow-x-hidden pt-14 lg:ml-64 lg:pt-0">
          {children}
        </div>
      </body>
    </html>
  );
}

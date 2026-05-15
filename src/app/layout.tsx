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
  },
  twitter: {
    card: "summary_large_image",
    title: "Evergreen",
    description,
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
        <a href="/" className="fixed top-6 right-6 z-50 transition-all duration-300 hover:scale-110 sm:top-8 sm:right-10 lg:right-10">
          <img src="/evergreen.svg" alt="Evergreen" className="h-8 w-auto sm:h-10" />
        </a>

        {/* Desktop sidebar */}
        <aside className="hidden w-64 shrink-0 border-r border-border p-6 lg:fixed lg:inset-y-0 lg:block lg:overflow-y-auto">
          <DocsSidebar />
        </aside>

        {/* Mobile header */}
        <div className="fixed inset-x-0 top-0 z-40 flex items-center border-b border-border bg-background px-4 py-3 lg:hidden">
          <MobileSidebar />
          <span className="ml-3 font-mono text-xs text-muted-foreground">
            Evergreen
          </span>
        </div>

        {/* Main content */}
        <div className="flex min-h-full flex-1 flex-col overflow-x-hidden pt-14 lg:ml-64 lg:pt-0">
          {children}
        </div>
      </body>
    </html>
  );
}

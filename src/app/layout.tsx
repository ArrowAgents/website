import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ArrowAI - Build AI Agents That Work as Your Teammates",
  description: "Create, deploy, and orchestrate AI agents with ArrowAI. Build powerful multi-agent systems, access our marketplace, and run agents locally or in the cloud.",
  keywords: ["AI agents", "artificial intelligence", "automation", "multi-agent systems", "AI platform"],
  authors: [{ name: "ArrowAI Team" }],
  creator: "ArrowAI",
  publisher: "ArrowAI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arrowai.com",
    title: "ArrowAI - Build AI Agents That Work as Your Teammates",
    description: "Create, deploy, and orchestrate AI agents with ArrowAI. Build powerful multi-agent systems, access our marketplace, and run agents locally or in the cloud.",
    siteName: "ArrowAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArrowAI - Build AI Agents That Work as Your Teammates",
    description: "Create, deploy, and orchestrate AI agents with ArrowAI. Build powerful multi-agent systems, access our marketplace, and run agents locally or in the cloud.",
    creator: "@arrowai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen`}
      >
        <Navigation />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

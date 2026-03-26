import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cognition | Engineering Velocity for Complex, High-Trust Enterprises",
  description:
    "Unify coding, autonomous development, code review and codebase intelligence to accelerate delivery, strengthen quality and improve operational resilience.",
  openGraph: {
    title: "Cognition | Engineering Velocity for Complex, High-Trust Enterprises",
    description:
      "One platform for building, reviewing, testing, securing and responding faster.",
    type: "website",
    siteName: "Cognition",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cognition | Engineering Velocity for Complex, High-Trust Enterprises",
    description:
      "One platform for building, reviewing, testing, securing and responding faster.",
  },
};

export const viewport: Viewport = {
  themeColor: "#06060a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

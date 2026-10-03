import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FCFAFC",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aishakotob.dev"),
  title: "Aisha Kotob — Frontend Developer & UI Engineer",
  description:
    "Frontend Developer crafting expressive, responsive and motion-rich web experiences with React, Next.js, Vue.js, TypeScript and cutting-edge animation design.",
  keywords: [
    "Aisha Kotob",
    "Frontend Developer",
    "Motion Design",
    "React",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "UI/UX Engineering",
    "Web Engineering",
    "Lebanon",
  ],
  authors: [{ name: "Aisha Kotob", url: "https://aishakotob.dev" }],
  creator: "Aisha Kotob",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aishakotob.dev",
    title: "Aisha Kotob — Frontend Developer & UI Engineer",
    description:
      "Frontend developer building expressive, responsive and motion-crafted web experiences.",
    siteName: "Aisha Kotob Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aisha Kotob — Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aisha Kotob — Frontend Developer",
    description:
      "Building polished, responsive web experiences with creative computational elegance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aisha Kotob",
    jobTitle: "Frontend Developer",
    url: "https://aishakotob.dev",
    email: "kotobaisha@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Lebanon",
    },
    sameAs: [
      "https://github.com/AishaKotob",
      "https://linkedin.com/in/aisha-kotob",
    ],
    knowsAbout: [
      "Frontend Engineering",
      "Motion Design",
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "Anime.js",
      "UI/UX",
      "Performance",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FCFAFC] text-[#1C1924] font-sans antialiased selection:bg-[#F06595]/20 selection:text-[#A61E4D]">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

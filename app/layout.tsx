import type { Metadata } from "next";
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
  metadataBase: new URL("https://codeacademy.com"),
  title: {
    default: "CodeAcademy - Master Programming Skills Online",
    template: "%s | CodeAcademy",
  },
  description: "Learn programming skills with our comprehensive online courses. Master Python, Web Development, React, and more. Start your coding journey today with expert-led courses and hands-on projects.",
  keywords: [
    "programming courses",
    "learn to code",
    "online coding courses",
    "Python course",
    "web development",
    "React course",
    "JavaScript course",
    "programming tutorials",
    "coding bootcamp",
    "software development",
  ],
  authors: [{ name: "CodeAcademy" }],
  creator: "CodeAcademy",
  publisher: "CodeAcademy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codeacademy.com",
    siteName: "CodeAcademy",
    title: "CodeAcademy - Master Programming Skills Online",
    description: "Learn programming skills with our comprehensive online courses. Master Python, Web Development, React, and more. Start your coding journey today.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "CodeAcademy - Learn Programming Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeAcademy - Master Programming Skills Online",
    description: "Learn programming skills with our comprehensive online courses. Master Python, Web Development, React, and more.",
    images: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=630&fit=crop"],
    creator: "@codeacademy",
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
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://codeacademy.com",
  },
  category: "education",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#1a1a2e",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "CodeAcademy",
    description: "Learn programming skills with comprehensive online courses",
    url: "https://codeacademy.com",
    logo: "https://codeacademy.com/logo.png",
    sameAs: [
      "https://twitter.com/codeacademy",
      "https://facebook.com/codeacademy",
      "https://linkedin.com/company/codeacademy",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "support@codeacademy.com",
    },
    offers: {
      "@type": "AggregateOffer",
      offerCount: "4",
      lowPrice: "0",
      highPrice: "19.99",
      priceCurrency: "USD",
    },
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

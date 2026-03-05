import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Pankaj | Cinematic Pencil & Charcoal Realism Artist",
  description:
    "Premium portfolio of Pankaj, an elite artist specializing in hyper-realistic cinematic pencil and charcoal drawings. Explore the gallery of emotions brought to life.",
  keywords: ["Pankaj", "Pencil Artist", "Charcoal Realism", "Portrait Drawing", "Hyperrealism", "Indian Artist", "Fine Art"],
  authors: [{ name: "Pankaj" }],
  openGraph: {
    title: "Pankaj | Cinematic Pencil & Charcoal Realism Artist",
    description: "Premium portfolio of Pankaj, specializing in cinematic pencil and charcoal realism art.",
    url: "https://pankajart.com",
    siteName: "Pankaj Art Portfolio",
    images: [
      {
        url: "/gallery/IMG_20210603_224415_899.jpg", // Realistic fallback image
        width: 1200,
        height: 630,
        alt: "Pankaj Art Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pankaj | Cinematic Pencil & Charcoal Realism Artist",
    description: "Premium portfolio of Pankaj, an elite artist specializing in hyper-realistic cinematic pencil and charcoal drawings.",
    images: ["/gallery/IMG_20210603_224415_899.jpg"],
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-chinese-black text-white min-h-screen selection:bg-brass selection:text-chinese-black`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pankaj",
              url: "https://pankajart.com",
              jobTitle: "Pencil & Charcoal Realism Artist",
              sameAs: [
                "https://instagram.com/pankajart",
                "https://youtube.com/pankajart",
                "https://twitter.com/pankajart",
                "https://linkedin.com/in/pankajart"
              ],
              knowsAbout: ["Pencil Drawing", "Charcoal Art", "Hyper-realism", "Portraiture"]
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

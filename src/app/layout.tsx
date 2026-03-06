import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pankajverse.me"),
  title: "Pankaj | Cinematic Pencil & Charcoal Realism Artist",
  description:
    "Premium portfolio of Pankaj, an elite artist specializing in hyper-realistic cinematic pencil and charcoal drawings. Explore the gallery of emotions brought to life.",
  keywords: ["Pankaj", "Pencil Artist", "Charcoal Realism", "Portrait Drawing", "Hyperrealism", "Indian Artist", "Fine Art"],
  authors: [{ name: "Pankaj" }],
  openGraph: {
    title: "Pankaj | Cinematic Pencil & Charcoal Realism Artist",
    description: "Premium portfolio of Pankaj, specializing in cinematic pencil and charcoal realism art.",
    url: "https://pankajverse.me",
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
      <head>
        {/* Restore theme from localStorage before first paint — prevents flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light');}else{document.documentElement.classList.remove('light');}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${montserrat.variable} antialiased min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pankaj",
              url: "https://pankajverse.me",
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

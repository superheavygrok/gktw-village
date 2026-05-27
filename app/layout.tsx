import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "$VILLAGE | Community Token for Give Kids The World Village",
  description: "The community-driven token supporting Give Kids The World Village — providing magical, cost-free wish vacations to children with critical illnesses and their families since 1986. Every trade helps amplify hope.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "$VILLAGE — The Community Token for Give Kids The World Village",
    description: "Supporting 205,000+ families since 1986. 4/4 Charity Navigator rating. Community-powered awareness for the Village that grants wishes.",
    images: [{ url: "/images/hero-og.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-cream text-text font-sans antialiased">
        {children}
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}

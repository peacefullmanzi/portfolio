import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundBlobs from "@/components/ui/BackgroundBlobs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Product Designer & Engineer",
  description: "Personal portfolio showcasing digital products and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased scroll-smooth dark`}
    >
      <body className="min-h-screen bg-background/0 text-foreground selection:bg-primary/20 flex flex-col font-sans">
        <BackgroundBlobs />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

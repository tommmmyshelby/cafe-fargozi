// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "@/styles/animations.css";
import SmoothScroll from "@/components/shared/SmoothScroll";
import LoadingProvider from "@/components/layout/LoadingProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Cafe Fargozi | A Meeting of Two Worlds",
  description: "Official digital headquarters of Fargozi brand.",
  // ADD THIS LINE TO FORCE THE ICON:
  icons: {
    icon: '/logo.png', // Assuming icon.png is in your public folder
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="no-scrollbar">
      <body className={`${inter.variable} ${playfair.variable} bg-fargozi-black text-fargozi-white antialiased`}>
        <LoadingProvider>
          <SmoothScroll>
            {/* NO NAVBAR OR FOOTER HERE */}
            {children} 
          </SmoothScroll>
        </LoadingProvider>
      </body>
    </html>
  );
}
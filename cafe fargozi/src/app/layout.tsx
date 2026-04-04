import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "@/styles/animations.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/shared/SmoothScroll";
import LoadingProvider from "@/components/layout/LoadingProvider"; 
import Footer from "@/components/layout/Footer";
import MobileActions from "@/components/layout/MobileActions";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

// METADATA WORKS HERE NOW
export const metadata: Metadata = {
  title: "Cafe Fargozi | A Meeting of Two Worlds",
  description: "Official digital headquarters of Fargozi brand in Kanjirappally.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="no-scrollbar">
      <body className="...">
        <LoadingProvider>
          <SmoothScroll>
            <Navbar />
            <main>{children}</main>
            <MobileActions /> {/* Persistent Mobile Bar */}
            <Footer />
          </SmoothScroll>
        </LoadingProvider>
      </body>
    </html>
  );
}
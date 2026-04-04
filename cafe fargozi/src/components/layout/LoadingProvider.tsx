"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ShawarmaLoader from "@/components/ui/ShawarmaLoader";
import { AnimatePresence } from "framer-motion";

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Start loader when pathname changes
    setIsLoading(true);

    // Hide loader after a smooth delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200); // 1.5s allows the spinning animation to be seen clearly

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <ShawarmaLoader key="loader" />}
      </AnimatePresence>
      
      {/* We keep the children visible but could blur them if needed */}
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        {children}
      </div>
    </>
  );
}
// src/app/(admin)/layout.tsx
"use client";
import AdminSidebar from "@/components/layout/AdminSidebar";
import { motion } from "framer-motion";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#050505] text-white">
      {/* PERSISTENT SIDEBAR - NO NAVBAR HERE */}
      <AdminSidebar />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
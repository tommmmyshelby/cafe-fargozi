"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Clock, HardHat, ShoppingBag, MapPin } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="bg-[#0A0A0A] pt-40 pb-20 px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.h1 className="font-display text-6xl font-bold mb-16 italic">Operational <span className="text-fargozi-red not-italic">Terms.</span></motion.h1>
        
        <div className="space-y-16">
          <div className="flex gap-10 items-start border-b border-white/5 pb-12">
            <Clock className="text-fargozi-red shrink-0" />
            <div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Dual-Track Scheduling</h3>
              <p className="text-fargozi-muted leading-relaxed">
                Administrative corporate office opens at 09:00 AM. Culinary restaurant service begins 
                at 12:00 PM and concludes at 10:00 PM. All pre-orders must be collected within this window.
              </p>
            </div>
          </div>

          <div className="flex gap-10 items-start border-b border-white/5 pb-12">
            <ShoppingBag className="text-fargozi-gold shrink-0" />
            <div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Pre-Order Protocol</h3>
              <p className="text-fargozi-muted leading-relaxed">
                As Swiggy/Zomato services are currently unavailable in Kanjirappally, customers must 
                utilize our direct digital pre-order channel. Orders are prepared specifically for 
                self-pickup to reduce waiting times during peak school/highway hours.
              </p>
            </div>
          </div>

          <div className="flex gap-10 items-start">
            <HardHat className="text-fargozi-white shrink-0" />
            <div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-4">Technical Maintenance</h3>
              <p className="text-fargozi-muted leading-relaxed">
                Outlet status may change intermittently due to "LPG Infrastructure Maintenance" 
                or technical updates. Please refer to the "Live Status" indicator on the Home page 
                before initiating a pre-order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
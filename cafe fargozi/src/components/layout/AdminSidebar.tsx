"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, UtensilsCrossed, Home, 
  Settings, Eye, ShoppingBag, Bell, LogOut 
} from "lucide-react";
import { motion } from "framer-motion";

const adminLinks = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Orders", href: "/kitchen", icon: ShoppingBag },
  { name: "Menu CMS", href: "/admin/menu", icon: UtensilsCrossed },
  { name: "Stays CRM", href: "/admin/stays", icon: Home },
  { name: "System Status", href: "/admin/settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-20 lg:w-64 h-screen sticky top-0 bg-[#0A0A0A] border-r border-white/5 flex flex-col items-center lg:items-start p-6">
      {/* BRAND LOGO */}
      <div className="flex items-center gap-4 mb-16 px-2">
        <img 
            src="/logo.png" 
            alt="Fargozi Logo" 
            className="h-10 object-contain"
          />
        <span className="hidden lg:block font-display font-bold text-xl uppercase tracking-tighter">HQ</span>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 w-full space-y-4">
        {adminLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.name} href={link.href}>
              <div className={`relative flex items-center gap-4 p-4 rounded-2xl transition-all group ${isActive ? "bg-fargozi-red/10 text-fargozi-red" : "text-white/20 hover:text-white"}`}>
                <link.icon size={20} />
                <span className="hidden lg:block text-[10px] font-bold uppercase tracking-[0.2em]">{link.name}</span>
                {isActive && <motion.div layoutId="active-pill" className="absolute left-0 w-1 h-8 bg-fargozi-red rounded-r-full" />}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* FOOTER ACTIONS */}
      <div className="w-full pt-8 border-t border-white/5 space-y-4">
        <Link href="/" className="flex items-center gap-4 p-4 text-white/20 hover:text-fargozi-gold transition-all">
          <Eye size={20} />
          <span className="hidden lg:block text-[8px] font-bold uppercase tracking-widest">View Public Site</span>
        </Link>
        <button className="flex items-center gap-4 p-4 text-white/20 hover:text-fargozi-red transition-all w-full">
          <LogOut size={20} />
          <span className="hidden lg:block text-[8px] font-bold uppercase tracking-widest text-left">Exit HQ</span>
        </button>
      </div>
    </aside>
  );
}
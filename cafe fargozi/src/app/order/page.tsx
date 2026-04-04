"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { menuData, MenuItem } from "@/data/menu";
import { siteConfig } from "@/data/site";
import { 
  ShoppingBag, Clock, User, Phone, 
  CreditCard, ChevronRight, Plus, Minus, ShieldCheck, MapPin 
} from "lucide-react";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1, ease: [0.19, 1, 0.22, 1] }
};

export default function OrderPage() {
  const searchParams = useSearchParams();
  const itemId = searchParams.get("id");
  
  const [item, setItem] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("upi");

  useEffect(() => {
    // Find the selected item from menu data or default to the flagship roll
    const selectedItem = menuData.find(i => i.id === itemId) || menuData[0];
    setItem(selectedItem);
  }, [itemId]);

  if (!item) return null;

  const subtotal = item.price * quantity;
  const packagingCharge = 15.00; // Standard packaging
  const total = subtotal + packagingCharge;

  return (
    <main className="bg-[#0A0A0A] pt-32 pb-20 min-h-screen overflow-hidden">
      
      {/* HEADER */}
      <section className="px-8 mb-16 text-center">
        <motion.p {...reveal} className="text-fargozi-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-4">
          Kanjirappally Direct Pre-Order
        </motion.p>
        <motion.h1 {...reveal} transition={{ delay: 0.2 }} className="font-display text-5xl md:text-7xl font-bold leading-tight mb-4">
          SECURE YOUR <span className="text-fargozi-red italic font-light">RESERVATION.</span>
        </motion.h1>
        <motion.p {...reveal} transition={{ delay: 0.4 }} className="text-fargozi-white/40 text-xs md:text-sm uppercase tracking-[0.3em] max-w-2xl mx-auto">
          Skip the counter queue. Pre-order and pick up directly from the restaurant.
        </motion.p>
      </section>

      {/* MAIN CHECKOUT MODULE */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN: ORDER SUMMARY (5 Columns) */}
          <motion.div {...reveal} className="lg:col-span-5 space-y-6">
            <div className="bg-[#111] border border-white/5 rounded-[2.5rem] p-10 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-fargozi-red/10 blur-3xl rounded-full" />
              
              <h2 className="text-xl font-display font-bold uppercase mb-8 flex items-center gap-3">
                <ShoppingBag size={18} className="text-fargozi-red" /> Order Summary
              </h2>

              {/* ITEM CARD */}
              <div className="flex gap-6 border-b border-white/5 pb-8 mb-8">
                <div className="w-20 h-20 bg-white/5 rounded-2xl overflow-hidden flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=1000" className="w-full h-full object-cover grayscale-[30%]" alt={item.name} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold group-hover:text-fargozi-red transition-colors">{item.name}</h3>
                  <p className="text-fargozi-muted text-xs italic mt-1">"{item.description}"</p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-fargozi-red font-display font-bold">₹{item.price.toFixed(2)}</p>
                    
                    {/* QUANTITY COUNTER */}
                    <div className="flex items-center gap-3 border border-white/10 rounded-full px-3 py-1 bg-fargozi-black">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-fargozi-muted hover:text-white transition-colors"><Minus size={12} /></button>
                      <span className="text-xs font-bold w-4 text-center">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="text-fargozi-muted hover:text-white transition-colors"><Plus size={12} /></button>
                    </div>
                  </div>
                </div>
              </div>

              {/* PRICING BREAKDOWN */}
              <div className="space-y-4 text-sm font-medium text-fargozi-white/60">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Kitchen Packaging</span>
                  <span className="text-white">₹{packagingCharge.toFixed(2)}</span>
                </div>
                <div className="border-t border-white/5 pt-4 mt-4 flex justify-between text-lg font-display font-bold text-fargozi-white">
                  <span>Total Payable</span>
                  <span className="text-fargozi-gold">₹{total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* PICKUP INFORMATION NOTICE */}
            <div className="bg-white/5 border border-white/5 rounded-[2rem] p-8 flex gap-6 items-center">
              <MapPin className="text-fargozi-red shrink-0" size={24} />
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-fargozi-gold mb-1">Self-Pickup Station</p>
                <p className="text-sm text-fargozi-white font-medium">{siteConfig.landmark}</p>
                <p className="text-xs text-fargozi-muted mt-1">Present your order ID at the counter.</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CUSTOMER DETAILS FORM (7 Columns) */}
          <motion.div {...reveal} transition={{ delay: 0.2 }} className="lg:col-span-7">
            <div className="bg-[#0F0F0F] border border-white/5 rounded-[2.5rem] p-10 md:p-16 shadow-2xl">
              <h2 className="text-3xl font-display font-bold mb-10 tracking-tight uppercase">Checkout Details</h2>
              
              <form className="space-y-8">
                {/* CONTACT DETAILS */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-fargozi-white/60 flex items-center gap-2">
                      <User size={12} /> Full Name
                    </label>
                    <input type="text" placeholder="Enter your name" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-fargozi-red outline-none transition-all placeholder:text-white/10" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-fargozi-white/60 flex items-center gap-2">
                        <Phone size={12} /> Phone Number
                      </label>
                      <input type="tel" placeholder="+91 000-0000" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-fargozi-red outline-none transition-all placeholder:text-white/10" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-fargozi-white/60 flex items-center gap-2">
                        <Clock size={12} /> Expected Pickup Time
                      </label>
                      <input type="time" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-fargozi-red outline-none transition-all [color-scheme:dark]" />
                    </div>
                  </div>
                </div>

                {/* PAYMENT METHOD SELECTION */}
                <div className="space-y-4">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-fargozi-white/60 flex items-center gap-2">
                    <CreditCard size={12} /> Payment Method
                  </label>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* UPI */}
                    <div 
                      onClick={() => setPaymentMethod("upi")}
                      className={`p-6 border rounded-2xl cursor-pointer flex justify-between items-center transition-all ${paymentMethod === "upi" ? "border-fargozi-red bg-fargozi-red/5" : "border-white/10 bg-white/5"}`}
                    >
                      <div>
                        <p className="text-sm font-bold uppercase tracking-widest">UPI Payment</p>
                        <p className="text-xs text-fargozi-muted mt-1">Google Pay, PhonePe, etc.</p>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === "upi" ? "border-fargozi-red" : "border-white/40"}`}>
                        {paymentMethod === "upi" && <div className="w-2 h-2 bg-fargozi-red rounded-full" />}
                      </div>
                    </div>

                    {/* PAY AT COUNTER */}
                    <div 
                      onClick={() => setPaymentMethod("counter")}
                      className={`p-6 border rounded-2xl cursor-pointer flex justify-between items-center transition-all ${paymentMethod === "counter" ? "border-fargozi-red bg-fargozi-red/5" : "border-white/10 bg-white/5"}`}
                    >
                      <div>
                        <p className="text-sm font-bold uppercase tracking-widest">Pay at Counter</p>
                        <p className="text-xs text-fargozi-muted mt-1">Cash or Card on arrival.</p>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === "counter" ? "border-fargozi-red" : "border-white/40"}`}>
                        {paymentMethod === "counter" && <div className="w-2 h-2 bg-fargozi-red rounded-full" />}
                      </div>
                    </div>
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-4">
                  <button className="w-full py-5 bg-fargozi-red hover:bg-red-700 text-white text-[10px] font-bold uppercase tracking-[0.4em] rounded-xl transition-all shadow-xl shadow-red-900/20 flex items-center justify-center gap-3">
                    Place Pre-Order <ChevronRight size={14} />
                  </button>
                  <p className="text-[10px] text-fargozi-muted uppercase tracking-widest text-center mt-6 flex items-center justify-center gap-2">
                    <ShieldCheck size={12} className="text-green-500" /> Secure SSL processing directly to CAFE Fargozi POS
                  </p>
                </div>

              </form>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
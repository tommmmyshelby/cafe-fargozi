"use client";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/data/site";
import { menuData } from "@/data/menu";
import { Amenity, stayAmenities } from "@/data/stays";
import AmenityModal from "@/components/ui/AmenityModal"; 
import { 
  MapPin, ShieldCheck, Utensils, Home, ArrowDown, 
  Star, Clock, Quote, Fingerprint, Award, Navigation,
  Calendar, GraduationCap, Compass, Globe, Zap, 
  ArrowRight, HardHat, Coffee, Activity, Receipt,
  Briefcase, Info, Flame, Eye
} from "lucide-react";
import Link from "next/link";

// MASTER ANIMATION SETTINGS
const reveal = {
  initial: { opacity: 0, y: 80 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { duration: 1.5, ease: [0.19, 1, 0.22, 1] }
};

export default function MasterNarrativePage() {
  const [selectedAmenity, setSelectedAmenity] = useState<Amenity | null>(null);
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.4]);

  return (
    <main className="bg-fargozi-black text-fargozi-white">
      <AmenityModal amenity={selectedAmenity} onClose={() => setSelectedAmenity(null)} />
      
      {/* CHAPTER 1: THE ENTRANCE (PDF Page 1) */}
      <section className="relative h-[110vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-fargozi-black/70 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0A_95%)] z-10" />
          <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2400" className="w-full h-full object-cover grayscale-[50%]" alt="Hero" />
        </motion.div>
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.div {...reveal} className="mb-8 inline-flex items-center gap-4 px-6 py-2 border border-fargozi-red/30 bg-fargozi-red/5 backdrop-blur-xl rounded-full">
             <span className="w-2 h-2 bg-fargozi-red rounded-full animate-pulse" />
             <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-fargozi-red">Strategic Brand Intelligence Report</span>
          </motion.div>
          <h1 className="font-display text-[15vw] md:text-[10vw] leading-[0.8] tracking-tighter mb-10 uppercase">
            A Meeting of <br /> <span className="text-fargozi-red italic font-light">Two Worlds.</span>
          </h1>
          <p className="text-fargozi-white/40 text-[10px] md:text-xs uppercase tracking-[0.8em] font-bold leading-loose">High-Resolution Enterprise View • Specialized Culinary Brand</p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer">
             <span className="text-[8px] uppercase tracking-[0.4em] text-fargozi-gold">Analyze Ecosystem</span>
             <ArrowDown className="w-4 h-4 text-fargozi-gold animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* CHAPTER 2: INSTITUTIONAL GOVERNANCE (PDF Page 2) */}
      <section className="min-h-screen py-60 px-8 relative overflow-hidden bg-[#0D0D0D]">
        <div className="absolute top-20 right-[-5%] text-[20vw] font-bold text-white/[0.02] select-none pointer-events-none rotate-12 uppercase">{siteConfig.cin}</div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
          <motion.div {...reveal}>
            <p className="text-fargozi-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-10">Corporate Identity & Pedigree</p>
            <h2 className="font-display text-7xl md:text-9xl font-bold leading-tight mb-10 italic">Born in <br /> <span className="text-fargozi-red not-italic tracking-tighter uppercase">the Storm.</span></h2>
            <div className="space-y-8 text-fargozi-white/60 text-xl leading-relaxed italic border-l-2 border-fargozi-red pl-10 mb-12">
              <p>"Fargozi India Private Limited was incorporated on July 31, 2020."</p>
              <p>"This timing during the pandemic suggests a resilient business model designed to navigate complex market conditions."</p>
            </div>
            <div className="p-12 border border-white/10 bg-white/5 rounded-[4rem] space-y-8">
               <div>
                  <p className="text-[10px] uppercase font-bold text-fargozi-muted mb-2 tracking-widest">Registered Office Address</p>
                  <p className="text-lg font-display italic text-white/80">{siteConfig.legal.office}</p>
               </div>
               <div className="grid grid-cols-2 gap-10 pt-8 border-t border-white/5">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-fargozi-muted mb-2">Authorized Capital</p>
                    <p className="text-2xl font-display font-bold text-fargozi-gold">INR 1,00,000</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-fargozi-muted mb-2">Paid-up Capital</p>
                    <p className="text-2xl font-display font-bold text-fargozi-gold">INR 1,00,000</p>
                  </div>
               </div>
            </div>
          </motion.div>
          <motion.div {...reveal} className="relative aspect-[3/4] rounded-[5rem] overflow-hidden group shadow-2xl">
             <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="absolute top-10 right-10 w-28 h-28 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full flex flex-col items-center justify-center text-center p-4 z-30 shadow-2xl">
                <ShieldCheck className="text-green-500 mb-2" size={24} />
                <p className="text-[7px] font-bold uppercase text-white/40 leading-tight">Verified <br /> Entity</p>
                <p className="text-[8px] font-mono text-fargozi-gold mt-1 tracking-tighter uppercase">{siteConfig.cin.slice(0,10)}...</p>
             </motion.div>
             <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1500" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" alt="Pandemic Resilience" />
          </motion.div>
        </div>
      </section>

      {/* CHAPTER 3: LEADERSHIP ARCHITECTURE (PDF Page 3) */}
      <section className="py-60 px-8 bg-[#0A0A0A]">
         <div className="max-w-7xl mx-auto space-y-60">
            {/* ARUN THOMAS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <motion.div {...reveal} className="relative aspect-[3/4] rounded-[5rem] overflow-hidden group border border-white/5 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1500" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0" alt="Arun Thomas" />
                  <div className="absolute inset-0 bg-gradient-to-t from-fargozi-black via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-12 left-12"><p className="text-6xl font-display font-bold italic text-white/10 uppercase tracking-tighter">Director</p></div>
               </motion.div>
               <motion.div {...reveal} className="p-16 bg-white/5 backdrop-blur-3xl rounded-[4rem] border-l-4 border-fargozi-red relative">
                  <p className="text-fargozi-gold text-[10px] font-bold uppercase tracking-widest mb-4 italic">The Strategic Vision</p>
                  <h3 className="text-5xl font-display font-bold mb-8">Arun Thomas <br /> Kunnappally</h3>
                  <p className="text-fargozi-white/40 leading-loose text-sm uppercase tracking-widest font-bold mb-8 italic">"Establishing a high-quality brand in Kanjirappally, distinguishing from informal eateries through quality control."</p>
                  <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                     <Calendar size={18} className="text-fargozi-red" />
                     <p className="text-xs uppercase font-bold text-white/60 tracking-widest">Appointed July 31, 2020</p>
                  </div>
               </motion.div>
            </div>
            {/* ARUNIMA ROY */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <motion.div {...reveal} className="order-1 lg:order-2 relative aspect-[3/4] rounded-[5rem] overflow-hidden group border border-white/5 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1500" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0" alt="Arunima Roy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-fargozi-black via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-12 right-12 text-right"><p className="text-6xl font-display font-bold italic text-white/10 uppercase tracking-tighter">Director</p></div>
               </motion.div>
               <motion.div {...reveal} className="order-2 lg:order-1 p-16 bg-white/5 backdrop-blur-3xl rounded-[4rem] border-r-4 border-fargozi-gold text-right">
                  <p className="text-fargozi-gold text-[10px] font-bold uppercase tracking-widest mb-4 italic">Operational Integrity</p>
                  <h3 className="text-5xl font-display font-bold mb-8">Arunima <br /> Roy</h3>
                  <p className="text-fargozi-white/40 leading-loose text-sm uppercase tracking-widest font-bold mb-8 italic">"Ensuring long-term vision and commitment to compliance within the Kottayam service sector."</p>
                  <div className="flex items-center gap-4 pt-8 border-t border-white/5 justify-end">
                     <p className="text-xs uppercase font-bold text-white/60 tracking-widest">Appointed July 31, 2020</p>
                     <Calendar size={18} className="text-fargozi-gold" />
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* CHAPTER 4: MACRO-LOCATION DYNAMICS (PDF Page 1) */}
      <section className="min-h-screen py-40 px-8 flex flex-col justify-center border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div {...reveal}>
            <p className="text-fargozi-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-10 text-glow-red">Strategic Crossroads</p>
            <h2 className="font-display text-7xl md:text-9xl font-bold leading-tight mb-12 uppercase tracking-tighter">Vital <br /> <span className="text-fargozi-red italic font-light">Corridor.</span></h2>
            <div className="space-y-8 text-fargozi-white/60 text-xl leading-relaxed italic border-l-2 border-fargozi-gold pl-10 mb-12">
               <p>"Situated on the Kottayam-Kumily Road (NH183), the cafe occupies a high-visibility corridor facilitating transit traffic toward Idukki and Thekkady."</p>
               <p>"Proximity to essential service providers like Kadamapuzha Hospital and Gama Abacus Academy reinforces our hub identity."</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="p-10 border border-white/10 bg-white/5 rounded-[3rem] group hover:border-fargozi-red transition-all">
                   <MapPin className="text-fargozi-red mb-6" />
                   <h3 className="text-xl font-display font-bold mb-4 italic">AKJM School</h3>
                   <p className="text-[10px] text-fargozi-muted uppercase leading-loose tracking-widest font-bold">Directly opposite landmark. <br /> Primary driver of youth footfall.</p>
                </div>
                <div className="p-10 border border-white/10 bg-white/5 rounded-[3rem] group hover:border-fargozi-gold transition-all">
                   <Activity className="text-fargozi-gold mb-6" />
                   <h3 className="text-xl font-display font-bold mb-4 italic">Service Sector</h3>
                   <p className="text-[10px] text-fargozi-muted uppercase leading-loose tracking-widest font-bold">Near Kadamapuzha Hospital. <br /> Hub for Learning & Professional services.</p>
                </div>
            </div>
          </motion.div>
          <motion.div {...reveal} className="relative aspect-square rounded-[5rem] overflow-hidden border border-white/10 group shadow-2xl bg-[#0D0D0D]">
             <div className="absolute inset-0 bg-fargozi-black/40 z-10 group-hover:bg-transparent transition-all duration-1000" />
             <iframe 
                src="https://www.google.com/maps?q=AKJM%20Higher%20Secondary%20School%20Kanjirappally&output=embed"
                width="100%" height="100%" style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.2)' }} 
             />
             <div className="absolute bottom-10 left-10 right-10 bg-fargozi-black/80 backdrop-blur-xl p-8 rounded-3xl z-20 border border-white/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-fargozi-gold mb-2">Macro Dynamics</p>
                <p className="text-xs text-white/60 tracking-[0.2em] font-bold uppercase italic">Gateway of Kanjirappally Township Hub</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* CHAPTER 5: CULINARY ARCHITECTURE (PDF Page 3 & 4) */}
      <section className="min-h-screen py-40 px-8 bg-[#0D0D0D] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div {...reveal} className="mb-32 flex flex-col md:flex-row justify-between items-end gap-10">
            <div>
               <p className="text-fargozi-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-6">Lebanese-Fusion Program</p>
               <h2 className="font-display text-7xl md:text-[10vw] font-bold leading-none italic uppercase tracking-tighter text-glow-red">
                  The <span className="text-fargozi-red not-italic">Program.</span>
               </h2>
            </div>
            <p className="max-w-xs text-fargozi-muted text-[10px] leading-relaxed uppercase tracking-[0.2em] font-bold border-l border-fargozi-red pl-6">
               "Niche between a snack bar and a full-service specialty restaurant."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {menuData.filter(i => i.isBestseller).map((item, idx) => (
              <motion.div key={item.id} {...reveal} transition={{ delay: idx * 0.2 }} className="group">
                <Link href={`/order?id=${item.id}`} className="block">
                  <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/5 bg-white/5 mb-10 transition-all duration-700 group-hover:border-fargozi-red">
                    <img src="https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=1500" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s]" alt={item.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-fargozi-black via-fargozi-black/40 to-transparent" />
                    <div className="absolute top-10 right-10 flex flex-col items-end gap-3 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                       <div className="bg-fargozi-red text-white text-[8px] font-bold uppercase px-4 py-2 rounded-full">Pre-Order: ₹{item.price.toFixed(0)}</div>
                       <div className="bg-fargozi-gold text-black text-[8px] font-bold uppercase px-4 py-2 rounded-full flex items-center gap-2"><Star size={10} fill="black" /> {item.rating}</div>
                    </div>
                    <div className="absolute bottom-12 left-12 right-12">
                       <h3 className="text-4xl font-display font-bold leading-tight group-hover:text-fargozi-red transition-colors uppercase tracking-tight">{item.name}</h3>
                    </div>
                  </div>
                </Link>

                <div className="px-6 space-y-8">
                   <p className="text-fargozi-white/40 text-xs italic opacity-60 leading-relaxed italic max-w-[220px]">"{item.description}"</p>
                   
                   {/* FLAVOR RADAR METERS */}
                   <div className="pt-6 border-t border-white/5 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Spice Intensity</span>
                        <div className="flex gap-1">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className={`w-3 h-1 rounded-full ${i < (item.isSpicy ? 3 : 1) ? 'bg-fargozi-red' : 'bg-white/10'}`} />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[8px] font-bold uppercase text-white/20 tracking-widest">Texture profile</span>
                        <span className="text-[9px] font-bold text-fargozi-gold uppercase italic">
                          {item.category === 'Shawarma' ? 'Succulent' : 'Gourmet Crispy'}
                        </span>
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...reveal} className="mt-60 p-20 border border-white/10 bg-white/5 rounded-[5rem] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center shadow-2xl">
             <div>
                <Receipt className="text-fargozi-red w-12 h-12 mb-10" />
                <h3 className="text-5xl font-display font-bold italic mb-8 uppercase tracking-tighter leading-none">The <br /> Deconstructed <br /> Selection.</h3>
                <p className="text-fargozi-white/60 text-lg leading-relaxed italic mb-10">
                   "For seekers of a formal dining experience, the **Chicken Shawarma Plate** (₹280.80) includes shredded chicken, 2 Rumali rotis, fresh salad, fries, and a dual-dip system."
                </p>
                <Link href="/menu" className="inline-flex items-center gap-6 px-12 py-5 border border-fargozi-red/30 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-fargozi-red hover:text-white transition-all group">Analyze Full Menu <ArrowRight className="group-hover:translate-x-2 transition-transform" size={14}/></Link>
             </div>
             <div className="p-16 border border-fargozi-gold/20 bg-fargozi-gold/5 rounded-[4rem]">
                <p className="text-[10px] uppercase font-bold tracking-widest text-fargozi-gold mb-10 text-center">Gourmet Burger Indicators (Page 4)</p>
                <ul className="space-y-6 text-[10px] leading-loose text-fargozi-white/80 uppercase tracking-widest font-bold">
                   <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-fargozi-red"/> Utilizing Brioche Buns</li>
                   <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-fargozi-red"/> Premium Ranch Sauces</li>
                   <li className="flex items-center gap-4"><div className="w-1.5 h-1.5 rounded-full bg-fargozi-red"/> House Jalapeño Slaws</li>
                   <li className="flex items-center gap-4 text-fargozi-gold"><div className="w-1.5 h-1.5 rounded-full bg-fargozi-gold"/> Niche Crab Claw (₹183.00)</li>
                </ul>
             </div>
          </motion.div>
        </div>
      </section>

      {/* CHAPTER 6: BEVERAGE & DESSERT (PDF Page 5) */}
      <section className="py-40 px-8 flex items-center bg-fargozi-red relative overflow-hidden">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
            <motion.div {...reveal} className="text-white">
               <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.5em] mb-10">Beverage Program Ecosystem</p>
               <h2 className="text-7xl font-display font-bold mb-12 italic leading-tight uppercase tracking-tighter">Balancing <br /> Intensity.</h2>
               <p className="text-white/80 text-xl leading-relaxed italic mb-10">
                  "The beverage program is designed to balance the intense flavors of the shawarma and grilled meats."
               </p>
               <div className="grid grid-cols-2 gap-10">
                  <div>
                     <p className="text-[10px] uppercase font-bold tracking-widest text-white/50 mb-4 italic">Mojitos (₹126.88 - ₹140.40)</p>
                     <p className="text-sm font-display font-bold uppercase tracking-widest">Litchi • Passion Fruit • Green Apple • Orange • Pineapple</p>
                  </div>
                  <div>
                     <p className="text-[10px] uppercase font-bold tracking-widest text-white/50 mb-4 italic">Shakes (₹154.96 - ₹183.04)</p>
                     <p className="text-sm font-display font-bold uppercase tracking-widest">Oreo • Snickers • Cold Coffee • Badam • Sharja • Vanilla</p>
                  </div>
               </div>
            </motion.div>
            <motion.div {...reveal} className="relative p-24 border border-white/20 bg-white/10 backdrop-blur-3xl rounded-[6rem] text-center shadow-2xl">
               <Coffee className="text-white w-24 h-24 mx-auto mb-10" />
               <h4 className="text-4xl font-display font-bold italic text-white mb-6 uppercase tracking-tight">Afternoon <br /> Refreshment.</h4>
               <p className="text-white/60 text-xs font-bold uppercase tracking-[0.4em]">Crucial for post-dinner crowds</p>
            </motion.div>
         </div>
      </section>

      {/* CHAPTER 7: LIFESTYLE SOLUTIONS (Interactive - PDF Page 5 & 6) */}
      <section className="min-h-screen py-40 px-8 bg-[#0A0A0A]">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-40 items-center">
            <motion.div {...reveal} className="flex-1">
               <p className="text-fargozi-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-10 text-glow-red">Integrated Accommodation Portal</p>
               <h2 className="font-display text-8xl md:text-9xl font-bold italic mb-10 leading-[0.8] tracking-tighter uppercase">Lifestyle <br /> <span className="text-fargozi-red not-italic tracking-tighter uppercase">Solutions.</span></h2>
               <div className="space-y-12 mb-16 italic text-fargozi-white/40 text-lg border-l-2 border-fargozi-red pl-10 leading-relaxed">
                  <p>"Fargozi does not function solely as a restaurant; it is also a provider of 'living solutions' targeted at the transient student and professional demographic."</p>
                  <p>"Addressing the challenges faced by students in a new city through better living experiences and supportive community interaction."</p>
               </div>
               <Link href="/stays" className="inline-flex items-center gap-6 px-12 py-6 bg-fargozi-red text-white text-[10px] font-bold uppercase tracking-[0.4em] rounded-full hover:scale-105 transition-all">Secure Availability</Link>
            </motion.div>
            <motion.div {...reveal} className="flex-1 grid grid-cols-2 gap-6 relative">
               <div className="absolute inset-0 bg-fargozi-red/5 rounded-full blur-[100px]" />
               {stayAmenities.map((a, i) => (
                  <button key={i} onClick={() => setSelectedAmenity(a)} className="p-12 border border-white/5 bg-white/5 rounded-[3.5rem] flex flex-col items-center justify-center text-center group hover:border-fargozi-red transition-all cursor-pointer relative overflow-hidden group">
                     <div className="absolute inset-0 bg-fargozi-red opacity-0 group-hover:opacity-5 transition-opacity" />
                     <span className="text-4xl mb-6 block group-hover:scale-125 transition-transform duration-500">{a.icon}</span>
                     <p className="text-[10px] uppercase tracking-widest font-bold text-fargozi-muted group-hover:text-white transition-colors">{a.name}</p>
                     <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-[8px] text-fargozi-gold font-bold uppercase tracking-widest">Analyze Detail <ArrowRight size={10} /></div>
                  </button>
               ))}
               <div className="col-span-2 p-12 border border-fargozi-gold/20 bg-fargozi-gold/5 rounded-[4rem] flex items-center gap-10">
                  <ShieldCheck className="text-fargozi-gold w-12 h-12" />
                  <div>
                    <p className="text-xs uppercase font-bold text-white mb-2 tracking-widest">Safety architecture (Page 6)</p>
                    <p className="text-[10px] text-fargozi-muted leading-loose uppercase tracking-[0.2em] font-bold">24/7 Surveillance • On-site Staff Support • Controlled Environment</p>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* CHAPTER 8: OPERATIONAL LOGISTICS (PDF Page 7) */}
      <section className="py-60 px-8 bg-[#0D0D0D] border-y border-white/5">
         <div className="max-w-7xl mx-auto">
            <motion.div {...reveal} className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
               <div>
                  <h2 className="font-display text-7xl font-bold italic mb-12 leading-none uppercase tracking-tighter text-glow-red">The Dual-Track <br /> <span className="text-fargozi-gold">Schedule.</span></h2>
                  <p className="text-fargozi-white/60 text-xl mb-16 leading-relaxed italic border-l-2 border-fargozi-gold pl-10">
                    "Underlying operational data separates corporate administrative functions from restaurant service hours."
                  </p>
                  <div className="space-y-12">
                     <div className="flex gap-10 items-center">
                        <Clock className="text-fargozi-red w-14 h-14" />
                        <div>
                           <p className="text-[10px] uppercase tracking-widest font-bold text-fargozi-muted mb-2 italic">Restaurant Service Service</p>
                           <p className="text-4xl font-display font-bold uppercase tracking-tighter">{siteConfig.hours.restaurant}</p>
                        </div>
                     </div>
                     <div className="flex gap-10 items-center">
                        <Briefcase className="text-fargozi-gold w-14 h-14" />
                        <div>
                           <p className="text-[10px] uppercase tracking-widest font-bold text-fargozi-muted mb-2 italic">Corporate Administration (9:00 AM)</p>
                           <p className="text-4xl font-display font-bold uppercase tracking-tighter">{siteConfig.hours.corporate}</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="p-20 border border-white/10 bg-white/5 rounded-[6rem] text-center relative group">
                  <HardHat className="text-fargozi-red w-20 h-20 mx-auto mb-10 group-hover:scale-110 transition-transform" />
                  <h4 className="text-3xl font-display font-bold italic mb-8 uppercase">Operational Integrity.</h4>
                  <p className="text-[10px] text-fargozi-muted uppercase tracking-[0.4em] leading-loose font-bold italic mb-8">Active on Swiggy • Zomato • Magicpin • Justdial</p>
                  <div className="bg-fargozi-red/10 border border-fargozi-red/30 p-6 rounded-3xl">
                     <p className="text-[9px] font-bold text-fargozi-red uppercase tracking-widest">Alert Profile: LPG Infrastructure Maintenance Status Tracked</p>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* CHAPTER 9: COMPETITIVE CONTRAST & VERDICT (PDF Page 8 & 9) */}
      <section className="py-60 px-8 relative overflow-hidden bg-[#0A0A0A]">
         <div className="max-w-7xl mx-auto">
            <motion.div {...reveal} className="text-center mb-32">
               <p className="text-fargozi-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-10">Strategic Contrast Analysis</p>
               <h2 className="font-display text-8xl md:text-[12vw] font-bold italic mb-12 uppercase tracking-tighter">The <span className="text-fargozi-red not-italic">Verdict.</span></h2>
               <p className="text-fargozi-white/40 text-[10px] font-bold uppercase tracking-[0.8em]">Analyzing 850+ Ratings vs Local Competitors</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
               <div className="p-16 border border-white/10 bg-white/5 rounded-[5rem] relative">
                  <Quote className="absolute -top-10 -left-10 text-[15vw] text-white/[0.03] select-none uppercase font-bold" />
                  <div className="flex gap-1 text-fargozi-gold mb-10">
                     <Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/>
                  </div>
                  <p className="text-3xl font-display font-bold leading-tight mb-10 italic">"Massive burger sizes and the best shawarma in the Kottayam district. Niche cafe vibe."</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-fargozi-red italic">Verified Sentiment Analysys (4.5 Avg)</p>
               </div>
               <div className="p-16 border border-white/10 bg-white/5 rounded-[5rem] space-y-12">
                  <div>
                    <h4 className="text-fargozi-gold text-[10px] font-bold uppercase tracking-[0.5em] mb-6">Strategic Signaling Device</h4>
                    <p className="text-fargozi-white/60 leading-relaxed italic text-lg mb-6">"Mexican & Turkish nomenclature informs travelers they are buying a curated global experience."</p>
                  </div>
                  <div className="pt-8 border-t border-white/5">
                     <p className="text-[8px] font-bold uppercase text-white/20 tracking-widest mb-6">Market contrast Profile</p>
                     <div className="flex flex-wrap gap-6 opacity-30 grayscale">
                        {["Ajfaan", "KR Bakes", "Apple Bee", "Ikkal"].map(name => (
                          <div key={name} className="border border-white/40 px-6 py-2 rounded-full text-[8px] font-bold uppercase tracking-widest">vs {name}</div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CHAPTER 10: FUTURE EVOLUTION (PDF Page 10) */}
      <section className="py-80 px-8 bg-fargozi-red text-center relative overflow-hidden">
         <motion.div {...reveal}>
            <Zap className="w-24 h-24 text-white mx-auto mb-16 animate-pulse" />
            <h2 className="font-display text-8xl md:text-[14vw] font-bold text-white mb-20 italic leading-[0.75] tracking-tighter uppercase">Digital-First <br /> <span className="not-italic">Evolution.</span></h2>
            <p className="text-white/80 text-xl md:text-2xl max-w-4xl mx-auto mb-24 leading-relaxed font-light italic">
               "Leveraging our 'Active' status to expand beyond Kanjirappally into other high-growth towns in the Kerala high ranges. Digitizing the lifestyle ecosystem from landmark to destination."
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
               <Link href="/contact" className="px-16 py-6 bg-fargozi-black text-white text-[10px] font-bold uppercase tracking-[0.5em] rounded-full hover:scale-110 transition-all shadow-2xl">Administrative Engagement</Link>
               <Link href="/menu" className="px-16 py-6 border border-white/40 text-white text-[10px] font-bold uppercase tracking-[0.5em] rounded-full hover:bg-white hover:text-fargozi-red transition-all">Analyze Full Architecture</Link>
            </div>
         </motion.div>
         {/* Subtle Footer-ish Watermark */}
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10vw] font-bold text-white/[0.05] pointer-events-none select-none uppercase tracking-tighter">Fargozi India</div>
      </section>

    </main>
  );
}
"use client";

import {
    Flame,
    Mail,
    MousePointer2,
    Pizza,
    ShieldCheck,
    ShoppingBag,
    Smartphone,
    Timer,
    Utensils,
    Zap
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

// --- Official Branding Icons (SVG) ---
const AppStoreIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 384 512" fill="currentColor">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
);

const PlayStoreIcon = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 512 512" fill="currentColor">
        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
    </svg>
);

/**
 * QUICK DELIVERY - NEXT.JS 16 & TAILWIND V4 REDESIGN
 * Reimagined Download Section with smooth scroll and brand alignment.
 * Swapped Next components for standard HTML tags for preview compatibility.
 */
export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const storeUrl = "https://play.google.com/store/apps/details?id=com.quickdeliveruser.app";

    // Smooth scroll handler
    const handleScrollToApp = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById('app-download-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-white text-[#1B365D] selection:bg-red-500 selection:text-white font-sans antialiased">

            {/* --- CUSTOM ANIMATIONS --- */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes deliciousFloat {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-15px) rotate(0deg); }
        }
        @keyframes deliciousFloatReverse {
          0%, 100% { transform: translateY(0) rotate(2deg); }
          50% { transform: translateY(-15px) rotate(0deg); }
        }
        @keyframes steam {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 0.3; }
          100% { transform: translateY(-40px) scale(1.5); opacity: 0; }
        }
        .animate-food-float { animation: deliciousFloat 6s ease-in-out infinite; }
        .animate-food-float-reverse { animation: deliciousFloatReverse 7s ease-in-out infinite; }
        .steam-particle { animation: steam 3s infinite; }
      `}} />

            {/* --- HEADER --- */}
            <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 sm:px-6 pt-2 sm:pt-4">
                <div className={`mx-auto max-w-7xl flex items-center justify-between px-3 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-xl shadow-xl border border-slate-200 py-3'
                    : 'bg-white/80 backdrop-blur-xl shadow-lg border border-white/20 py-4'
                    }`}>
                    <Link href="/" className="flex items-center gap-2 sm:gap-3">
                        <Image src="/images/logo.jpeg" alt="Quick Delivery Logo" width={70} height={70} className="rounded-full w-10 h-10 sm:w-12 sm:h-12" priority />
                    </Link>

                    <div className="flex items-center gap-2 sm:gap-4">
                        <Link href="/login" className="block text-xs sm:text-sm font-bold text-[#1B365D] hover:text-[#E31837] transition-colors px-2">
                            Login
                        </Link>
                        <button
                            onClick={handleScrollToApp}
                            className="bg-slate-900 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold hover:bg-[#E31837] transition-all shadow-md active:scale-95 flex items-center gap-1 sm:gap-2"
                        >
                            <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="block">Get App</span>
                        </button>
                    </div>
                </div>
            </nav>

            <main className="mx-auto max-w-7xl lg:max-w-[1440px] relative">

                {/* --- HERO SECTION --- */}
                <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 lg:pt-56 lg:pb-32 px-4 sm:px-6 lg:px-12 overflow-hidden text-left text-balance">
                    <div className="hidden sm:block absolute top-0 right-0 w-[55%] h-full bg-slate-50 -z-10 rounded-bl-[10rem]" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                            <div className="inline-flex items-center gap-2 bg-red-50 px-3 sm:px-4 py-2 rounded-full border border-red-100">
                                <Flame className="w-3 h-3 sm:w-4 sm:h-4 text-[#E31837] fill-[#E31837] animate-pulse" />
                                <span className="text-[10px] sm:text-xs font-bold text-[#E31837] uppercase tracking-wider">Premium Restaurant Experience</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight sm:leading-none tracking-tight text-[#1B365D]">
                                Taste local <br />
                                <span className="text-[#E31837] italic">perfection.</span>
                            </h1>

                            <p className="max-w-md text-base sm:text-lg md:text-lg lg:text-xl text-slate-500 leading-relaxed font-medium">
                                Gourmet meals delivered with absolute precision. Our innovative tech ensures your food stays at the perfect temperature.
                            </p>

                            <div className="flex flex-col sm:flex-wrap gap-3 sm:gap-4 sm:flex-row pt-2 sm:pt-4">
                                <Link target='_blank' href={storeUrl} className="bg-slate-900 text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-4 hover:bg-[#E31837] transition-all shadow-xl shadow-slate-200 group">
                                    <PlayStoreIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                    <div className="text-left leading-none">
                                        <p className="text-[10px] uppercase font-bold opacity-60 mb-0.5">Get it on</p>
                                        <p className="text-base font-extrabold">Play Store</p>
                                    </div>
                                </Link>
                                <Link target='_blank' href={storeUrl} className="bg-white border-2 border-slate-100 text-slate-900 px-8 py-4 rounded-2xl flex items-center justify-center gap-4 hover:border-[#E31837] hover:text-[#E31837] transition-all shadow-lg group">
                                    <AppStoreIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                    <div className="text-left leading-none">
                                        <p className="text-[10px] uppercase font-bold opacity-60 mb-0.5">Download on</p>
                                        <p className="text-base font-extrabold">App Store</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Innovative Food Visuals */}
                        <div className="relative hidden lg:block">
                            <div className="absolute top-20 left-20 z-20">
                                <div className="steam-particle w-2 h-2 bg-white rounded-full blur-[2px]" style={{ animationDelay: '0s' }} />
                                <div className="steam-particle w-1 h-1 bg-white rounded-full blur-[2px] ml-4 mt-2" style={{ animationDelay: '0.5s' }} />
                            </div>

                            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                                <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-16">
                                    <div className="animate-food-float bg-white p-3 rounded-[2.5rem] shadow-2xl border border-slate-100 relative group cursor-pointer">
                                        <div className="overflow-hidden rounded-[2rem] relative aspect-[3/4]">
                                            <Image
                                                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=500"
                                                alt="Artisan Pizza"
                                                fill
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="absolute top-6 right-6 bg-[#E31837] text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg">
                                            HOT & FRESH
                                        </div>
                                        <div className="p-5 flex items-center justify-between">
                                            <div className="space-y-1 text-left">
                                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Trending</p>
                                                <p className="text-xl font-bold text-[#1B365D]">Artisan Pizza</p>
                                            </div>
                                            <div className="h-10 w-10 bg-red-50 rounded-full flex items-center justify-center text-[#E31837]">
                                                <Pizza className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="animate-food-float-reverse bg-white p-3 rounded-[2.5rem] shadow-2xl border border-slate-100 relative group cursor-pointer">
                                        <div className="overflow-hidden rounded-[2rem] relative aspect-square">
                                            <Image
                                                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400"
                                                alt="Healthy Bowls"
                                                fill
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="p-5 flex items-center justify-between">
                                            <div className="space-y-1 text-left">
                                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Organic</p>
                                                <p className="text-xl font-bold text-[#1B365D]">Healthy Bowls</p>
                                            </div>
                                            <div className="h-10 w-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                                                <Utensils className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-[#1B365D] p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group">
                                        <Zap className="w-10 h-10 text-[#E31837] mb-4 fill-[#E31837] animate-pulse" />
                                        <div className="text-left">
                                            <p className="text-xl font-bold leading-tight">20 Min Delivery</p>
                                            <p className="text-sm text-blue-200 mt-2 opacity-80">Canada&rsquo;s fastest network</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- EXPERIENCE INNOVATION --- */}
                <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-slate-50 relative overflow-hidden rounded-2xl sm:rounded-4xl mx-4 sm:mx-6">
                    <div className="mx-auto max-w-7xl relative z-10">
                        <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
                            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#1B365D]">The Delicious Standard.</h2>
                            <p className="text-slate-500 max-w-2xl mx-auto font-medium text-sm sm:text-base lg:text-lg">We&rsquo;ve reimagined food delivery with innovative technology to ensure your meal arrives exactly as the chef intended.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                            {[
                                { icon: Timer, title: "Precision Speed", desc: "Our AI routing avoids traffic, ensuring a sub-20 minute arrival." },
                                { icon: ShieldCheck, title: "Hygiene Priority", desc: "Temperature-controlled bags and contact-free handovers." },
                                { icon: Utensils, title: "Chef Curated", desc: "Exclusive partnerships with the city's highest-rated kitchens." },
                                { icon: MousePointer2, title: "One-Tap Order", desc: "Reorder your favorites in under 3 seconds with our app." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl lg:rounded-4xl border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-slate-50 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 lg:mb-8 group-hover:bg-red-50 transition-colors">
                                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#1B365D] group-hover:text-[#E31837] transition-colors" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- REIMAGINED APP DOWNLOAD SECTION --- */}
                <section id="app-download-section" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 scroll-mt-24">
                    <div className="mx-auto max-w-7xl bg-[#111827] rounded-2xl sm:rounded-3xl lg:rounded-[3.5rem] p-6 sm:p-10 lg:p-24 relative overflow-hidden text-white shadow-3xl text-left">
                        {/* Background Glow Accents */}
                        <div className="hidden sm:block absolute top-0 right-0 w-[600px] h-[600px] bg-[#E31837] rounded-full blur-[180px] opacity-[0.12] -mr-40 -mt-40" />
                        <div className="hidden sm:block absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1B365D] rounded-full blur-[140px] opacity-[0.15] -ml-20 -mb-20" />

                        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center relative z-10">
                            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                                <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
                                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold leading-tight sm:leading-tight lg:leading-[1.05] tracking-tight">
                                        Start eating <br />
                                        <span className="text-white opacity-100">better </span>
                                        <span className="text-[#E31837]">today.</span>
                                    </h2>
                                    <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed">
                                        Download <span className="text-white font-bold">Quick Delivery</span> now and get free delivery on your first three gourmet orders.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-wrap justify-center sm:flex-row lg:justify-start gap-3 sm:gap-4 lg:gap-5">
                                    <Link target='_blank'
                                        href={storeUrl}
                                        className="bg-white text-slate-900 px-10 py-4 lg:py-5 rounded-[1.25rem] font-bold hover:bg-[#E31837] hover:text-white transition-all shadow-2xl flex items-center gap-4 group active:scale-95"
                                    >
                                        <AppStoreIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                        <div className="text-left leading-none">
                                            <p className="text-[10px] uppercase font-black opacity-60 mb-0.5">Available on</p>
                                            <p className="text-lg font-black tracking-tight">App Store</p>
                                        </div>
                                    </Link>
                                    <Link target='_blank'
                                        href={storeUrl}
                                        className="bg-[#1f2937] border border-white/10 text-white px-10  py-4 lg:py-5 rounded-[1.25rem] font-bold hover:bg-white hover:text-slate-900 transition-all shadow-2xl flex items-center gap-4 group active:scale-95"
                                    >
                                        <PlayStoreIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                        <div className="text-left leading-none">
                                            <p className="text-[10px] uppercase font-black opacity-60 mb-0.5">Get it on</p>
                                            <p className="text-lg font-black tracking-tight">Google Play</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* Innovative Phone Showcase */}
                            <div className="flex justify-center relative group mt-8 sm:mt-12 lg:mt-0">
                                <div className="w-80 h-[620px] bg-slate-900 rounded-[3.5rem] border-[12px] border-slate-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden relative transition-transform duration-700 group-hover:rotate-2 group-hover:scale-105">
                                    <div className="h-6 w-28 bg-slate-800 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl z-20 shadow-inner" />

                                    <div className="h-full w-full bg-slate-950 relative">
                                        <Image
                                            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400"
                                            alt="In-app delivery tracking preview"
                                            fill
                                            className="w-full h-full object-cover opacity-50 blur-[1px]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-8 flex flex-col justify-end gap-6">
                                            <div className="bg-[#E31837] p-6 rounded-[2rem] shadow-2xl translate-y-[-20px] animate-food-float relative">
                                                <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-xl text-left">
                                                    <ShoppingBag className="w-5 h-5 text-[#E31837] fill-[#E31837]" />
                                                </div>
                                                <div className="space-y-2 text-left">
                                                    <p className="text-[10px] font-black uppercase text-white/70 tracking-widest">Active Tracking</p>
                                                    <p className="text-white font-black text-2xl italic tracking-tighter leading-none">Arriving at 12:45</p>
                                                </div>
                                                <div className="mt-4 flex items-center gap-2">
                                                    <div className="h-1.5 flex-1 bg-white/20 rounded-full overflow-hidden">
                                                        <div className="h-full bg-white w-3/4 rounded-full" />
                                                    </div>
                                                    <Zap className="w-4 h-4 text-white fill-white animate-pulse" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -inset-10 bg-[#E31837]/20 rounded-full blur-[80px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* --- FOOTER --- */}
            <footer className="mt-12 sm:mt-16 lg:mt-24 relative overflow-hidden text-left">
                <div className="absolute inset-0 bg-[#1B365D]" />
                <div className="hidden sm:block absolute -bottom-20 -right-20 w-96 h-96 bg-[#E31837] rounded-full blur-[160px] opacity-20" />

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-10 lg:gap-12 border-b border-white/10 pb-8 sm:pb-12 lg:pb-16">

                        <div className="space-y-4 sm:space-y-6 text-center md:text-left">
                            <Link href="/" className="flex items-center justify-center md:justify-start gap-3 sm:gap-4">
                                <Image src="/images/logo.jpeg" alt="Quick Delivery Logo" width={80} height={80} className="rounded-full w-14 h-14 sm:w-20 sm:h-20" priority />
                            </Link>
                            <p className="text-blue-100/60 font-medium text-xs sm:text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                                Canada&apos;s premier food delivery platform. Move your world with speed, precision, and taste.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-6 sm:gap-8">
                            <Link
                                href="/contact"
                                className="group flex items-center gap-3 text-white font-bold text-base sm:text-lg hover:text-[#E31837] transition-all"
                            >
                                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#E31837] transition-colors">
                                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                Contact Us
                            </Link>

                            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                                <Link target='_blank'
                                    href={storeUrl}
                                    className="bg-white text-[#1B365D] px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl flex items-center gap-2 sm:gap-3 font-bold hover:bg-[#E31837] hover:text-white transition-all shadow-xl text-xs sm:text-sm"
                                >
                                    <PlayStoreIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="uppercase tracking-widest">Play Store</span>
                                </Link>
                                <a
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href={storeUrl}
                                    className="bg-[#111827] border border-white/20 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl flex items-center gap-2 sm:gap-3 font-bold hover:bg-white hover:text-[#1B365D] transition-all text-xs sm:text-sm"
                                >
                                    <AppStoreIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span className="uppercase tracking-widest">App Store</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 sm:mt-8 lg:mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-center sm:text-left">
                        <div className="flex items-center gap-4 text-xs font-bold text-blue-100/40 uppercase tracking-[0.2em]">
                            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                        </div>
                        <div className="text-blue-100/30 font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                            © 2026 QUICK DELIVERY LOGISTICS INC.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
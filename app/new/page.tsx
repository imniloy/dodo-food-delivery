"use client"
import {
  Download,
  Headphones,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Star,
  Zap
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { type MouseEvent, useEffect, useState } from 'react';

// --- Official Branding Icons (SVG) ---
const AppStoreIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 384 512" fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const PlayStoreIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 512 512" fill="currentColor">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
  </svg>
);

/**
 * Dodo Food - Landing Page (Next.js 15 + Tailwind CSS v4)
 * Header updated to matching pill-style design.
 */
export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDownload = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('download-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 selection:bg-orange-100 font-sans">

      {/* --- UPDATED HEADER (PILL DESIGN) --- */}
      <nav className="fixed top-0 left-0 right-0 z-100 transition-all duration-500 px-4 pt-4">
        <div className={`mx-auto max-w-360 flex items-center justify-between gap-2 px-3 sm:px-6 py-3 sm:py-4 rounded-2xl sm:rounded-full transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border border-white/40'
          : 'bg-white/80 backdrop-blur-xl shadow-lg border border-white/20'
          }`}>
          <div className="flex items-center min-w-0">
            <Link href="/" className="flex items-center min-w-0">
              <div className="h-10 sm:h-12 w-auto overflow-hidden shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="DODO food Delivery logo"
                  width={220}
                  height={72}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 shrink-0">

            <Link href="/restaurant-partner" className="hidden sm:block text-sm font-bold text-slate-600 hover:text-orange-500 transition">
              Join as a Partner
            </Link>
            <Link href="/login" className="hidden min-[420px]:block text-xs sm:text-sm font-bold text-slate-700 hover:text-orange-500 transition px-1 sm:px-2">
              Login
            </Link>
            <button
              onClick={scrollToDownload}
              className="bg-slate-900 text-white px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-xl hover:bg-orange-600 hover:scale-105 transition active:scale-95 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
            >
              <Smartphone className="w-4 h-4" />
              <span className="hidden min-[420px]:inline">Get the App</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-[1440px] relative">
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-6 lg:px-12">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-orange-100 rounded-full blur-[120px] opacity-60 -mr-20 -mt-20 animate-pulse" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 text-orange-500 fill-orange-500" />
                <span className="text-[10px] md:text-xs font-black uppercase tracking-wider text-orange-700">Experience our new app</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-[900] leading-[0.95] tracking-tight text-slate-900">
                Great Food <br />
                <span className="text-orange-500 relative inline-block">
                  In Your Pocket
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0 50 5 Q 75 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>

              <p className="max-w-md text-base md:text-lg text-slate-500 leading-relaxed font-medium">
                Dodo Food is now exclusively available on mobile. Experience real-time tracking, zero delivery fees, and the easiest way to order.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="http://apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-[1.25rem] hover:scale-105 transition-all shadow-xl shadow-slate-200 group"
                >
                  <AppStoreIcon />
                  <div className="text-left leading-none">
                    <p className="text-[10px] opacity-60 font-bold uppercase tracking-wider">Download on the</p>
                    <p className="text-lg font-black tracking-tight">App Store</p>
                  </div>
                </Link>
                <Link
                  href="https://play.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-[1.25rem] hover:scale-105 transition-all shadow-lg group"
                >
                  <PlayStoreIcon />
                  <div className="text-left leading-none">
                    <p className="text-[10px] opacity-60 font-bold uppercase tracking-wider">Get it on</p>
                    <p className="text-lg font-black tracking-tight">Google Play</p>
                  </div>
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200 relative">
                      <img
                        src={`https://i.pravatar.cc/150?img=${i + 10}`}
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 text-slate-900">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-black">4.9/5 Rating</span>
                  </div>
                  <p className="text-slate-500 font-medium">Join 50k+ app users</p>
                </div>
              </div>
            </div>

            {/* Visual Hero Image Grid */}
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="rounded-3xl overflow-hidden shadow-2xl rotate-[-2deg] border-4 border-white transition-transform hover:rotate-0 duration-500 relative aspect-square">
                    <img
                      src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400"
                      alt="Burger Promo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-50 flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                      <Download className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mobile First</p>
                      <p className="text-lg font-black text-slate-900">Best UX</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-900 p-6 rounded-3xl shadow-xl text-white">
                    <Zap className="w-8 h-8 text-orange-400 mb-4" />
                    <p className="font-bold text-lg leading-tight mb-1">Tap, Track, Eat.</p>
                    <p className="text-sm text-slate-400">Order in under 60 seconds.</p>
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-2xl rotate-[2deg] border-4 border-white transition-transform hover:rotate-0 duration-500 relative aspect-square">
                    <img
                      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400"
                      alt="Salad Promo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- APP FEATURES SECTION --- */}
        <section className="py-24 px-6 lg:px-12 bg-white/50">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
              Why the <span className="text-orange-500">Dodo App?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 relative overflow-hidden rounded-[2.5rem] bg-orange-500 p-10 md:p-14 text-white group">
              <Zap className="w-12 h-12 mb-6 text-orange-200" />
              <h3 className="text-3xl md:text-4xl font-black mb-4">Lightning-Fast Experience</h3>
              <p className="text-orange-50 text-lg font-medium leading-relaxed max-w-lg">
                Native app performance means zero lag. Browse thousands of restaurants smoothly.
              </p>
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white flex flex-col justify-between">
              <Smartphone className="w-10 h-10 text-orange-500 mb-6" />
              <div>
                <h3 className="text-2xl font-black mb-3">Live Tracking</h3>
                <p className="text-slate-400 font-medium">Watch your food journey on a high-precision map.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- DOWNLOAD CTA SECTION --- */}
        <section id="download-section" className="<Link py-24 px-6 scroll-mt-24">
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-orange-500 rounded-full blur-[120px] opacity-20" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                  Start eating <br /> better today.
                </h2>
                <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-sm mx-auto lg:mx-0">
                  Download Dodo Food now and get free delivery on your first three orders.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Link
                    href="http://apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black hover:bg-orange-500 hover:text-white transition shadow-xl flex items-center gap-3"
                  >
                    <AppStoreIcon /> App Store
                  </Link>
                  <Link
                    href="https://play.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-2xl font-black hover:bg-white/20 transition flex items-center gap-3"
                  >
                    <PlayStoreIcon /> Google Play
                  </Link>
                </div>
              </div>

              <div className="flex justify-center relative">
                {/* Mobile Mockup */}
                <div className="w-64 h-[500px] bg-slate-800 rounded-[3.5rem] border-[10px] border-slate-700 shadow-2xl relative overflow-hidden group">
                  <div className="h-6 w-1/3 bg-slate-700 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl z-20" />
                  <div className="p-6 pt-16 space-y-6">
                    <div className="h-40 w-full bg-orange-500 rounded-2xl animate-pulse" />
                    <div className="h-4 w-3/4 bg-slate-700 rounded" />
                    <div className="h-4 w-1/2 bg-slate-700 rounded" />
                  </div>
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-orange-500 p-4 rounded-full shadow-2xl shadow-orange-500/50">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="px-6 lg:px-12 pt-16 pb-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 text-slate-100 p-8 md:p-10 shadow-2xl">
            <div className="absolute -top-24 -right-16 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="absolute -bottom-28 -left-14 h-56 w-56 rounded-full bg-amber-300/10 blur-3xl" />

            <div className="relative z-10 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5 space-y-5">
                <div className="h-12 sm:h-14 w-auto overflow-hidden">
                  <Image
                    src="/images/logo.png"
                    alt="DODO food Delivery logo"
                    width={260}
                    height={84}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <p className="text-sm sm:text-base text-slate-300 max-w-md leading-relaxed">
                  Fast delivery, trusted restaurants, and real-time tracking built for people who love great food without the wait.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white/90">
                    <Star className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
                    4.9 Average Rating
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white/90">
                    <Zap className="w-3.5 h-3.5 text-orange-300" />
                    Delivery in minutes
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Company</p>
                  <div className="space-y-3 text-sm font-semibold">

                    <Link href="/login" className="block text-slate-200 hover:text-orange-300 transition">Login</Link>

                    <Link href="/restaurant-partner" className="block text-slate-200 hover:text-orange-300 transition">Become a Partner</Link>

                    <Link href="/about" className="block text-slate-200 hover:text-orange-300 transition">About Us</Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Support</p>
                  <div className="space-y-3 text-sm font-semibold">
                    <Link href="/contact" className="flex items-center gap-2 text-slate-200 hover:text-orange-300 transition">
                      <Headphones className="w-4 h-4" />
                      Help Center
                    </Link>
                    <Link href="/about" className="flex items-center gap-2 text-slate-200 hover:text-orange-300 transition">
                      <ShieldCheck className="w-4 h-4" />
                      Privacy Policy
                    </Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Get the App</p>
                  <div className="space-y-3">
                    <Link
                      href="http://apple.com/app-store/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-xl bg-white text-slate-900 px-4 py-2.5 text-sm font-black hover:bg-orange-400 hover:text-white transition"
                    >
                      App Store
                    </Link>
                    <Link
                      href="https://play.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-xl bg-white/10 border border-white/20 text-white px-4 py-2.5 text-sm font-black hover:bg-white/20 transition"
                    >
                      Google Play
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-10 border-t border-white/10 pt-5 flex flex-col sm:flex-row gap-3 sm:gap-6 items-start sm:items-center justify-between text-xs sm:text-sm text-slate-400">
              <p>© 2026 DODO food Delivery. All rights reserved.</p>
              <p className="font-semibold text-slate-300">Built for mobile-first food ordering.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
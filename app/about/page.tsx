import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#fffaf7] px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-3xl flex-col gap-6 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-orange-100">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-600">About Us</p>
                <h1 className="text-3xl font-semibold">Dodo Food keeps food ordering simple.</h1>
                <p className="text-slate-600">
                    We help users discover local food, place orders quickly, and download the app from the store they use every day.
                </p>
                <div className="flex flex-wrap gap-3">
                    <Link href="/" className="w-fit rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                        Back to home
                    </Link>
                    <Link href="/login" className="w-fit rounded-full bg-orange-100 px-5 py-3 text-sm font-semibold text-orange-700 transition hover:bg-orange-200">
                        Login
                    </Link>
                    <Link href="/restaurant-partner" className="w-fit rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">
                        Join as a Partner
                    </Link>
                </div>
            </div>
        </main>
    );
}
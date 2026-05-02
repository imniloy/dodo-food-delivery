import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-[#fffaf7] px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-orange-100 sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-600">Login</p>
                <h1 className="mt-3 text-3xl font-semibold">Welcome back</h1>
                <p className="mt-2 text-slate-600">
                    Sign in to track orders, save addresses, and manage your profile.
                </p>

                <form className="mt-8 space-y-5" action="#" method="post">
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-semibold text-slate-700">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            placeholder="Enter your password"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                    <Link href="/" className="font-semibold text-slate-700 transition hover:text-orange-600">
                        Back to home
                    </Link>
                    <Link href="/restaurant-partner" className="font-semibold text-slate-700 transition hover:text-orange-600">
                        Join as a Partner
                    </Link>
                </div>
            </div>
        </main>
    );
}
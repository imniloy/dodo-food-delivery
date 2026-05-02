import Link from "next/link";

export default function RestaurantPartnerPage() {
    return (
        <main className="min-h-screen bg-[#fffaf7] px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-orange-100 sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-600">Restaurant Partner</p>
                <h1 className="mt-3 text-3xl font-semibold">Join as a Partner</h1>
                <p className="mt-2 text-slate-600">
                    Submit your restaurant details and our team will contact you for onboarding.
                </p>

                <form className="mt-8 space-y-5" action="#" method="post">
                    <div className="space-y-2">
                        <label htmlFor="restaurantName" className="text-sm font-semibold text-slate-700">Restaurant Name</label>
                        <input
                            id="restaurantName"
                            name="restaurantName"
                            type="text"
                            required
                            placeholder="Your restaurant name"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                        />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                            <label htmlFor="ownerName" className="text-sm font-semibold text-slate-700">Owner Name</label>
                            <input
                                id="ownerName"
                                name="ownerName"
                                type="text"
                                required
                                placeholder="Full name"
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                placeholder="+1 555 123 4567"
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-slate-700">Business Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="restaurant@example.com"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="city" className="text-sm font-semibold text-slate-700">City</label>
                        <input
                            id="city"
                            name="city"
                            type="text"
                            required
                            placeholder="City"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                        Submit Application
                    </button>
                </form>

                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                    <Link href="/" className="font-semibold text-slate-700 transition hover:text-orange-600">
                        Back to home
                    </Link>
                    <Link href="/login" className="font-semibold text-slate-700 transition hover:text-orange-600">
                        Already have an account? Login
                    </Link>
                </div>
            </div>
        </main>
    );
}
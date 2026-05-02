import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#fffaf7] px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-3xl flex-col gap-6 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-orange-100">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-600">Contact Us</p>
                <h1 className="text-3xl font-semibold">Get in touch with the Dodo Food team.</h1>
                <p className="text-slate-600">
                    For support, partnerships, or app-related questions, use the contact details your team wants to publish here.
                </p>
                <Link href="/" className="w-fit rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                    Back to home
                </Link>
            </div>
        </main>
    );
}
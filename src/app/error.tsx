"use client";

import Link from "next/link";
import { FiAlertCircle } from "react-icons/fi";

export default function ErrorPage({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-24 text-center">

                {/* Icon */}
                <div className="mb-6 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-red-500 text-white shadow-xl shadow-red-500/20">
                    <FiAlertCircle className="h-10 w-10 sm:h-12 sm:w-12" />
                </div>

                <div className="w-full space-y-4">
                    {/* Heading */}
                    <h1 className="font-lora text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                        Something went wrong
                    </h1>

                    {/* Description */}
                    <p className="mx-auto max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 font-inter">
                        We encountered an unexpected error while loading the page.
                        Please try refreshing or return home.
                    </p>

                    {/* Error message */}
                    {error?.message && (
                        <pre className="mx-auto max-w-xl overflow-x-auto whitespace-pre-wrap break-words rounded-2xl border border-slate-200 bg-slate-100 p-3 text-left text-xs text-slate-600 sm:p-4 sm:text-sm font-inter">
                            {error.message}
                        </pre>
                    )}

                    {/* Actions */}
                    <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
                        <button
                            type="button"
                            onClick={reset}
                            className="inline-flex w-full items-center justify-center rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 sm:w-auto font-inter"
                        >
                            Retry
                        </button>

                        <Link
                            href="/"
                            className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-400 hover:text-teal-600 sm:w-auto font-inter"
                        >
                            Go home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
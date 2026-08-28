import React from "react";

const ProductDetailsSkeleton = () => {
    return (
        <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
            {/* Back link placeholder */}
            <div className="mb-6 h-4 w-32 animate-pulse rounded bg-secondary" />

            <div className="overflow-hidden rounded-lg border border-border bg-card">
                <div className="grid gap-0 sm:grid-cols-2">
                    {/* Image placeholder */}
                    <div className="h-64 animate-pulse bg-secondary sm:h-full" />

                    {/* Info placeholder */}
                    <div className="flex flex-col gap-4 p-6 sm:p-8">
                        {/* Title */}
                        <div className="flex flex-col gap-2">
                            <div className="h-6 w-3/4 animate-pulse rounded bg-secondary" />
                            <div className="h-3 w-20 animate-pulse rounded bg-secondary" />
                        </div>

                        {/* Price */}
                        <div className="h-8 w-24 animate-pulse rounded bg-secondary" />

                        {/* Specs */}
                        <div className="flex flex-col gap-3 border-t border-border pt-4">
                            <div className="h-4 w-28 animate-pulse rounded bg-secondary" />
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between border-b border-border pb-2 last:border-0"
                                >
                                    <div className="h-3 w-20 animate-pulse rounded bg-secondary" />
                                    <div className="h-3 w-16 animate-pulse rounded bg-secondary" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailsSkeleton;
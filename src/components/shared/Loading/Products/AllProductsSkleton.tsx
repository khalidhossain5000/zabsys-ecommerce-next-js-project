const AllProductsSkeleton = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 md:py-16 xl:py-22">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="space-y-3">
          <div className="h-8 w-40 rounded bg-slate-200 animate-pulse" />
          <div className="h-4 w-72 rounded bg-slate-200 animate-pulse" />
        </div>

        <div className="h-5 w-32 rounded bg-slate-200 animate-pulse" />
      </div>

      {/* Product Skeleton Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-200 bg-white p-4"
          >
            {/* Product placeholder */}
            <div className="h-52 w-full rounded-lg bg-slate-200 animate-pulse" />

            {/* Product info */}
            <div className="mt-5 space-y-3">
              {/* Name */}
              <div className="h-5 w-3/4 rounded bg-slate-200 animate-pulse" />

              {/* Dynamic data fields */}
              <div className="h-4 w-1/2 rounded bg-slate-200 animate-pulse" />

              <div className="h-4 w-2/3 rounded bg-slate-200 animate-pulse" />

              {/* Button */}
              <div className="mt-4 h-10 w-full rounded-lg bg-slate-200 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProductsSkeleton;
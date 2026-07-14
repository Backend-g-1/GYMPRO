const TestimonialsLoading = () => (
  <section className="pb-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="animate-pulse rounded-4xl border border-[var(--border-glass)] bg-[var(--bg-glass)] overflow-hidden p-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-[var(--bg-glass)] sm:h-16 sm:w-16" />
              <div className="space-y-2 flex-1">
                <div className="h-4 w-3/4 rounded bg-[var(--bg-glass)]" />
                <div className="h-3 w-1/2 rounded bg-[var(--bg-glass)]" />
              </div>
            </div>
            <div className="mt-5 flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="h-4 w-4 rounded bg-[var(--bg-glass)]" />
              ))}
            </div>
            <div className="mt-5 space-y-2">
              <div className="h-3 w-full rounded bg-[var(--bg-glass)]" />
              <div className="h-3 w-5/6 rounded bg-[var(--bg-glass)]" />
              <div className="h-3 w-2/3 rounded bg-[var(--bg-glass)]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsLoading;

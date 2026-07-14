const ClassesLoading = () => (
  <section className="pb-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="animate-pulse rounded-3xl border border-[var(--border-glass)] bg-[var(--bg-glass)] overflow-hidden">
            <div className="h-48 bg-[var(--bg-glass)] sm:h-56" />
            <div className="space-y-3 p-4">
              <div className="h-4 w-3/4 rounded bg-[var(--bg-glass)]" />
              <div className="h-3 w-1/2 rounded bg-[var(--bg-glass)]" />
              <div className="flex gap-2">
                <div className="h-6 w-20 rounded-lg bg-[var(--bg-glass)]" />
                <div className="h-6 w-20 rounded-lg bg-[var(--bg-glass)]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClassesLoading;

const TrainersLoading = () => {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="
                animate-pulse
                rounded-4xl
                border
                border-[var(--border-glass)]
                bg-[var(--bg-glass)]
                overflow-hidden
              "
            >
              <div className="h-105 bg-[var(--bg-glass)]" />

              <div className="p-6 space-y-4">
                <div className="h-4 w-20 rounded-full bg-[var(--bg-glass)]" />

                <div className="h-6 w-40 rounded-full bg-[var(--bg-glass)]" />

                <div className="h-10 w-32 rounded-xl bg-[var(--bg-glass)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersLoading;

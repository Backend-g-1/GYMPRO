const LoadingFallback = () => (
  <div className="flex min-h-[50vh] items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--border-glass)] border-t-[#00E676]" />
      <p className="text-sm text-[var(--text-tertiary)]">Loading...</p>
    </div>
  </div>
);

export default LoadingFallback;

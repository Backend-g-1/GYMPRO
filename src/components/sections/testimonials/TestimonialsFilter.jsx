import { Search, Star, ChevronDown } from "lucide-react";

const RATINGS = ["All", 5, 4, 3];

const TestimonialsFilter = ({
  search,
  rating,
  onSearchChange,
  onRatingChange,
  totalResults,
}) => {
  return (
    <section className="pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 rounded-3xl border border-[var(--border-glass)] bg-[var(--bg-glass)] p-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]"
            />
            <input
              type="text"
              placeholder="Search by name or review..."
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-primary)] py-3 pl-11 pr-4 text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none transition-all duration-200 focus:border-[#00E676]/50"
            />
          </div>

          {/* Rating Filter */}
          <div className="relative">
            <select
              value={rating}
              onChange={(e) => onRatingChange(e.target.value)}
              className="w-full min-w-[160px] appearance-none rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-primary)] py-3 pl-4 pr-10 text-sm font-medium text-[var(--text-primary)] outline-none transition-all duration-200 focus:border-[#00E676]/50 sm:w-auto"
            >
              {RATINGS.map((r) => (
                <option key={r} value={r}>
                  {r === "All" ? "All Ratings" : `${r} Stars`}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]"
            />
          </div>

          {/* Results Count */}
          <p className="shrink-0 text-sm text-[var(--text-tertiary)]">
            <span className="font-semibold text-[var(--text-primary)]">
              {totalResults}
            </span>{" "}
            {totalResults === 1 ? "review" : "reviews"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsFilter;

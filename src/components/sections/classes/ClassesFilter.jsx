import { Search, ChevronDown } from "lucide-react";

import Container from "../../ui/Container";
import { categories, levels } from "../../../data/classes";

const DAYS = ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const ClassesFilter = ({
  search,
  category,
  level,
  day,
  onSearchChange,
  onCategoryChange,
  onLevelChange,
  onDayChange,
  totalResults,
}) => {
  return (
    <section className="pb-10">
      <Container>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {/* Search */}
          <div className="relative">
            <Search
              size={17}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search classes..."
              className="
                w-full
                rounded-2xl
                border
                border-[var(--border-glass)]
                bg-[var(--bg-glass)]
                px-11
                py-3.5
                text-sm
                outline-none
                text-[var(--text-primary)]
                placeholder:text-[var(--text-tertiary)]
                transition-all
                duration-200
                focus:border-[#00E676]/40
              "
            />
          </div>

          {/* Category */}
          <div className="relative">
            <select
              value={category}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="
                w-full
                appearance-none
                rounded-2xl
                border
                border-[var(--border-glass)]
                bg-[var(--bg-glass)]
                px-4
                py-3.5
                pr-10
                text-sm
                outline-none
                text-[var(--text-primary)]
                transition-all
                duration-200
                focus:border-[#00E676]/40
                cursor-pointer
              "
            >
              <option value="All">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" />
          </div>

          {/* Level */}
          <div className="relative">
            <select
              value={level}
              onChange={(e) => onLevelChange(e.target.value)}
              className="
                w-full
                appearance-none
                rounded-2xl
                border
                border-[var(--border-glass)]
                bg-[var(--bg-glass)]
                px-4
                py-3.5
                pr-10
                text-sm
                outline-none
                text-[var(--text-primary)]
                transition-all
                duration-200
                focus:border-[#00E676]/40
                cursor-pointer
              "
            >
              <option value="All">All Levels</option>
              {levels.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
            <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" />
          </div>

          {/* Day */}
          <div className="relative">
            <select
              value={day}
              onChange={(e) => onDayChange(e.target.value)}
              className="
                w-full
                appearance-none
                rounded-2xl
                border
                border-[var(--border-glass)]
                bg-[var(--bg-glass)]
                px-4
                py-3.5
                pr-10
                text-sm
                outline-none
                text-[var(--text-primary)]
                transition-all
                duration-200
                focus:border-[#00E676]/40
                cursor-pointer
              "
            >
              {DAYS.map((d) => (
                <option key={d} value={d}>{d === "All" ? "Any Day" : d}</option>
              ))}
            </select>
            <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" />
          </div>
        </div>

        <p className="mt-4 text-sm text-[var(--text-secondary)]">
          {totalResults} class{totalResults !== 1 ? "es" : ""} found
        </p>
      </Container>
    </section>
  );
};

export default ClassesFilter;

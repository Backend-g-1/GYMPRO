import { useMemo } from "react";
import { Search, ChevronDown } from "lucide-react";

import Container from "../../ui/Container";
import { trainers } from "../../../data/trainers";

const TrainersFilter = ({
  search,
  specialty,
  onSearchChange,
  onSpecialtyChange,
  totalResults,
}) => {
  const specialties = useMemo(() => {
    const unique = [...new Set(trainers.map((t) => t.specialty))];

    return unique.sort();
  }, []);

  return (
    <section className="pb-10">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={18}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-[var(--text-tertiary)]
              "
            />

            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search trainer..."
              className="
                w-full
                rounded-2xl
                border
                border-[var(--border-glass)]
                bg-[var(--bg-glass)]
                px-12
                py-4
                outline-none
                text-[var(--text-primary)]
                placeholder:text-[var(--text-tertiary)]
                transition-all
                duration-200
                focus:border-[#00E676]/40
                focus:shadow-[0_0_20px_rgba(0,230,118,.08)]
              "
            />
          </div>

          {/* Specialty Filter */}
          <div className="relative min-w-[200px]">
            <select
              value={specialty}
              onChange={(e) => onSpecialtyChange(e.target.value)}
              className="
                w-full
                appearance-none
                rounded-2xl
                border
                border-[var(--border-glass)]
                bg-[var(--bg-glass)]
                px-5
                py-4
                pr-12
                outline-none
                text-[var(--text-primary)]
                transition-all
                duration-200
                focus:border-[#00E676]/40
                cursor-pointer
              "
            >
              <option value="All">All Specialties</option>

              {specialties.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <ChevronDown
              size={18}
              className="
                pointer-events-none
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-[var(--text-tertiary)]
              "
            />
          </div>
        </div>

        <p className="mt-5 text-[var(--text-secondary)]">
          {totalResults} trainer{totalResults !== 1 ? "s" : ""} found
        </p>
      </Container>
    </section>
  );
};

export default TrainersFilter;

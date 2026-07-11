import Container from "../../ui/Container";

const TrainersFilter = ({
  search,
  specialty,
  onSearchChange,
  onSpecialtyChange,
  totalResults,
}) => {
  return (
    <section className="pb-10">
      <Container>
        <div className="flex flex-col gap-4 lg:flex-row">
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search trainer..."
            className="
              flex-1
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-5
              py-4
              outline-none
              text-white
              placeholder:text-gray-500
            "
          />

          <select
            value={specialty}
            onChange={(e) => onSpecialtyChange(e.target.value)}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-5
              py-4
              outline-none
              text-white
            "
          >
            <option value="All">All Specialties</option>

            <option value="Fitness">Fitness</option>

            <option value="Yoga">Yoga</option>

            <option value="Crossfit">Crossfit</option>

            <option value="Bodybuilding">Bodybuilding</option>
          </select>
        </div>

        <p className="mt-5 text-gray-400">{totalResults} trainers found</p>
      </Container>
    </section>
  );
};

export default TrainersFilter;

import Container from "../../ui/Container";

const TrainersHero = () => {
  return (
    <section className="relative py-32">
      <Container>
        <div className="text-center">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-[#00E676]/30
              bg-[#00E676]/10
              px-4
              py-2
              text-sm
              text-[#00E676]
            "
          >
            Elite Coaches
          </span>

          <h1 className="mt-6 text-5xl font-black">Meet Our Trainers</h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Certified professionals ready to help you reach your fitness goals.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default TrainersHero;

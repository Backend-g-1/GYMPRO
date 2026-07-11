import Container from "../../ui/Container";

const TrainerAbout = ({ trainer }) => {
  return (
    <section className="py-10">
      <Container>
        <div
          className="
            grid
            gap-10
            lg:grid-cols-2
          "
        >
          {/* About */}

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
            "
          >
            <h2
              className="
                text-3xl
                font-bold
                text-white
                mb-5
              "
            >
              About {trainer.name}
            </h2>

            <p
              className="
                leading-8
                text-gray-400
              "
            >
              {trainer.bio}
            </p>
          </div>

          {/* Certifications */}

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
            "
          >
            <h2
              className="
                text-3xl
                font-bold
                text-white
                mb-5
              "
            >
              Certifications
            </h2>

            <ul
              className="
                space-y-4
              "
            >
              {trainer.certifications.map((certificate) => (
                <li
                  key={certificate}
                  className="
                        flex
                        items-center
                        gap-3
                        text-gray-300
                      "
                >
                  <span
                    className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          bg-purple-500/20
                          text-purple-400
                        "
                  >
                    ✓
                  </span>

                  {certificate}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrainerAbout;

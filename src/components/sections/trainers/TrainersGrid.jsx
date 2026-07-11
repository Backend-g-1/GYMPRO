import Container from "../../ui/Container";
import TrainerCard from "../../cards/TrainerCard";
import TrainersEmpty from "./TrainersEmpty";

const TrainersGrid = ({ trainers }) => {
  return (
    <section className="pb-24">
      <Container>
        {trainers.length === 0 ? (
          <TrainersEmpty />
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {trainers.map((trainer) => (
              <TrainerCard key={trainer.id} trainer={trainer} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default TrainersGrid;

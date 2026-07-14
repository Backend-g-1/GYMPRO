import Container from "../../ui/Container";
import ClassCard from "./ClassCard";
import ClassesEmpty from "./ClassesEmpty";

const ClassesGrid = ({ classes }) => {
  return (
    <section className="pb-24">
      <Container>
        {classes.length === 0 ? (
          <ClassesEmpty />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {classes.map((item) => (
              <ClassCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default ClassesGrid;

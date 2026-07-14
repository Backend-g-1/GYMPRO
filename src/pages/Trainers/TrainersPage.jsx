import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import TrainersHero from "../../components/sections/trainers/TrainersHero";
import TrainersFilter from "../../components/sections/trainers/TrainersFilter";
import TrainersGrid from "../../components/sections/trainers/TrainersGrid";

import { trainers } from "../../data/trainers";
import Seo from "../../components/ui/Seo";

const TrainersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const specialty = searchParams.get("specialty") || "All";

  const handleSearchChange = (value) => {
    const params = new URLSearchParams(searchParams);

    if (value.trim()) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    setSearchParams(params);
  };

  const handleSpecialtyChange = (value) => {
    const params = new URLSearchParams(searchParams);

    if (value === "All") {
      params.delete("specialty");
    } else {
      params.set("specialty", value);
    }

    setSearchParams(params);
  };

  const filteredTrainers = useMemo(() => {
    return trainers.filter((trainer) => {
      const matchesSearch = trainer.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesSpecialty =
        specialty === "All" || trainer.specialty === specialty;

      return matchesSearch && matchesSpecialty;
    });
  }, [search, specialty]);

  return (
    <>
      <Seo title="Trainers" />
      <TrainersHero />

      <TrainersFilter
        search={search}
        specialty={specialty}
        onSearchChange={handleSearchChange}
        onSpecialtyChange={handleSpecialtyChange}
        totalResults={filteredTrainers.length}
      />

      <TrainersGrid trainers={filteredTrainers} />
    </>
  );
};

export default TrainersPage;

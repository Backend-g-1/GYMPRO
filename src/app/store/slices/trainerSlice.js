import { createSlice } from "@reduxjs/toolkit";
import { trainers as initialTrainers } from "../../../data/trainers";

const trainerSlice = createSlice({
  name: "trainers",
  initialState: {
    list: initialTrainers,
    selectedTrainer: null,
    filters: {
      search: "",
      specialty: "All",
    },
  },
  reducers: {
    setSearch: (state, action) => {
      state.filters.search = action.payload;
    },
    setSpecialty: (state, action) => {
      state.filters.specialty = action.payload;
    },
    selectTrainer: (state, action) => {
      state.selectedTrainer = state.list.find((t) => t.id === Number(action.payload)) || null;
    },
  },
});

export const { setSearch, setSpecialty, selectTrainer } = trainerSlice.actions;

export const selectFilteredTrainers = (state) => {
  const { list, filters } = state.trainers;
  const { search, specialty } = filters;

  return list.filter((trainer) => {
    const matchesSearch = trainer.name.toLowerCase().includes(search.toLowerCase());

    const matchesSpecialty = specialty === "All" || trainer.specialty === specialty;

    return matchesSearch && matchesSpecialty;
  });
};

export default trainerSlice.reducer;

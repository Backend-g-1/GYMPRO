import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import ClassesHero from "../../components/sections/classes/ClassesHero";
import ClassesFilter from "../../components/sections/classes/ClassesFilter";
import ClassesGrid from "../../components/sections/classes/ClassesGrid";

import { classes } from "../../data/classes";
import Seo from "../../components/ui/Seo";

const DAYS_MAP = {
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
  Sunday: 7,
};

const ClassesPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [day, setDay] = useState("All");

  const filtered = useMemo(() => {
    return classes.filter((c) => {
      const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.instructor.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = category === "All" || c.category === category;

      const matchesLevel = level === "All" || c.level === level;

      const matchesDay = day === "All" || c.schedule.some((s) => s.day === day);

      return matchesSearch && matchesCategory && matchesLevel && matchesDay;
    });
  }, [search, category, level, day]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Seo title="Classes" />
      <ClassesHero />

      <ClassesFilter
        search={search}
        category={category}
        level={level}
        day={day}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
        onLevelChange={setLevel}
        onDayChange={setDay}
        totalResults={filtered.length}
      />

      <ClassesGrid classes={filtered} />
    </motion.div>
  );
};

export default ClassesPage;

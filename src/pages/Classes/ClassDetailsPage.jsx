import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Users, CalendarDays, SearchX, Dumbbell } from "lucide-react";

import { classes } from "../../data/classes";
import { trainers } from "../../data/trainers";

import Container from "../../components/ui/Container";
import Breadcrumb from "../../components/ui/Breadcrumb";
import BackButton from "../../components/ui/BackButton";
import Seo from "../../components/ui/Seo";

const DAY_ORDER = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const ClassDetailsPage = () => {
  const { id } = useParams();

  const classItem = classes.find((c) => c.id === Number(id));
  const instructor = classItem
    ? trainers.find((t) => t.id === classItem.instructorId)
    : null;

  if (!classItem) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <Seo title="Class Details" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-4xl border border-[var(--border-glass)] bg-[var(--bg-glass)]">
              <SearchX size={48} className="text-[var(--text-tertiary)]" />
            </div>
            <h1 className="text-4xl font-bold text-[var(--text-primary)]">Class Not Found</h1>
            <p className="mt-4 text-[var(--text-secondary)]">This class doesn't exist or has been removed.</p>
            <Link to="/classes" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#00E676] px-8 py-4 font-semibold text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,230,118,.35)]">
              <ArrowLeft size={18} /> Back to Classes
            </Link>
          </motion.div>
        </Container>
      </section>
    );
  }

  const sortedSchedule = [...classItem.schedule].sort(
    (a, b) => DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day)
  );

  const spotsLeft = classItem.spots - classItem.enrolled;
  const spotsPercent = (classItem.enrolled / classItem.spots) * 100;

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Seo title="Class Details" />
      {/* Breadcrumb + Back */}
      <section className="pt-28 pb-4">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Breadcrumb
              items={[
                { label: "Classes", to: "/classes" },
                { label: classItem.name },
              ]}
            />
            <BackButton to="/classes" label="Back to Classes" />
          </div>
        </Container>
      </section>

      {/* Hero Section */}
      <section className="pb-10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={classItem.image}
                alt={classItem.name}
                className="h-[400px] w-full object-cover lg:h-[500px]"
              />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col justify-center space-y-6"
            >
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[#00E676]/20 px-4 py-1.5 text-sm font-medium text-[#00E676]">
                  {classItem.category}
                </span>
                <span className="rounded-full bg-purple-500/20 px-4 py-1.5 text-sm font-medium text-purple-400">
                  {classItem.level}
                </span>
              </div>

              <h1 className="text-4xl font-bold md:text-5xl">
                {classItem.name}
              </h1>

              <p className="leading-relaxed text-[var(--text-secondary)]">
                {classItem.description}
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-glass)] p-4 text-center">
                  <Clock size={20} className="mx-auto text-[#00E676]" />
                  <p className="mt-2 text-sm font-semibold text-[var(--text-primary)]">{classItem.duration}</p>
                  <p className="text-xs text-[var(--text-tertiary)]">Duration</p>
                </div>

                <div className="rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-glass)] p-4 text-center">
                  <CalendarDays size={20} className="mx-auto text-[#00E676]" />
                  <p className="mt-2 text-sm font-semibold text-[var(--text-primary)]">{classItem.schedule.length}× week</p>
                  <p className="text-xs text-[var(--text-tertiary)]">Sessions</p>
                </div>

                <div className="rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-glass)] p-4 text-center">
                  <Users size={20} className="mx-auto text-[#00E676]" />
                  <p className="mt-2 text-sm font-semibold text-[var(--text-primary)]">{classItem.enrolled}/{classItem.spots}</p>
                  <p className="text-xs text-[var(--text-tertiary)]">Enrolled</p>
                </div>
              </div>

              {/* Spots bar */}
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--text-secondary)]">Availability</span>
                  <span className={spotsLeft > 0 ? "text-[#00E676]" : "text-red-400"}>
                    {spotsLeft > 0 ? `${spotsLeft} spots left` : "Full"}
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-[var(--bg-glass)]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${spotsPercent}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-full rounded-full ${spotsLeft > 3 ? "bg-[#00E676]" : spotsLeft > 0 ? "bg-yellow-400" : "bg-red-500"}`}
                  />
                </div>
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full rounded-2xl bg-[#00E676] py-4 font-semibold text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,230,118,.3)]"
              >
                Book This Class
              </motion.button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Schedule Section */}
      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Schedule Table */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">Weekly Schedule</h2>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Regular weekly sessions for this class.</p>

              <div className="mt-6 space-y-3">
                {sortedSchedule.map((s) => (
                  <div
                    key={s.day}
                    className="flex items-center justify-between rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-glass)] px-5 py-4 glass-card"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00E676]/10 text-sm font-bold text-[#00E676]">
                        {s.day.slice(0, 2)}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-[var(--text-primary)]">{s.day}</p>
                        <p className="text-xs text-[var(--text-tertiary)]">Weekly</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-[var(--text-primary)]">{s.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor */}
            {instructor && (
              <div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)]">Your Instructor</h2>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">Meet the professional leading this class.</p>

                <Link
                  to={`/trainers/${instructor.id}`}
                  className="mt-6 flex items-center gap-5 rounded-3xl border border-[var(--border-glass)] bg-[var(--bg-glass)] p-6 transition-all duration-300 hover:border-[#00E676]/30 glass-card"
                >
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="h-20 w-20 rounded-2xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">{instructor.name}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{instructor.specialty}</p>
                    <div className="mt-2 flex items-center gap-3 text-xs text-[var(--text-tertiary)]">
                      <span>⭐ {instructor.rating}</span>
                      <span>{instructor.experience}</span>
                      <span>{instructor.clients}+ clients</span>
                    </div>
                  </div>
                  <Dumbbell size={20} className="shrink-0 text-[#00E676]" />
                </Link>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-4 w-full rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-glass)] py-4 text-sm font-medium text-[var(--text-primary)] transition-all duration-200 hover:border-[#00E676]/30"
                >
                  View Trainer Profile
                </motion.button>
              </div>
            )}
          </div>
        </Container>
      </section>
    </motion.main>
  );
};

export default ClassDetailsPage;

import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Monitor } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";
import Container from "../ui/Container";
import Button from "../ui/Button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Trainers", path: "/trainers" },
  { label: "Memberships", path: "/memberships" },
  { label: "Classes", path: "/classes" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const modes = [
    { key: "dark", icon: Moon, label: "Dark" },
    { key: "light", icon: Sun, label: "Light" },
    { key: "system", icon: Monitor, label: "System" },
  ];

  const currentIcon = modes.find((m) => m.key === theme)?.icon || Moon;

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          border
          border-[var(--border-glass)]
          bg-[var(--bg-glass)]
          text-[var(--text-secondary)]
          backdrop-blur-xl
          transition-all
          duration-200
          hover:border-[var(--border-glass-hover)]
          hover:text-[var(--text-primary)]
        "
        aria-label="Toggle theme"
      >
        {resolvedTheme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="
                absolute
                right-0
                top-12
                z-50
                w-36
                overflow-hidden
                rounded-2xl
                border
                border-[var(--border-glass)]
                bg-[var(--bg-secondary)]
                p-1
                shadow-2xl
                backdrop-blur-xl
              "
            >
              {modes.map(({ key, icon: Icon, label }) => (
                <button
                  key={key}
                  onClick={() => {
                    setTheme(key);
                    setOpen(false);
                  }}
                  className={`
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    px-3
                    py-2.5
                    text-sm
                    font-medium
                    transition-all
                    duration-150

                    ${
                      theme === key
                        ? "bg-[var(--bg-glass)] text-[var(--text-primary)]"
                        : "text-[var(--text-secondary)] hover:bg-[var(--bg-glass)] hover:text-[var(--text-primary)]"
                    }
                  `}
                >
                  <Icon size={16} />

                  {label}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="
              fixed
              right-0
              top-0
              z-50
              flex
              h-full
              w-72
              flex-col
              border-l
              border-[var(--border-glass)]
              bg-[var(--bg-primary)]
              p-6
              shadow-2xl
            "
          >
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[var(--border-glass)]
                  text-[var(--text-secondary)]
                  hover:text-[var(--text-primary)]
                "
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-2">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `
                      rounded-xl
                      px-4
                      py-3
                      text-lg
                      font-medium
                      transition-all
                      duration-200

                      ${
                        isActive
                          ? "bg-[var(--bg-glass)] text-[#00E676]"
                          : "text-[var(--text-secondary)] hover:bg-[var(--bg-glass)] hover:text-[var(--text-primary)]"
                      }
                    `
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3">
              <Button variant="secondary">Login</Button>

              <Button>Get Started</Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          z-30
          w-full
          transition-all
          duration-300

          ${
            scrolled
              ? "border-b border-[var(--border-glass)] bg-[var(--bg-navbar)] backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold">
              GYM<span className="text-[#00E676]">PRO</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8">
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#00E676]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Desktop Auth */}
              <div className="hidden md:flex gap-3">
                <Button variant="secondary">Login</Button>

                <Button>Get Started</Button>
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="
                  flex
                  md:hidden
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[var(--border-glass)]
                  bg-[var(--bg-glass)]
                  text-[var(--text-secondary)]
                  backdrop-blur-xl
                "
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};

export default Navbar;

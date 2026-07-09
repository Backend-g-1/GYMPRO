import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/Button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Trainers", path: "/trainers" },
    { label: "Memberships", path: "/memberships" },
    { label: "Classes", path: "/classes" },
  ];

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        z-50
        w-full
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }
      `}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <h2 className="text-2xl font-bold">
            GYM<span className="text-[#00E676]">PRO</span>
          </h2>

          <nav className="hidden md:flex gap-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "text-[#00E676]" : "text-gray-300 hover:text-white"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex gap-3">
            <Button variant="secondary">Login</Button>

            <Button>Get Started</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;

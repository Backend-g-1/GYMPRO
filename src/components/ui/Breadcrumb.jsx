import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
      <Link
        to="/"
        className="
          flex
          items-center
          gap-1
          text-[var(--text-tertiary)]
          transition-colors
          duration-200
          hover:text-[#00E676]
        "
      >
        <Home size={14} />

        Home
      </Link>

      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <ChevronRight
            size={14}
            className="text-[var(--text-tertiary)]"
          />

          {item.to ? (
            <Link
              to={item.to}
              className="
                text-[var(--text-tertiary)]
                transition-colors
                duration-200
                hover:text-[#00E676]
              "
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--text-primary)] font-medium">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;

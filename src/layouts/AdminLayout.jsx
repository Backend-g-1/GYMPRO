import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { LayoutDashboard, Dumbbell, CreditCard, CalendarDays, LogOut } from "lucide-react";

import LoadingFallback from "../components/ui/LoadingFallback";

const adminLinks = [
  { label: "Dashboard", path: "/admin", icon: LayoutDashboard, end: true },
  { label: "Trainers", path: "/admin/trainers", icon: Dumbbell },
  { label: "Memberships", path: "/admin/memberships", icon: CreditCard },
  { label: "Classes", path: "/admin/classes", icon: CalendarDays },
];

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Sidebar */}
      <aside
        className="
          fixed
          left-0
          top-0
          z-20
          flex
          h-screen
          w-64
          flex-col
          border-r
          border-[var(--border-glass)]
          bg-[var(--bg-secondary)]
          p-6
        "
      >
        <h2 className="text-2xl font-bold">
          GYM<span className="text-[#00E676]">PRO</span>
          <span className="ml-2 text-sm font-normal text-[var(--text-secondary)]">Admin</span>
        </h2>

        <nav className="mt-10 flex flex-col gap-2">
          {adminLinks.map(({ label, path, icon: Icon, end }) => (
            <NavLink
              key={path}
              to={path}
              end={end}
              className={({ isActive }) =>
                `
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  py-3
                  text-sm
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
              style={{ boxShadow: "var(--shadow-glass-sm)" }}
            >
              <Icon size={18} />

              {label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto">
          <button
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-sm
              font-medium
              text-red-400
              transition-all
              duration-200
              hover:bg-red-500/10
            "
          >
            <LogOut size={18} />

            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default AdminLayout;

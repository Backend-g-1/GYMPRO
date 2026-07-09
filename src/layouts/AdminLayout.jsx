import { Outlet } from "react-router-dom";

import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;

import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "./Footer";

function PublicLayout() {
  return (
    <div className="min-h-screen bg-[#f8f8f6] text-zinc-900">

      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <Navbar />

      {/* =====================================================
          PAGE CONTENT
      ====================================================== */}
      <main>
        <Outlet />
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <Footer />

    </div>
  );
}

export default PublicLayout;
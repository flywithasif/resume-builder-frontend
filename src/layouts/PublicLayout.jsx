import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";

function PublicLayout() {
  return (
    <div className="min-h-screen bg-[#f8f8f6] text-zinc-900">
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default PublicLayout;
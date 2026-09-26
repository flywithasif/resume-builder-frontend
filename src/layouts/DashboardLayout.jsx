import { Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f8f6] text-zinc-900">
      <Navbar
        dashboard
        onMenuClick={() => setSidebarOpen(true)}
      />

      <div className="flex">
        <Sidebar
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="min-w-0 flex-1 lg:ml-[260px]">
          <div className="min-h-[calc(100vh-72px)] p-5 sm:p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;

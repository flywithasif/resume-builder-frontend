import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import DashboardLayout from "../layouts/DashboardLayout";
import Footer from "../layouts/Footer";

function TemplateRouteLayout() {
  const isAuthenticated = Boolean(
    localStorage.getItem("resumely_token"),
  );

  /*
    =========================================================
    GUEST
    =========================================================

    /templates
    /templates/:templateId

    -> Public Navbar
    -> Template Content
    -> Public Footer


    =========================================================
    LOGGED IN
    =========================================================

    /templates
    /templates/:templateId

    -> Dashboard Sidebar
    -> Dashboard Topbar
    -> Template Content
  */

  if (isAuthenticated) {
    return <DashboardLayout />;
  }

  return (
    <div className="min-h-screen bg-[#f8f8f6] text-zinc-900">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default TemplateRouteLayout;
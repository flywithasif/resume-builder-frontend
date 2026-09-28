import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import Footer from "../layouts/Footer";

import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

/* =========================================================
   LANDING
========================================================= */

import Home from "../pages/landing/Home";
import Pricing from "../pages/landing/Pricing";
import About from "../pages/landing/About";
import HowItWorks from "../pages/landing/HowItWorks";
import CoverLetter from "../pages/landing/CoverLetter";

/* =========================================================
   AUTH
========================================================= */

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

/* =========================================================
   DASHBOARD
========================================================= */

import Dashboard from "../pages/dashboard/Dashboard";
import Resumes from "../pages/dashboard/Resumes";
import Profile from "../pages/dashboard/Profile";
import Settings from "../pages/dashboard/Settings";

/* =========================================================
   BUILDER
========================================================= */

import Builder from "../pages/builder/Builder";

/* =========================================================
   TEMPLATES
========================================================= */

import Templates from "../pages/templates/Templates";
import TemplateDetails from "../pages/templates/TemplateDetails";

/* =========================================================
   404
========================================================= */

function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[#f7f7f5] px-6 text-center">
      <div>
        <p className="text-sm font-semibold text-[#ae8954]">
          404
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">
          Page not found
        </h1>

        <p className="mt-3 text-sm text-zinc-500">
          The page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   APP ROUTES
========================================================= */

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =====================================================
            PUBLIC WEBSITE
        ====================================================== */}

        <Route
          element={
            <PublicLayout>
              <Footer />
            </PublicLayout>
          }
        >
          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* TEMPLATES */}
          <Route
            path="/templates"
            element={<Templates />}
          />

          {/* TEMPLATE DETAILS */}
          <Route
            path="/templates/:templateId"
            element={<TemplateDetails />}
          />

          {/* COVER LETTER */}
          <Route
            path="/cover-letter"
            element={<CoverLetter />}
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* HOW IT WORKS */}
          <Route
            path="/how-it-works"
            element={<HowItWorks />}
          />

          {/* PRICING */}
          <Route
            path="/pricing"
            element={<Pricing />}
          />

          {/* =================================================
              AUTH
          ================================================= */}

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

          <Route
            path="/reset-password"
            element={<ResetPassword />}
          />
        </Route>


        {/* =====================================================
            PROTECTED APPLICATION
        ====================================================== */}

        <Route element={<ProtectedRoute />}>

          <Route element={<DashboardLayout />}>

            {/* DASHBOARD */}
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            {/* RESUMES */}
            <Route
              path="/dashboard/resumes"
              element={<Resumes />}
            />

            {/* PROFILE */}
            <Route
              path="/dashboard/profile"
              element={<Profile />}
            />

            {/* SETTINGS */}
            <Route
              path="/dashboard/settings"
              element={<Settings />}
            />

          </Route>


          {/* =================================================
              FULLSCREEN BUILDER
          ================================================= */}

          <Route
            path="/builder"
            element={<Builder />}
          />

          <Route
            path="/builder/:resumeId"
            element={<Builder />}
          />

        </Route>


        {/* =====================================================
            404
        ====================================================== */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
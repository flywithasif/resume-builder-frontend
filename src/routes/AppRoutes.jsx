import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

import PublicLayout from "../layouts/PublicLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import ProtectedRoute from "./ProtectedRoute";
import TemplateRouteLayout from "./TemplateRouteLayout";

/* =========================================================
   SCROLL TO TOP
========================================================= */

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname, search]);

  return null;
}

/* =========================================================
   LANDING
========================================================= */

import Home from "../pages/landing/Home";
import TemplateShowcase from "../pages/landing/TemplateShowcase";
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
import CoverLetters from "../pages/dashboard/CoverLetters";
import Profile from "../pages/dashboard/Profile";
import Settings from "../pages/dashboard/Settings";

/* =========================================================
   RESUME BUILDER
========================================================= */

import Builder from "../pages/builder/Builder";

/* =========================================================
   ACTUAL RESUME TEMPLATES
========================================================= */

import Templates from "../pages/templates/Templates";
import TemplateDetails from "../pages/templates/TemplateDetails";

/* =========================================================
   COVER LETTER
========================================================= */

import CoverLetterTemplates from "../pages/templates/CoverLetterTemplates";
import CoverLetterBuilder from "../pages/coverLetters/CoverLetterBuilder";

/* =========================================================
   TEMPLATE ENTRY

   Guest:
   /templates → Landing Template Showcase

   Logged in:
   /templates → Actual Template Library
========================================================= */

function TemplateEntry() {
  const isAuthenticated = Boolean(
    localStorage.getItem("resumely_token"),
  );

  if (isAuthenticated) {
    return <Templates />;
  }

  return <TemplateShowcase />;
}

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
      <ScrollToTop />

      <Routes>
        {/* =====================================================
            PUBLIC WEBSITE
        ====================================================== */}

        <Route element={<PublicLayout />}>
          {/* HOME */}

          <Route
            path="/"
            element={<Home />}
          />

          {/* =================================================
              TEMPLATE SHOWCASE / TEMPLATE LIBRARY

              Guest:
                Landing showcase

              Logged in:
                Actual template library
          ================================================= */}

          <Route
            path="/templates"
            element={<TemplateEntry />}
          />

          {/* =================================================
              ACTUAL TEMPLATE LIBRARY

              This route always shows the complete
              resume template collection.
          ================================================= */}

          <Route
            path="/templates/all"
            element={<Templates />}
          />

          {/* =================================================
              LANDING TEMPLATE SHOWCASE DIRECT URL
          ================================================= */}

          <Route
            path="/resume-templates"
            element={<TemplateShowcase />}
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
            TEMPLATE DETAILS
        ====================================================== */}

        <Route element={<TemplateRouteLayout />}>
          <Route
            path="/templates/:templateId"
            element={<TemplateDetails />}
          />

          <Route
            path="/cover-letter-templates"
            element={<CoverLetterTemplates />}
          />
        </Route>

        {/* =====================================================
            PROTECTED APPLICATION
        ====================================================== */}

        <Route element={<ProtectedRoute />}>
          {/* =================================================
              DASHBOARD
          ================================================= */}

          <Route element={<DashboardLayout />}>
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/dashboard/resumes"
              element={<Resumes />}
            />

            <Route
              path="/dashboard/cover-letters"
              element={<CoverLetters />}
            />

            <Route
              path="/dashboard/profile"
              element={<Profile />}
            />

            <Route
              path="/dashboard/settings"
              element={<Settings />}
            />
          </Route>

          {/* =================================================
              RESUME BUILDER
          ================================================= */}

          <Route
            path="/builder"
            element={<Builder />}
          />

          <Route
            path="/builder/:resumeId"
            element={<Builder />}
          />

          {/* =================================================
              COVER LETTER BUILDER
          ================================================= */}

          <Route
            path="/cover-letter-builder"
            element={<CoverLetterBuilder />}
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
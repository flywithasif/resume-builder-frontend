import { BrowserRouter, Route, Routes } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

import Home from "../pages/landing/Home";
import Pricing from "../pages/landing/Pricing";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

import Dashboard from "../pages/dashboard/Dashboard";
import Resumes from "../pages/dashboard/Resumes";
import Profile from "../pages/dashboard/Profile";

import Builder from "../pages/builder/Builder";

import Templates from "../pages/templates/Templates";
import TemplateDetails from "../pages/templates/TemplateDetails";

function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 text-center">
      <div>
        <p className="text-sm font-medium text-[#987542]">
          404
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Page not found
        </h1>

        <p className="mt-3 text-sm text-zinc-500">
          The page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/templates" element={<Templates />} />

          <Route
            path="/templates/:templateId"
            element={<TemplateDetails />}
          />

          <Route path="/pricing" element={<Pricing />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

          <Route
            path="/reset-password"
            element={<ResetPassword />}
          />
        </Route>

        <Route element={<ProtectedRoute />}>
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
              path="/dashboard/profile"
              element={<Profile />}
            />

            <Route
              path="/builder/:resumeId"
              element={<Builder />}
            />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

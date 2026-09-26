import {
  LayoutDashboard,
  FileText,
  LayoutTemplate,
  UserRound,
  Settings,
} from "lucide-react";

export const dashboardNavigation = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Resumes",
    path: "/dashboard/resumes",
    icon: FileText,
  },
  {
    label: "Templates",
    path: "/templates",
    icon: LayoutTemplate,
  },
  {
    label: "Profile",
    path: "/dashboard/profile",
    icon: UserRound,
  },
  {
    label: "Settings",
    path: "/dashboard/settings",
    icon: Settings,
  },
];

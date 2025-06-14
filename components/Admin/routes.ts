// ~/constants/sidebarRoutes.ts

import {
  MdDashboard,
  MdOutlinePrivacyTip,
  MdOutlinePeople,
  MdOutlineWorkOutline,
  MdOutlinePayments,
} from "react-icons/md";

export const sidebarRoutes = [
  {
    title: "Dashboards",
    icon: MdDashboard,
    href: "/en/admin/dashboards/overview",
    subRoutes: ["Overview", "System Alert", "Audit Logs"],
  },
  {
    title: "Privacy & CMS",
    icon: MdOutlinePrivacyTip,
    href: "/en/admin/privacy-cms/privacy-policy",
    subRoutes: [
      {
        title: "Static Pages",
        children: ["Privacy Policy", "Terms of Use"],
      },
      "FAQ Help Center",
      "System Notifications",
    ],
  },
  {
    title: "User & Abuse",
    icon: MdOutlinePeople,
    href: "/en/admin/user-abuse",
    subRoutes: ["Employees", "Employers", "Abuse Reports"],
  },
  {
    title: "Jobs & Settings",
    icon: MdOutlineWorkOutline,
    href: "/en/admin/jobs-settings",
    subRoutes: ["Job Listings", "Matching Activity", "Platform Settings"],
  },
  {
    title: "Payments & Roles",
    icon: MdOutlinePayments,
    href: "/en/admin/transactions",
    subRoutes: ["Transactions", "Admin Roles"],
  },
];

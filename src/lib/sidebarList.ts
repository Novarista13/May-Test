import {
  CircleUser,
  Handshake,
  LayoutDashboard,
  Lightbulb,
  Users,
} from "lucide-react";
import { sidebarItem } from "../../types";

export const sidebarItems: sidebarItem[] = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Contacts",
    href: "/contacts",
    icon: CircleUser,
  },
  {
    name: "Leads",
    href: "#",
    icon: Users,
  },
  {
    name: "Opportunity",
    href: "#",
    icon: Lightbulb,
  },
  {
    name: "Customer",
    href: "#",
    icon: Handshake,
  },
];

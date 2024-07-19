import { Building2, User } from "lucide-react";
import { categoryItems, headLineItems, stageTab } from "../../types";
import Companyview from "@/components/dashboard/companyView/companyview";
import EmailTab from "@/components/dashboard/companyView/email/emailTab";
import Categories from "@/components/dashboard/companyView/categories";

export const categorySidebarItems: categoryItems[] = [
  {
    name: "Activity",
  },
  {
    name: "Contact",
  },
  {
    name: "Engagement",
    children: [
      { name: "Tasks" },
      { name: "Emails", component: EmailTab() },
      { name: "Chats" },
      { name: "Notes" },
      { name: "Meetings" },
      { name: "Phone calls" },
    ],
  },
  {
    name: "Partners",
  },
];

export const stageTabItems: stageTab[] = [
  {
    name: "New",
    component: Categories(),
  },
  {
    name: "Proposal Creation",
  },
  {
    name: "Presentation",
  },
  {
    name: "Negotiation",
  },
  {
    name: "Closed",
  },
];

export const dashboardHeadLineItems: headLineItems[] = [
  {
    name: "Individual View",
    icon: User,
  },
  {
    name: "Company View",
    icon: Building2,
    component: Companyview(),
  },
];

import { Rows2, Kanban, LayoutGrid } from "lucide-react";
import { contactListTab, headLineItems } from "../../types";
import List from "@/components/contacts/list/list";
import AllContactsList from "@/components/contacts/list/allContacts/allContactsList";

export const contactListHeadLineItems: contactListTab[] = [
  { name: "All Contacts", component: AllContactsList() },
  { name: "Employee" },
  { name: "Partners" },
  { name: "Customers" },
];

export const contactHeadLineItems: headLineItems[] = [
  {
    name: "List",
    icon: Rows2,
    component: List(),
  },
  {
    name: "Kanban",
    icon: Kanban,
  },
  {
    name: "Grid",
    icon: LayoutGrid,
  },
];

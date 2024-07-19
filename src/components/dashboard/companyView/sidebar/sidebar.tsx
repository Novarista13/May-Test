"use client";

import { Tabs, TabsList } from "@/components/ui/tabs";
import { useCategorySidebarToggle } from "@/hooks/useSidebarToggle";
import { categorySidebarItems } from "@/lib/dashboardTabLists";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import SidebarAccordion from "./sidebarAccordion";
import SidebarItem from "./sidebarItem";
import SidebarToggle from "./sidebarToggle";

export default function CategorySidebar({ children }: { children: ReactNode }) {
  const sidebar = useCategorySidebarToggle();

  return (
    <Tabs defaultValue="Emails" className="flex min-h-screen w-full flex-row">
      <aside
        className={cn(
          "inset-y-0 left-0 z-10 flex w-14 flex-col border-r bg-background h-auto transition-[width] ease-in-out duration-300",
          sidebar?.status === false
            ? "basis-[56px] w-[56px]"
            : "basis-[11rem] w-[11rem]"
        )}
      >
        <nav
          className={`flex flex-col gap-2 sm:py-3 ${
            sidebar?.status === false ? "items-center" : ""
          }`}
        >
          <SidebarToggle
            isOpen={sidebar.status}
            setIsOpen={sidebar.setStatus}
          />
          <TabsList className="bg-white h-full flex flex-col gap-2 py-0 px-0">
            {categorySidebarItems.map((item) =>
              item.children ? (
                <SidebarAccordion
                  isOpen={sidebar.status}
                  item={item}
                  key={item.name}
                />
              ) : (
                <SidebarItem
                  isOpen={sidebar.status}
                  item={item}
                  key={item.name}
                />
              )
            )}
          </TabsList>
        </nav>
      </aside>
      <main className="bg-white px-4 lg:px-6 flex-1 ">{children}</main>
    </Tabs>
  );
}

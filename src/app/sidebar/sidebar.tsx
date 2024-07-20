"use client";

import { useSidebarToggle } from "@/hooks/useSidebarToggle";
import { sidebarItems } from "@/lib/sidebarList";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import SidebarItem from "./sidebarItem";
import SidebarToggle from "./sidebarToggle";

export default function Sidebar({ children }: { children: ReactNode }) {
  const sidebar = useSidebarToggle();

  return (
    <div className="flex min-h-screen w-full  flex-col ">
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex h-screen bg-sky-700 transition-[width] ease-in-out duration-300 flex-1 text-sm",
          sidebar?.status === false ? "w-[65px]" : "w-[13rem]"
        )}
      >
        <nav
          className={`flex flex-col gap-4 px-2 sm:py-5 ${
            sidebar?.status === false ? "items-center" : ""
          }`}
        >
          <SidebarToggle
            isOpen={sidebar.status}
            setIsOpen={sidebar.setStatus}
          />
          <div className="flex flex-col gap-4 px-2 mt-5 sm:py-5">
            {sidebarItems.map((item) => (
              <SidebarItem
                isOpen={sidebar.status}
                item={item}
                key={item.name}
              />
            ))}
          </div>
        </nav>
      </aside>
      <main
        className={`bg-white px-4 lg:px-6 ${
          sidebar?.status === false ? "ml-[80px]" : "ml-[13rem]"
        }`}
      >
        {children}
      </main>
    </div>
  );
}

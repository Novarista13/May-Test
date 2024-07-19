"use client";
import { ChevronLeft } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarToggleProps {
  isOpen: boolean | undefined;
  setIsOpen?: () => void;
}

export default function SidebarToggle({
  isOpen,
  setIsOpen,
}: SidebarToggleProps) {
  return (
    <div className="w-full">
      <Button
        onClick={() => setIsOpen?.()}
        className="rounded-md flex h-9 w-9 shrink-0 gap-2 text-lg font-semibold text-white md:text-base float-end mr-2"
        variant={"ghost"}
        size="icon"
      >
        <ChevronLeft
          className={cn(
            "h-6 w-6 transition-transform ease-in-out duration-700",
            isOpen === false ? "rotate-180" : "rotate-0"
          )}
        />
      </Button>
    </div>
  );
}

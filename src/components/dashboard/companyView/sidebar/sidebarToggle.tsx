"use client";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarToggleProps {
  isOpen: boolean | undefined;
  setIsOpen?: () => void;
}

export default function SidebarToggle({
  isOpen,
  setIsOpen,
}: SidebarToggleProps) {
  return (
    <div className="w-full flex justify-center items-center gap-3 text-sky-600 font-bold">
      {isOpen && <div className="text-sm">Categories</div>}

      <Button
        onClick={() => setIsOpen?.()}
        className="rounded-md flex h-9 w-9 shrink-0 text-lg font-semibold  float-end"
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

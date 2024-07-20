"use client";
import { Input } from "@/components/ui/input";
import { Command, Search } from "lucide-react";
import { useEffect, useRef, LegacyRef } from "react";

const HeaderForm = () => {
  const myRef: LegacyRef<HTMLInputElement> = useRef(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "f" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (myRef.current) myRef.current.focus();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="w-full flex-1">
      <form>
        <div className="relative w-fit">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search"
            className="w-[300px] text-xs appearance-none bg-background pl-8 shadow-none"
            ref={myRef}
          />
          <Command className="bg-muted absolute right-9 p-1 rounded-sm top-2.5 h-5 w-5 text-muted-foreground" />
          <span className="bg-muted absolute flex items-center right-2.5 p-1 rounded-sm top-2.5 h-5 w-5 text-muted-foreground text-sm">
            F
          </span>
        </div>
      </form>
    </div>
  );
};

export default HeaderForm;

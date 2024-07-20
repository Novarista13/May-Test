import { useState } from "react";

export const useSidebarToggle = () => {
  "use client";
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return {
    status:
      typeof window !== "undefined"
        ? localStorage.getItem("sidebar") === "true"
        : isOpen,
    setStatus: () => {
      setIsOpen(!isOpen);
      typeof window !== "undefined" &&
        localStorage.setItem("sidebar", `${!isOpen}`);
    },
  };
};

export const useCategorySidebarToggle = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return {
    status:
      typeof window !== "undefined"
        ? localStorage.getItem("category-sidebar") === "true"
        : isOpen,
    setStatus: () => {
      setIsOpen(!isOpen);
      typeof window !== "undefined" &&
        localStorage.setItem("category-sidebar", `${!isOpen}`);
    },
  };
};

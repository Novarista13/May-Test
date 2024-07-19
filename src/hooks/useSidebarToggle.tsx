import { useEffect, useState } from "react";

export const useSidebarToggle = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return {
    status: localStorage.getItem("sidebar") === "true",
    setStatus: () => {
      setIsOpen(!isOpen);
      localStorage.setItem("sidebar", `${!isOpen}`);
    },
  };
};

export const useCategorySidebarToggle = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return {
    status: localStorage.getItem("category-sidebar") === "true",
    setStatus: () => {
      setIsOpen(!isOpen);
      localStorage.setItem("category-sidebar", `${!isOpen}`);
    },
  };
};



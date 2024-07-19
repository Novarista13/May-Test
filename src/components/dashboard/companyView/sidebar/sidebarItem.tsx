import React from "react";

import { TabsTrigger } from "@/components/ui/tabs";
import { categoryItems } from "../../../../../types";

const SidebarItem = ({
  item,
  isOpen,
}: {
  item: categoryItems;
  isOpen: boolean;
}) => {

  return !isOpen ? null : (
    <TabsTrigger
      value={item.name}
      className="w-full text-black flex gap-2 justify-between rounded-none py-2 px-5 data-[state=active]:bg-sky-100 text-[13px]"
    >
      {item.name}
    </TabsTrigger>
  );
};

export default SidebarItem;

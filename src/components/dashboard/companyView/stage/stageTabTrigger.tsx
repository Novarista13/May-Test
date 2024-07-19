import { TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { stageTab } from "../../../../../types";

const StageTabTrigger = ({ item }: { item: stageTab }) => {
  return (
    <TabsTrigger
      value={item.name}
      className="w-full flex gap-2 justify-between rounded-none py-2 px-5 data-[state=active]:bg-sky-100"
    >
      {item.name}
    </TabsTrigger>
  );
};

export default StageTabTrigger;

"use client";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { stageTabItems } from "@/lib/dashboardTabLists";
import { useState } from "react";
import DealStage from "./stage/dealStage";

const StageTabLine = () => {
  const [currentStage, setCurrentStage] = useState(stageTabItems[0].name);

  return (
    <Tabs
      onValueChange={(value) => setCurrentStage(value)}
      value={currentStage}
      className="divide-y-[9px] divide-[#efefef]"
    >
      <DealStage
        currentStage={currentStage}
        setCurrentStage={setCurrentStage}
      />
      {stageTabItems.map((item) => (
        <TabsContent key={item.name} className="w-full" value={item.name}>
          {item.component ? item.component : "hi"}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default StageTabLine;

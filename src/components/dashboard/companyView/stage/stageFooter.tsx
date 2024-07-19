import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stageTabItems } from "@/lib/dashboardTabLists";

const StageFooter = ({
  currentStage,
  setCurrentStage,
}: {
  currentStage: string;
  setCurrentStage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex flex-row mt-3 items-center">
      <div className="flex flex-row basis-1/2 items-center">
        <p className="text-xs">Move Stage: </p>
        <Select
          value={currentStage}
          onValueChange={(value) => setCurrentStage(value)}
        >
          <SelectTrigger className="focus:ring-0 text-xs focus:ring-offset-0 border-none w-fit">
            <SelectValue placeholder="New" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {stageTabItems.map((item) => (
                <SelectItem
                  className="text-xs"
                  key={item.name}
                  value={item.name}
                >
                  {item.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className=" basis-1/2">
        <div className="float-end flex flex-row items-center gap-x-3">
          <Button className="w-fit h-8 text-xs py-1 bg-sky-700 hover:bg-sky-800">
            <Plus className="mr-2 h-4 w-4" /> Convert
          </Button>
          <Button className="w-fit h-8 text-xs bg-sky-700 hover:bg-sky-800">
            Mark as Completed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StageFooter;

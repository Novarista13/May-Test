import React from "react";
import StageBreadcrumb from "./stageBreadcrumb";
import StageFooter from "./stageFooter";
import StageHeader from "./stageHeader";

const DealStage = ({
  currentStage,
  setCurrentStage,
}: {
  currentStage: string;
  setCurrentStage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className=" w-full border rounded-sm p-3 h-full">
      <StageHeader />
      <StageBreadcrumb />
      <StageFooter
        currentStage={currentStage}
        setCurrentStage={setCurrentStage}
      />
    </div>
  );
};

export default DealStage;

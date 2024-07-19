import React from "react";
import UserDropDown from "./userDropDown";
import { Bell, CircleHelp } from "lucide-react";

const HeaderRightItems = () => {
  return (
    <div className="flex flex-row text-muted-foreground items-center gap-x-6">
      <div className="flex flex-row gap-x-2">
        <Bell className="h-4 w-4 text-muted-foreground" />
        <span className="text-xs">Notifications</span>
      </div>
      <div className="flex flex-row gap-x-2">
        <CircleHelp className="h-4 w-4 text-muted-foreground" />
        <span className="text-xs">Help Center</span>
      </div>
      <UserDropDown />
    </div>
  );
};

export default HeaderRightItems;

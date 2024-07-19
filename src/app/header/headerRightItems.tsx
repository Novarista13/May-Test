import { Bell, CircleHelp } from "lucide-react";
import UserDropDown from "./userDropDown";
import { Button } from "@/components/ui/button";

const HeaderRightItems = () => {
  return (
    <div className="flex flex-row text-muted-foreground items-center gap-x-6">
      <Button variant="ghost" className="flex flex-row gap-x-2">
        <Bell className="h-4 w-4 text-muted-foreground" />
        <span className="text-xs">Notifications</span>
      </Button>
      <Button variant="ghost" className="flex flex-row gap-x-2">
        <CircleHelp className="h-4 w-4 text-muted-foreground" />
        <span className="text-xs">Help Center</span>
      </Button>
      <UserDropDown />
    </div>
  );
};

export default HeaderRightItems;

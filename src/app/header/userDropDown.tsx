import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const UserDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="text-sm cursor-pointer flex flex-row items-center gap-x-2">
          <Avatar>
            <AvatarImage alt={"Dana Morris"} />
            <AvatarFallback>
              {"Dana Morris"
                .split(" ")
                .map((chunk) => chunk[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <span>Dana Morris</span>
          <ChevronDown className="h-5 w-5" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropDown;

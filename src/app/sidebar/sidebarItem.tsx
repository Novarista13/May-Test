import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { sidebarItem } from "../../../types";

const SidebarItem = ({
  item,
  isOpen,
}: {
  item: sidebarItem;
  isOpen: boolean;
}) => {
  return !isOpen ? (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={item.href}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <item.icon className="h-5 w-5" />
            <span className="sr-only">{item.name}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">{item.name}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : (
    <Link
      href={item.href}
      className="flex items-center gap-3 rounded-lg px-5 py-2 text-white transition-colors hover:text-foreground"
    >
      <item.icon className="h-5 w-5" />
      {item.name}
    </Link>
  );
};

export default SidebarItem;

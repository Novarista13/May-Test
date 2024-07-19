import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { leadType } from "../../../../types";

const LeadsDescription = ({ lead }: { lead: leadType }) => {
  return (
    <div className="flex flex-col ml-5 gap-y-1">
      {lead.role && (
        <div className="text-[13px] font-bold text-muted-foreground flex items-center h-7 pl-1">
          {lead.role}
        </div>
      )}
      <div className="text-xs flex flex-row items-center gap-x-2">
        <Avatar className="w-6 h-6">
          <AvatarImage alt={lead.name} />
          <AvatarFallback className="w-6 h-6">
            {lead.name
              .split(" ")
              .map((chunk) => chunk[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <span>{lead.name}</span>
      </div>
      {lead.phone && (
        <div className="text-xs flex flex-row items-center gap-x-3 h-7 pl-1">
          <Phone className="w-4 h-4 text-muted-foreground" />
          <span>{lead.phone}</span>
        </div>
      )}
      <div className="text-xs flex flex-row items-center gap-x-3 pl-1">
        <Mail className="w-4 h-4 text-muted-foreground" />
        <Link href="/" className="underline w-fit text-black p-0">
          {lead.email}
        </Link>
      </div>
    </div>
  );
};

export default LeadsDescription;

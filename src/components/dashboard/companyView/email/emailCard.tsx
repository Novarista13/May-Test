import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import React from "react";
import { mailType } from "../../../../../types";
import { CornerUpLeftIcon, CornerUpRightIcon, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmailCard = ({ mail }: { mail: mailType }) => {
  return (
   
      <Card className="max-w-[520px] rounded-none text-muted-foreground">
        <div className="flex flex-1 flex-col">
          <div className="flex items-start p-4">
            <div className="flex items-start gap-4 text-sm">
              <Avatar className="mt-2">
                <AvatarImage alt={mail.name} />
                <AvatarFallback>
                  {mail.name
                    .split(" ")
                    .map((chunk) => chunk[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-semibold">{mail.name}</div>
                <div className="line-clamp-1 text-xs">to {mail.to}</div>
                <div className="line-clamp-1 text-xs">
                  {format(new Date(mail.date), "PPpp")}
                </div>
              </div>
            </div>
            {mail.date && (
              <div className="ml-auto flex flex-row gap-x-2 text-xs text-muted-foreground">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-8 h-8"
                >
                  <CornerUpLeftIcon className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-8 h-8"
                >
                  <CornerUpRightIcon className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-8 h-8"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
          <Separator />
          <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
            {mail.text}
          </div>
        </div>
      </Card>
 
  );
};

export default EmailCard;

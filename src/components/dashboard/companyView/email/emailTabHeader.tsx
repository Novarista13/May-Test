import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarClock } from "lucide-react";

const EmailTabHeader = () => {
  return (
    <div className="flex flex-row my-3">
      <div className="basis-1/2 flex flex-row gap-2 text-sky-600 text-base font-bold items-center">
        <CalendarClock className="w-6 h-6" />
        <span>Email</span>
        <Badge className="rounded-sm bg-sky-100 text-sky-600">2</Badge>
      </div>
      <div className="basis-1/2">
        <Button
          variant="outline"
          size="sm"
          className="float-end rounded-md h-8 w-auto px-2 text-muted-foreground"
        >
          Write New Email
        </Button>
      </div>
    </div>
  );
};

export default EmailTabHeader;

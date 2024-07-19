import { Button } from "@/components/ui/button";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { contactHeadLineItems } from "@/lib/contactTabLists";
import { ArrowDownWideNarrow, Filter, Plus } from "lucide-react";

import { ReactNode } from "react";
import { Separator } from "../ui/separator";

export function HeadLine({ children }: { children: ReactNode }) {
  return (
    <Tabs
      defaultValue={contactHeadLineItems[0].name}
      className="relative mr-auto w-full"
    >
      <header className="flex h-12 items-center gap-4 border-b ">
        <TabsList className="w-full justify-start bg-transparent p-0 h-12">
          <div className="h-full flex items-center">
            {contactHeadLineItems.map((item) => (
              <TabsTrigger
                value={item.name}
                className="relative text-xs rounded-none border-b-2 border-b-transparent bg-transparent px-4 font-semibold shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none h-full items-center"
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </TabsTrigger>
            ))}
          </div>
        </TabsList>
        <div className=" basis-1/2">
          <div className="float-end flex flex-row items-center gap-x-3 text-muted-foreground">
            <Button variant="outline" className="w-fit h-8 text-xs py-1">
              <ArrowDownWideNarrow className="mr-2 h-4 w-4" /> Sort By
            </Button>
            <Button variant="outline" className="w-fit h-8 text-xs">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Separator orientation="vertical" className="h-8"/>
            <Button className="w-fit h-8 text-xs py-1 bg-sky-700 hover:bg-sky-800">
              <Plus className="mr-2 h-4 w-4" /> Add Contact
            </Button>
          </div>
        </div>
      </header>
      {children}
    </Tabs>
  );
}

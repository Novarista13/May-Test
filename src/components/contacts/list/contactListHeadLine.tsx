import { Button } from "@/components/ui/button";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { contactListHeadLineItems } from "@/lib/contactTabLists";
import { Plus } from "lucide-react";
import { ReactNode } from "react";

export function ContactListHeadLine({ children }: { children: ReactNode }) {
  return (
    <Tabs
      defaultValue={contactListHeadLineItems[0].name}
      className="relative mr-auto w-full"
    >
      <header className="flex h-14 items-center gap-4 border-b ">
        <TabsList className="w-full justify-start bg-transparent p-0 h-12">
          <div className="h-full flex items-center">
            {contactListHeadLineItems.map((item) => (
              <TabsTrigger
                value={item.name}
                key={item.name}
                className="rounded-full text-xs py-2 px-4 data-[state=active]:bg-[#efefef]"
              >
                {item.name}
              </TabsTrigger>
            ))}
          </div>
        </TabsList>
        <div className=" basis-1/2">
          <div className="float-end flex flex-row items-center gap-x-3 text-sky-600">
            <Button variant="ghost" className="w-fit h-8 text-xs py-1">
              <Plus className="mr-2 h-4 w-4" /> Add Categories
            </Button>
          </div>
        </div>
      </header>
      {children}
    </Tabs>
  );
}

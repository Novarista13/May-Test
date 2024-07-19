
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dashboardHeadLineItems } from "@/lib/dashboardTabLists";
import { ReactNode } from "react";

export function HeadLine({ children }: { children: ReactNode }) {
  return (
    <Tabs
      defaultValue={dashboardHeadLineItems[1].name}
      className="relative w-full"
    >
      <header className="flex h-12 items-center gap-4 border-b ">
        <h4 className="font-bold text-sm">Leads</h4>
        <TabsList className="w-full justify-start bg-transparent p-0 h-12 pr-8">
          <div className="h-full flex-auto">
            <div className="float-end h-full">
              {dashboardHeadLineItems.map((item) => (
                <TabsTrigger
                  value={item.name}
                  className="relative rounded-none border-b-2 text-xs border-b-transparent bg-transparent px-4 font-semibold shadow-none transition-none focus-visible:ring-0 data-[state=active]:border-b-sky-600 data-[state=active]:text-sky-600 data-[state=active]:shadow-none h-full items-center"
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </TabsTrigger>
              ))}
            </div>
          </div>
        </TabsList>
      </header>
      {children}
    </Tabs>
  );
}

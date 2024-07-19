import { HeadLine } from "@/components/dashboard/headLine";
import Leads from "@/components/dashboard/leadsSection/leads";
import { dashboardHeadLineItems } from "@/lib/dashboardTabLists";
import { TabsContent } from "@radix-ui/react-tabs";

export default function Home() {
  return (
    <HeadLine>
      <div className="grid grid-cols-4">
        <div className="row-span-5 border-r h-screen">
          <Leads />
        </div>
        <div className="col-span-3 col-start-2 ">
          {dashboardHeadLineItems.map((item) => (
            <TabsContent key={item.name} className="w-full" value={item.name}>
              {item.component ? item.component : "no content"}
            </TabsContent>
          ))}
        </div>
      </div>
    </HeadLine>
  );
}

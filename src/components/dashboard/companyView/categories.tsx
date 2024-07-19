import React from "react";
import CategorySidebar from "./sidebar/sidebar";
import { TabsContent } from "@/components/ui/tabs";
import { categorySidebarItems } from "@/lib/dashboardTabLists";

const Categories = () => {
  return (
    <div className="border">
      <CategorySidebar>
        <div>
          {categorySidebarItems.map((item) =>
            item.children ? (
              item.children.map((child) => (
                <TabsContent
                  key={child.name}
                  className="w-full"
                  value={child.name}
                >
                  {child.component ? child.component : "hi"}
                </TabsContent>
              ))
            ) : (
              <TabsContent key={item.name} className="w-full" value={item.name}>
                {item.component ? item.component : "hi"}
              </TabsContent>
            )
          )}
        </div>
      </CategorySidebar>
    </div>
  );
};

export default Categories;

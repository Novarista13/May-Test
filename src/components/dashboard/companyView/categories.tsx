import { TabsContent } from "@/components/ui/tabs";
import { categorySidebarItems } from "@/lib/dashboardTabLists";
import CategorySidebar from "./sidebar/sidebar";

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
                  {child.component ? child.component : "no content"}
                </TabsContent>
              ))
            ) : (
              <TabsContent key={item.name} className="w-full" value={item.name}>
                {item.component ? item.component : "no content"}
              </TabsContent>
            )
          )}
        </div>
      </CategorySidebar>
    </div>
  );
};

export default Categories;

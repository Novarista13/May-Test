import { contactListHeadLineItems } from "@/lib/contactTabLists";
import { TabsContent } from "@radix-ui/react-tabs";
import { ContactListHeadLine } from "./contactListHeadLine";

const List = () => {
  return (
    <ContactListHeadLine>
      {contactListHeadLineItems.map((item) => (
        <TabsContent key={item.name} className="w-full mt-0" value={item.name}>
          {item.component ? item.component : "hi"}
        </TabsContent>
      ))}
    </ContactListHeadLine>
  );
};

export default List;

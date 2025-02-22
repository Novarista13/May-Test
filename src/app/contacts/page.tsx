import { HeadLine } from "@/components/contacts/headLine";
import { TabsContent } from "@/components/ui/tabs";
import { contactHeadLineItems } from "@/lib/contactTabLists";

const contacts = () => {
  return (
    <HeadLine>
      {contactHeadLineItems.map((item) => (
        <TabsContent key={item.name} className="w-full mt-0" value={item.name}>
          {item.component ? item.component : "no content"}
        </TabsContent>
      ))}
    </HeadLine>
  );
};

export default contacts;

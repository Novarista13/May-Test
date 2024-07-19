import { HeadLine } from "@/components/contacts/headLine";
import { TabsContent } from "@/components/ui/tabs";
import { contactHeadLineItems } from "@/lib/contactTabLists";
import React from "react";

const contacts = () => {
  return (
    <HeadLine>
      {contactHeadLineItems.map((item) => (
        <TabsContent key={item.name} className="w-full mt-0" value={item.name}>
          {item.component ? item.component : "hi"}
        </TabsContent>
      ))}
    </HeadLine>
  );
};

export default contacts;

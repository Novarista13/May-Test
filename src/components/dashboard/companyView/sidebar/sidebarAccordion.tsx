import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TabsTrigger } from "@radix-ui/react-tabs";
import { categoryItems } from "../../../../../types";

const SidebarAccordion = ({
  item,
  isOpen,
}: {
  item: categoryItems;
  isOpen: boolean;
}) => {

  return !isOpen ? null : (
    <Accordion
      type="single"
      collapsible
      className="space-y-2 w-full text-[13px]"
      key={item.name}
      defaultValue="Engagement"
    >
      <AccordionItem value={item.name} className="border-none ">
        <AccordionTrigger
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "group relative flex justify-between text-[13px] duration-200 hover:bg-muted hover:no-underline w-full last:gap-2 rounded-none py-2 px-5 active:bg-sky-200 text-black"
          )}
        >
          <div>{item.name}</div>
        </AccordionTrigger>
        <AccordionContent className="space-y-2 pb-1">
          {item.children?.map((child) => (
            <TabsTrigger
              value={child.name}
              key={child.name}
              className="w-full h-8 flex justify-center rounded-none py-1 px-5 data-[state=active]:bg-[#efefef] text-[13px]  text-black"
            >
              {child.name}
            </TabsTrigger>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SidebarAccordion;

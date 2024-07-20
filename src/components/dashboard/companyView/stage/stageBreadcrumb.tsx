import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { stageTabItems } from "@/lib/dashboardTabLists";

const StageBreadcrumb = () => {
  return (
    <TabsList className="bg-white mx-auto w-full">
      <ol className="breadcrumb ">
        {stageTabItems.map((item) => (
          <TabsTrigger
            value={item.name}
            key={item.name}
            className=" data-[state=active]:before:bg-sky-100 text-[13px] data-[state=active]:after:bg-sky-100 px-2.5 data-[state=active]:first:bg-sky-100 data-[state=active]:last:bg-sky-100 text-black data-[state=active]:text-sky-600"
          >
            <span> {item.name}</span>
          </TabsTrigger>
        ))}
      </ol>
    </TabsList>
  );
};

export default StageBreadcrumb;

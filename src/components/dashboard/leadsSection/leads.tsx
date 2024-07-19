import { leads } from "@/lib/leads";
import LeadBrand from "./leadBrand";
import LeadsDescription from "./leadsDescription";

const Leads = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-6 border-b border-muted-foreground min-h-[440px]">
        <LeadBrand />
        {leads.mutualLeads.map((lead) => (
          <LeadsDescription lead={lead} key={lead.name} />
        ))}
      </div>
      <div className="flex flex-col gap-y-6 border-b border-muted-foreground  min-h-[440px]">
        <div className="font-bold ml-1 mt-2">Other Leads</div>
        {leads.otherLeads.map((lead) => (
          <LeadsDescription lead={lead} key={lead.name} />
        ))}
      </div>
    </div>
  );
};

export default Leads;

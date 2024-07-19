import { leadType } from "../../types";

export const leads: { mutualLeads: leadType[]; otherLeads: leadType[] } = {
  mutualLeads: [
    {
      role: "Processing Owner",
      name: "Cody Fisher",
      email: "robertfox@example.com",
    },
    {
      role: "Opportunity Owner",
      name: "Cody Fisher 1",
      phone: "(848) 221 2999",
      email: "robertfox@example.com",
    },
  ],
  otherLeads: [
    {
      name: "Cody Fisher 2",
      phone: "(848) 221 2999",
      email: "robertfox@example.com",
    },
    {
      name: "Cody Fisher 3",
      phone: "(848) 221 2999",
      email: "robertfox@example.com",
    },
  ],
};

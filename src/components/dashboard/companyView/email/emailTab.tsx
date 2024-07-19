import React from "react";
import EmailCard from "./emailCard";
import { mails } from "@/lib/mails";
import EmailTabHeader from "./emailTabHeader";

const EmailTab = () => {
  return (
    <div className="flex flex-col gap-y-3  pb-3">
      <EmailTabHeader />
      <div className="flex flex-col gap-y-3 items-center">
        {mails.map((mail) => (
          <EmailCard key={mail.name} mail={mail} />
        ))}
      </div>
    </div>
  );
};

export default EmailTab;

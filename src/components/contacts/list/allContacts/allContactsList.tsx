import React from "react";
import { DataTable } from "./dataTable";
import { columns } from "./columns";
import { contacts } from "@/lib/contacts";

const AllContactsList = () => {
  return (
    <div className="my-8 mt-4">
      <DataTable columns={columns} data={contacts} />
    </div>
  );
};

export default AllContactsList;

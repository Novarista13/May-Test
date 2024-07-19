import { contacts } from "@/lib/contacts";
import { columns } from "./columns";
import { DataTable } from "./dataTable";

const AllContactsList = () => {
  return (
    <div className="my-8 mt-4">
      <DataTable columns={columns} data={contacts} />
    </div>
  );
};

export default AllContactsList;

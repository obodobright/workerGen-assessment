import { TbBladeFilled } from "react-icons/tb";
import TaskTable from "./task_table";
import { tableData } from "@/data/user_data";
import { useState } from "react";

export const TableComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the data based on search query
  const filteredData = tableData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.statusReason.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.createdOn.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <section className="rounded-md shadow-md w-full py-4 px-2">
      <div className=" shadow-lg  border w-1/3 relative p-[1px] overflow-hidden bg-gradient-to-r from-[#747CD0] via-[#8AB1DF] to-[#C2CCED] rounded-md">
        <div className="relative flex py-2 px-1 bg-white rounded overflow-hidden ">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Sort, filter and search Copilot"
            className="w-full border-0 outline-none px-1 text-xs"
          />
          <TbBladeFilled className="text-[#747CD0]" />
        </div>
      </div>
      <div>
        <TaskTable data={filteredData} />
      </div>
    </section>
  );
};

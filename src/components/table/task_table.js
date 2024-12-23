import { tableData } from "@/data/user_data";
import { useState } from "react";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

const TaskTable = ({ data }) => {
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortedData, setSortedData] = useState(tableData);

  const handleSort = (column) => {
    const sorted = [...sortedData].sort((a, b) => {
      if (column === "createdOn") {
        const dateA = new Date(a.createdOn);
        const dateB = new Date(b.createdOn);
        return sortDirection === "asc" ? dateA - dateB : dateB - dateA;
      }
      return 0;
    });
    setSortedData(sorted);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  return (
    <>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border-b">
              <div className="px-4 py-2 flex items-center space-x-2">
                <span className="text-sm">Name</span>
                <MdKeyboardArrowDown />
              </div>
            </th>
            <th className="border-b">
              <div className="px-4 py-2 flex items-center space-x-2">
                <span className="text-sm">Topic</span>
                <MdKeyboardArrowDown />
              </div>
            </th>
            <th className="border-b">
              <div className="px-4 py-2 flex items-center space-x-2">
                <span className="text-sm">Status reason</span>
                <MdKeyboardArrowDown />
              </div>
            </th>
            <th className="border-b">
              <div
                role="button"
                onClick={() => handleSort("createdOn")}
                className="px-4 py-2 flex items-center space-x-2"
              >
                <span className="text-sm">Created On</span>
                {sortDirection === "asc" ? <MdOutlineKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">
                <input type="checkbox" className="mr-2" />
                <span className="text-[#5C7499]"> {row.name}</span>
              </td>
              <td className="px-4 py-2 text-sm ">{row.topic}</td>
              <td className="px-4 py-2 text-sm">{row.statusReason}</td>
              <td className="px-4 py-2 text-sm">{row.createdOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TaskTable;

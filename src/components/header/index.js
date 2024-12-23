import { IoIosArrowDown, IoIosTimer } from "react-icons/io";
import { MdInsertChartOutlined, MdAdd } from "react-icons/md";
import { VscRefresh } from "react-icons/vsc";
import { CiBoxList } from "react-icons/ci";

import { AiFillDelete } from "react-icons/ai";
import { FaBars, FaColumns } from "react-icons/fa";
import { BiLogoMicrosoftTeams, MdOutlineAutoDelete } from "react-icons/bi";
import { IoFilter } from "react-icons/io5";

export const HeaderComponent = ({ open }) => {
  return (
    <section
      className={`w-full bg-white rounded shadow-lg ${
        open ? "md:w-full lg:w-[80%]" : "w-[90%]"
      } fixed  top-0 gap-2  z-50 px-4   rounded-   py-4 flex items-center `}
    >
      <section className="flex items-center w-full justify-between">
        <div className="flex cursor-pointer items-center gap-1">
          <p className="text-base font-medium">My open leads</p>
          <IoIosArrowDown fontSize={14} />
        </div>
        <div className="hidden  lg:flex items-center gap-2">
          <div className="flex cursor-pointer items-center gap-1">
            <MdInsertChartOutlined fontSize={14} />

            <p className="text-sm text-[#858585] font-medium">Show Charts</p>
          </div>
          <div className="flex cursor-pointer items-center gap-1">
            <CiBoxList fontSize={14} />

            <p className="text-sm text-[#858585] font-medium">Focused View</p>
          </div>
          <div className="flex cursor-pointer items-center gap-1">
            <MdAdd fontSize={14} />

            <p className="text-sm text-[#858585] font-medium">New</p>
          </div>
          <div className="flex cursor-pointer items-center gap-1">
            <VscRefresh fontSize={14} />

            <p className="text-sm text-[#858585] font-medium">Refresh</p>
          </div>
          <div className="flex cursor-pointer items-center gap-1">
            <BiLogoMicrosoftTeams fontSize={14} color="#484AA2" />

            <p className="text-sm text-[#858585] font-medium">Collaborate</p>
          </div>
          <div className="flex cursor-pointer items-center gap-1">
            <AiFillDelete fontSize={14} />

            <p className="text-sm text-[#858585] font-medium">Delete</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#858585]">|</span>
            <IoIosArrowDown fontSize={14} color="#858585" />
          </div>
          <div
            role="button"
            className="flex items-center gap-1 border border-[#858585] rounded py-1 px-2"
          >
            <IoIosTimer fontSize={12} />
            <p className="text-xs text-[black]">Smart data</p>
          </div>
          <div
            role="button"
            className="flex items-center gap-1  border border-[#858585] rounded py-1 px-2"
          >
            <IoFilter fontSize={12} />
            <p className="text-xs text-[black]">Edit Filters</p>
          </div>
          <div
            role="button"
            className="flex items-center gap-1  border border-[#858585] rounded py-1 px-2"
          >
            <FaColumns fontSize={12} />
            <p className="text-xs text-[black]">Edit columns</p>
          </div>
        </div>
        <div className="lg:hidden block">
          <FaBars color="#858585" cursor="pointer" />
        </div>
      </section>
    </section>
  );
};

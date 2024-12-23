import Image from "next/image";
import { useState } from "react";
import { BsStars } from "react-icons/bs";
import { LuDot } from "react-icons/lu";
import { AgentModal } from "../modal/agent_modal";

export const ActivityCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section
        onClick={() => setIsOpen(true)}
        role="button"
        className="border py-2 px-3  rounded-2xl my-2 shadow-md border-[#f9f4f4]"
      >
        <div className="flex items-start gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden bg-transparent">
            <Image src={data.img} alt={`${data.name}-img`} width={32} height={32} />
          </div>
          <div>
            <h3 className="text-sm font-semibold ">{data.name}</h3>
            <p className="text-xs flex items-center font-medium text-[#797979] text-blacks">
              {data.company} <LuDot /> ${data.amount} <LuDot /> {data.timedue} days to close
            </p>
          </div>
        </div>
        <div className="bg-[#F8F8FA] rounded-xl pb-2 my-3 ">
          <div className="flex items-center  justify-between">
            <div className="flex items-center px-2 pt-2 gap-1">
              {data.icon}
              <h3 className="text-[9px] font-semibold">{data.message}</h3>
            </div>
            <div className="w-7 h-7 flex items-center justify-center bg-white">
              <BsStars color="#4241A4" />
            </div>
          </div>
        </div>
      </section>
      {isOpen && <AgentModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
};

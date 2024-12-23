import { MdKeyboardArrowRight, MdOutlineMarkEmailUnread } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import Image from "next/image";
import { DetailsModal } from "../modal/details_modal";
import { useState } from "react";

export const ReviewCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="border relative py-2 px-3  rounded-2xl my-2 shadow-md border-[#f9f4f4]">
        <div className="flex items-start gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden bg-red-400">
            <Image src={data.img} alt={`${data.name}-img`} width={32} height={32} />
          </div>
          <div>
            <h3 className="text-sm font-semibold ">{data.name}</h3>
            <p className="text-xs font-medium text-[#797979] text-blacks">{data.position}</p>
          </div>
        </div>
        <div
          role="button"
          onClick={() => setIsOpen(true)}
          className="bg-[#F7F6FF] rounded-2xl pb-3 my-3 "
        >
          <div className="flex items-center  justify-between">
            <div className="flex items-center px-3 pt-3 gap-1">
              {data.icon}
              <h3 className="text-sm font-semibold">{data.msgTitle}</h3>
            </div>
            <div className="w-7 h-7 flex items-center justify-center bg-white">
              <BsStars color="#4241A4" />
            </div>
          </div>
          <p className="text-sm  px-3  font-normal">{data.message}</p>
        </div>
        <div className="flex px-3 pb-2 text-[#797979] items-center font-medium text-sm gap-3">
          <p>{data.schedule}</p>
        </div>
        {data.isLast && (
          <div className="w-10 absolute -right-5 top-[55px] h-10 flex items-center justify-center rounded-full bg-white hover:bg-[whitesmoke] hover:cursor-pointer transition-all shadow-lg border border-gray-300">
            <MdKeyboardArrowRight fontSize={25} />
          </div>
        )}
      </div>
      {isOpen && <DetailsModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
};

// DetailsModal

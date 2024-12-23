import { IoClose } from "react-icons/io5";
import { Modal } from ".";
import Image from "next/image";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { MdContentCopy } from "react-icons/md";
import { BsSignTurnSlightRight } from "react-icons/bs";
import { PiMicrosoftOutlookLogoBold } from "react-icons/pi";
import { useState } from "react";

export const AgentModal = ({ isOpen, onClose }) => {
  const [open, setOpen] = useState(true);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <section className="px-3 py-3">
        <div className="flex items-center justify-end">
          <IoClose onClick={onClose} role="button" color="#B7B7B7" fontSize={20} />
        </div>
        <div className="flex items-center gap-2">
          <Image src="/asset/icons6.png" alt="" width={20} height={20} />
          <h3 className="text-sm font-semibold">Agent Skill</h3>
        </div>
        <div className="w-full shadow-lg bg-white my-3 px-3  py-2 rounded-lg">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Check if on-hand inventory will allow all sales orders to ship without delay
            </p>
            <div role="button" onClick={() => setOpen(!open)}>
              {open ? (
                <IoIosArrowUp className="transition-all" />
              ) : (
                <IoIosArrowDown className="transition-all" />
              )}
            </div>
          </div>
          {open && (
            <div className="mt-3 transition-all space-y- text-sm flex items-center flex-wrap gap-2 text-gray-500">
              <p>when</p> <TextHelper icon={<FaRegUser />} text="any vendor" /> sends an email with
              changes to <TextHelper icon={<TiDocumentText />} text="Confirmed purchase orders" />
              check if the resulting{" "}
              <TextHelper icon={<HiOutlineBars3BottomLeft />} text="on-hand delivery" /> will allow{" "}
              <TextHelper icon={<MdContentCopy />} text="all sales-orders" /> to{" "}
              <TextHelper icon={<BsSignTurnSlightRight />} text="to ship without delay" />. If so,{" "}
              <TextHelper icon={<BsSignTurnSlightRight />} text="Update the purchase order" /> to
              reflect the change
            </div>
          )}
        </div>
        <div className="my-2">
          <div className="flex items-center gap-1">
            <PiMicrosoftOutlookLogoBold color="#3399C8" />
            <p className="text-sm text-gray-700">Enable email access</p>
          </div>
          <p className="text-sm text-gray-500">
            Allow the agent access email inboxes to read mail from known vendors{" "}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className=" w-5/6 px-2 py-1 rounded-md border  ">
            <div className="bg-[#F1F1F1] rounded-full gap-1 px-1 w-fit flex items-center">
              <div className="w-5 text-xs h-5  flex items-center justify-center rounded-full bg-[#F4D9CF] text-black">
                P
              </div>
              <p className="text-xs">purchasing@contoso.com</p>
              <p>|</p>
              <IoClose color="#686868" />
            </div>
          </div>
          <button className="px-2 py-2 rounded-md bg-[#2362DF] text-white text-xs">
            Allow access
          </button>
        </div>
        <div className="gap-4 mt-12 flex items-center justify-end">
          <button
            disabled
            className="bg-[#f0f0f0] text-[#C3C3C3] outline-none px-3 rounded-md py-1 text-sm "
          >
            Activate
          </button>
          <button
            onClick={onClose}
            className="border border-[#C3C3C3] outline-none px-3 rounded-md py-1 text-sm"
          >
            Close
          </button>
        </div>
      </section>
    </Modal>
  );
};

export const TextHelper = ({ text, icon }) => {
  return (
    <div className="px-2 w-fit rounded-full bg-[#EFF4F9]  flex items-center justify-center gap-1">
      <div className="text-[#5583A9]">{icon}</div>
      <p className="text-sm text-[#5583A9]">{text}</p>
    </div>
  );
};

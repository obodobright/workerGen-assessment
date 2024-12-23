import { MdKeyboardArrowRight, MdOutlineMarkEmailUnread } from "react-icons/md";
import { Modal } from ".";
import { FaLinkedin } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { BsStars } from "react-icons/bs";
import { LuPencil } from "react-icons/lu";
import { LuSendHorizontal } from "react-icons/lu";
import { useState } from "react";
import { SlLike, SlDislike } from "react-icons/sl";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Indicator } from "../indicator";

export const DetailsModal = ({ isOpen, onClose }) => {
  const tab = ["Engage", "Research"];
  const [current, setCurrent] = useState(0);

  const info = [
    { title: "Decision Maker", description: "Yes", img: "/asset/icons1.png" },
    { title: "Potential deal Value", description: "$1m", img: "/asset/icons2.png" },
    { title: "Intent", description: "High", img: "/asset/icons3.png" },
  ];
  return (
    <Modal panelClassName="md:max-w-[905px]" isOpen={isOpen} onClose={onClose}>
      <div className="w-full   shadow-lg  border b relative p-[2px] bg-gradient-to-r from-[#747CD0] via-[#8AB1DF] to-[#C2CCED] rounded-md">
        <div className="relative bg-white rounded-md p-4">
          <section className="flex bg- items-center justify-between">
            <div className="flex items-center gap-1">
              <MdOutlineMarkEmailUnread fontSize={20} />
              <h3 className="text-sm font-semibold">Engage with Janes Reyes</h3>
            </div>
            <IoClose onClick={onClose} role="button" color="#B7B7B7" fontSize={20} />
          </section>
          <div className="w-full shadow-lg bg-white my-3 px-3  py-2 rounded-2xl">
            <div className="flex items-start gap-1 ">
              <div className="w-11 flex items-center overflow-hidden justify-center h-11 bg-red-400 rounded-full ">
                <Image alt="img" src="/asset/cor1.jpeg" className="h-full" width={50} height={50} />
              </div>
              <div>
                <h3 className="text-base font-semibold -mb-1">Janes Reyes</h3>
                <div className="flex items-center gap-2">
                  <FaLinkedin color="#2E83A6" />
                  <span className="text-gray-600">|</span>
                  <p className="text-sm text-gray-600 font-medium ">COO, Northwind Traders</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  shadow-lg bg-white my-3 px-3  py-2 rounded-2xl">
            <div className="bg-[#ECECFE] flex justify-between items-center gap-2 px-2 py-2 rounded-md">
              <div className="flex items-center gap-1">
                <BsStars color="#4241A4" />
                <p className="text-sm font-medium text-[#566085]">
                  Jane may be interested in upgrading espresso machines for her{" "}
                  <span className="text-[#A794D0]">in-store coffee shops </span>{" "}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button className="text-xs group gap-1 flex transition-all hover:bg-[#A794D0] items-center  shadow-lg border bg-white border-[#A794D0] px-2 py-1 rounded-md font-medium">
                  <LuPencil className="text-[#A794D0] group-hover:text-white" />
                  <span className="text-[#A794D0] group-hover:text-white">Edit</span>
                </button>
                <button
                  style={{ background: "linear-gradient(to right, #4A51CB, #7B34DC, #B385F5 )" }}
                  className="text-xs  flex items-center gap-1 border bg-white border-[#A794D0] px-2 py-1 rounded-md font-medium"
                >
                  <LuSendHorizontal color="white" />
                  <span className="text-white">Approve and send</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center gap-5  shadow-lg bg-white my-3 px-4  pt-2 rounded-md">
            {tab.map((data, index) => (
              <div
                role="button"
                onClick={() => setCurrent(index)}
                className={`text-sm pb-1 ${
                  current == index ? "text-black border-b-2 border-[#7B34DC]" : "text-gray-500 "
                }`}
                key={index}
              >
                {data}
              </div>
            ))}
          </div>
          <div className="w-full  shadow-lg bg-white my-3 px-3  py-2 rounded-2xl">
            <div className="w-full bg-[#F1F5FF] relative pb-2 rounded-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-[#757DBD] px-4 py-3 text-base font-semibold">
                  Why I picked this lead
                </h3>
                <div className="w-7 h-7 flex items-center relative -top-2 justify-center bg-white">
                  <BsStars color="#4241A4" />
                </div>
              </div>
              <div className="px-3">
                <ul className="list-disc ">
                  <li className="ml-5 text-sm font-normal my-">
                    Jane is a <b>key decision maker</b> and was browsing{" "}
                    <b>`expresso machines` on first Coffee&apos;s website</b>{" "}
                  </li>
                  <li className="ml-5 text-sm font-normal my-">
                    Multiple people at her company have reported `slowness` during{" "}
                    <b>service request</b>
                  </li>
                  <li className="ml-5 text-sm font-normal my-">
                    Northwind Traders currently see{" "}
                    <b>$200M in revenue from their in-store coffee shops</b>
                  </li>
                </ul>
                <div className="  lg:flex  gap-2 items-center grid grid-cols-1 md:grid md:grid-cols-2">
                  {info.map((infos, index) => (
                    <div
                      key={index}
                      className="shadow-lg scale-100 hover:scale-105 transition-all hover:cursor-pointer flex items-center gap-3 w-full lg:max-w-[14rem] bg-white my-3 px-3  py-2 rounded-2xl"
                    >
                      <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                        <Image src={infos.img} alt="icons" width={35} height={35} />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">{infos.title}</h3>
                        <p className="text-base font-bold text-[#724DAE]">{infos.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <section className="flex items-center justify-between">
              <div className="my-3 flex items-center gap-1">
                <div className="border w-5 shadow-lg h-5 rounded bg-[#E6E6E6] flex items-center justify-center border-gray-40">
                  <Image alt="images" src="/asset/icons4.png" width={15} height={15} />
                </div>
                <div className="border w-fit gap-1 bg-[#E6E6E6] flex items-center rounded shadow-lg px-1 py-">
                  <p className="font-normal text-xs text-gray-500 ">1</p>{" "}
                  <span className="text-xs ">|</span>
                  <Image alt="images" src="/asset/icons5.png" width={15} height={15} />
                  <p className="text-xs text-gray-500">D365</p>
                </div>
                <div className="border px-1 shadow-lg  rounded bg-[#E6E6E6] flex items-center justify-center border-gray-40">
                  <span className="text-xs text-gray-500">+2</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="border px-2 shadow-lg  rounded bg-[#E6E6E6] w-fit border-gray-40">
                  <p className="text-xs text-gray-500">AI-generated content may be incorrect</p>
                </div>
                <div className="flex gap-3 items-center">
                  <SlLike role="button" className="hover:text-[#144BA2]" />
                  <SlDislike role="button" className="hover:text-red-500" />
                </div>
              </div>
            </section>
          </div>
          <div className="w-full  shadow-lg bg-white my-3 px-3  py-2 rounded-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">About Jane</h3>
              <MdKeyboardArrowDown role="button" className="text-gray-400" />
            </div>
            <p className="text-xs text-gray-600">
              Jane Reyes, the Chief Operating Officer of Northwind Traders, is a dynamic leader,
              with a proven track record in optimizing operations and enhancing customer
              experiences. Under her guidance, Northwind Traders` in store coffee shops have
              flourised, becoming a hallmark of quality and innovation. Jane`s commitment to
              excellence makes her an ideal partner for First Coffee. She is always seeking top-tier
              equipment to elevate her coffee shops` offerings, ensuring consistent, high-quality
              service.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <p className="text-sm text-gray-700">Showing 1 of 9</p>
              <span className="text-gray-400">|</span>
              <p className="text-sm font-semibold text-[#144BA2]">Show all</p>
            </div>
            <Indicator />
            <div className="flex gap-3 items-center">
              <SlLike role="button" className="hover:text-[#144BA2]" />
              <SlDislike role="button" className="hover:text-red-500" />
            </div>
          </div>
        </div>
        <div className="w-10 absolute -right-5 top-[275px] h-10 flex items-center justify-center rounded-full bg-white hover:bg-[whitesmoke] hover:cursor-pointer transition-all shadow-lg border border-gray-300">
          <MdKeyboardArrowRight fontSize={25} />
        </div>
      </div>
    </Modal>
  );
};

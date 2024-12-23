import { routes } from "@/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa6";
import { HiChevronUpDown } from "react-icons/hi2";
import { AgentModal } from "../modal/agent_modal";
import { useState } from "react";

export const SidebarComponent = ({ isOpen, setIsOpen }) => {
  const [openModal, setOpenModal] = useState(false);

  const router = useRouter();
  const isActive = (link) => {
    const pathname = router?.pathname;
    const links = link?.split("?")[0];

    return pathname == links;
  };

  return (
    <>
      <section className="min-h-screen hidden md:hidden lg:block  border-r border-[grey] bg-[black] overflow-hidden w-full ">
        <nav
          className={` h-[100vh] py-3 bg-[whitesmoke]  overflow-y-auto flex flex-col ${
            isOpen ? "px-" : "pl-4 pr-0"
          }`}
        >
          <div className="mb-2">
            <FaBars color="#858585" onClick={() => setIsOpen(!isOpen)} cursor="pointer" />
          </div>
          <div className="flex-1">
            {routes.map((route, routeIndex) => (
              <div key={routeIndex} className=" my-2">
                {isOpen && <h3 className="text-base px-3 font-semibold my-3 ">{route.category}</h3>}
                {route.routeInfo.map((nav, navIndex) => (
                  <ul key={navIndex}>
                    <li
                      className={` hover:bg-[white] hover:border-l-2 transition-all hover:border-blue-600  ${
                        isOpen ? "py-1" : "py-3"
                      } px-2 mb- ${
                        isActive(nav.link)
                          ? ` bg-[white] border-l-2 border-blue-600  ${
                              isOpen ? "rounded-" : "rounded-[0px] rounded-s-full"
                            } `
                          : ""
                      }`}
                    >
                      {nav.isLink ? (
                        <>
                          <div
                            onClick={() => setOpenModal(!openModal)}
                            className="flex cursor-pointer items-center justify-start gap-2"
                          >
                            <div className="text-[#858585]">{nav.icon}</div>
                            {/* <Image priority src={nav.img} alt={nav.name} width={24} height={24} /> */}
                            <p
                              className={`${
                                !isOpen ? "hidden" : "block"
                              } text-base font-medium leading-6 text-[#858585] 
                        }`}
                            >
                              {nav.name}
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <Link className="flex items-center justify-start gap-2" href={nav.link}>
                            <div className="text-[#858585]">{nav.icon}</div>
                            {/* <Image priority src={nav.img} alt={nav.name} width={24} height={24} /> */}
                            <p
                              className={`${
                                !isOpen ? "hidden" : "block"
                              } text-base font-medium leading-6 text-[#858585] 
                        }`}
                            >
                              {nav.name}
                            </p>
                          </Link>
                        </>
                      )}
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
          {isOpen ? (
            <div className="border flex items-center justify-between">
              <div className="flex items-center justify-start gap-2 rounded py-1 px-1">
                <div className="w-8 h-8 flex items-center bg-[purple] text-white justify-center">
                  S
                </div>
                <h3 className="font-semibold text-base">Sales</h3>
              </div>
              <HiChevronUpDown className="" />
            </div>
          ) : (
            <div className="w-10 h-10 flex items-center bg-[purple] text-white justify-center">
              S
            </div>
          )}
        </nav>
      </section>
      {openModal && <AgentModal isOpen={openModal} onClose={() => setOpenModal(false)} />}
    </>
  );
};

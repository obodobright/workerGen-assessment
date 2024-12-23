import { useState } from "react";
import { HeaderComponent } from "../header";
import { SidebarComponent } from "../sidebar";

export const ComponentLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <main className="flex items-start justify-start ">
      <aside
        className={`fixed left-0 top-0 z-[999] overflow-hidden  translate-x-0 ${
          isOpen ? "lg:w-[210px]" : "lg:w-[80px]"
        }  `}
      >
        <SidebarComponent isOpen={isOpen} setIsOpen={setIsOpen} />
      </aside>
      <div
        className={`w-full transition-all ${
          isOpen ? "ml-0 md:ml-0 lg:ml-[210px]" : "ml-[80px]"
        } min-h-screen bg-white px-3 `}
      >
        <HeaderComponent open={isOpen} />
        <div className="mt-14">{children}</div>
      </div>
    </main>
  );
};

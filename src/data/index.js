import { FaBars, FaArrowDownUpAcrossLine } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { HiOutlineRectangleStack, HiOutlineDocumentText } from "react-icons/hi2";
import { IoTimeOutline, IoDocumentTextOutline } from "react-icons/io5";
import { SlPin, SlNotebook } from "react-icons/sl";
import { MdOutlineRocketLaunch, MdProductionQuantityLimits } from "react-icons/md";
import { TbChartArrowsVertical, TbUserExclamation } from "react-icons/tb";
// TbUserExclamation
import { AiOutlineUser } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { TbFileInvoice, TbActivity } from "react-icons/tb";
import { TfiAnnouncement } from "react-icons/tfi";
import { VscFileSymlinkFile } from "react-icons/vsc";
import { MdOutlineRealEstateAgent } from "react-icons/md";

export const routes = [
  {
    category: "General",
    routeInfo: [
      {
        name: "Home",
        link: "/",
        icon: <GoHome />,
      },
      { name: "Recent", link: "/recent", icon: <IoTimeOutline />, isDropDown: true },
      { name: "Pinned", link: "/pinned", icon: <SlPin />, isDropDown: true },
      {
        name: "Agent Skilled",
        link: "#",
        icon: <MdOutlineRealEstateAgent />,
        isLink: true,
        isDropDown: true,
      },
    ],
  },
  {
    category: "My Work",
    routeInfo: [
      {
        name: "Sales Accelerator",
        link: "/sales-accelerator",
        icon: <MdOutlineRocketLaunch />,
      },
      {
        name: "Dashboards",
        link: "/recent",
        icon: <FaArrowDownUpAcrossLine />,
        isDropDown: false,
      },
      {
        name: "Activities",
        link: "/pinned",
        icon: <TbActivity />,
        isDropDown: false,
      },
    ],
  },
  {
    category: "Customers",
    routeInfo: [
      { name: "Accounts", link: "/accounts", icon: <HiOutlineRectangleStack /> },
      {
        name: "Contacts",
        link: "/recent",

        icon: <AiOutlineUser />,

        isDropDown: false,
      },
    ],
  },
  {
    category: "Sales",
    routeInfo: [
      {
        name: "Leads",
        link: "/leads",

        icon: <BsTelephone />,
      },
      { name: "Opportunities", link: "/recent", icon: <SlNotebook />, isDropDown: false },
      { name: "Competitors", link: "/competitors", icon: <TbFileInvoice /> },
    ],
  },
  {
    category: "Collateral",
    routeInfo: [
      {
        name: "Quotes",
        link: "/quotes",
        icon: <IoDocumentTextOutline />,
      },
      { name: "Orders", link: "/recent", icon: <TbUserExclamation />, isDropDown: false },
      { name: "Invoices", link: "/invoices", icon: <HiOutlineDocumentText /> },
      {
        name: "Products",
        link: "/recent",
        icon: <MdProductionQuantityLimits />,
        isDropDown: false,
      },
      { name: "Sales Literature", link: "/sales", icon: <TbChartArrowsVertical /> },
    ],
  },
  {
    category: "Marketing",
    routeInfo: [
      { name: "Marketing Lists", link: "/marketing-list", icon: <TfiAnnouncement /> },
      { name: "Quick Campaigns", link: "/recent", icon: <VscFileSymlinkFile />, isDropDown: false },
    ],
  },
  {
    category: "Performance",
    routeInfo: [{ name: "Analytics", link: "/analytics", icon: <TfiAnnouncement /> }],
  },
];

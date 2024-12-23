import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";

export const userData = [
  {
    img: "/asset/cor1.jpeg",
    name: "Jane Reyes",
    position: "COO Northwind Traders",
    msgTitle: "Engage with Jane Reyes",
    message: "Jane may be interested in upgrading expresso machines for her in store coffee shops",
    icon: <MdOutlineMarkEmailUnread />,
    schedule: "Expand Business High buying interest",
  },
  {
    img: "/asset/cor2.jpeg",
    name: "Allian Munger",
    position: "Head of Real Estate Development Confoso Coffee",
    msgTitle: "Prepare meeting with Allan",
    message:
      "Prepare for high buying intent meeting Copilot scheduled for 2PM regarding upgrading service contract",
    icon: <FaRegCalendarAlt />,
    schedule: "Upcoming Meeting  Due today",
    isLast: true,
  },
];

export const activityData = [
  {
    img: "/asset/comp1.png",
    name: "Cafe A100 for Woodland Bank",
    company: "Woodland Bank",
    amount: "280,000",
    message: "Review Draft and reply to Chris Naido",
    icon: <MdOutlineMarkEmailUnread />,
    timeDue: "8",
  },
  {
    img: "/asset/comp2.jpeg",
    timeDue: "12",
    name: "Partnership opportunity for Fabrikam",
    company: "Fabrikam",
    amount: "5,000,000",
    message: "Prepare me for Fabrikam's key stakeholder meeting",
    icon: <FaRegCalendarAlt />,
  },
];

export const tableData = [
  {
    name: "Windford Asher",
    topic: "Cafe A100 for commercial use",
    statusReason: "New",
    createdOn: "2024-12-10 2:45pm",
  },
  {
    name: "Josia Love",
    topic: "Upgrading service plan",
    statusReason: "New",
    createdOn: "2024-12-15 5:45pm",
  },
  {
    name: "Harrison Curtis",
    topic: "Issue with throughput",
    statusReason: "New",
    createdOn: "2024-12-01 2:05pm",
  },
  {
    name: "Jermaine Bernett",
    topic: "New roaster in distribution facility",
    statusReason: "New",
    createdOn: "2024-12-01 4:00pm",
  },
  {
    name: "Gerrald Stephens",
    topic: "Concerns on current machines",
    statusReason: "New",
    createdOn: "2024-12-01 2:45pm",
  },
  {
    name: "Halle Griffiths",
    topic: "Expanding business",
    statusReason: "New",
    createdOn: "2024-12-01 12:15pm",
  },
  {
    name: "Racheal Micheal",
    topic: "Addressing service concerns",
    statusReason: "New",
    createdOn: "2024-12-01 18:30pm",
  },
  {
    name: "Alex Baker",
    topic: "Premium coffee beans",
    statusReason: "New",
    createdOn: "2024-12-01 14:45pm",
  },
  {
    name: "Lily Pyles",
    topic: "Cafe A100 bulk rate",
    statusReason: "New",
    createdOn: "2024-12-01 5:51pm",
  },
];

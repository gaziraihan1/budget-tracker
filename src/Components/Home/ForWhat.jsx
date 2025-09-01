import React from "react";

import {
  HiOutlineCash,
  HiOutlineClipboardList,
  HiOutlineChartBar,
  HiOutlineExclamationCircle,
  HiOutlinePresentationChartLine,
  HiOutlineDeviceMobile,
} from "react-icons/hi";
import HomeContent from "../HomeContent/HomeContent";

const forWhat = [
  {
    title: "Lack of Expense Awareness",
    description:
      "Small daily expenses add up quickly, making saving harder.",
    icon: <HiOutlineCash className="text-2xl lg:text-3xl text-blue-500 mx-auto mb-3" />,
  },
  {
    title: "Difficulty in Budget Planning",
    description:
      "Without a clear system, budgeting feels overwhelming and confusing.",
    icon: (
      <HiOutlineClipboardList className="text-2xl lg:text-3xl text-green-500 mx-auto mb-3" />
    ),
  },
  {
    title: "Unorganized Records",
    description:
      "Relying on memory or random notes leads to messy finances.",
    icon: (
      <HiOutlineChartBar className="text-2xl lg:text-3xl text-yellow-500 mx-auto mb-3" />
    ),
  },
  {
    title: "Overspending Habits",
    description:
      "Without tracking, it’s easy to spend more than you earn.",
    icon: (
      <HiOutlineExclamationCircle className="text-2xl lg:text-3xl text-red-500 mx-auto mb-3" />
    ),
  },
  {
    title: "Lack of Visualization",
    description:
      "Numbers alone don’t give a clear picture of your finances.",
    icon: (
      <HiOutlinePresentationChartLine className="text-2xl lg:text-3xl text-purple-500 mx-auto mb-3" />
    ),
  },
  {
    title: "No Centralized Tool",
    description:
      "Most tools are scattered or complex; people need one simple solution.",
    icon: (
      <HiOutlineDeviceMobile className="text-2xl lg:text-3xl text-indigo-500 mx-auto mb-3" />
    ),
  },
];


const ForWhat = () => {
  return (
    <HomeContent
      contentTitle={"Why you should chose it"}
      mapContent={forWhat}
      bgColor="bg-gradient-to-tl from-blue-200 via-indigo-300 to-purple-400
"

    />
  );
};

export default ForWhat;

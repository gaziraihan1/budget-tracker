import React from "react";

import { 
  HiOutlineCash, 
  HiOutlineClipboardList, 
  HiOutlineChartBar, 
  HiOutlineExclamationCircle, 
  HiOutlinePresentationChartLine, 
  HiOutlineDeviceMobile 
} from "react-icons/hi";
import HomeContent from "../HomeContent/HomeContent";

const forWhat = [
  {
    title: "Lack of Expense Awareness",
    description:
      "Most people don’t realize how much they spend on small, everyday items. These small amounts add up, making it hard to save at the end of the month.",
    icon: <HiOutlineCash className="text-4xl text-blue-500 mx-auto mb-3" />,
  },
  {
    title: "Difficulty in Budget Planning",
    description:
      "Without a clear system, setting and sticking to a budget feels overwhelming. Many people give up because they don’t know how to track their spending properly.",
    icon: (
      <HiOutlineClipboardList className="text-4xl text-green-500 mx-auto mb-3" />
    ),
  },
  {
    title: "Unorganized Records",
    description:
      "People often rely on memory or random notes to track expenses, which leads to confusion and inaccurate financial records.",
    icon: <HiOutlineChartBar className="text-4xl text-yellow-500 mx-auto mb-3" />,
  },
  {
    title: "Overspending Habits",
    description:
      "Without regular tracking, it’s easy to spend more than you earn. Overspending creates financial stress and prevents healthy saving.",
    icon: (
      <HiOutlineExclamationCircle className="text-4xl text-red-500 mx-auto mb-3" />
    ),
  },
  {
    title: "Lack of Visualization",
    description:
      "Numbers on paper or in the mind are hard to interpret. Without charts or summaries, people struggle to understand their financial situation clearly.",
    icon: (
      <HiOutlinePresentationChartLine className="text-4xl text-purple-500 mx-auto mb-3" />
    ),
  },
  {
    title: "No Centralized Tool",
    description:
      "Existing tools are often too complicated, scattered across multiple apps, or not personalized. People need a simple, all-in-one place to manage their budget.",
    icon: (
      <HiOutlineDeviceMobile className="text-4xl text-indigo-500 mx-auto mb-3" />
    ),
  },
];

const ForWhat = () => {
  return (
    <HomeContent contentTitle={'Why This is for you'} mapContent={forWhat}/>
  );
};

export default ForWhat;

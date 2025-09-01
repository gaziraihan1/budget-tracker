import React from "react";
import {
  HiOutlinePlusCircle,
  HiOutlineTag,
  HiOutlineChartPie,
  HiOutlineCalendar,
  HiOutlineDeviceMobile,
} from "react-icons/hi";
import HomeContent from "../HomeContent/HomeContent";

const featureData = [
  {
    title: "Quick Records",
    description: "Add income and expense records in just a few clicks.",
    icon: <HiOutlinePlusCircle className="text-4xl text-blue-500 mx-auto mb-3" />,
  },
  {
    title: "Categorize Spending",
    description: "Categorize spending (food, transport, bills, shopping, etc.).",
    icon: <HiOutlineTag className="text-4xl text-green-500 mx-auto mb-3" />,
  },
  {
    title: "Visualize Data",
    description: "Visualize data with charts and summaries.",
    icon: <HiOutlineChartPie className="text-4xl text-yellow-500 mx-auto mb-3" />,
  },
  {
    title: "Track Budgets",
    description: "Set monthly budgets and track progress.",
    icon: <HiOutlineCalendar className="text-4xl text-purple-500 mx-auto mb-3" />,
  },
  {
    title: "Secure Access",
    description: "Access your profile securely from any device.",
    icon: <HiOutlineDeviceMobile className="text-4xl text-indigo-500 mx-auto mb-3" />,
  },
];


const Feature = () => {
  return (
    <HomeContent contentTitle={'What feature available'} mapContent={featureData}/>
  );
};

export default Feature;

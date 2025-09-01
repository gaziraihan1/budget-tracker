import React from "react";

import {
  FiList,
  FiSliders,
  FiEye,
  FiClock,
  FiBarChart2,
  FiTrendingUp,
} from "react-icons/fi";
import Card from "../cards/Card";
import HomeContent from "../HomeContent/HomeContent";

const benefits = [
  {
    icon: (
      <FiList className="text-2xl lg:text-3xl text-indigo-600 group-hover:text-indigo-800 transition-colors" />
    ),
    title: "Clear Expense Tracking",
    description:
      "Easily log and view all your daily expenses in one place, helping you stay aware of where your money goes.",
  },
  {
    icon: (
      <FiSliders className="text-2xl lg:text-3xl text-green-600 group-hover:text-green-800 transition-colors" />
    ),
    title: "Better Budget Control",
    description:
      "Set monthly or weekly budgets and get notified when you’re close to overspending.",
  },
  {
    icon: (
      <FiEye className="text-2xl lg:text-3xl text-yellow-500 group-hover:text-yellow-700 transition-colors" />
    ),
    title: "Financial Awareness",
    description:
      "Gain a complete picture of your income, spending, and savings habits to make smarter financial choices.",
  },
  {
    icon: (
      <FiClock className="text-2xl lg:text-3xl text-blue-500 group-hover:text-blue-700 transition-colors" />
    ),
    title: "Time-Saving & Simple",
    description:
      "No more manual calculations or scattered notes—track everything with just a few clicks.",
  },
  {
    icon: (
      <FiBarChart2 className="text-2xl lg:text-3xl text-purple-600 group-hover:text-purple-800 transition-colors" />
    ),
    title: "Data Visualization",
    description:
      "Understand your finances better with charts and summaries that make complex data easy to grasp.",
  },
  {
    icon: (
      <FiTrendingUp className="text-2xl lg:text-3xl text-pink-600 group-hover:text-pink-800 transition-colors" />
    ),
    title: "Improved Saving Habits",
    description:
      "Stay disciplined with your spending and develop stronger saving habits over time.",
  },
];

const Benefit = () => {
  return (
    <HomeContent
    section={'benefits'}
      contentTitle={"Benefits the app provide"}
      mapContent={benefits}
      bgColor="bg-gradient-to-br from-pink-200 via-rose-300 to-red-400
"
    />
  );
};

export default Benefit;

import React from "react";
import {
  FiSmartphone,
  FiCloud,
  FiUsers,
  FiBell,
  FiLock,
  FiGlobe,
} from "react-icons/fi";
import HomeContent from "../HomeContent/HomeContent";

const futurePlans = [
  {
    icon: (
      <FiSmartphone className="text-2xl lg:text-3xl text-indigo-600 group-hover:text-indigo-800 transition-colors" />
    ),
    title: "Mobile App Integration",
    description:
      "Launch a mobile app version so users can track expenses and budgets on the go.",
  },
  {
    icon: (
      <FiCloud className="text-2xl lg:text-3xl text-green-600 group-hover:text-green-800 transition-colors" />
    ),
    title: "Cloud Sync",
    description:
      "Enable cloud backup and sync across multiple devices for better accessibility.",
  },
  {
    icon: (
      <FiUsers className="text-2xl lg:text-3xl text-yellow-500 group-hover:text-yellow-700 transition-colors" />
    ),
    title: "Shared Budgets",
    description:
      "Allow families, couples, or teams to collaborate and manage shared expenses together.",
  },
  {
    icon: (
      <FiBell className="text-2xl lg:text-3xl text-blue-500 group-hover:text-blue-700 transition-colors" />
    ),
    title: "Smart Notifications",
    description:
      "Provide AI-driven reminders and alerts for bills, overspending, and saving opportunities.",
  },
  {
    icon: (
      <FiLock className="text-2xl lg:text-3xl text-purple-600 group-hover:text-purple-800 transition-colors" />
    ),
    title: "Advanced Security",
    description:
      "Implement biometric login, encryption, and two-factor authentication for user safety.",
  },
  {
    icon: (
      <FiGlobe className="text-2xl lg:text-3xl text-pink-600 group-hover:text-pink-800 transition-colors" />
    ),
    title: "Multi-Currency & Global Support",
    description:
      "Support multiple currencies and localized formats for international users.",
  },
];

const FuturePlan = () => {
  return (
    <HomeContent contentTitle={"Feature in Future"} mapContent={futurePlans} bgColor="bg-gradient-to-bl from-green-200 via-emerald-300 to-teal-400 text-white"
/>
  );
};

export default FuturePlan;

import React from "react";
import {
  HiOutlineLogin,
  HiOutlinePlusCircle,
  HiOutlineChartPie,
  HiOutlineCheckCircle,
} from "react-icons/hi";

const guidelines = [
  {
    step: "1",
    title: "Create an Account",
    description: "Sign up quickly with your email or Google account.",
    icon: <HiOutlineLogin className="text-2xl lg:text-3xl text-white" />,
    bg: "from-blue-500 to-indigo-600",
  },
  {
    step: "2",
    title: "Add Your Records",
    description: "Start adding income and expenses in just a few clicks.",
    icon: <HiOutlinePlusCircle className="text-2xl lg:text-3xl text-white" />,
    bg: "from-green-500 to-emerald-600",
  },
  {
    step: "3",
    title: "Visualize Your Data",
    description: "View charts, graphs, and summaries of your spending.",
    icon: <HiOutlineChartPie className="text-2xl lg:text-3xl text-white" />,
    bg: "from-yellow-500 to-orange-600",
  },
  {
    step: "4",
    title: "Stay on Track",
    description: "Track your progress and reach financial goals easily.",
    icon: <HiOutlineCheckCircle className="text-2xl lg:text-3xl text-white" />,
    bg: "from-purple-500 to-pink-600",
  },
];

const Guidelines = () => {
  return (
    <section id="guidelines" className="w-full lg:w-11/12 2xl:w-10/12 mx-auto px-4 ">
      <h2 className="text-center text-2xl lg:text-2xl 2xl:text-2xl font-bold mb-10">
        How to Use the Website
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 xl:gap-12">
        {guidelines.map((guide, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-2xl shadow-xl bg-gradient-to-r ${guide.bg} text-white transform hover:scale-105 hover:rotate-1 transition-all duration-300`}
          >
            <div className="absolute -top-4 -left-4 bg-white text-gray-800 font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-md">
              {guide.step}
            </div>
            <div className="mb-4 flex justify-center">{guide.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              {guide.title}
            </h3>
            <p className="text-sm text-center opacity-90">
              {guide.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Guidelines;

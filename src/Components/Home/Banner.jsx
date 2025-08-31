import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-green-200 to-blue-200 py-16 lg:mt-1 ">
      <div className="px-6 flex flex-col md:flex-row items-center justify-between gap-10  w-full lg:w-11/12 2xl:w-10/12 mx-auto">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Take Control of Your <span className="text-green-600">Budget</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Track expenses, manage savings, and achieve your financial goals with DailyBudget.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <Link
              to="/register"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-green-700 transition"
            >
              Get Started
            </Link>
            <Link
              to="/budget-tracker"
              className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-100 transition"
            >
              View Demo
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="/budget-img.png"
            alt="Budget illustration"
            className="w-full max-w-md mx-auto drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

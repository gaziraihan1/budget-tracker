import React, { useState } from "react";
import useProfile from "../../hooks/userInfo/useProfile";
import { Link } from "react-router";

const Header = () => {
  const { profile} = useProfile();
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/budget-tracker"}>Your Budget</Link>
      </li>
      {!profile && (
        <>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-white shadow-md px-4 lg:px-0 py-3">
      <div className="w-full lg:w-11/12 2xl:w-10/12 mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">DailyBudget</div>
        <ul className="hidden md:flex gap-6 items-center">{links}</ul>
        {profile && (
          <div className="hidden md:block">
            <button className="bg-red-500 text-white px-4 py-1 rounded-lg">
              Logout
            </button>
          </div>
        )}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-3">
          <ul className="flex flex-col gap-3">{links}</ul>
          {profile && (
            <button className="bg-red-500 text-white w-full py-2 mt-2 rounded-lg">
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;

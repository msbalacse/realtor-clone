import React from "react";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
  const location = useLocation();
  const navigation = useNavigate();
  console.log(location);
  const PathMathRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigation("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-bold text-gray-400 border-b-[3px] border-b-transparent ${
                PathMathRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigation("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-bold text-gray-400 border-b-[3px] border-b-transparent ${
                PathMathRoute("/offers") && "text-black border-b-red-500"
              }`}
              onClick={() => navigation("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-bold text-gray-400 border-b-[3px] border-b-transparent ${
                PathMathRoute("/sign-in") && "text-black border-b-red-500"
              }`}
              onClick={() => navigation("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;

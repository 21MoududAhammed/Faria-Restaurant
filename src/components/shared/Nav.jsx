import { FaCartArrowDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between bg-gray-500  text-white w-full max-w-screen-2xl   items-center px-5 shadow h-16">
        <button
          className="block md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoMenu />
        </button>
        {/* logo / brand name  */}
        <div>
          <p className="text-2xl font-bold">{`Faria's Restaurant`}</p>
        </div>
        {/* others  */}
        <div className=" hidden md:flex items-center justify-center gap-5">
          {/* pages  */}
          <ul className="flex justify-center gap-8">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-black" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-black" : "")}
                to="/menu"
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-black" : "")}
                to="/shop/salad"
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-black" : "")}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <h2 className="text-2xl">
            <FaCartArrowDown />
          </h2>
          <div className="flex items-center gap-2">
            <p>Sign Out</p>
            <h2 className="text-2xl">
              <CgProfile />
            </h2>
          </div>
        </div>
        {/* for mobile device  */}
        <div className=" md:hidden flex justify-center items-center gap-3">
          <h2 className="text-2xl">
            <FaCartArrowDown />
          </h2>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl">
              <CgProfile />
            </h2>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className=" md:hidden fixed z-40 w-full  flex justify-center items-center font-semiBold ">
          <ul className="w-full bg-gray-500 text-white font-semibold text-center py-3">
          <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-black" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-black" : "")}
                to="/menu"
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-black" : "")}
                to="/shop/salad"
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-black" : "")}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

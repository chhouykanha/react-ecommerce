import Bar from "./Bar";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
const Navbar = () => {
  const [isShowMobileNavbar, setIsShowMobileNavbar] = useState(false);

  const handleCloseMobileNavbar = (t) => {
    setIsShowMobileNavbar(t);
  };

  return (
    <>
      <Bar />

      <MobileNavbar
        isOpen={isShowMobileNavbar}
        onCloseNavbar={handleCloseMobileNavbar}
      />

      <header className="bg-white font-jost shadow-sm w-full">
        <div className="px-4 lg:px-40 mx-auto ">
          <div className="flex justify-between items-center py-4">
            <div className="flex space-x-5 items-center">
              <button
                onClick={() => {
                  setIsShowMobileNavbar(true);
                }}
                type="button"
                className="text-2xl block lg:hidden"
              >
                <IoMenu />
              </button>

              <h3 className="font-semibold text-xl">KH</h3>
            </div>
              <nav className="hidden lg:flex gap-5 items-center ml-10">
                <NavLink
                  to="/"
                  className="text-base hover:underline decoration-yellow-600 aria-[current=page]:underline"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/products"
                  className="text-base hover:underline decoration-yellow-600 aria-[current=page]:underline"
                  href=""
                >
                  Products
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-base hover:underline decoration-yellow-600 aria-[current=page]:underline"
                  href=""
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-base hover:underline decoration-yellow-600 aria-[current=page]:underline"
                  href=""
                >
                  About
                </NavLink>
              </nav>

            <div className="flex space-x-4 items-center text-lg">
              <span className="text-primary hover:text-yellow-600 cursor-pointer">
                <FaRegHeart />
              </span>
              <span className="text-primary hover:text-yellow-600 cursor-pointer">
                <FaRegUser />
              </span>
              <span className="text-primary relative hover:text-yellow-600 cursor-pointer">
                <FiShoppingBag />
              </span>
            </div>
          </div>
        </div>
      </header>

     
    </>
  );
};

export default Navbar;

import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MobileNavbar = ({isOpen, onCloseNavbar}) => {
  return (
    <header 
        className={`${isOpen ? '-left-0' : '-left-full'} fixed font-jost  p-5 w-full z-50 top-0 duration-300 transition-all h-screen max-w-xs bg-[#222222] text-white`}>
      <div className="flex justify-end">
        <button
          onClick={() => onCloseNavbar(false)}
          className="w-10 h-10 rounded-full border border-dashed border-white hover:bg-gray-300/40 grid place-items-center"
          type="button"
        >
         <IoMdClose />
        </button>
      </div>

      <nav className="mt-5">
        <ul className="w-full h-px z-10 relative text-base space-y-2">
          <li>
            <NavLink
                          onClick={() => onCloseNavbar(false)}
              to="/"
              className={`flex items-center space-x-2 py-2 px-2 rounded-lg hover:bg-gray-300/20 aria-[current=page]:bg-gray-300/20`}
            >
              <p className="whitespace-nowrap">+ Home</p>
            </NavLink>
          </li>
          
          <li>
            <NavLink
                        onClick={() => onCloseNavbar(false)}
              to="/products"
              className="flex items-center space-x-2 py-2 px-2 rounded-lg hover:bg-gray-300/20 aria-[current=page]:bg-gray-300/20"
            >
              <p className="whitespace-nowrap">+ Products</p>
            </NavLink>
          </li>
          <li>
            <NavLink
            onClick={() => onCloseNavbar(false)}
              to="/contact"
              className="flex items-center space-x-2 py-2 px-2 rounded-lg hover:bg-gray-300/20 aria-[current=page]:bg-gray-300/20"
            >
              <p className="whitespace-nowrap">+ Contact</p>
            </NavLink>
          </li>
          <li>
            <NavLink
            onClick={() => onCloseNavbar(false)}
              to="/about"
              className="flex items-center space-x-2 py-2 px-2 rounded-lg hover:bg-gray-300/20 aria-[current=page]:bg-gray-300/20"
            >
              <p className="whitespace-nowrap">+ About</p>
            </NavLink>
          </li>
        </ul>
      </nav>

    </header>
  );
};

export default MobileNavbar;

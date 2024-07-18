import { createContext, useContext, useState } from "react";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import { useToggle } from "../../context/ToggleContext";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const { isToggled, toggle } = useToggle();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const isSidebarExpanded = isToggled || isHovered;

  return (
    <>
      <aside
        className={`h-screen sticky top-0 transition-transform duration-300 ${
          !isSidebarExpanded ? "transform -translate-x-full sm:translate-x-0" : ""
        } sm:transform-none`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <nav className="h-full flex flex-col bg-[#002245]">
        <div className=" p-5 my-2 flex justify-between items-center text-white font-bold  ">
            <p className="">CMT</p>
          </div> 
          <SidebarContext.Provider value={{ expanded: isSidebarExpanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>
        </nav>
      </aside>
    </>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group  ${
        active
          ? "bg-gradient-to-tr from-red-100 to-orange-200 text-[#f6591c]"
          : "hover:bg-orange-100 hover:text-[#002245] text-[#fff]"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all text-lg ${
          expanded ? "w-32 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-teal-500 ${
            expanded ? "" : "top-2"
          }`}
        ></div>
      )}

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-orange-100 text-orange-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}










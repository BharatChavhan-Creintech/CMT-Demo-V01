import React, { useState } from "react";
import { FaSearch, FaUserCircle, FaCog } from "react-icons/fa";
import { useToggle } from "../../context/ToggleContext";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import { SlBell } from "react-icons/sl";
import { LuMenu } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const DashHeader = () => {
  const { isToggled, toggle ,toggle2} = useToggle();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()

  const handleProfileClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogout = () => {
    toggle2()
    navigate("/")
  };

  return (
    <nav className="bg-white w-full flex justify-between items-center mx-auto px-8 h-20 sticky top-0 z-50">
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={toggle}
          className="p-2 rounded-lg bg-gradient-to-tr from-red-50 to-orange-100 text-[#f6591c]"
        >
          {!isToggled ? <LuMenu size={18} /> : <AiOutlineClose size={18} />}
        </button>
        <div>CMT-LOGO</div>
      </div>

      <div className="flex justify-center items-center gap-4">
        <div className="lg:mr-5 relative">
          <div className="w-2 h-2 bg-orange-600 rounded-full absolute left-3"></div>
          <SlBell size={20} />
        </div>
        <div className="text-lg text-gray-700 lg:block xl:block sm:hidden xs:hidden"><span className="px-2">Hi, </span>Aayansh</div>
        <button
          type="button"
          onClick={handleProfileClick}
          className="flex items-center border rounded-full hover:shadow-lg relative"
        >
          <div className="p-1 rounded-full overflow-hidden w-10">
            <img src="https://i.pravatar.cc/150?img=8" alt="user" className="rounded-full" />
          </div>
          {isModalOpen && (
            <div className="absolute right-0 mt-36 w-48 bg-white rounded-lg shadow-lg p-4 animate-slide-down">
              <div className="flex items-center gap-2 mb-4 cursor-pointer hover:bg-orange-100 hover:text-[#002245] p-2 rounded-md">
                <FaCog size={16} />
                <span>Settings</span>
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer hover:bg-orange-100 hover:text-[#002245] p-2 rounded-md"
                onClick={handleLogout}
              >
                <FaUserCircle size={16} />
                <span>Logout</span>
              </div>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
};

export default DashHeader;

import React from "react";
import Sidebar from "./Components/Sidebar";
import { SidebarItem } from "./Components/Sidebar";
import { RxDashboard } from "react-icons/rx";
import {
  PiStackLight,
  PiCalendarDotsLight,
  PiBookOpenTextLight,
  PiStickerLight,
} from "react-icons/pi";
import { TfiHelpAlt } from "react-icons/tfi";
import { CiSettings } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import DashboardRoute from "../Routes/Dashboard/DashboardRoute";
import DashHeader from "./Components/DashHeader";
import { useToggle } from "../context/ToggleContext";

const Dashboard = () => {
  const {isToggled} = useToggle()

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <section className="flex ">
      <div   className={`bg-[#002245] ${
          isToggled
            ? 'xs:block animate-fadeIn'
            : 'xs:hidden animate-fadeOut'
        } lg:block transition-opacity duration-500 ease-in-out`}  >

  
      <Sidebar>
        <Link to="/">
          <SidebarItem
            icon={<RxDashboard size={24} />}
            text="Dashboard"
            active={currentPath === "/"}
          />
        </Link>
        <Link to="/cases">
          <SidebarItem
            icon={<PiStackLight size={24} />}
            text="Cases"
            alert
            active={currentPath === "/cases"}
          />
        </Link>
        <Link to="/calendar">
          <SidebarItem
            icon={<PiCalendarDotsLight size={24} />}
            text="Calendar"
            active={currentPath === "/calendar"}
          />
        </Link>
        <Link to="/tickets">
          <SidebarItem
            icon={<PiStickerLight size={24} />}
            text="Tickets"
            active={currentPath === "/tickets"}
          />
        </Link>
        <Link to="/report">
          <SidebarItem
            icon={<PiBookOpenTextLight size={24} />}
            text="Report"
            active={currentPath === "/report"}
          />
        </Link>
        <hr className="my-3" />
        <Link to="/settings">
          <SidebarItem
            icon={<CiSettings size={30} />}
            text="Settings"
            active={currentPath === "/settings"}
          />
        </Link>
        <Link to="/help">
          <SidebarItem
            icon={<TfiHelpAlt size={24} />}
            text="Help"
            active={currentPath === "/help"}
          />
        </Link>
      </Sidebar>
      </div>
      
      <div className="w-full bg-[#F1F0F7]">
          <DashHeader/>
         <DashboardRoute/>
      </div>
    </section>
  );
};

export default Dashboard;

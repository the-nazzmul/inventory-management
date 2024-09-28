"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
  Archive,
  CircleDollarSign,
  Clipboard,
  Layout,
  Menu,
  SlidersHorizontal,
  User,
} from "lucide-react";

import React from "react";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div className={sidebarClassNames}>
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
          isSidebarCollapsed ? "px-5" : "px-8"
        }`}
      >
        <div>logo</div>
        <h1
          className={`font-extrabold text-2xl ${
            isSidebarCollapsed ? "hidden" : "block"
          }`}
        >
          NAZZSTOCK
        </h1>
        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* Links Section*/}
      <div className="flex-grow mt-8">
        {/* Links here */}
        <SidebarLink
          href="/dashboard"
          icon={Layout}
          isCollapsed={isSidebarCollapsed}
          label="Dashboard"
        />
        <SidebarLink
          href="/inventory"
          icon={Archive}
          isCollapsed={isSidebarCollapsed}
          label="Inventory"
        />
        <SidebarLink
          href="/products"
          icon={Clipboard}
          isCollapsed={isSidebarCollapsed}
          label="Products"
        />
        <SidebarLink
          href="/expenses"
          icon={CircleDollarSign}
          isCollapsed={isSidebarCollapsed}
          label="Expenses"
        />
        <SidebarLink
          href="/users"
          icon={User}
          isCollapsed={isSidebarCollapsed}
          label="Users"
        />
        <SidebarLink
          href="/settings"
          icon={SlidersHorizontal}
          isCollapsed={isSidebarCollapsed}
          label="Settings"
        />
      </div>

      {/* footer */}
      <div className={`${isSidebarCollapsed? "hidden":"block"} mb-10`}>
        <p className="text-center text-xs text-gray-500">
          &copy; 2024 Nazzstock
        </p>
      </div>
    </div>
  );
};

export default Sidebar;

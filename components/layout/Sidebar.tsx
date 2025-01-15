"use client";

import { toggleSidebar } from "@/redux/slices/sidebarSlice";
import { RootState } from "@/redux/store";
import { SidebarState } from "@/types";
import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";

interface SidebarProps {
  name: keyof SidebarState;
  toggleIcon: React.ReactNode;
  children: React.ReactNode;
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ name, toggleIcon, children }, ref) => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.sidebar[name]);

    const toggle = () => {
      dispatch(toggleSidebar(name));
    };

    return (
      <div
        className={`fixed inset-y-0 right-0 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-40 w-72 bg-white text-gray-900 transition-transform duration-300 ease-in-out sm:w-96 md:hidden`}
        ref={ref}
      >
        <div className="flex justify-start p-4">
          <button onClick={toggle} className="text-2xl">
            {toggleIcon}
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    );
  }
);

Sidebar.displayName = "Sidebar";

export default Sidebar;

"use client";

import { useAppDispatch, useAppSelector } from "../../_redux/hooks";
import { RootState } from "../../_redux/store";
import AccountDropdown from "./AccountDropdown";
import CategoryDropdown from "./CategoryDropdown";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SidebarGroup from "./SidebarGroup";
import SidebarToggle from "./SidebarToggle";

function Header() {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state: RootState) => state.sidebar.mainSidebar);

  return (
    <header className="font-sans bg-primary-700 text-primary-50 sticky top-0 z-50">
      <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div
          className={`flex items-center gap-2 md:gap-4 justify-between h-20 transition-opacity duration-300 ${
            isSidebarOpen ? "opacity-25" : "opacity-100"
          } md:opacity-100`}
        >
          <Logo />
          <CategoryDropdown dispatch={dispatch} />
          <SearchBar />
          <SidebarToggle dispatch={dispatch} />
          <AccountDropdown dispatch={dispatch} />
        </div>
        <SidebarGroup dispatch={dispatch} />
      </div>
    </header>
  );
}
export default Header;

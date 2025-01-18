"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import AccountDropdown from "./AccountDropdown";
import CategoryDropdown from "./CategoryDropdown";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SidebarGroup from "./SidebarGroup";
import SidebarToggle from "./SidebarToggle";

function Header() {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector(
    (state: RootState) => state.sidebar.mainSidebar
  );

  return (
    <header className="sticky top-0 z-50 bg-primary-700 text-white">
      <div className="mx-auto px-4 sm:px-6 md:px-8">
        <div
          className={`flex h-20 items-center justify-between gap-2 transition-opacity duration-300 md:gap-4 ${
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

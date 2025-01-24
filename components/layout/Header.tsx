"use client";

import { useAppDispatch } from "@/redux/hooks";
import AccountDropdown from "./AccountDropdown";
import CategoryDropdown from "./CategoryDropdown";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SidebarGroup from "./SidebarGroup";
import SidebarToggle from "./SidebarToggle";

function Header() {
  const dispatch = useAppDispatch();

  return (
    <header className="sticky top-0 z-50 bg-primary-700 text-white">
      <div className="mx-auto px-4 sm:px-6 md:px-8">
        <div
          className={`flex h-20 items-center justify-between gap-2 md:gap-4`}
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

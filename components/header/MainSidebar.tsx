import { closeAllSidebars, toggleSidebar } from "@/redux/slices/sidebarSlice";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import { forwardRef } from "react";
import {
  HiChevronRight,
  HiOutlineArrowDownTray,
  HiOutlineArrowUpTray,
  HiOutlineSquares2X2,
  HiOutlineUser,
  HiOutlineXMark,
} from "react-icons/hi2";
import Sidebar from "./Sidebar";

const MainSidebar = forwardRef<HTMLDivElement, { dispatch: AppDispatch }>(
  ({ dispatch }, ref) => {
    return (
      <Sidebar name="mainSidebar" toggleIcon={<HiOutlineXMark />} ref={ref}>
        <ul>
          <li
            className="flex cursor-pointer flex-row items-center gap-2 border-b px-2 py-4 hover:bg-primary-50"
            onClick={() => dispatch(toggleSidebar("categorySidebar"))}
          >
            <span className="text-xl">
              <HiOutlineSquares2X2 />
            </span>
            <span>Category</span>
            <span className="ml-auto">
              <HiChevronRight />
            </span>
          </li>
          <li>
            <Link
              href="/account/borrowing"
              className="flex flex-row items-center gap-2 px-2 py-4 hover:bg-primary-50"
              onClick={() => dispatch(closeAllSidebars())}
            >
              <span className="text-xl">
                <HiOutlineArrowDownTray />
              </span>
              <span>Borrowing</span>
            </Link>
          </li>
          <li>
            <Link
              href="/account/lending"
              className="flex flex-row items-center gap-2 px-2 py-4 hover:bg-primary-50"
              onClick={() => dispatch(closeAllSidebars())}
            >
              <span className="text-xl">
                <HiOutlineArrowUpTray />
              </span>
              <span>Lending</span>
            </Link>
          </li>

          <li>
            <Link
              href="/account"
              className="flex flex-row items-center gap-2 border-b px-2 py-4 hover:bg-primary-50"
              onClick={() => dispatch(closeAllSidebars())}
            >
              <span className="text-xl">
                <HiOutlineUser />
              </span>
              <span>Account</span>
            </Link>
          </li>
        </ul>
      </Sidebar>
    );
  }
);

MainSidebar.displayName = "MainSidebar";

export default MainSidebar;

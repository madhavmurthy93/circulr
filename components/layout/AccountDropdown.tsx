import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useAppSelector } from "@/redux/hooks";
import { toggleDropdown } from "@/redux/slices/dropdownSlice";
import { AppDispatch, RootState } from "@/redux/store";
import Link from "next/link";
import { useRef } from "react";
import {
  HiOutlineArrowDownTray,
  HiOutlineArrowUpTray,
  HiOutlineUser,
} from "react-icons/hi2";
import Dropdown from "./Dropdown";

function AccountDropdown({ dispatch }: { dispatch: AppDispatch }) {
  const isOpen = useAppSelector(
    (state: RootState) => state.dropdown.openDropdown === "accountDropdown"
  );
  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideClick([ref], () => {
    if (isOpen) {
      dispatch(toggleDropdown("accountDropdown"));
    }
  });
  return (
    <div className="relative" ref={ref}>
      <button
        className="hidden rounded-md px-3 py-3 hover:bg-primary-600 focus:outline-none focus:ring-1 focus:ring-white md:block"
        onClick={() => dispatch(toggleDropdown("accountDropdown"))}
      >
        <span className="text-2xl text-white">
          <HiOutlineUser />
        </span>
      </button>
      <Dropdown name="accountDropdown" leftOpen={false}>
        <ul>
          <li>
            <Link
              href="/account/borrowing"
              className="flex flex-row items-center gap-2 border-b px-4 py-4 text-gray-900 hover:bg-primary-50"
              onClick={() => dispatch(toggleDropdown("accountDropdown"))}
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
              className="flex flex-row items-center gap-2 border-b px-4 py-4 text-gray-900 hover:bg-primary-50"
              onClick={() => dispatch(toggleDropdown("accountDropdown"))}
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
              className="flex flex-row items-center gap-2 border-b px-4 py-4 text-gray-900 hover:bg-primary-50"
              onClick={() => dispatch(toggleDropdown("accountDropdown"))}
            >
              <span className="text-xl">
                <HiOutlineUser />
              </span>
              <span>Account</span>
            </Link>
          </li>
        </ul>
      </Dropdown>
    </div>
  );
}

export default AccountDropdown;

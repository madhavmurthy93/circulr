import Link from "next/link";
import { useRef } from "react";
import { HiOutlineArrowDownTray, HiOutlineArrowUpTray, HiOutlineUser } from "react-icons/hi2";
import { useOutsideClick } from "../../_hooks/useOutsideClick";
import { useAppSelector } from "../../_redux/hooks";
import { toggleDropdown } from "../../_redux/slices/dropdownSlice";
import { AppDispatch, RootState } from "../../_redux/store";
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
        className="hidden md:block hover:bg-primary-600 rounded-full px-3 py-3"
        onClick={() => dispatch(toggleDropdown("accountDropdown"))}
      >
        <span className="text-2xl">
          <HiOutlineUser />
        </span>
      </button>
      <Dropdown name="accountDropdown" leftOpen={false}>
        <ul>
          <li>
            <Link
              href="/account"
              className="border-b py-4 px-4 flex flex-row gap-2 items-center text-primary-900 hover:bg-primary-50"
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
              href="/account"
              className="border-b py-4 px-4 flex flex-row gap-2 items-center text-primary-900 hover:bg-primary-50"
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
              className="border-b py-4 px-4 flex flex-row gap-2 items-center text-primary-900 hover:bg-primary-50"
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

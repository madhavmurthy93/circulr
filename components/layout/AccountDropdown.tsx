import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useAppSelector } from "@/redux/hooks";
import { toggleDropdown } from "@/redux/slices/dropdownSlice";
import { clearSession, setSession } from "@/redux/slices/sessionSlice";
import { AppDispatch, RootState } from "@/redux/store";
import createClient from "@/services/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import {
  HiArrowRightEndOnRectangle,
  HiArrowRightOnRectangle,
  HiOutlineArrowDownTray,
  HiOutlineArrowUpTray,
  HiOutlineUser,
} from "react-icons/hi2";
import Dropdown from "./Dropdown";

function AccountDropdown({ dispatch }: { dispatch: AppDispatch }) {
  const router = useRouter();
  const session = useAppSelector((state: RootState) => state.session.session);
  const isOpen = useAppSelector(
    (state: RootState) => state.dropdown.openDropdown === "accountDropdown"
  );
  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideClick([ref], () => {
    if (isOpen) {
      dispatch(toggleDropdown("accountDropdown"));
    }
  });

  async function handleLogout() {
    dispatch(toggleDropdown("accountDropdown"));
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(`${error.error}`);
      }
      console.log("Logged out successfully: ", await response.json());
      toast.success("Logged out successfully! Redirecting...");
      dispatch(clearSession());
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error("Error logging out: ", error);
      toast.error(`Error logging out ${error}`);
    }
  }

  useEffect(() => {
    const fetchSession = async () => {
      const supabase = createClient();
      const {
        data: { session },
      } = await supabase.auth.getSession();
      dispatch(setSession(session));
    };

    fetchSession();
  }, [dispatch]);

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
        {session ? (
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
            <li
              className="flex cursor-pointer flex-row items-center gap-2 border-b px-4 py-4 text-gray-900 hover:bg-primary-50"
              onClick={handleLogout}
            >
              <span className="text-xl">
                <HiArrowRightOnRectangle />
              </span>
              <span>Logout</span>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link
                href="/auth/login"
                className="flex flex-row items-center gap-2 border-b px-4 py-4 text-gray-900 hover:bg-primary-50"
                onClick={() => dispatch(toggleDropdown("accountDropdown"))}
              >
                <span className="text-xl">
                  <HiArrowRightEndOnRectangle />
                </span>
                <span>Login</span>
              </Link>
            </li>
          </ul>
        )}
      </Dropdown>
    </div>
  );
}

export default AccountDropdown;

import { useAppSelector } from "@/redux/hooks";
import { clearSession, setSession } from "@/redux/slices/sessionSlice";
import { closeAllSidebars, toggleSidebar } from "@/redux/slices/sidebarSlice";
import { AppDispatch } from "@/redux/store";
import createClient from "@/services/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { forwardRef, useEffect } from "react";
import toast from "react-hot-toast";
import {
  HiArrowRightEndOnRectangle,
  HiArrowRightOnRectangle,
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
    const session = useAppSelector((state) => state.session.session);
    const router = useRouter();
    async function handleLogout() {
      dispatch(closeAllSidebars());
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
      <Sidebar name="mainSidebar" toggleIcon={<HiOutlineXMark />} ref={ref}>
        {session ? (
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
                className="flex flex-row items-center gap-2 px-2 py-4 hover:bg-primary-50"
                onClick={() => dispatch(closeAllSidebars())}
              >
                <span className="text-xl">
                  <HiOutlineUser />
                </span>
                <span>Account</span>
              </Link>
            </li>
            <li
              className="flex cursor-pointer flex-row items-center gap-2 px-2 py-4 hover:bg-primary-50"
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
                href="/auth/login"
                className="flex flex-row items-center gap-2 px-2 py-4 hover:bg-primary-50"
                onClick={() => dispatch(closeAllSidebars())}
              >
                <span className="text-xl">
                  <HiArrowRightEndOnRectangle />
                </span>
                <span>Login</span>
              </Link>
            </li>
          </ul>
        )}
      </Sidebar>
    );
  }
);

MainSidebar.displayName = "MainSidebar";

export default MainSidebar;

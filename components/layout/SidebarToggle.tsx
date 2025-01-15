import { toggleSidebar } from "@/redux/slices/sidebarSlice";
import { AppDispatch } from "@/redux/store";
import { HiBars3 } from "react-icons/hi2";

function SidebarToggle({ dispatch }: { dispatch: AppDispatch }) {
  return (
    <button
      className="block rounded-md px-3 py-3 hover:bg-primary-600 md:hidden"
      onClick={() => dispatch(toggleSidebar("mainSidebar"))}
    >
      <span className="text-2xl">
        <HiBars3 />
      </span>
    </button>
  );
}

export default SidebarToggle;

import { toggleSidebar } from "@/app/_redux/slices/sidebarSlice";
import { AppDispatch } from "@/app/_redux/store";
import { HiBars3 } from "react-icons/hi2";

function SidebarToggle({ dispatch }: { dispatch: AppDispatch }) {
  return (
    <button
      className="block md:hidden hover:bg-primary-600 rounded-full px-3 py-3"
      onClick={() => dispatch(toggleSidebar("mainSidebar"))}
    >
      <span className="text-2xl">
        <HiBars3 />
      </span>
    </button>
  );
}

export default SidebarToggle;

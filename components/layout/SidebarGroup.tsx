import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useAppSelector } from "@/redux/hooks";
import { closeAllSidebars } from "@/redux/slices/sidebarSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useRef } from "react";
import { createPortal } from "react-dom";
import CategorySidebar from "./CategorySidebar";
import MainSidebar from "./MainSidebar";

function SidebarGroup({ dispatch }: { dispatch: AppDispatch }) {
  const isOpen = useAppSelector(
    (state: RootState) => state.sidebar.mainSidebar
  );
  const mainSidebarRef = useRef<HTMLDivElement | null>(null);
  const categorySidebarRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(
    [mainSidebarRef, categorySidebarRef],
    () => {
      if (isOpen) {
        dispatch(closeAllSidebars());
      }
    },
    true,
    () => isOpen // prevent default if sidebar is open
  );

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed left-0 top-0 z-50 h-screen w-full bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
      <MainSidebar dispatch={dispatch} ref={mainSidebarRef} />
      <CategorySidebar dispatch={dispatch} ref={categorySidebarRef} />
    </div>,
    document.body
  );
}

export default SidebarGroup;

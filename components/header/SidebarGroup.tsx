import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useAppSelector } from "@/redux/hooks";
import { closeAllSidebars } from "@/redux/slices/sidebarSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useRef } from "react";
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

  return (
    <>
      <MainSidebar dispatch={dispatch} ref={mainSidebarRef} />
      <CategorySidebar dispatch={dispatch} ref={categorySidebarRef} />
    </>
  );
}

export default SidebarGroup;

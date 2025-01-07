import { useRef } from "react";
import { useOutsideClick } from "../../_hooks/useOutsideClick";
import { useAppSelector } from "../../_redux/hooks";
import { closeAllSidebars } from "../../_redux/slices/sidebarSlice";
import { AppDispatch, RootState } from "../../_redux/store";
import CategorySidebar from "./CategorySidebar";
import MainSidebar from "./MainSidebar";

function SidebarGroup({ dispatch }: { dispatch: AppDispatch }) {
  const isOpen = useAppSelector((state: RootState) => state.sidebar.mainSidebar);
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

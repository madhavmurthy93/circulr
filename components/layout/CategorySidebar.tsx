import { closeAllSidebars } from "@/redux/slices/sidebarSlice";
import { AppDispatch } from "@/redux/store";
import { capitalizeFirstLetters, categories } from "@/utils/categories";
import Link from "next/link";
import { forwardRef } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import Sidebar from "./Sidebar";

const CategorySidebar = forwardRef<HTMLDivElement, { dispatch: AppDispatch }>(
  ({ dispatch }, ref) => {
    return (
      <Sidebar
        name="categorySidebar"
        toggleIcon={<HiOutlineArrowLeft />}
        ref={ref}
      >
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/c/${category}`}
                className="flex flex-row items-center gap-2 border-b px-2 py-4 hover:border-l-4 hover:border-l-primary-700 hover:bg-primary-50"
                onClick={() => dispatch(closeAllSidebars())}
              >
                <span>{capitalizeFirstLetters(category)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Sidebar>
    );
  }
);

CategorySidebar.displayName = "CategorySidebar";

export default CategorySidebar;

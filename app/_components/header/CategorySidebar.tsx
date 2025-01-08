import { capitalizeFirstLetters, categories } from "@/app/utils/categories";
import Link from "next/link";
import { forwardRef } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { closeAllSidebars } from "../../_redux/slices/sidebarSlice";
import { AppDispatch } from "../../_redux/store";
import Sidebar from "./Sidebar";

const CategorySidebar = forwardRef<HTMLDivElement, { dispatch: AppDispatch }>(
  ({ dispatch }, ref) => {
    return (
      <Sidebar name="categorySidebar" toggleIcon={<HiOutlineArrowLeft />} ref={ref}>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/c/${category}`}
                className="border-b py-4 px-2 flex flex-row gap-2 items-center hover:bg-primary-50 hover:border-l-4 hover:border-l-primary-700"
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

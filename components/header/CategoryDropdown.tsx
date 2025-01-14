import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useAppSelector } from "@/redux/hooks";
import { toggleDropdown } from "@/redux/slices/dropdownSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { capitalizeFirstLetters, categories } from "@/utils/categories";
import Link from "next/link";
import { useRef } from "react";
import { HiChevronDown, HiOutlineSquares2X2 } from "react-icons/hi2";
import Dropdown from "./Dropdown";

function CategoryDropdown({ dispatch }: { dispatch: AppDispatch }) {
  const isOpen = useAppSelector(
    (state: RootState) => state.dropdown.openDropdown === "categoryDropdown"
  );
  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideClick([ref], () => {
    if (isOpen) {
      dispatch(toggleDropdown("categoryDropdown"));
    }
  });
  return (
    <div className="relative" ref={ref}>
      <button
        className="hidden items-center gap-1 rounded-full px-4 py-3 hover:bg-primary-600 md:flex"
        onClick={() => dispatch(toggleDropdown("categoryDropdown"))}
      >
        <span className="text-2xl">
          <HiOutlineSquares2X2 />
        </span>
        <span>Category</span>
        <HiChevronDown />
      </button>
      <Dropdown name="categoryDropdown">
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/c/${category}`}
                className="flex flex-row items-center gap-2 border-b px-4 py-4 text-gray-900 hover:border-l-4 hover:border-l-primary-700 hover:bg-primary-50"
                onClick={() => dispatch(toggleDropdown("categoryDropdown"))}
              >
                <span>{capitalizeFirstLetters(category)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Dropdown>
    </div>
  );
}

export default CategoryDropdown;

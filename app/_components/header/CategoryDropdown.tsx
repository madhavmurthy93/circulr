import { capitalizeFirstLetters, categories } from "@/app/utils/categories";
import Link from "next/link";
import { useRef } from "react";
import { HiChevronDown, HiOutlineSquares2X2 } from "react-icons/hi2";
import { useOutsideClick } from "../../_hooks/useOutsideClick";
import { useAppSelector } from "../../_redux/hooks";
import { toggleDropdown } from "../../_redux/slices/dropdownSlice";
import { AppDispatch, RootState } from "../../_redux/store";
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
        className="hidden md:flex gap-1 items-center hover:bg-primary-600 rounded-full px-4 py-3"
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
                className="border-b py-4 px-4 flex flex-row gap-2 items-center text-primary-900 hover:bg-primary-50 hover:border-l-4 hover:border-l-primary-700"
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

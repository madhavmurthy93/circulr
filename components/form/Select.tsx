import { capitalizeFirstLetters } from "@/utils/common";
import { forwardRef } from "react";
import { HiChevronDown } from "react-icons/hi2";

interface SelectProps {
  id: string;
  options: string[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, options, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          {...props}
          id={id}
          className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-700 focus:outline-none focus:ring-primary-700 md:text-base"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {capitalizeFirstLetters(option)}
            </option>
          ))}
        </select>
        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          <HiChevronDown />
        </span>
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;

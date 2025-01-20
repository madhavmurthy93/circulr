import { forwardRef } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

interface ListInputProps {
  type: string;
  id: string;
  onRemove: () => void;
}

const ListInput = forwardRef<HTMLInputElement, ListInputProps>(
  ({ type, id, onRemove, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          ref={ref}
          {...props}
          type={type}
          id={id}
          className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-7 text-sm shadow-sm focus:border-primary-700 focus:outline-none focus:ring-primary-700 md:text-base"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={onRemove}
        >
          <HiOutlineXMark />
        </button>
      </div>
    );
  }
);

ListInput.displayName = "ListInput";

export default ListInput;

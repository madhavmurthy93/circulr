import { forwardRef } from "react";

interface InputProps {
  type: string;
  id: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, id, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        type={type}
        id={id}
        className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-700 focus:outline-none focus:ring-primary-700 md:text-base"
      />
    );
  }
);

Input.displayName = "Input";

export default Input;

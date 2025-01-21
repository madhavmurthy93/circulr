import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

interface DropdownProps {
  name: string;
  leftOpen?: boolean;
  children: React.ReactNode;
}

function Dropdown({ name, leftOpen = true, children }: DropdownProps) {
  const openDropdown = useSelector(
    (state: RootState) => state.dropdown.openDropdown
  );
  const isOpen = openDropdown === name;

  return (
    <div
      className={`${
        isOpen ? "md:block" : "md:hidden"
      } absolute top-full hidden translate-y-4 transform ${
        leftOpen ? "left-0" : "right-0"
      } z-50 w-64 overflow-hidden rounded-b-md border bg-white shadow-lg`}
    >
      {children}
    </div>
  );
}

export default Dropdown;

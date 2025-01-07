import { useSelector } from "react-redux";
import { RootState } from "../../_redux/store";

interface DropdownProps {
  name: string;
  leftOpen?: boolean;
  children: React.ReactNode;
}

function Dropdown({ name, leftOpen = true, children }: DropdownProps) {
  const openDropdown = useSelector((state: RootState) => state.dropdown.openDropdown);
  const isOpen = openDropdown === name;

  return (
    <div
      className={`${
        isOpen ? "md:block" : "md:hidden"
      } hidden absolute top-full transform translate-y-4 ${
        leftOpen ? "left-0" : "right-0"
      } w-64 bg-white border overflow-hidden shadow-lg z-50`}
    >
      {children}
    </div>
  );
}

export default Dropdown;

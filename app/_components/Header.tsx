import Link from "next/link";
import { HiOutlineUserCircle } from "react-icons/hi2";
import CategoryDropdown from "./CategoryDropdown";

function Header() {
  return (
    <header className="border-b px-8 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex flex-row gap-4 items-center">
          <Link href="/">
            <span className="text-2xl font-bold">Circulr</span>
          </Link>
          <CategoryDropdown />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/account">
                <span className="text-3xl">
                  <HiOutlineUserCircle />
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

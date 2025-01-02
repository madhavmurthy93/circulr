import Link from "next/link";
import { HiMagnifyingGlass, HiOutlineUserCircle } from "react-icons/hi2";
import CategoryDropdown from "./CategoryDropdown";

function Header() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center gap-2 justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold">
                Circulr
              </Link>
            </div>
          </div>
          <CategoryDropdown />
          <div className="flex-grow md:ml-auto">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-xl">
                  <HiMagnifyingGlass />
                </span>
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 px-4 py-2 border rounded-full"
              />
            </div>
          </div>
          <Link
            href="/account"
            className="flex flex-row items-center gap-1 rounded-full hover:bg-gray-100 px-5 py-3"
          >
            <span className="text-2xl">
              <HiOutlineUserCircle />
            </span>
            <span className="hidden md:block">Madhav</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
/*
<header className="border-b px-8 py-3">
      <div className="flex gap-2 justify-between items-center max-w-7xl">
        <Link href="/" className="mr-auto">
          <span className="text-2xl font-bold">Circulr</span>
        </Link>
        <CategoryDropdown />
        <Link href="/account">
          <span className="text-3xl">
            <HiOutlineUserCircle />
          </span>
        </Link>
      </div>
    </header>
    */

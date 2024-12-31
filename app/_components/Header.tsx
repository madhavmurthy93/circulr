import Link from "next/link";
import { HiOutlineUserCircle } from "react-icons/hi2";

function Header() {
  return (
    <header className="border-b px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div>
          <Link href="/">
            <span className="text-2xl font-bold">Circulr</span>
          </Link>
          <select className="ml-4 p-2 rounded">
            <option value="electronics">Electronics</option>
            <option value="books">Books</option>
            <option value="tools">Tools</option>
            <option value="clothing">Clothing</option>
            <option value="furniture">Furniture</option>
          </select>
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

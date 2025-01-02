"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiOutlineDocumentText,
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from "react-icons/hi2";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HiOutlineHome />,
  },
  {
    name: "Profile",
    href: "/account/profile",
    icon: <HiOutlineUser />,
  },
  {
    name: "Bookings",
    href: "/account/bookings",
    icon: <HiOutlineDocumentText />,
  },
  {
    name: "Products",
    href: "/account/products",
    icon: <HiOutlineShoppingCart />,
  },
];

function AccountNavigation() {
  const pathname = usePathname();
  return (
    <nav className="border-r">
      <ul className="flex flex-col gap-2 h-full mr-2">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`flex items-center justify-center md:justify-start gap-4 px-4 py-2 rounded-full hover:bg-gray-100 hover:text-gray-900 ${
                pathname === link.href ? "bg-gray-100 text-gray-900" : "text-gray-600"
              }`}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="hidden md:block">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default AccountNavigation;

/*
    <nav className="border-r">
      <ul className="flex flex-col gap-2 h-full mr-4">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`flex items-center gap-4 px-4 py-2 rounded-full hover:bg-gray-100 hover:text-gray-900 ${
                pathname === link.href ? "bg-gray-100 text-gray-900" : "text-gray-600"
              }`}
            >
              {link.icon}
              <span className="hidden md:block">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
  */

"use client";

import { useState } from "react";
import {
  HiOutlineEllipsisVertical,
  HiOutlineEye,
  HiOutlineSquare2Stack,
} from "react-icons/hi2";

function EditMenu() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <button
        className="ml-auto text-primary-700 hover:text-primary-600 md:hidden"
        onClick={() => setShow((current) => !current)}
      >
        <span className="text-2xl">
          <HiOutlineEllipsisVertical />
        </span>
      </button>
      {show && (
        <ul className="absolute right-0 top-full overflow-hidden rounded-md border border-gray-300 bg-white shadow-lg md:hidden">
          <li className="flex flex-row items-center gap-2 border-b px-4 py-3 hover:bg-primary-50">
            <span>
              <HiOutlineSquare2Stack />
            </span>
            <span className="text-sm">Duplicate</span>
          </li>
          <li className="flex flex-row items-center gap-2 px-4 py-3 hover:bg-primary-50">
            <span>
              <HiOutlineEye />
            </span>
            <span className="text-sm">View</span>
          </li>
        </ul>
      )}
      <div className="hidden flex-row items-center gap-2 md:flex">
        <button className="flex flex-row items-center gap-2 rounded-md bg-primary-700 px-4 py-2 text-white hover:bg-primary-600">
          <span className="text-xl">
            <HiOutlineSquare2Stack />
          </span>
          <span>Duplicate</span>
        </button>
        <button className="flex flex-row items-center gap-2 rounded-md bg-primary-700 px-4 py-2 text-white hover:bg-primary-600">
          <span className="text-xl">
            <HiOutlineEye />
          </span>
          <span>View</span>
        </button>
      </div>
    </div>
  );
}

export default EditMenu;

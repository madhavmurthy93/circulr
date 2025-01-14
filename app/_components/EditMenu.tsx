"use client";

import { useState } from "react";
import { HiOutlineEllipsisVertical, HiOutlineEye, HiOutlineSquare2Stack } from "react-icons/hi2";

function EditMenu() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <button
        className="md:hidden text-primary-700 hover:text-primary-600 ml-auto"
        onClick={() => setShow((current) => !current)}
      >
        <span className="text-2xl">
          <HiOutlineEllipsisVertical />
        </span>
      </button>
      {show && (
        <ul className="md:hidden absolute top-full right-0 bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden">
          <li className="px-4 py-3 flex flex-row items-center gap-2 border-b hover:bg-primary-50">
            <span>
              <HiOutlineSquare2Stack />
            </span>
            <span className="text-sm">Duplicate</span>
          </li>
          <li className="px-4 py-3 flex flex-row items-center gap-2 hover:bg-primary-50">
            <span>
              <HiOutlineEye />
            </span>
            <span className="text-sm">View</span>
          </li>
        </ul>
      )}
      <div className="hidden md:flex flex-row gap-2 items-center">
        <button className="px-4 py-2 flex flex-row items-center gap-2 bg-primary-700 text-white rounded-md hover:bg-primary-600">
          <span className="text-xl">
            <HiOutlineSquare2Stack />
          </span>
          <span>Duplicate</span>
        </button>
        <button className="px-4 py-2 flex flex-row items-center gap-2 bg-primary-700 text-white rounded-md hover:bg-primary-600">
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

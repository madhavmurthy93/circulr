"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { capitalizeFirstLetters } from "../utils/categories";

const statuses = ["active", "inactive"];

function StatusDropdown() {
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>(undefined);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-primary-900">Status</label>
      <div className="relative max-w-screen-sm">
        <button
          className="flex flex-row gap-2 items-center px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-700 focus:border-primary-700"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span>
            {selectedStatus
              ? capitalizeFirstLetters(selectedStatus)
              : capitalizeFirstLetters(statuses[0])}
          </span>
          <span>
            <HiChevronDown />
          </span>
        </button>
        {dropdownOpen && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg">
            {statuses.map((status) => (
              <li
                key={status}
                className="px-3 py-2 hover:bg-primary-50 cursor-pointer"
                onClick={() => {
                  setSelectedStatus(status);
                  setDropdownOpen(false);
                }}
              >
                {capitalizeFirstLetters(status)}
              </li>
            ))}
          </ul>
        )}
      </div>
      <select name="status" className="hidden" value={selectedStatus}>
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StatusDropdown;

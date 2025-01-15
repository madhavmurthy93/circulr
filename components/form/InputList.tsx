"use client";

import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi2";

interface InputListProps {
  label: string;
  name: string;
  items: string[];
}

function InputList({ label, name, items }: InputListProps) {
  const [values, setValues] = useState(items);
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-gray-900">{label}</label>
      <div className="flex flex-col gap-2">
        {values.map((value, index) => (
          <input
            key={index}
            type="text"
            id={`${name}-${index}`}
            name={`${name}-${index}`}
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-700 focus:outline-none focus:ring-primary-700"
            value={value}
            onChange={(e) =>
              setValues((prev) =>
                prev.map((v, i) => (i === index ? e.target.value : v))
              )
            }
          />
        ))}
        <button className="flex items-center justify-center rounded-md border border-dashed border-gray-300 px-3 py-2 text-primary-700 hover:text-primary-600">
          <span className="text-2xl">
            <HiOutlinePlus />
          </span>
        </button>
      </div>
    </div>
  );
}

export default InputList;

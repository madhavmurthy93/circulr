"use client";

import { useState } from "react";

interface InputProps {
  label: string;
  name: string;
  defaultValue: string;
}

function Input({ label, name, defaultValue }: InputProps) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-sm font-medium text-gray-900 md:text-base"
      >
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-700 focus:outline-none focus:ring-primary-700 md:text-base"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Input;

"use client";

import { useState } from "react";

interface TextAreaProps {
  label: string;
  name: string;
  defaultValue: string;
}

function TextArea({ label, name, defaultValue }: TextAreaProps) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-medium text-gray-900">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        className="h-32 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-700 focus:outline-none focus:ring-primary-700"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default TextArea;

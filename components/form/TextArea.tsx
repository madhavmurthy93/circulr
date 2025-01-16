"use client";

import { forwardRef } from "react";

interface TextAreaProps {
  id: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ id, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        {...props}
        id={id}
        className="h-32 rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-700 focus:outline-none focus:ring-primary-700 md:text-base"
      />
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;

import { isValidElement } from "react";

interface FormFieldProps {
  label?: string;
  error?: string;
  children: React.ReactNode;
}

function FormField({ label, error, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={isValidElement(children) ? children?.props?.id : undefined}
          className="text-sm font-medium text-gray-900 md:text-base"
        >
          {label}
        </label>
      )}
      {children}
      {error && <p className="text-sm text-red-700">{error}</p>}
    </div>
  );
}

export default FormField;

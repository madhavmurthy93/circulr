interface ButtonProps {
  type?: string;
  children: React.ReactNode;
}

function Button({ type = "primary", children }: ButtonProps) {
  if (type === "primary") {
    return (
      <button className="rounded-md bg-primary-700 px-4 py-2 text-white hover:bg-primary-600">
        {children}
      </button>
    );
  } else if (type === "secondary") {
    return (
      <button className="rounded-md border border-gray-900 bg-white px-4 py-2 text-gray-900 hover:bg-gray-100">
        {children}
      </button>
    );
  } else if (type === "sticky") {
    return (
      <div className="sticky bottom-4 right-4 flex flex-row justify-end">
        <button className="mr-4 rounded-full bg-primary-700 p-3 text-white shadow-md hover:bg-primary-600">
          {children}
        </button>
      </div>
    );
  }
}

export default Button;

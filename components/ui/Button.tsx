interface ButtonProps {
  type?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

function Button({
  type = "primary",
  onClick = () => {},
  children,
}: ButtonProps) {
  if (type === "primary") {
    return (
      <button
        className="rounded-md bg-primary-700 px-4 py-2 text-white hover:bg-primary-600"
        onClick={onClick}
      >
        {children}
      </button>
    );
  } else if (type === "secondary") {
    return (
      <button
        className="rounded-md border border-gray-900 bg-white px-4 py-2 text-gray-900 hover:bg-gray-100"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default Button;

interface FilterProps {
  filterField: string;
  options: { value: string; label: string }[];
}

function Filter({ filterField, options }: FilterProps) {
  const currentFilter = options[0].value;
  return (
    <div className="flex flex-row border border-primary-700 text-sm md:text-base">
      {options.map((option) => (
        <button
          key={option.value}
          className={`px-2 py-2 hover:bg-primary-100 md:px-4 ${currentFilter === option.value ? "bg-primary-100" : ""}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;

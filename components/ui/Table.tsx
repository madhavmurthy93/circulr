import { JSX } from "react";

interface TableProps {
  columns: string;
  header: string[];
  data: object[];
  render: (data: object) => JSX.Element;
}

function Table({ columns, header, data, render }: TableProps) {
  return (
    <div>
      <div
        className={`grid grid-cols-[${columns}] items-center gap-2 border-b border-primary-700 py-4`}
      >
        {header.map((item, index) => (
          <div
            key={index}
            className="text-sm font-semibold text-gray-700 md:text-base"
          >
            {item}
          </div>
        ))}
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          className="border-b border-primary-700 last:border-none"
        >
          {render(item)}
        </div>
      ))}
    </div>
  );
}

export default Table;

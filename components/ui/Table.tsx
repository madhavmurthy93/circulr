"use client";

import { createContext, JSX, useContext } from "react";

interface TableContextType {
  columns: string;
}

const TableContext = createContext<TableContextType | null>(null);

function Table({
  columns,
  children,
}: {
  columns: string;
  children: React.ReactNode;
}) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div>{children}</div>
    </TableContext.Provider>
  );
}

function Header({ children }: { children: React.ReactNode }) {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("TableContext cannot be null");
  }

  const { columns } = context;
  return (
    <div
      className={`grid grid-cols-[${columns}] items-center gap-2 border-b border-primary-700 py-4`}
    >
      {children}
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("TableContext cannot be null");
  }
  const { columns } = context;
  return (
    <div
      className={`grid grid-cols-[${columns}] items-center gap-2 border-b border-primary-700 p-4`}
    >
      {children}
    </div>
  );
}

function Body<T>({
  data,
  render,
}: {
  data: T[];
  render: (data: T) => JSX.Element;
}) {
  return <>{data.map(render)}</>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;

export default Table;

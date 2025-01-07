"use client";

import { useAppSelector } from "../_redux/hooks";
import { RootState } from "../_redux/store";

function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isSidebarOpen = useAppSelector((state: RootState) => state.sidebar.mainSidebar);
  return (
    <main className="flex-1 grid font-sans">
      <div
        className={`max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 py-12 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-25" : "opacity-100"
        } md:opacity-100`}
      >
        {children}
      </div>
    </main>
  );
}

export default Main;

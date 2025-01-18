"use client";

import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isSidebarOpen = useAppSelector(
    (state: RootState) => state.sidebar.mainSidebar
  );
  return (
    <main className="flex flex-1">
      <div
        className={`mx-auto w-full max-w-7xl px-4 py-12 transition-opacity duration-300 md:px-6 lg:px-8 ${
          isSidebarOpen ? "opacity-25" : "opacity-100"
        } md:opacity-100`}
      >
        {children}
      </div>
    </main>
  );
}

export default Main;

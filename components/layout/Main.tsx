"use client";

function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-1">
      <div className={`mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8`}>
        {children}
      </div>
    </main>
  );
}

export default Main;

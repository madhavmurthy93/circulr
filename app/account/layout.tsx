import AccountNavigation from "../_components/AccountNavigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[4rem_1fr] md:grid-cols-[14rem_1fr] h-full gap-8">
      <AccountNavigation />
      <div>{children}</div>
    </div>
  );
}

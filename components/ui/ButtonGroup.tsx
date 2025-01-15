function ButtonGroup({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="flex flex-row gap-2">{children}</div>;
}

export default ButtonGroup;

import ProductList from "./_components/ProductList";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl md:text-2xl font-semibold text-center mb-10">
        Find something to borrow!
      </h1>
      <ProductList />
    </div>
  );
}

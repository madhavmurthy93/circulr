import ProductList from "./_components/ProductList";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mb-10">Find something to borrow!</h1>
      <ProductList />
    </div>
  );
}

import ThumbnailProductList from "./_components/ThumbnailProductList";

const categories = ["electronics", "books", "tools", "clothing", "furniture"];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-8">
        Find something to borrow!
      </h1>
      {categories.map((category) => (
        <ThumbnailProductList key={category} category={category} />
      ))}
    </div>
  );
}

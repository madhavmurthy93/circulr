import ThumbnailProductList from "./_components/ThumbnailProductList";
import { categories } from "./utils/categories";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-primary-900 text-xl md:text-2xl font-semibold text-center mb-4 md:mb-8">
        Find something to borrow!
      </h1>
      {categories.map((category) => (
        <ThumbnailProductList key={category} category={category} />
      ))}
    </div>
  );
}

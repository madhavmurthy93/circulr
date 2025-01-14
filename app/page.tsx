import ThumbnailProductList from "@/components/ThumbnailProductList";
import { categories } from "@/utils/categories";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4 text-center text-xl font-semibold text-gray-900 md:mb-8 md:text-2xl">
        Find something to borrow!
      </h1>
      {categories.map((category) => (
        <ThumbnailProductList key={category} category={category} />
      ))}
    </div>
  );
}

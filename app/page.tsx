import ThumbnailProductList from "@/components/products/ThumbnailProductList";
import { getItemCategoryValues } from "@/utils/common";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4 text-center text-xl font-semibold text-gray-900 md:mb-8 md:text-2xl">
        Find something to borrow!
      </h1>
      {getItemCategoryValues().map((category) => (
        <ThumbnailProductList key={category} category={category} />
      ))}
    </div>
  );
}

import ThumbnailItemList from "@/components/items/ThumbnailItemList";
import { getItems } from "@/services/supabase/items";
import { getItemCategoryValues } from "@/utils/common";

export default async function Home() {
  const items = await getItems();

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4 text-center text-xl font-semibold text-gray-900 md:mb-8 md:text-2xl">
        Find something to borrow!
      </h1>
      {getItemCategoryValues().map((category) => (
        <ThumbnailItemList key={category} category={category} items={items} />
      ))}
    </div>
  );
}

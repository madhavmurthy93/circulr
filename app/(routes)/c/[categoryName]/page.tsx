import ItemList from "@/components/items/ItemList";
import { getItems } from "@/services/supabase/items";
import { capitalizeFirstLetters } from "@/utils/common";

interface Props {
  params: {
    categoryName: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const categoryName = await params.categoryName;
  return {
    title: `${capitalizeFirstLetters(categoryName)}`,
  };
}

export default async function Page({ params }: Props) {
  await params;
  const categoryName = await decodeURIComponent(params.categoryName);
  const items = await getItems();
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="mb-4 text-xl font-semibold text-gray-900 md:text-2xl">
        {capitalizeFirstLetters(categoryName)}
      </h1>
      <ItemList category={categoryName} items={items} />
    </div>
  );
}

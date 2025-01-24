import ItemDetail from "@/components/items/ItemDetail";
import ThumbnailItemList from "@/components/items/ThumbnailItemList";
import { getItemById, getItems } from "@/services/supabase/items";

interface Props {
  params: {
    itemId: string;
  };
}
export async function generateMetadata({ params }: Props) {
  const { itemId } = await params;
  const item = await getItemById(parseInt(itemId));
  return {
    title: `Borrow ${item.name}`,
  };
}

export default async function Page({ params }: Props) {
  const { itemId } = await params;
  const [item, items] = await Promise.all([
    getItemById(parseInt(itemId)),
    getItems(),
  ]);
  return (
    <>
      <ItemDetail item={item} />
      <ThumbnailItemList category={item.category} items={items} />
    </>
  );
}

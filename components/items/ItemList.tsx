import { Item } from "@/types/common";
import ItemCard from "./ItemCard";

interface ItemListProps {
  category: string;
  items: Item[];
}

function ItemList({ category, items }: ItemListProps) {
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-4">
      {items
        .filter((item) => item.category === category)
        .map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
    </div>
  );
}

export default ItemList;

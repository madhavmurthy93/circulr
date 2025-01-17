import { Item, ItemStatus } from "@/types/common";
import { capitalizeFirstLetters } from "@/utils/common";
import Link from "next/link";
import Table from "../ui/Table";

interface ItemRowProps {
  item: Item;
}

function ItemRow({ item }: ItemRowProps) {
  const { id, images, name, category, status } = item;
  return (
    <Link href={`/account/lending/${id}/edit`}>
      <Table.Row>
        <div>
          <img
            src={images[0]}
            alt=""
            className="max-h-20 rounded-lg object-cover"
          />
        </div>
        <div className="text-wrap text-sm text-gray-700 md:text-base">
          {name}
        </div>
        <div className="truncate text-sm text-gray-700 md:text-base">
          {capitalizeFirstLetters(category)}
        </div>
        <div className="truncate text-xs font-semibold md:text-sm">
          <span
            className={`rounded-full px-3 py-1 ${
              status === ItemStatus.Available
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {status === ItemStatus.Available
              ? capitalizeFirstLetters(ItemStatus.Available)
              : capitalizeFirstLetters(ItemStatus.Unavailable)}
          </span>
        </div>
      </Table.Row>
    </Link>
  );
}

export default ItemRow;

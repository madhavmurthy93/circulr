import StarRating from "@/components/ui/StarRating";
import { Item } from "@/types/common";
import Link from "next/link";
import { HiOutlineMapPin } from "react-icons/hi2";

interface ItemCardProps {
  item: Item;
}

function ItemCard({ item }: ItemCardProps) {
  const { id, name, description, avgRating, images, lenderName, lenderCity } =
    item;
  return (
    <div
      key={id}
      className="flex flex-row items-start justify-between gap-4 border-b py-4 last:border-none md:flex-col md:justify-start md:border-none"
    >
      <div className="flex h-auto w-2/5 items-center justify-center md:w-full">
        <Link href={`/items/${id}`}>
          <img
            src={images[0]}
            alt=""
            className="h-40 w-40 rounded-lg object-cover lg:h-56 lg:w-56"
          />
        </Link>
      </div>
      <div className="flex w-3/5 flex-col gap-2 md:w-full">
        <Link href={`/items/${id}`}>
          <h2 className="truncate text-base font-semibold text-gray-900 md:text-lg">
            {name}
          </h2>
        </Link>
        <p className="line-clamp-2 text-sm text-gray-700 md:text-base">
          {description}
        </p>
        <div className="text-sm md:text-base">
          <StarRating rating={avgRating!} numRatings={100} />
        </div>
        <p className="text-sm text-gray-700 md:text-base">{lenderName}</p>
        <p className="flex flex-row items-center gap-1 text-sm text-gray-700 md:text-base">
          <HiOutlineMapPin />
          <span>{lenderCity}</span>
        </p>
      </div>
    </div>
  );
}

export default ItemCard;

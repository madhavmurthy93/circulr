import { Item } from "@/types/common";
import Link from "next/link";
import { forwardRef } from "react";
import { HiOutlineMapPin } from "react-icons/hi2";

interface ThumbnailItemCardProps {
  item: Item;
}

const ThumbnailItemCard = forwardRef<HTMLDivElement, ThumbnailItemCardProps>(
  ({ item }, ref) => {
    const { id, name, images, lenderName, lenderCity } = item;
    return (
      <div
        className="h-60 w-40 flex-shrink-0 overflow-hidden rounded-lg md:h-72 md:w-48"
        ref={ref !== null ? ref : null}
      >
        <Link href={`/items/${id}`}>
          <img
            src={images[0]}
            alt=""
            className="h-40 w-40 rounded-lg object-cover md:h-48 md:w-48"
          />
          <p className="truncate pt-2 text-sm font-semibold text-gray-900 md:text-base">
            {name}
          </p>
        </Link>
        <p className="truncate pt-1 text-sm text-gray-700 md:text-base">
          {lenderName}
        </p>
        <p className="flex flex-row items-center gap-1 truncate pt-1 text-sm text-gray-700 md:text-base">
          <HiOutlineMapPin />
          <span>{lenderCity}</span>
        </p>
      </div>
    );
  }
);

ThumbnailItemCard.displayName = "ThumbnailProductCard";

export default ThumbnailItemCard;

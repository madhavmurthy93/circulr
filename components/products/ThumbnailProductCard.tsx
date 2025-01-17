import Link from "next/link";
import { forwardRef } from "react";
import { HiOutlineMapPin } from "react-icons/hi2";

interface ThumbnailProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    lender: {
      name: string;
      city: string;
    };
  };
}

const ThumbnailProductCard = forwardRef<
  HTMLDivElement,
  ThumbnailProductCardProps
>(({ product }, ref) => {
  const {
    id,
    name: productName,
    lender: { name: lenderName, city: lenderCity },
  } = product;
  return (
    <div
      className="h-60 w-40 flex-shrink-0 overflow-hidden rounded-lg md:h-72 md:w-48"
      ref={ref !== null ? ref : null}
    >
      <Link href={`/items/${id}`}>
        <img
          src={`https://picsum.photos/300/300?random=${id}`}
          alt=""
          className="rounded-lg object-cover"
        />
        <p className="truncate pt-2 text-sm font-semibold text-gray-900 md:text-base">
          {productName}
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
});

ThumbnailProductCard.displayName = "ThumbnailProductCard";

export default ThumbnailProductCard;

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

const ThumbnailProductCard = forwardRef<HTMLDivElement, ThumbnailProductCardProps>(
  ({ product }, ref) => {
    const {
      id,
      name: productName,
      lender: { name: lenderName, city: lenderCity },
    } = product;
    return (
      <div
        className="flex-shrink-0 w-40 h-60 md:w-48 md:h-72 rounded-lg overflow-hidden"
        ref={ref !== null ? ref : null}
      >
        <Link href={`/products/${id}`}>
          <img
            src={`https://picsum.photos/300/300?random=${id}`}
            alt=""
            className="object-cover rounded-lg"
          />
          <p className="pt-2 text-sm md:text-base text-primary-900 truncate">{productName}</p>
        </Link>
        <p className="pt-1 text-sm md:text-base text-primary-800">{lenderName}</p>
        <p className="pt-1 text-xs md:text-sm text-primary-800 flex flex-row gap-1">
          <HiOutlineMapPin />
          <span>{lenderCity}</span>
        </p>
      </div>
    );
  }
);

ThumbnailProductCard.displayName = "ThumbnailProductCard";

export default ThumbnailProductCard;

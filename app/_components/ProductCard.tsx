import Link from "next/link";
import { HiOutlineMapPin } from "react-icons/hi2";
import StarRating from "./StarRating";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    rating: {
      value: number;
      numRatings: number;
    };
    lender: {
      name: string;
      city: string;
    };
  };
}

function ProductCard({ product }: ProductCardProps) {
  const {
    id,
    name: productName,
    description: productDescription,
    rating: { value, numRatings },
    lender: { name: lenderName, city: lenderCity },
  } = product;
  return (
    <div
      key={id}
      className="flex flex-row py-4 gap-4 items-start justify-between border-b last:border-none md:flex-col md:justify-start md:border-none"
    >
      <div className="w-2/5 md:w-full">
        <Link href={`/products/${id}`}>
          <img
            src={`https://picsum.photos/300/300?random=${id}`}
            alt=""
            className="object-cover rounded-lg"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-2 w-3/5 md:w-full">
        <Link href={`/products/${id}`}>
          <h2 className="text-base md:text-lg font-semibold text-primary-900">{productName}</h2>
        </Link>
        <p className="text-sm md:text-base text-primary-800 line-clamp-2">{productDescription}</p>
        <div className="text-sm md:text-base">
          <StarRating rating={value} numRatings={numRatings} />
        </div>
        <p className="text-sm md:text-base text-primary-800">{lenderName}</p>
        <p className="text-sm md:text-base text-primary-800 flex flex-row items-center gap-1">
          <HiOutlineMapPin />
          <span>{lenderCity}</span>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;

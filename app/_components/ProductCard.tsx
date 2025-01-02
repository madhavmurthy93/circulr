import Link from "next/link";
import StarRating from "./StarRating";

interface Props {
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
    };
  };
}

function ProductCard({ product }: Props) {
  const {
    id,
    name: productName,
    rating: { value, numRatings },
    lender: { name: lenderName },
  } = product;
  return (
    <div className="rounded-lg overflow-hidden">
      <Link href={`/products/${id}`}>
        <img
          src={`https://picsum.photos/400/300?random=${id}`}
          alt=""
          className="object-cover rounded-lg"
        />
        <p className="mt-2 text-sm md:text-base text-gray-500 truncate">{productName}</p>
      </Link>
      <div className="flex items-center mt-2 text-sm md:text-base">
        <StarRating rating={value} numRatings={numRatings} />
      </div>
      <p className="mt-2 text-sm md:text-base text-gray-400">{lenderName}</p>
    </div>
  );
}

export default ProductCard;

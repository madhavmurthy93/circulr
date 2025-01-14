import Link from 'next/link';
import { HiOutlineMapPin } from 'react-icons/hi2';
import StarRating from './ui/StarRating';

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
      className="flex flex-row items-start justify-between gap-4 border-b py-4 last:border-none md:flex-col md:justify-start md:border-none"
    >
      <div className="w-2/5 md:w-full">
        <Link href={`/products/${id}`}>
          <img
            src={`https://picsum.photos/300/300?random=${id}`}
            alt=""
            className="rounded-lg object-cover"
          />
        </Link>
      </div>
      <div className="flex w-3/5 flex-col gap-2 md:w-full">
        <Link href={`/products/${id}`}>
          <h2 className="text-base font-semibold text-gray-900 md:text-lg">
            {productName}
          </h2>
        </Link>
        <p className="line-clamp-2 text-sm text-gray-700 md:text-base">
          {productDescription}
        </p>
        <div className="text-sm md:text-base">
          <StarRating rating={value} numRatings={numRatings} />
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

export default ProductCard;

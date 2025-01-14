import { HiOutlineMapPin } from 'react-icons/hi2';
import ImageCarousel from './ui/ImageCarousel';
import StarRating from './ui/StarRating';

interface Props {
  product: {
    id: number;
    name: string;
    description: string;
    details: string[];
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

function ProductDetail({ product }: Props) {
  const {
    id: productId,
    name: productName,
    description: productDescription,
    details: productDetails,
    rating: { value, numRatings },
    lender: { name: lenderName, city: lenderCity },
  } = product;
  return (
    <div className="md:grid-rows-auto mb-4 flex flex-col gap-4 md:grid md:grid-cols-[3fr,2fr]">
      <div className="flex flex-row justify-between md:col-start-2">
        <p className="text-sm text-gray-700">{lenderName}</p>
        <div className="text-sm">
          <StarRating rating={value} numRatings={numRatings} />
        </div>
      </div>
      <h2 className="text-lg font-semibold text-gray-900 md:col-start-2">
        {productName}
      </h2>
      <div className="md:col-span-1 md:col-start-1 md:row-span-12 md:row-start-1">
        <ImageCarousel
          images={[
            `https://picsum.photos/400/300?random=${parseInt(productId)}`,
            `https://picsum.photos/400/300?random=${parseInt(productId) + 50}`,
            `https://picsum.photos/400/300?random=${parseInt(productId) + 100}`,
          ]}
        />
      </div>
      <p className="text-base text-gray-700 md:col-start-2">
        {productDescription}. {productDescription}
      </p>
      <p className="flex flex-row items-center gap-1 text-sm text-gray-700 md:col-start-2 md:text-base">
        <HiOutlineMapPin />
        <span>{lenderCity}</span>
      </p>
      <button className="rounded-md bg-primary-700 px-3 py-3 text-base font-semibold text-white hover:bg-primary-600 md:col-start-2">
        Borrow
      </button>
      <hr className="md:col-start-2" />
      <div className="md:col-start-2">
        <h2 className="text-lg font-semibold text-gray-900">About this item</h2>
        <ul className="list-outside list-disc space-y-1 pl-4">
          {productDetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductDetail;

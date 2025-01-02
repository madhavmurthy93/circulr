import StarRating from "./StarRating";

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
    };
  };
}

function ProductInfo({ product }: Props) {
  const {
    id,
    name: productName,
    description,
    details,
    rating: { value, numRatings },
    lender: { name: lenderName },
  } = product;
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl md:text-2xl font-bold">{productName}</h2>
      <p className="text-sm md:text-base">{description}</p>

      <div className="flex items-center gap-2 text-sm md:text-base">
        <span>{lenderName}</span>
        <StarRating rating={value} numRatings={numRatings} />
      </div>
      <div className="text-sm md:text-base">
        <p className="font-semibold">Item Details</p>
        <ul>
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
      <button className="border rounded-full px-10 py-2 border-black font-semibold hover:bg-black hover:text-white transition-all text-sm md:text-base">
        Borrow
      </button>
    </div>
  );
}

export default ProductInfo;

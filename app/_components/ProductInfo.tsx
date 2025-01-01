import BorrowForm from "./BorrowForm";
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
    <div className="flex flex-col gap-4 px-8 py-4">
      <h2 className="text-2xl font-bold">{productName}</h2>
      <p>{description}</p>

      <div className="flex items-center gap-2">
        <span>{lenderName}</span>
        <StarRating rating={value} numRatings={numRatings} />
      </div>
      <div>
        <p className="font-semibold">Item Details</p>
        <ul>
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
      <BorrowForm />
    </div>
  );
}

export default ProductInfo;

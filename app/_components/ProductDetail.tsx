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

function ProductDetail({ product }: Props) {
  const {
    id,
    name: productName,
    description,
    details,
    rating: { value, numRatings },
    lender: { name: lenderName },
  } = product;
  return (
    <div className="grid grid-cols-[2fr,1fr] gap-8">
      <div>
        <img
          src={`https://picsum.photos/400/300?random=${id}`}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
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
        <button className="border rounded-full px-10 py-2 border-black font-semibold hover:bg-black hover:text-white transition-all">
          Borrow
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;

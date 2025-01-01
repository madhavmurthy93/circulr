import ImageCarousel from "./ImageCarousel";
import ProductInfo from "./ProductInfo";

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
  const { id } = product;
  return (
    <div className="flex flex-row gap-8 justify-between">
      <div className="basis-2/3">
        <ImageCarousel
          images={[
            `https://picsum.photos/400/300?random=${id}`,
            `https://picsum.photos/400/300?random=${id + 50}`,
            `https://picsum.photos/400/300?random=${id + 100}`,
          ]}
        />
      </div>
      <div className="basis-1/3">
        <ProductInfo product={product} />
      </div>
    </div>
  );
}

export default ProductDetail;

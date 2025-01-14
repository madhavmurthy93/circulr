import { faker } from "@faker-js/faker";
import ProductCard from "./ProductCard";

interface ProductListProps {
  category: string;
}

function ProductList({ category }: ProductListProps) {
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-4">
      {Array.from({ length: 12 }, (_, index) => (
        <ProductCard
          key={index}
          product={{
            id: index,
            name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
            description: faker.commerce.productDescription(),
            rating: {
              value: Math.floor(Math.random() * 5) + 1,
              numRatings: Math.floor(Math.random() * 100) + 1,
            },
            lender: {
              name: faker.person.fullName(),
              city: faker.location.city(),
            },
          }}
        />
      ))}
    </div>
  );
}

export default ProductList;

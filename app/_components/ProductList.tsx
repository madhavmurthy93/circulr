import { faker } from "@faker-js/faker";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
      {Array.from({ length: 40 }, (_, index) => (
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
            },
          }}
        />
      ))}
    </div>
  );
}

export default ProductList;

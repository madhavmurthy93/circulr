import ProductDetail from "@/app/_components/ProductDetail";
import { faker } from "@faker-js/faker";

interface Props {
  params: {
    productId: string;
  };
}
export async function generateMetadata({ params }: Props) {
  return {
    title: `Borrow ${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
  };
}

export default async function Page({ params }: Props) {
  const { productId } = await params;
  return (
    <ProductDetail
      product={{
        id: parseInt(productId),
        name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
        description: faker.commerce.productDescription(),
        details: [
          `Condition: ${faker.commerce.productMaterial()}`,
          `Category: ${faker.commerce.department()}`,
          `Location: ${faker.address.city()}`,
        ],
        rating: {
          value: Math.floor(Math.random() * 5) + 1,
          numRatings: Math.floor(Math.random() * 100) + 1,
        },
        lender: {
          name: faker.person.fullName(),
        },
      }}
    />
  );
}

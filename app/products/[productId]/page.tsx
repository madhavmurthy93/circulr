import ProductDetail from "@/app/_components/ProductDetail";
import ThumbnailProductList from "@/app/_components/ThumbnailProductList";
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
  const fullName = faker.person.fullName();
  return (
    <>
      <ProductDetail
        product={{
          id: parseInt(productId),
          name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
          description: faker.commerce.productDescription(),
          details: [
            faker.commerce.productDescription(),
            faker.commerce.productDescription(),
            faker.commerce.productDescription(),
            faker.commerce.productDescription(),
            faker.commerce.productDescription(),
          ],
          rating: {
            value: Math.floor(Math.random() * 5) + 1,
            numRatings: Math.floor(Math.random() * 100) + 1,
          },
          lender: {
            name: fullName,
            city: faker.location.city(),
          },
        }}
      />
      <ThumbnailProductList category={`More from ${fullName}`} />
      <ThumbnailProductList category="electronics" />
    </>
  );
}

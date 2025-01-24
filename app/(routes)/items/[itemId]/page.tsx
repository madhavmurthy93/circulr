import ProductDetail from "@/components/items/ProductDetail";
import ThumbnailItemList from "@/components/items/ThumbnailItemList";
import { faker } from "@faker-js/faker";

interface Props {
  params: {
    itemId: string;
  };
}
export async function generateMetadata({ params }: Props) {
  return {
    title: `Borrow ${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
  };
}

export default async function Page({ params }: Props) {
  const { itemId } = await params;
  const fullName = faker.person.fullName();
  return (
    <>
      <ProductDetail
        product={{
          id: parseInt(itemId),
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
      <ThumbnailItemList category={`More from ${fullName}`} />
      <ThumbnailItemList category="electronics" />
    </>
  );
}

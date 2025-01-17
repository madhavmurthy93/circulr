import ProductList from "@/components/products/ProductList";
import { capitalizeFirstLetters } from "@/utils/common";

interface Props {
  params: {
    categoryName: string;
  };
}

export async function generateMetadata({ params }: Props) {
  return {
    title: `${capitalizeFirstLetters(params.categoryName)}`,
  };
}

export default async function Page({ params }: Props) {
  const { categoryName } = await params;
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="mb-4 text-xl font-semibold text-gray-900 md:text-2xl">
        {capitalizeFirstLetters(categoryName)}
      </h1>
      <ProductList category={categoryName} />
    </div>
  );
}

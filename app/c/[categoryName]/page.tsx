import ProductList from "@/app/_components/ProductList";
import { capitalizeFirstLetters } from "@/app/utils/categories";

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
      <h1 className="text-primary-900 text-xl md:text-2xl font-semibold mb-4">
        {capitalizeFirstLetters(categoryName)}
      </h1>
      <ProductList category={categoryName} />
    </div>
  );
}

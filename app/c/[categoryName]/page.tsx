import StarRating from "@/app/_components/StarRating";
import { capitalizeFirstLetters } from "@/app/utils/categories";
import { faker } from "@faker-js/faker";
import Link from "next/link";
import { HiOutlineMapPin } from "react-icons/hi2";

interface Props {
  params: {
    categoryName: string;
  };
}

export async function generateMetadata({ params }: Props) {
  return {
    title: `${params.categoryName}`,
  };
}

export default async function Page({ params }: Props) {
  const { categoryName } = await params;
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-primary-900 text-xl md:text-2xl font-semibold mb-4">
        {capitalizeFirstLetters(categoryName)}
      </h1>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-4">
        {Array.from({ length: 12 }, (_, index) => (
          <div
            key={index}
            className="flex flex-row py-4 gap-4 items-start justify-between border-b last:border-none md:flex-col md:justify-start md:border-none"
          >
            <div className="w-2/5 md:w-full">
              <Link href={`/products/${index}`}>
                <img
                  src={`https://picsum.photos/300/300?random=${index}`}
                  alt=""
                  className="object-cover rounded-lg"
                />
              </Link>
            </div>
            <div className="flex flex-col gap-2 w-3/5 md:w-full">
              <Link href={`/products/${index}`}>
                <h2 className="text-base md:text-lg font-semibold text-primary-900">
                  {faker.commerce.productAdjective()} {faker.commerce.product()}
                </h2>
              </Link>
              <p className="text-sm md:text-base text-primary-800 line-clamp-2">
                {faker.commerce.productDescription()}
              </p>
              <div className="text-sm md:text-base">
                <StarRating rating={4} numRatings={100} />
              </div>
              <p className="text-sm md:text-base text-primary-800">{faker.person.fullName()}</p>
              <p className="text-sm md:text-base text-primary-800 flex flex-row items-center gap-1">
                <HiOutlineMapPin />
                <span>{faker.location.city()}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

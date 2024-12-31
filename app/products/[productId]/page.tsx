import { faker } from "@faker-js/faker";

interface Props {
  params: {
    productId: string;
  };
}

export default async function Page({ params }: Props) {
  const { productId } = await params;
  const rating = Math.floor(Math.random() * 5) + 1;
  return (
    <div className="grid grid-cols-[2fr,1fr] gap-8">
      <div>
        <img
          src={`https://picsum.photos/400/300?random=${productId}`}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-4 px-8 py-4">
        <h2 className="text-2xl font-bold">
          {faker.commerce.productAdjective()} {faker.commerce.product()}
        </h2>
        <p>{faker.commerce.productDescription()}</p>

        <div className="flex items-center gap-2">
          <span>{faker.person.fullName()}</span>
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, starIndex) => {
              return (
                <svg
                  key={starIndex}
                  className={`w-4 h-4 ${starIndex < rating ? "text-yellow-500" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.265 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              );
            })}
          </div>
          <span className="text-sm ml-1">({Math.floor(Math.random() * 100) + 1})</span>
        </div>
        <button className="border rounded-full px-10 py-2 border-black font-semibold hover:bg-black hover:text-white transition-all">
          Borrow
        </button>
        <div>
          <p className="font-semibold">Item Details</p>
          <ul>
            <li>Condition: {faker.commerce.productMaterial()}</li>
            <li>Category: {faker.commerce.department()}</li>
            <li>Location: {faker.address.city()}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

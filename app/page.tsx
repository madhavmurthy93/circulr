import { faker } from "@faker-js/faker";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-8">
      {Array.from({ length: 40 }, (_, index) => (
        <div key={index} className="rounded-lg overflow-hidden">
          <img
            src={`https://picsum.photos/400/300?random=${index}`}
            alt=""
            className="w-full h-60 object-cover rounded-lg"
          />
          <p className="mt-2 text-gray-500">
            {faker.commerce.productAdjective()} {faker.commerce.product()}
          </p>
          <p className="mt-2 text-gray-400">{faker.person.fullName()}</p>
        </div>
      ))}
    </div>
  );
}

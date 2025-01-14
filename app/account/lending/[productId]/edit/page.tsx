import EditMenu from "@/app/_components/EditMenu";
import SelectCategoryDropdown from "@/app/_components/SelectCategoryDropdown";
import StatusDropdown from "@/app/_components/StatusDropdown";
import { faker } from "@faker-js/faker";
import Link from "next/link";
import { HiOutlineArrowLeft, HiOutlinePlus } from "react-icons/hi2";

interface EditPageProps {
  params: {
    productId: string;
  };
}

export default function Page({ params }: EditPageProps) {
  const { productId } = params;
  const productName = `${faker.commerce.productAdjective()} ${faker.commerce.product()}`;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-2 items-center justify-between">
        <Link
          href="/account/lending"
          className="flex flex-row items-center gap-2 text-primary-700 underline hover:text-primary-600"
        >
          <span className="text-2xl">
            <HiOutlineArrowLeft />
          </span>
          <span className="text-lg">{productName}</span>
        </Link>
        <div className="text-sm font-semibold">
          <span
            className={`py-1 px-3 rounded-full ${
              Number(productId) % 3 === 0
                ? "text-primary-700 bg-primary-200"
                : "text-accent-700 bg-accent-200"
            }`}
          >
            {Number(productId) % 3 === 0 ? "Active" : "Inactive"}
          </span>
        </div>
        <div className="ml-auto flex flex-row items-center">
          <EditMenu />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-medium text-primary-900">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-700 focus:border-primary-700"
          defaultValue={productName}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="font-medium text-primary-900">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="px-3 py-2 border h-32 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-700 focus:border-primary-700"
          defaultValue={faker.commerce.productDescription()}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-medium text-primary-900">Media</label>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="relative w-24 h-24 border border-gray-300 rounded-md overflow-hidden"
            >
              <img
                src={`https://picsum.photos/400/300?random=${index}`}
                alt={`Uploaded media ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
          <button className="flex items-center justify-center w-24 h-24 border border-dashed border-gray-300 rounded-md text-primary-700 hover:text-primary-600">
            <span className="text-2xl">
              <HiOutlinePlus />
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-medium text-primary-900">Item Details</label>
        <div className="flex flex-col gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <input
              key={index}
              type="text"
              className="px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-700 focus:border-primary-700"
              defaultValue={faker.commerce.productDescription()}
            />
          ))}
          <button className="flex items-center justify-center px-3 py-2 border border-dashed border-gray-300 rounded-md text-primary-700 hover:text-primary-600">
            <span className="text-2xl">
              <HiOutlinePlus />
            </span>
          </button>
        </div>
      </div>
      <SelectCategoryDropdown />
      <StatusDropdown />
      <div className="flex flex-row gap-2">
        <button className="py-2 px-4 bg-primary-700 text-white rounded-md hover:bg-primary-600">
          Save
        </button>
        <button className="py-2 px-4 bg-gray-300 text-primary-900 rounded-md hover:bg-gray-200">
          Cancel
        </button>
      </div>
    </div>
  );
}

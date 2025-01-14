import EditMenu from "@/components/EditMenu";
import SelectCategoryDropdown from "@/components/SelectCategoryDropdown";
import StatusDropdown from "@/components/StatusDropdown";
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
      <div className="flex flex-row items-center justify-between gap-2">
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
            className={`rounded-full px-3 py-1 ${
              Number(productId) % 3 === 0
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
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
        <label htmlFor="name" className="font-medium text-gray-900">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-700 focus:outline-none focus:ring-primary-700"
          defaultValue={productName}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="font-medium text-gray-900">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="h-32 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-700 focus:outline-none focus:ring-primary-700"
          defaultValue={faker.commerce.productDescription()}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-medium text-gray-900">Media</label>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="relative h-24 w-24 overflow-hidden rounded-md border border-gray-300"
            >
              <img
                src={`https://picsum.photos/400/300?random=${index}`}
                alt={`Uploaded media ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
          <button className="flex h-24 w-24 items-center justify-center rounded-md border border-dashed border-gray-300 text-primary-700 hover:text-primary-600">
            <span className="text-2xl">
              <HiOutlinePlus />
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-medium text-gray-900">Item Details</label>
        <div className="flex flex-col gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <input
              key={index}
              type="text"
              className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-700 focus:outline-none focus:ring-primary-700"
              defaultValue={faker.commerce.productDescription()}
            />
          ))}
          <button className="flex items-center justify-center rounded-md border border-dashed border-gray-300 px-3 py-2 text-primary-700 hover:text-primary-600">
            <span className="text-2xl">
              <HiOutlinePlus />
            </span>
          </button>
        </div>
      </div>
      <SelectCategoryDropdown />
      <StatusDropdown />
      <div className="flex flex-row gap-2">
        <button className="rounded-md bg-primary-700 px-4 py-2 text-white hover:bg-primary-600">
          Save
        </button>
        <button className="rounded-md border border-gray-900 bg-white px-4 py-2 text-gray-900 hover:bg-gray-100">
          Cancel
        </button>
      </div>
    </div>
  );
}

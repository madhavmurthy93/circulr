import Input from "@/components/form/Input";
import InputList from "@/components/form/InputList";
import MediaList from "@/components/form/MediaList";
import TextArea from "@/components/form/TextArea";
import CategorySelect from "@/components/lending/CategorySelect";
import EditMenu from "@/components/lending/EditMenu";
import StatusSelect from "@/components/lending/StatusSelect";
import Button from "@/components/ui/Button";
import ButtonGroup from "@/components/ui/ButtonGroup";
import { faker } from "@faker-js/faker";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi2";

export const metadata = {
  title: "Edit Product",
};

interface EditPageProps {
  params: {
    productId: string;
  };
}

export default async function Page({ params }: EditPageProps) {
  const { productId } = await params;
  const productName = `${faker.commerce.productAdjective()} ${faker.commerce.product()}`;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between gap-2">
        <Link
          href="/account/lending"
          className="flex flex-row items-center gap-2 text-primary-700 underline hover:text-primary-600"
        >
          <span className="text-xl md:text-2xl">
            <HiOutlineArrowLeft />
          </span>
          <span className="text-base md:text-lg">{productName}</span>
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
      <Input label="Name" id="name" defaultValue={productName} />
      <TextArea
        label="Description"
        name="description"
        defaultValue={faker.commerce.productDescription()}
      />
      <MediaList
        label="Media"
        name="media"
        images={Array.from({ length: 5 }).map(
          (_, index) => `https://picsum.photos/400/300?random=${index}`
        )}
      />
      <InputList
        label="Item Details"
        name="item-details"
        items={Array.from({ length: 3 }).map(() =>
          faker.commerce.productDescription()
        )}
      />
      <CategorySelect />
      <StatusSelect />
      <ButtonGroup>
        <Button type="primary">Save</Button>
        <Button type="secondary">Cancel</Button>
      </ButtonGroup>
    </div>
  );
}

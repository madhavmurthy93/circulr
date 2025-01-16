import CreateItem from "@/components/lending/CreateItem";
import ProductRow from "@/components/lending/ProductRow";
import Filter from "@/components/ui/Filter";
import Table from "@/components/ui/Table";
import { faker } from "@faker-js/faker";

export const metadata = {
  title: "Lending",
};

export default function Page() {
  return (
    <div className="relative flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
          Lending
        </h2>
        <Filter
          filterField="status"
          options={[
            { label: "All", value: "all" },
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ]}
        />
      </div>
      <Table
        columns="1fr,2fr,1.5fr,1.5fr"
        header={["", "Name", "Category", "Status"]}
        data={Array.from({ length: 12 }).map((_, index) => ({
          id: index,
          image: `https://picsum.photos/300/300?random=${index}`,
          name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
          category: faker.commerce.department(),
          status: index % 3 === 0 ? "active" : "inactive",
        }))}
        render={(data: object) => (
          <ProductRow columns="1fr,2fr,1.5fr,1.5fr" product={data} />
        )}
      />
      <CreateItem />
    </div>
  );
}

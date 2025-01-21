import AddItem from "@/components/lending/AddItem";
import ItemsTable from "@/components/lending/ItemsTable";
import Filter from "@/components/ui/Filter";
import { getItemsByCurrentUser } from "@/services/supabase/items";
import { ItemStatus } from "@/types/common";
import { capitalizeFirstLetters } from "@/utils/common";

interface PageProps {
  searchParams: {
    status: string;
  };
}

export const metadata = {
  title: "Lending",
};

export default async function Page({ searchParams }: PageProps) {
  const { status } = await searchParams;
  const filters = [];
  if (status && status !== "all") {
    filters.push({ key: "status", value: status });
  }
  const items = await getItemsByCurrentUser(filters);
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
            {
              label: capitalizeFirstLetters(ItemStatus.Available),
              value: ItemStatus.Available,
            },
            {
              label: capitalizeFirstLetters(ItemStatus.Unavailable),
              value: ItemStatus.Unavailable,
            },
          ]}
        />
      </div>
      <ItemsTable items={items} />
      <AddItem />
    </div>
  );
}

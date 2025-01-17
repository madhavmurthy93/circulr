"use client";

import { Item } from "@/types/common";
import Table from "../ui/Table";
import ItemRow from "./ItemRow";

function ItemsTable({ items }: { items: Item[] }) {
  return (
    <Table columns="1fr,1.5fr,1.5fr,1.5fr">
      <Table.Header>
        <div></div>
        <div>Name</div>
        <div>Category</div>
        <div>Status</div>
      </Table.Header>
      <Table.Body
        data={items}
        render={(item: Item) => <ItemRow key={item.id} item={item} />}
      />
    </Table>
  );
}

export default ItemsTable;

import { Item, ItemStatus } from "@/types/common";
import { capitalizeFirstLetters } from "@/utils/common";
import { HiEllipsisVertical } from "react-icons/hi2";
import Menu from "../ui/Menu";
import Modal from "../ui/Modal";
import Table from "../ui/Table";
import EditItemForm from "./EditItemForm";

interface ItemRowProps {
  item: Item;
}

function ItemRow({ item }: ItemRowProps) {
  const { id, images, name, category, status } = item;

  return (
    <Table.Row>
      <div className="flex h-16 items-center justify-center md:h-20">
        <img
          src={images[0]}
          alt=""
          className="max-h-20 rounded-lg object-cover"
        />
      </div>
      <div className="truncate text-sm text-gray-700 md:text-base">{name}</div>
      <div className="truncate text-sm text-gray-700 md:text-base">
        {capitalizeFirstLetters(category)}
      </div>
      <div className="truncate text-xs font-semibold md:text-sm">
        <span
          className={`rounded-full px-3 py-1 ${
            status === ItemStatus.Available
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status === ItemStatus.Available
            ? capitalizeFirstLetters(ItemStatus.Available)
            : capitalizeFirstLetters(ItemStatus.Unavailable)}
        </span>
      </div>
      <div>
        <Modal>
          <Menu>
            <Menu.Toggle id={id}>
              <span className="text-2xl">
                <HiEllipsisVertical />
              </span>
            </Menu.Toggle>
            <Menu.List id={id}>
              <Menu.Button onClick={() => console.log("Duplicate")}>
                Duplicate
              </Menu.Button>
              <Modal.Open opens={`editItem-${id}`}>
                <Menu.Button onClick={() => console.log("Edit")}>
                  Edit
                </Menu.Button>
              </Modal.Open>
              <Menu.Button onClick={() => console.log("Delete")}>
                Delete
              </Menu.Button>
            </Menu.List>
          </Menu>
          <Modal.Window name={`editItem-${id}`} label={`Edit Item: ${name}`}>
            <EditItemForm item={item} />
          </Modal.Window>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default ItemRow;

import { Item } from "@/types/common";
import toast from "react-hot-toast";
import Button from "../ui/Button";
import ButtonGroup from "../ui/ButtonGroup";

function DeleteItemForm({
  item,
  onCloseModal,
}: {
  item: Item;
  onCloseModal?: () => void;
}) {
  async function handleDelete() {
    try {
      const response = await fetch(`/api/items/${item.id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(`${error.error}`);
      }
      console.log("Item deleted successfully: ", await response.json());
      toast.success("Item deleted successfully");
      onCloseModal?.();
    } catch (error) {
      console.error("Error deleting item: ", error);
      toast.error(`Item could not be deleted ${error}`);
    }
  }

  return (
    <div className="md:w-128 flex w-64 flex-col gap-4 py-4 sm:w-96">
      <p>Are you sure you want to delete this item?</p>
      <ButtonGroup>
        <Button onClick={onCloseModal} type="secondary">
          Cancel
        </Button>
        <Button onClick={handleDelete} type="danger">
          Delete
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default DeleteItemForm;

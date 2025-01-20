"use client";
import { Item } from "@/types/common";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Button from "../ui/Button";
import ButtonGroup from "../ui/ButtonGroup";

function DuplicateItemForm({
  item,
  onCloseModal,
}: {
  item: Item;
  onCloseModal?: () => void;
}) {
  const router = useRouter();
  async function handleDuplicate() {
    const formData = new FormData();
    formData.append("name", item.name);
    formData.append("description", item.description);
    formData.append("category", item.category);
    formData.append("status", item.status);
    item.details.forEach((detail) => {
      formData.append("details[]", detail);
    });

    const addImages = async () => {
      for (const image of item.images) {
        const response = await fetch(image);
        if (!response.ok) {
          throw new Error(`Image could not be fetched: ${image}`);
        }
        const blob = await response.blob();
        const imageFile = new File([blob], image.split("/").pop() as string, {
          type: blob.type,
        });
        formData.append("files[]", imageFile);
      }
    };

    try {
      await addImages();
      const response = await fetch(`/api/items`, {
        method: "POST",
        body: formData,
        headers: {
          enctype: "multipart/form-data",
        },
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(`${error.error}`);
      }
      console.log("Item duplicated successfully: ", await response.json());
      toast.success("Item duplicated successfully");
      router.refresh();
      onCloseModal?.();
    } catch (error) {
      console.error("Error duplicating item: ", error);
      toast.error(`Item could not be duplicated ${error}`);
    }
  }

  return (
    <div className="md:w-128 flex w-64 flex-col gap-4 py-4 sm:w-96">
      <p>Are you sure you want to duplicate this item?</p>
      <ButtonGroup>
        <Button onClick={onCloseModal} type="secondary">
          Cancel
        </Button>
        <Button onClick={handleDuplicate} type="primary">
          Duplicate
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default DuplicateItemForm;

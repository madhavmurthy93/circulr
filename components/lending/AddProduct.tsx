"use client";

import { useAppDispatch } from "@/redux/hooks";
import { openModal } from "@/redux/slices/modalSlice";
import { HiOutlinePlus } from "react-icons/hi2";
import Input from "../form/Input";
import InputList from "../form/InputList";
import MediaList from "../form/MediaList";
import TextArea from "../form/TextArea";
import Button from "../ui/Button";
import ButtonGroup from "../ui/ButtonGroup";
import Modal from "../ui/Modal";
import CategorySelect from "./CategorySelect";
import StatusSelect from "./StatusSelect";

function AddProduct() {
  const dispatch = useAppDispatch();
  return (
    <>
      <div onClick={() => dispatch(openModal("addProduct"))}>
        <Button type="sticky">
          <span className="text-xl">
            <HiOutlinePlus />
          </span>
        </Button>
      </div>
      <Modal name="addProduct">
        <div className="h-96 w-64 overflow-y-scroll p-4 md:w-96">
          <h2 className="mb-4 text-lg font-semibold md:text-2xl">
            Add Product
          </h2>
          <form className="flex flex-col gap-4">
            <Input label="Name" name="name" defaultValue="" />
            <TextArea label="Description" name="description" defaultValue="" />
            <MediaList label="Media" name="media" images={[]} />
            <InputList label="Item Details" name="item-details" items={[]} />
            <CategorySelect />
            <StatusSelect />
            <ButtonGroup>
              <Button type="secondary">Cancel</Button>
              <Button type="primary">Save</Button>
            </ButtonGroup>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default AddProduct;

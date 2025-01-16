"use client";

import { HiOutlinePlus } from "react-icons/hi2";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import CreateItemForm from "./CreateItemForm";

function CreateItem() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="addItem">
          <Button type="sticky">
            <span className="text-xl">
              <HiOutlinePlus />
            </span>
          </Button>
        </Modal.Open>
        <Modal.Window name="addItem" label="Add Item">
          <CreateItemForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default CreateItem;

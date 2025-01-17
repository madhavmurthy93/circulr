"use client";

import Button from "../ui/Button";
import Modal from "../ui/Modal";
import AddItemForm from "./AddItemForm";

function AddItem() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="addItem">
          <Button>Add Item</Button>
        </Modal.Open>
        <Modal.Window name="addItem" label="Add Item">
          <AddItemForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddItem;

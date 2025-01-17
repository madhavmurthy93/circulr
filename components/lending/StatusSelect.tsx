import { ItemStatus } from "@/types/common";
import Select from "../form/Select";

const statuses = [ItemStatus.Available, ItemStatus.Unavailable];

function StatusSelect() {
  return <Select label="Status" name="status" options={statuses} />;
}

export default StatusSelect;

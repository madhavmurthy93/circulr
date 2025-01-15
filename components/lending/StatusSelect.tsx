import Select from "../form/Select";

const statuses = ["active", "inactive"];

function StatusSelect() {
  return (
    <Select
      label="Status"
      name="status"
      options={statuses}
      defaultValue="Select a status"
    />
  );
}

export default StatusSelect;

import { getItemCategoryValues } from "@/utils/common";
import Select from "../form/Select";

function CategorySelect() {
  return (
    <Select
      label="Category"
      name="category"
      options={getItemCategoryValues()}
    />
  );
}

export default CategorySelect;

import { categories } from "@/utils/categories";
import Select from "../form/Select";

function CategorySelect() {
  return <Select label="Category" name="category" options={categories} />;
}

export default CategorySelect;

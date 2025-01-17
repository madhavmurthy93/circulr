import { addItem } from "@/services/supabase/items";
import { Item } from "@/types/common";
import {
  getItemCategoryFromString,
  getItemStatusFromString,
} from "@/utils/common";

export async function POST(req: Request) {
  const formData = await req.formData();
  const item: Item = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    category: getItemCategoryFromString(formData.get("category") as string),
    status: getItemStatusFromString(formData.get("status") as string),
    details: formData.getAll("details[]").map((detail) => detail as string),
    images: [],
    avgRating: 0,
  };
  const imageFiles = formData.getAll("files[]").map((file) => file as File);

  const data = await addItem(item, imageFiles);
  return Response.json(data, { status: 201 });
}

import { addItem, updateItem } from "@/services/supabase/items";
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
  };
  const imageFiles = formData.getAll("files[]").map((file) => file as File);

  try {
    const data = await addItem(item, imageFiles);
    return Response.json(data, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: `${(error as Error).message}` },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  const formData = await req.formData();
  const item: Item = {
    id: Number(formData.get("id")),
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    category: getItemCategoryFromString(formData.get("category") as string),
    status: getItemStatusFromString(formData.get("status") as string),
    details: formData.getAll("details[]").map((detail) => detail as string),
    images: [],
  };
  const deletedImages = formData
    .getAll("deletedImages[]")
    .map((image) => image as string);
  const imageFiles = formData.getAll("newImages[]").map((file) => file as File);

  try {
    const data = await updateItem(item, deletedImages, imageFiles);
    return Response.json(data, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: `${(error as Error).message}` },
      { status: 500 }
    );
  }
}

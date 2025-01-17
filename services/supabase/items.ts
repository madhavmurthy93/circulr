import { DbItem, Item } from "@/types/common";
import {
  getItemCategoryFromString,
  getItemStatusFromString,
} from "@/utils/common";
import supabase, { supabaseUrl } from "../supabase";

export async function addItem(item: Item, imageFiles: File[]) {
  const dbItem = toDbItem(item);
  // Remove auto-generated fields
  delete dbItem.id;
  delete dbItem.created_at;
  delete dbItem.updated_at;
  // Set default values
  dbItem.lender_id = 1;

  const imageNames: string[] = [];
  const imagePaths: string[] = [];

  if (imageFiles.length > 0) {
    imageFiles.map(async (image) => {
      const imageName = `${Math.random()}-${image.name}`.replaceAll("/", "");
      const imagePath = `${supabaseUrl}/storage/v1/object/public/item_images/${imageName}`;
      imageNames.push(imageName);
      imagePaths.push(imagePath);
    });
  }
  dbItem.images = imagePaths;

  const { data, error } = await supabase
    .from("items")
    .insert([dbItem])
    .select()
    .single();
  if (error) {
    console.error(error);
    throw new Error("Item could not be added");
  }

  if (imageFiles.length > 0) {
    imageFiles.map(async (image, index) => {
      const { error } = await supabase.storage
        .from("item_images")
        .upload(imageNames[index], image);
      if (error) {
        await supabase.from("items").delete().eq("id", data.id);
        console.error(error);
        throw new Error(
          "Item images could not be uploaded and the item was not added"
        );
      }
    });
  }
  console.log("Item added successfully: ", data);
  return fromDbItem(data);
}

export async function getItems() {
  const { data, error } = await supabase.from("items").select();
  if (error) {
    console.error(error);
    throw new Error("Items could not be fetched");
  }
  return data.map(fromDbItem);
}

export const toDbItem = (item: Item): DbItem => ({
  id: item.id,
  created_at: item.createdAt?.toISOString(),
  updated_at: item.updatedAt?.toISOString(),
  name: item.name,
  description: item.description,
  images: item.images,
  details: item.details,
  category: item.category.toString(),
  status: item.status.toString(),
  avg_rating: item.avgRating,
  lender_id: item.lenderId,
});

export const fromDbItem = (dbItem: DbItem): Item => ({
  id: dbItem.id,
  createdAt: dbItem.created_at ? new Date(dbItem.created_at) : undefined,
  updatedAt: dbItem.updated_at ? new Date(dbItem.updated_at) : undefined,
  name: dbItem.name,
  description: dbItem.description,
  images: dbItem.images,
  details: dbItem.details,
  category: getItemCategoryFromString(dbItem.category),
  status: getItemStatusFromString(dbItem.status),
  avgRating: dbItem.avg_rating,
  lenderId: dbItem.lender_id,
});

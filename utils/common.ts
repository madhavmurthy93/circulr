import { ItemCategory, ItemStatus } from "@/types/common";

export const capitalizeFirstLetters = (str: string) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export function getItemCategoryFromString(value: string): ItemCategory {
  return (Object.values(ItemCategory) as string[]).includes(value)
    ? (value as ItemCategory)
    : ItemCategory.Other;
}

export const getItemCategoryValues = (): string[] => {
  return Object.values(ItemCategory);
};

export function getItemStatusFromString(value: string): ItemStatus {
  return (Object.values(ItemStatus) as string[]).includes(value)
    ? (value as ItemStatus)
    : ItemStatus.Unavailable;
}

export const getItemStatusValues = (): string[] => {
  return Object.values(ItemStatus);
};

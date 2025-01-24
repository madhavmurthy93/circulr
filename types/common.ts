export enum ItemStatus {
  Available = "available",
  Unavailable = "unavailable",
}

export enum ItemCategory {
  Appliances = "appliances",
  ArtsCrafts = "arts & crafts",
  BabiesKids = "babies & kids",
  BeautyHealth = "beauty & health",
  Bikes = "bikes",
  Boats = "boats",
  Books = "books",
  Cars = "cars",
  CellPhones = "cell phones",
  Clothes = "clothes",
  Collectibles = "collectibles",
  Computers = "computers",
  Electronics = "electronics",
  Furniture = "furniture",
  Garden = "garden",
  Jewelry = "jewelry",
  Household = "household",
  HeavyEquipment = "heavy equipment",
  PhotoVideo = "photo & video",
  Sports = "sports",
  Other = "other",
}

export type Item = {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  name: string;
  description: string;
  images: string[];
  details: string[];
  category: ItemCategory;
  status: ItemStatus;
  avgRating?: number;
  lenderId?: string;
  lenderName?: string;
  lenderCity?: string;
};

export type DbItem = {
  id?: number;
  created_at?: string;
  updated_at?: string;
  name: string;
  description: string;
  images: string[];
  details: string[];
  category: string;
  status: string;
  avg_rating?: number;
  lender_id?: string;
};

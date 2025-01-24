import ImageCarousel from "@/components/ui/ImageCarousel";
import StarRating from "@/components/ui/StarRating";
import { Item } from "@/types/common";
import { HiOutlineMapPin } from "react-icons/hi2";

interface Props {
  item: Item;
}

function ItemDetail({ item }: Props) {
  const {
    id,
    name,
    description,
    details,
    images,
    category,
    avgRating,
    lenderName,
    lenderCity,
  } = item;
  return (
    <div className="md:grid-rows-auto mb-4 flex flex-col gap-4 md:grid md:grid-cols-[3fr,2fr]">
      <div className="flex flex-row justify-between md:col-start-2">
        <p className="text-sm text-gray-700">{lenderName}</p>
        <div className="text-sm">
          <StarRating rating={avgRating!} numRatings={100} />
        </div>
      </div>
      <h2 className="text-lg font-semibold text-gray-900 md:col-start-2">
        {name}
      </h2>
      <div className="md:col-span-1 md:col-start-1 md:row-span-12 md:row-start-1">
        <ImageCarousel images={images} />
      </div>
      <p className="text-base text-gray-700 md:col-start-2">{description}</p>
      <p className="flex flex-row items-center gap-1 text-sm text-gray-700 md:col-start-2 md:text-base">
        <HiOutlineMapPin />
        <span>{lenderCity}</span>
      </p>
      <button className="rounded-md bg-primary-700 px-3 py-3 text-base font-semibold text-white hover:bg-primary-600 md:col-start-2">
        Borrow
      </button>
      <hr className="md:col-start-2" />
      <div className="md:col-start-2">
        <h2 className="text-lg font-semibold text-gray-900">About this item</h2>
        <ul className="list-outside list-disc space-y-1 pl-4">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ItemDetail;

import { HiOutlinePlus } from "react-icons/hi2";

interface MediaListProps {
  label: string;
  name: string;
  images: string[];
}

function MediaList({ label, name, images }: MediaListProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-gray-900">{label}</label>
      <div className="flex flex-wrap gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-24 w-24 overflow-hidden rounded-md border border-gray-300"
          >
            <img
              src={image}
              alt={`Media ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
        <button className="flex h-24 w-24 items-center justify-center rounded-md border border-dashed border-gray-300 text-primary-700 hover:text-primary-600">
          <span className="text-2xl">
            <HiOutlinePlus />
          </span>
        </button>
      </div>
    </div>
  );
}

export default MediaList;

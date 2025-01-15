import Link from "next/link";

interface ProductRowProps {
  columns: string;
  product: {
    id: number;
    image: string;
    name: string;
    category: string;
    status: string;
  };
}

function ProductRow({ columns, product }: ProductRowProps) {
  const { id, image, name, category, status } = product;
  return (
    <Link
      href={`/account/lending/${id}/edit`}
      className={`grid grid-cols-[${columns}] items-center gap-2 py-4 hover:bg-primary-50`}
    >
      <div>
        <img src={image} alt="" className="max-h-20 rounded-lg object-cover" />
      </div>
      <div className="text-wrap text-sm text-gray-700 md:text-base">{name}</div>
      <div className="truncate text-sm text-gray-700 md:text-base">
        {category}
      </div>
      <div className="text-xs font-semibold md:text-sm">
        <span
          className={`rounded-full px-3 py-1 ${
            status === "active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status === "active" ? "Active" : "Inactive"}
        </span>
      </div>
    </Link>
  );
}

export default ProductRow;

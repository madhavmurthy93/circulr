import { HiMagnifyingGlass } from "react-icons/hi2";

function SearchBar() {
  return (
    <div className="relative flex-grow">
      <input
        type="text"
        placeholder="Search"
        className="w-full rounded-md py-3 pl-4 pr-10 text-gray-900"
      />
      <button className="absolute inset-y-0 right-0 m-1 flex items-center rounded-md px-3 py-2 hover:bg-primary-100">
        <span className="text-xl text-gray-800">
          <HiMagnifyingGlass />
        </span>
      </button>
    </div>
  );
}

export default SearchBar;

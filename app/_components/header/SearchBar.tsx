import { HiMagnifyingGlass } from "react-icons/hi2";

function SearchBar() {
  return (
    <div className="flex-grow relative">
      <input
        type="text"
        placeholder="Search"
        className="w-full pl-4 pr-10 py-3 rounded-full text-primary-900"
      />
      <button className="absolute inset-y-0 right-0 flex items-center m-1 px-3 py-2 hover:bg-primary-100 rounded-full">
        <span className="text-xl text-primary-800">
          <HiMagnifyingGlass />
        </span>
      </button>
    </div>
  );
}

export default SearchBar;

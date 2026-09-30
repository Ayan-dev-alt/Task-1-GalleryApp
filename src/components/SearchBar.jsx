import { Search, X } from "lucide-react";

const SearchBar = ({ search, setSearch, handleSearch, handleClear }) => {
  return (
    <div
      className="
                mx-auto
                flex
                max-w-7xl
                px-5
                pt-7
                md:px-10
            "
    >
      <form onSubmit={handleSearch} className="flex w-full min-w-0 gap-3">
        {/* Search Input */}
        <div className="relative min-w-0 flex-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search images... e.g. cats, cars, mountains"
            className="
                            h-12
                            w-full
                            rounded-xl
                            border
                            border-slate-800
                            bg-slate-900
                            px-5
                            pr-28
                            text-white
                            outline-none
                            placeholder:text-slate-500
                            focus:border-amber-500
                        "
          />

          {/* X Button */}
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="
                                absolute
                                right-24
                                top-1/2
                                -translate-y-1/2
                                text-slate-400
                                hover:text-white
                                cursor-pointer
                            "
            >
              <X size={18} />
            </button>
          )}

          {/* Search Button */}
          <button
            type="submit"
            className="
                            absolute
                            right-0
                            top-0
                            flex
                            h-12
                            items-center
                            gap-2
                            rounded-r-xl
                            bg-amber-500
                            px-5
                            font-semibold
                            text-slate-950
                            transition
                            hover:bg-amber-400
                            active:scale-95
                            cursor-pointer
                        "
          >
            <span className="hidden sm:block">Search</span>

            <Search size={20} />
          </button>
        </div>

        {/* Clear Button */}
        <button
          type="button"
          onClick={handleClear}
          className="
                        shrink-0
                        rounded-xl
                        bg-slate-800
                        px-5
                        py-3
                        font-semibold
                        text-slate-300
                        transition
                        hover:bg-slate-700
                        cursor-pointer
                    "
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

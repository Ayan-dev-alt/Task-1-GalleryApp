const Header = ({ ind }) => {
  return (
    <header className="border-b border-slate-800 px-5 py-6 md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold md:text-4xl">
            Image
            <span className="text-amber-500">Gallery</span>
          </h1>

          <p className="mt-1 text-slate-400">Explore beautiful images</p>
        </div>

        <span
          className="
                    hidden
                    rounded-full
                    bg-slate-800
                    px-4
                    py-2
                    fixed
                    right-10
                    z-100
                    text-slate-300
                    sm:block
                "
        >
          Page {ind}
        </span>
      </div>
    </header>
  );
};

export default Header;
